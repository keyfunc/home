export default {
	async fetch(request, env) {
		const url = new URL(request.url);

		// 只代理 /api
		if (url.pathname.startsWith("/api/")) {
			const apiOrigin = env.API_ORIGIN || "https://api.keyfu.cc";
			const target = new URL(`${url.pathname}${url.search}`, apiOrigin);

			// 保留 /api 前缀，代理到后端接口地址。

			const headers = new Headers();
			for (const name of ["accept", "authorization", "content-type"]) {
				const value = request.headers.get(name);
				if (value) {
					headers.set(name, value);
				}
			}

			const proxyRequest = new Request(target.toString(), {
				method: request.method,
				headers,
				body:
					request.method === "GET" || request.method === "HEAD"
						? undefined
						: request.body,
				redirect: "manual",
			});

			const response = await fetch(proxyRequest);
			const location = response.headers.get("location") || "";

			if (location.includes("webblock.html")) {
				return Response.json(
					{
						message: `${apiOrigin} redirected to webblock.html`,
						location,
					},
					{ status: 502 },
				);
			}

			if (new URL(response.url).pathname.includes("webblock.html")) {
				return new Response(`${apiOrigin} returned webblock.html`, {
					status: 502,
					headers: {
						"content-type": "text/plain;charset=UTF-8",
					},
				});
			}

			return response;
		}

		// 其他请求继续走静态资源
		return env.ASSETS.fetch(request);
	},
};
