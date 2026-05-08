export default {
	async fetch(request, env) {
		const url = new URL(request.url);

		// 只代理 /api
		if (url.pathname.startsWith("/api/")) {
			const target = new URL(request.url);

			// 后端接口地址
			target.hostname = "api.keyfu.cc";
			target.protocol = "https:";

			const proxyRequest = new Request(target.toString(), request);

			return fetch(proxyRequest);
		}

		// 其他请求继续走静态资源
		return env.ASSETS.fetch(request);
	},
};
