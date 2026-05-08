/**
 * @description 菜单导航组件
 */
import { motion, type Variants } from "framer-motion";
import { Link } from "@tanstack/react-router";

const menuItems = [
	{
		icon: (
			<img src="/images/user.svg" alt="User" className="w-8 h-8 dark:invert transition-transform duration-300 group-hover:scale-110" />
		),
		label: "在线简历",
		desc: "我的详细经历",
		url: "/resume",
		color: "bg-blue-500/10 text-blue-600 dark:text-blue-400 dark:bg-blue-500/20",
	},
	{
		icon: (
			<img src="/images/list.svg" alt="List" className="w-8 h-8 dark:invert transition-transform duration-300 group-hover:scale-110" />
		),
		label: "作品展示",
		desc: "个人项目集合",
		url: "https://notes.promonkeyli.top",
		color: "bg-purple-500/10 text-purple-600 dark:text-purple-400 dark:bg-purple-500/20",
	},
	{
		icon: (
			<img src="/images/file.svg" alt="File" className="w-8 h-8 dark:invert transition-transform duration-300 group-hover:scale-110" />
		),
		label: "知识笔记",
		desc: "学习与积累",
		url: "https://notes.promonkeyli.top",
		color: "bg-amber-500/10 text-amber-600 dark:text-amber-400 dark:bg-amber-500/20",
	},
	{
		icon: (
			<img
				src="/images/setting.svg"
				alt="Setting"
				className="w-8 h-8 dark:invert transition-transform duration-300 group-hover:scale-110"
			/>
		),
		label: "工具整理",
		desc: "常用提效工具",
		url: "https://notes.promonkeyli.top",
		color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 dark:bg-emerald-500/20",
	},
];

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			stiffness: 260,
			damping: 20,
		},
	},
};

function MenuNav() {
	return (
		<motion.div
			className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 px-2"
			variants={containerVariants}
		// Relying on parent stagger.
		>
			{menuItems.map((item) => (
				<motion.div
					key={item.label}
					variants={itemVariants}
				>
					<Link
						to={item.url}
						target={item.url.startsWith("http") ? "_blank" : undefined}
						rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
						className="group flex items-center gap-5 p-5 rounded-2xl border border-neutral-200/60 dark:border-neutral-800/60 bg-white/40 dark:bg-neutral-900/40 hover:bg-white/80 dark:hover:bg-neutral-800/80 backdrop-blur-md shadow-sm hover:shadow-xl transition-all duration-300"
					>
						<div className={`p-3.5 rounded-xl ${item.color} transition-colors`}>
							{item.icon}
						</div>
						<div className="flex flex-col text-left">
							<span className="text-lg font-bold text-neutral-800 dark:text-neutral-100 group-hover:text-black dark:group-hover:text-white transition-colors">
								{item.label}
							</span>
							<span className="text-sm text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
								{item.desc}
							</span>
						</div>
						<div className="ml-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-neutral-400 dark:text-neutral-500">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
								<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
							</svg>
						</div>
					</Link>
				</motion.div>
			))}
		</motion.div>
	);
}

export default MenuNav;
