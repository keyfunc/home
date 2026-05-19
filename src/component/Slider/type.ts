import type { ComponentProps } from "react";

export interface SliderProps
	extends Omit<
		ComponentProps<"input">,
		"type" | "value" | "onChange" | "min" | "max" | "step"
	> {
	/** 滑块当前值 */
	value: number;
	/** 滑块最小值 */
	min?: number;
	/** 滑块最大值 */
	max?: number;
	/** 滑块步长 */
	step?: number;
	/** 是否展示当前数值 */
	showValue?: boolean;
	/** 滑块数值变化回调 */
	onChange?: (value: number) => void;
}
