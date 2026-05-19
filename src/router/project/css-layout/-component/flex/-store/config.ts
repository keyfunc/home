import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

/** flex 预览全局配置状态 */
export interface FlexConfigState {
	/** item 项数量 */
	itemCount: number;
	/** item 项宽度，单位 px */
	itemWidth: number;
	/** item 项高度，单位 px */
	itemHeight: number;
}

const flexConfigDefaultState: FlexConfigState = {
	itemCount: 8,
	itemWidth: 40,
	itemHeight: 40,
};

/** flex 预览全局配置 Store 状态 */
interface ConfigStoreState {
	/** flex 预览全局配置当前值 */
	state: FlexConfigState;
	/** 批量更新 flex 预览全局配置 */
	setStates: (
		patch:
			| Partial<FlexConfigState>
			| ((prev: FlexConfigState) => Partial<FlexConfigState>),
	) => void;
	/** 重置 flex 预览全局配置 */
	reset: () => void;
}

/** 管理并持久化 flex 预览全局配置 */
export const useConfigStore = create<ConfigStoreState>()(
	persist(
		(set) => ({
			state: flexConfigDefaultState,
			setStates: (patch) => {
				set((prev) => ({
					state: {
						...prev.state,
						...(typeof patch === "function" ? patch(prev.state) : patch),
					},
				}));
			},
			reset: () => {
				set({ state: flexConfigDefaultState });
			},
		}),
		{
			name: "css-layout-flex-config",
			storage: createJSONStorage(() => localStorage),
			partialize: (store) => ({ state: store.state }),
		},
	),
);
