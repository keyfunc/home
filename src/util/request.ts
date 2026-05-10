import axios from "axios";

export const request = axios.create({
	baseURL: "https://api.keyfu.cc",
	timeout: 10000,
});

// 响应拦截器
request.interceptors.response.use(
	(response) => {
		return response.data;
	},
	(error) => {
		return Promise.reject(error);
	},
);
