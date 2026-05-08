const DEFAULT_API_ORIGIN = "http://106.52.180.97";
const PROXY_HEADERS = ["accept", "authorization", "content-type"];

export default {
	async fetch(request, env) {
		const url = new URL(request.url);

		if (url.pathname.startsWith("/api/")) {
			return proxyApiRequest(request, env, url);
		}

		return env.ASSETS.fetch(request);
	},
};

async function proxyApiRequest(request, env, url) {
	const apiOrigin = env.API_ORIGIN || DEFAULT_API_ORIGIN;
	const target = new URL(`${url.pathname}${url.search}`, apiOrigin);
	const headers = getProxyHeaders(request.headers);

	try {
		const response = await fetch(
			new Request(target.toString(), {
				method: request.method,
				headers,
				body: ["GET", "HEAD"].includes(request.method)
					? undefined
					: request.body,
				redirect: "follow",
			}),
		);

		return withProxyHeaders(response, apiOrigin);
	} catch (error) {
		return Response.json(
			{
				message: "API proxy request failed",
				target: target.toString(),
				error: error instanceof Error ? error.message : String(error),
			},
			{
				status: 502,
				headers: getDebugHeaders(apiOrigin),
			},
		);
	}
}

function getProxyHeaders(requestHeaders) {
	const headers = new Headers();

	for (const name of PROXY_HEADERS) {
		const value = requestHeaders.get(name);
		if (value) {
			headers.set(name, value);
		}
	}

	return headers;
}

function withProxyHeaders(response, apiOrigin) {
	const headers = new Headers(response.headers);
	for (const [name, value] of getDebugHeaders(apiOrigin)) {
		headers.set(name, value);
	}

	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers,
	});
}

function getDebugHeaders(apiOrigin) {
	return new Headers({
		"x-api-origin": apiOrigin,
		"x-api-proxy": "cf-pages-worker",
	});
}
