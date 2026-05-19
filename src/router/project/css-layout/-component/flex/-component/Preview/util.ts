import type { FlexContainerAttrState } from "../../-store/container";
import type { PreviewAxisState } from "./type";

// flex-direction 不同值对应的预览状态映射关系
export function getPreviewStateByContainerState(
	state: FlexContainerAttrState,
): PreviewAxisState {
	switch (state["flex-direction"]) {
		case "row-reverse":
			return {
				hzText: "主轴 Main Axis",
				verText: "交叉轴 Cross Axis",
				hzDirection: "left",
				verDirection: "down",
			};
		case "column":
			return {
				hzText: "交叉轴 Cross Axis",
				verText: "主轴 Main Axis",
				hzDirection: "right",
				verDirection: "down",
			};
		case "column-reverse":
			return {
				hzText: "交叉轴 Cross Axis",
				verText: "主轴 Main Axis",
				hzDirection: "right",
				verDirection: "up",
			};
		default:
			return {
				hzText: "主轴 Main Axis",
				verText: "交叉轴 Cross Axis",
				hzDirection: "right",
				verDirection: "down",
			};
	}
}
