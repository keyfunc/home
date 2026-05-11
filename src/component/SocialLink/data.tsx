/** 社交链接主题色 */
export type SocialColor = "blue" | "purple";

/** 社交链接配置 */
interface SocialLinkItem {
	/** 图标地址 */
	iconUrl: string;
	/** 链接名称 */
	label: string;
	/** 跳转地址 */
	url: string;
	/** 标签主题色 */
	color: SocialColor;
}

/** 社交链接列表 */
export const socialLinks: SocialLinkItem[] = [
	{
		iconUrl: "/svg/github.svg",
		label: "GitHub",
		url: "https://github.com/keyfunc",
		color: "blue",
	},
	{
		iconUrl: "/svg/blog.svg",
		label: "Blog",
		url: "https://blog.keyfu.cc",
		color: "purple",
	},
	{
		iconUrl: "/svg/wiki.svg",
		label: "Wiki",
		url: "https://wiki.keyfu.cc",
		color: "blue",
	},
	{
		iconUrl: "/svg/envelope.svg",
		label: "Email",
		url: "mailto:liyang_email@163.com",
		color: "purple",
	},
	{
		iconUrl: "/svg/bilibili.svg",
		label: "Bilibili",
		url: "https://space.bilibili.com/125441145",
		color: "blue",
	},
];
