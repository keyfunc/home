import Collapse from "@/component/Collapse";
import Slider from "@/component/Slider";
import { flexContainerAttr } from "../../-data/flex";
import { useConfigStore } from "../../-store/config";
import type { FlexContainerAttrState } from "../../-store/container";
import useAttr from "./useAttr";

type FlexContainerAttrName = keyof FlexContainerAttrState;

// flex 布局的 Container 属性 遍历生成
function Attr() {
	const { state, setStates } = useAttr();
	const configState = useConfigStore((store) => store.state);
	const setConfigStates = useConfigStore((store) => store.setStates);

	// 更新 flex 容器属性值
	const handleContainerAttrChange = (
		name: FlexContainerAttrName,
		value: FlexContainerAttrState[FlexContainerAttrName],
	) => {
		setStates({ [name]: value } as Partial<FlexContainerAttrState>);
	};

	// 获取数值型 flex 容器属性值
	const getNumberAttrValue = (name: FlexContainerAttrName) => {
		const value = state[name];
		return typeof value === "number" ? value : 0;
	};

	return (
		<div className="h-full min-h-0 overflow-y-auto p-4 flex flex-col gap-4">
			<div className="text-black font-bold">全局配置</div>
			<div className="flex shrink-0 flex-col gap-3 rounded border border-gray-200 p-4">
				<div className="flex flex-col gap-1">
					<div className="text-xs font-bold text-neutral-700">item 数量</div>
					<Slider
						value={configState.itemCount}
						min={1}
						max={30}
						onChange={(value) => setConfigStates({ itemCount: value })}
					/>
				</div>
				<div className="flex flex-col gap-1">
					<div className="text-xs font-bold text-neutral-700">item 宽度</div>
					<Slider
						value={configState.itemWidth}
						min={20}
						max={100}
						onChange={(value) => setConfigStates({ itemWidth: value })}
					/>
				</div>
				<div className="flex flex-col gap-1">
					<div className="text-xs font-bold text-neutral-700">item 高度</div>
					<Slider
						value={configState.itemHeight}
						min={20}
						max={100}
						onChange={(value) => setConfigStates({ itemHeight: value })}
					/>
				</div>
			</div>
			<div className="text-black font-bold"> 容器属性</div>
			<div className="flex flex-col gap-2 shrink-0">
				{flexContainerAttr.map((item) => (
					<Collapse
						title={<div className="font-bold">{item.name}</div>}
						key={item.name}
					>
						<div className="flex flex-wrap gap-2">
							{item.value.length === 0 ? (
								<Slider
									value={getNumberAttrValue(item.name)}
									min={0}
									max={80}
									onChange={(value) =>
										handleContainerAttrChange(item.name, value)
									}
								/>
							) : (
								item.value.map((subItem) => (
									<button
										key={subItem}
										type="button"
										style={{
											backgroundColor:
												state[item.name] === subItem ? "#000000" : "#ffffff",
											color:
												state[item.name] === subItem ? "#ffffff" : "#000000",
										}}
										onClick={() =>
											handleContainerAttrChange(item.name, subItem)
										}
										className="p-2 border border-gray-300 rounded text-xs cursor-pointer hover:bg-gray-200"
									>
										{subItem}
									</button>
								))
							)}
						</div>
					</Collapse>
				))}
			</div>
		</div>
	);
}

export default Attr;
