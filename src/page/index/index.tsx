/**
 * @description 首页
 */
import MenuNav from "@/component/MenuNav";
import SocialLink from "@/component/SocialLink";
import ThemeToggle from "@/component/ThemeToggle";

function Index() {
	return (
		<div className="flex min-h-dvh flex-col overflow-x-hidden bg-white dark:bg-black">
			{/* 顶部：右上角固定主题切换 */}
			<header className="flex h-14 w-full shrink-0 items-center justify-end px-4 sm:h-16 sm:px-6">
				<ThemeToggle />
			</header>

			{/* 主体内容：居中展示 */}
			<main className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center gap-8 px-5 py-6 sm:px-8 sm:py-8 lg:grid lg:grid-cols-[minmax(620px,1fr)_minmax(360px,540px)] lg:gap-10 xl:gap-14">
				{/* 社交链接区域 */}
				<SocialLink />
				{/* 导航菜单区域 */}
				<MenuNav />
			</main>
		</div>
	);
}

export default Index;
