/** 菜单导航项配置 */
interface MenuItem {
	/** 图标地址 */
	iconUrl: string;
	/** 菜单名称 */
	label: string;
	/** 跳转地址 */
	url: string;
}

/** 菜单导航列表 */
export const menuItems: MenuItem[] = [
	{
		iconUrl: "/svg/user.svg",
		label: "简历",
		url: "/resume",
	},
	{
		iconUrl: "/svg/list.svg",
		label: "作品",
		url: "/project",
	},
	{
		iconUrl: "/svg/file.svg",
		label: "笔记",
		url: "https://wiki.keyfu.cc",
	},
	{
		iconUrl: "/svg/setting.svg",
		label: "工具",
		url: "https://wiki.keyfu.cc",
	},
];
