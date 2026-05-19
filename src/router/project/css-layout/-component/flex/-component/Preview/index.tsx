import AxisArrow from "@/component/AxisArrow";
import usePreview from "./usePreview";

function Preview() {
	const { containerStyle, itemList, itemStyle, previewState } = usePreview();

	const itemClass =
		"grid place-content-center rounded border border-neutral-300 bg-white text-xs font-semibold tabular-nums text-neutral-800 shadow-sm shadow-neutral-200/70 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:shadow-none";

	return (
		<div className="p-10 h-full grid grid-cols-[20px_1fr] grid-rows-[20px_1fr] gap-10">
			<div></div>
			{/* 水平轴 */}
			<AxisArrow
				direction={previewState.hzDirection}
				length="80%"
				title={previewState.hzText}
				color="#aaa"
			/>
			{/* 垂直轴 */}
			<AxisArrow
				direction={previewState.verDirection}
				length="80%"
				title={previewState.verText}
				color="#aaa"
			/>

			{/* flex 配置可视化预览区 */}
			<div
				className="flex h-full min-h-0 overflow-auto border-2 border-dashed rounded-md border-gray-300 p-5"
				style={containerStyle}
			>
				{itemList.map((item) => (
					<div key={item.id} className={itemClass} style={itemStyle}>
						{item.id}
					</div>
				))}
			</div>
		</div>
	);
}
export default Preview;
