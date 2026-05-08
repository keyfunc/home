import { createFileRoute } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import MenuNav from "@/component/MenuNav";
import SocialLink from "@/component/SocialLink";
import ThemeToggle from "@/component/ThemeToggle";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

const routeVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2, // SocialLink then MenuNav
		},
	},
};

function RouteComponent() {
	return (
		<div className="min-h-screen relative flex flex-col overflow-hidden bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
			{/* Background Decorative Elements */}
			<div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
				<div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-purple-200/30 dark:bg-purple-900/20 blur-[100px]" />
				<div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-blue-200/30 dark:bg-blue-900/20 blur-[100px]" />
				<div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full bg-teal-200/30 dark:bg-teal-900/20 blur-[100px]" />
			</div>

			{/* 顶部：右上角固定主题切换 */}
			<header className="w-full flex justify-end px-6 pt-6 pb-2 relative z-10">
				<ThemeToggle />
			</header>

			{/* 主体内容：居中展示 */}
			<main className="flex-1 flex flex-col items-center justify-center px-4 relative z-10 py-10">
				<motion.div
					initial="hidden"
					animate="visible"
					variants={routeVariants}
					className="w-full max-w-2xl flex flex-col items-center text-center space-y-10"
				>
					{/* 社交链接区域 */}
					<SocialLink />

					{/* 导航菜单区域 */}
					<div className="w-full">
						<MenuNav />
					</div>
				</motion.div>
			</main>

			<footer className="py-6 text-center text-neutral-400 dark:text-neutral-600 text-sm relative z-10">
				© {new Date().getFullYear()} Young. All rights reserved.
			</footer>
		</div>
	);
}
