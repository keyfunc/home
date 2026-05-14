import axios from "axios";
import { useAuthStore } from "@/store/auth";

export const request = axios.create({
	baseURL: "https://api.keyfu.cc",
	timeout: 10000,
});

// 请求拦截器
request.interceptors.request.use((config) => {
	const token = useAuthStore.getState().token;

	if (token) {
		config.headers.set("Authorization", token);
	}

	return config;
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
