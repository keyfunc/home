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

	const response = await fetch(
		new Request(target.toString(), {
			method: request.method,
			headers,
			body: ["GET", "HEAD"].includes(request.method) ? undefined : request.body,
			redirect: "follow",
		}),
	);

	return response;
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
