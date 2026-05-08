export default {
	async fetch(request, env) {
		const url = new URL(request.url);

		// 只代理 /api
		if (url.pathname.startsWith("/api/")) {
			const target = new URL(request.url);

			// 后端接口地址
			target.hostname = "api.keyfu.cc";
			target.protocol = "https:";
			target.port = "";

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
				redirect: "follow",
			});

			const response = await fetch(proxyRequest);

			if (new URL(response.url).pathname.includes("webblock.html")) {
				return new Response("api.keyfu.cc returned webblock.html", {
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
