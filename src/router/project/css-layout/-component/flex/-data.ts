// flex 容器属性
export const containerAttr: { name: string; desc: string }[] = [
	{
		name: "flex-direction",
		desc: "定义主轴的方向",
	},
	{
		name: "flex-wrap",
		desc: "项目是否换行",
	},
	{
		name: "flex-flow",
		desc: "flex-direction 和 flex-wrap 的简写属性，默认值为 row nowrap",
	},
	{
		name: "justify-content",
		desc: "定义了项目在主轴上的对齐方式",
	},
	{
		name: "align-items",
		desc: "定义了项目在交叉轴上的对齐方式",
	},
	{
		name: "align-content",
		desc: "定义了多行时，项目在交叉轴上的对齐方式",
	},
	{
		name: "gap",
		desc: "定义了行距和列距",
	},
	{
		name: "row-gap",
		desc: "定义了行距",
	},
	{
		name: "column-gap",
		desc: "定义了列距",
	}
];

// flex 项目属性
export const itemAttr: { name: string; desc: string }[] = [
	{
		name: "flex-grow",
		desc: "定义了项目的放大比例",
	},
	{
		name: "flex-shrink",
		desc: "定义了项目的缩小比例",
	},
	{
		name: "flex-basis",
		desc: "定义了项目在主轴上的初始大小",
	},
	{
		name: "flex",
		desc: "flex-grow, flex-shrink 和 flex-basis 的简写属性，默认值为 0 1 auto",
	},
	{
		name: "align-self",
		desc: "允许单个项目有与其他项目不同的对齐方式，可覆盖 align-items 属性",
	},
	{
		name: "order",
		desc: "定义了项目的排列顺序，数值越小，排列越靠前，默认为 0",
	}
];
