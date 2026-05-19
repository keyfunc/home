import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { flexContainerAttrDefaultState } from "../-data/flex";

export type FlexContainerAttrState = typeof flexContainerAttrDefaultState;

/** flex 容器属性 Store 状态 */
interface ContainerStoreState {
	/** flex 容器属性当前值 */
	state: FlexContainerAttrState;
	/** 批量更新 flex 容器属性 */
	setStates: (
		patch:
			| Partial<FlexContainerAttrState>
			| ((prev: FlexContainerAttrState) => Partial<FlexContainerAttrState>),
	) => void;
	/** 重置 flex 容器属性为默认值 */
	reset: () => void;
}

/** 管理并持久化 flex 容器属性 */
export const useContainerStore = create<ContainerStoreState>()(
	persist(
		(set) => ({
			state: flexContainerAttrDefaultState,
			setStates: (patch) => {
				set((prev) => ({
					state: {
						...prev.state,
						...(typeof patch === "function" ? patch(prev.state) : patch),
					},
				}));
			},
			reset: () => {
				set({ state: flexContainerAttrDefaultState });
			},
		}),
		{
			name: "css-layout-flex-container",
			storage: createJSONStorage(() => localStorage),
			partialize: (store) => ({ state: store.state }),
		},
	),
);
