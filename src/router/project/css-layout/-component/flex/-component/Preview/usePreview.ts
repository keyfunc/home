import { cssToReactStyle } from "@/util";
import { useConfigStore } from "../../-store/config";
import { useContainerStore } from "../../-store/container";
import { getPreviewStateByContainerState } from "./util";

function usePreview() {
	const state = useContainerStore((s) => s.state); // 设置的容器属性
	const configState = useConfigStore((s) => s.state); // flex 预览全局配置

	const previewState = getPreviewStateByContainerState(state); // 坐标轴相关的预览状态
	const containerStyle = cssToReactStyle(state); // flex 容器内联样式
	const itemStyle: React.CSSProperties = {
		width: configState.itemWidth,
		height: configState.itemHeight,
	};
	const itemList = Array.from(
		{ length: configState.itemCount },
		(_, index) => ({
			id: index + 1,
		}),
	);

	return {
		containerStyle,
		itemList,
		itemStyle,
		previewState,
	};
}

export default usePreview;
