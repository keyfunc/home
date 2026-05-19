export interface FlexAttr<T> {
	name: T;
	desc: string;
	value: string[];
	defaultValue: string | number;
}

// flex 容器属性默认值
export const flexContainerAttrDefaultState = {
	"flex-direction": "row",
	"flex-wrap": "nowrap",
	"flex-flow": "row nowrap",
	"justify-content": "normal",
	"align-items": "normal",
	"align-content": "normal",
	gap: 0,
	"row-gap": 0,
	"column-gap": 0,
};

// flex 容器属性
export const flexContainerAttr: FlexAttr<
	keyof typeof flexContainerAttrDefaultState
>[] = [
	{
		name: "flex-direction",
		desc: "定义主轴方向，决定项目的排列方向",
		value: ["row", "row-reverse", "column", "column-reverse"],
		defaultValue: flexContainerAttrDefaultState["flex-direction"],
	},
	{
		name: "flex-wrap",
		desc: "定义项目是否换行",
		value: ["nowrap", "wrap", "wrap-reverse"],
		defaultValue: flexContainerAttrDefaultState["flex-wrap"],
	},
	{
		name: "flex-flow",
		desc: "flex-direction 和 flex-wrap 的简写属性",
		value: [
			"row nowrap",
			"row wrap",
			"row wrap-reverse",
			"row-reverse nowrap",
			"row-reverse wrap",
			"row-reverse wrap-reverse",
			"column nowrap",
			"column wrap",
			"column wrap-reverse",
			"column-reverse nowrap",
			"column-reverse wrap",
			"column-reverse wrap-reverse",
		],
		defaultValue: flexContainerAttrDefaultState["flex-flow"],
	},
	{
		name: "justify-content",
		desc: "定义项目在主轴上的对齐方式",
		value: [
			"normal",
			"flex-start",
			"flex-end",
			"start",
			"end",
			"left",
			"right",
			"center",
			"space-between",
			"space-around",
			"space-evenly",
			"stretch",
			"safe center",
			"unsafe center",
		],
		defaultValue: flexContainerAttrDefaultState["justify-content"],
	},
	{
		name: "align-items",
		desc: "定义项目在交叉轴上的对齐方式",
		value: [
			"normal",
			"stretch",
			"flex-start",
			"flex-end",
			"start",
			"end",
			"self-start",
			"self-end",
			"center",
			"baseline",
			"first baseline",
			"last baseline",
			"safe center",
			"unsafe center",
		],
		defaultValue: flexContainerAttrDefaultState["align-items"],
	},
	{
		name: "align-content",
		desc: "定义多行项目在交叉轴上的整体对齐方式，只在多行布局时生效",
		value: [
			"normal",
			"stretch",
			"flex-start",
			"flex-end",
			"start",
			"end",
			"center",
			"space-between",
			"space-around",
			"space-evenly",
			"baseline",
			"first baseline",
			"last baseline",
			"safe center",
			"unsafe center",
		],
		defaultValue: flexContainerAttrDefaultState["align-content"],
	},
	{
		name: "gap",
		desc: "定义行距和列距，是 row-gap 和 column-gap 的简写属性",
		value: [],
		defaultValue: flexContainerAttrDefaultState.gap,
	},
	{
		name: "row-gap",
		desc: "定义行与行之间的间距",
		value: [],
		defaultValue: flexContainerAttrDefaultState["row-gap"],
	},
	{
		name: "column-gap",
		desc: "定义列与列之间的间距",
		value: [],
		defaultValue: flexContainerAttrDefaultState["column-gap"],
	},
];

// flex 项目属性
export const itemAttr: FlexAttr<string>[] = [
	{
		name: "flex-grow",
		desc: "定义项目的放大比例，用于分配容器中的剩余空间",
		value: [],
		defaultValue: "0",
	},
	{
		name: "flex-shrink",
		desc: "定义项目的缩小比例，当空间不足时决定项目如何收缩",
		value: [],
		defaultValue: "1",
	},
	{
		name: "flex-basis",
		desc: "定义项目在主轴上的初始大小",
		value: ["auto", "content", "max-content", "min-content", "fit-content"],
		defaultValue: "auto",
	},
	{
		name: "flex",
		desc: "flex-grow、flex-shrink 和 flex-basis 的简写属性",
		value: ["none", "auto", "initial"],
		defaultValue: "0 1 auto",
	},
	{
		name: "align-self",
		desc: "允许单个项目覆盖容器的 align-items 对齐方式",
		value: [
			"auto",
			"normal",
			"stretch",
			"flex-start",
			"flex-end",
			"start",
			"end",
			"self-start",
			"self-end",
			"center",
			"baseline",
			"first baseline",
			"last baseline",
			"safe center",
			"unsafe center",
		],
		defaultValue: "auto",
	},
	{
		name: "order",
		desc: "定义项目的排列顺序，数值越小越靠前",
		value: [],
		defaultValue: "0",
	},
];
