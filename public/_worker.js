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

			const headers = new Headers(request.headers);
			headers.delete("host");
			headers.set("x-forwarded-host", url.host);
			headers.set("x-forwarded-proto", url.protocol.replace(":", ""));

			const proxyRequest = new Request(target.toString(), {
				method: request.method,
				headers,
				body:
					request.method === "GET" || request.method === "HEAD"
						? undefined
						: request.body,
				redirect: "manual",
			});

			return fetch(proxyRequest);
		}

		// 其他请求继续走静态资源
		return env.ASSETS.fetch(request);
	},
};
