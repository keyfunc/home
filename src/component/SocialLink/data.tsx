/** 社交链接配置 */
interface SocialLinkItem {
	/** 图标地址 */
	iconUrl: string;
	/** 链接名称 */
	label: string;
	/** 跳转地址 */
	url: string;
}

/** 社交链接列表 */
export const socialLinks: SocialLinkItem[] = [
	{
		iconUrl: "/svg/github.svg",
		label: "GitHub",
		url: "https://github.com/keyfunc",
	},
	{
		iconUrl: "/svg/blog.svg",
		label: "Blog",
		url: "https://blog.keyfu.cc",
	},
	{
		iconUrl: "/svg/wiki.svg",
		label: "Wiki",
		url: "https://wiki.keyfu.cc",
	},
	{
		iconUrl: "/svg/envelope.svg",
		label: "Email",
		url: "mailto:liyang_email@163.com",
	},
	{
		iconUrl: "/svg/bilibili.svg",
		label: "Bilibili",
		url: "https://space.bilibili.com/125441145",
	},
];
