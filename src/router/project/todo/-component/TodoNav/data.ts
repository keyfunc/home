export interface NavItem {
	iconUrl: string;
	label: string;
	value: number;
}

export const NavData: Array<NavItem> = [
	{
		iconUrl: "/svg/today.svg",
		label: "今天",
		value: 1,
	},
	{
		iconUrl: "/svg/roboot.svg",
		label: "未来",
		value: 1,
	},
	{
		iconUrl: "/svg/important.svg",
		label: "重要",
		value: 1,
	},
	{
		iconUrl: "/svg/completed.svg",
		label: "完成",
		value: 1,
	},
];

export interface TagItem {
	color: string;
	label: string;
	value: number;
}

export const TagData: Array<TagItem> = [
	{
		color: "",
		label: "工作",
		value: 1,
	},
	{
		color: "",
		label: "学习",
		value: 1,
	},
	{
		color: "",
		label: "生活",
		value: 1,
	},
	{
		color: "",
		label: "项目",
		value: 1,
	},
];
