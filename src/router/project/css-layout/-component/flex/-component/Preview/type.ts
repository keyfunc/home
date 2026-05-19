import type { AxisArrowProps } from "@/component/AxisArrow/type";

export interface PreviewAxisState {
	/** 水平轴文案 */
	hzText: string;
	/** 交叉轴文案 */
	verText: string;
	/** 水平轴箭头方向 */
	hzDirection: AxisArrowProps["direction"];
	/** 交叉轴箭头方向 */
	verDirection: AxisArrowProps["direction"];
}
