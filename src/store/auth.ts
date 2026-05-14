import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

/** 鉴权 Store 状态 */
interface AuthStoreState {
	/** 全局接口鉴权 token */
	token: string;
	/** 设置全局接口鉴权 token */
	setToken: (token: string) => void;
	/** 清空全局接口鉴权 token */
	clearToken: () => void;
}

/** 管理接口鉴权 token */
export const useAuthStore = create<AuthStoreState>()(
	persist(
		(set) => ({
			token: "",
			setToken: (token) => {
				set({ token });
			},
			clearToken: () => {
				set({ token: "" });
			},
		}),
		{
			name: "auth-token",
			storage: createJSONStorage(() => sessionStorage),
			partialize: (state) => ({ token: state.token }),
		},
	),
);
