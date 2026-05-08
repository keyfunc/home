/**
 * @description 社交链接组件
 */
import { motion, type Variants } from "framer-motion";

const socialLinks = [
	{
		icon: (
			<img
				src="/images/github.svg"
				alt="Github"
				className="w-5 h-5 dark:invert"
			/>
		),
		label: "GitHub",
		url: "https://github.com/promonkeyli",
	},
	{
		icon: (
			<img
				src="/images/envelope.svg"
				alt="Email"
				className="w-5 h-5 dark:invert"
			/>
		),
		label: "Email",
		url: "mailto:liyang_email@163.com",
	},
	{
		icon: (
			<img
				src="/images/bilibili.svg"
				alt="Bilibili"
				className="w-5 h-5 dark:invert"
			/>
		),
		label: "Bilibili",
		url: "https://space.bilibili.com/125441145",
	},
	{
		icon: (
			<img src="/images/blog.svg" alt="Blog" className="w-5 h-5 dark:invert" />
		),
		label: "Blog",
		url: "https://blog.promonkeyli.top",
	},
];

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2, // Slight delay to let parent settle
		},
	},
};

const itemVariants: Variants = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: { type: "spring", stiffness: 260, damping: 20 },
	},
};

const scaleVariants: Variants = {
	hidden: { scale: 0.8, opacity: 0 },
	visible: {
		scale: 1,
		opacity: 1,
		transition: { duration: 0.5, ease: "easeOut" },
	},
};

const socialButtonVariants: Variants = {
	hidden: { opacity: 0, scale: 0.9 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			type: "spring",
			stiffness: 200,
			damping: 20,
		},
	},
};

function SocialLink() {
	return (
		<motion.div
			className="flex flex-col items-center"
			variants={containerVariants}
		// Note: We don't set initial/animate here, relying on parent propagation
		// But for standalone testing or if parent doesn't propagate, we might need default props.
		// However, in this plan, parent 'index.tsx' WILL propagate.
		>
			{/* 头像 */}
			<motion.div variants={scaleVariants} className="relative">
				<div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl dark:bg-blue-400/10" />
				<div className="p-1 rounded-full bg-linear-to-tr from-white via-neutral-100 to-white dark:from-neutral-800 dark:via-neutral-700 dark:to-neutral-900 shadow-2xl relative">
					<img
						src="/images/avatar.jpg"
						alt="avatar"
						title="Young"
						className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover ring-4 ring-white dark:ring-neutral-800"
					/>
				</div>
			</motion.div>

			{/* 名字 & 简介 */}
			<motion.div variants={itemVariants} className="text-center mt-6">
				<h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-2">
					Young
				</h1>
				<p className="text-lg text-neutral-600 dark:text-neutral-400 font-medium">
					Full Stack Developer & Tech Enthusiast
				</p>
				<p className="text-sm text-neutral-500 dark:text-neutral-500 mt-2 max-w-md mx-auto leading-relaxed">
					热爱编程，喜欢折腾新技术。这里是我的个人主页，包含我的项目、笔记和随想。
				</p>
			</motion.div>

			{/* 社交按钮 */}
			<motion.div
				className="mt-8 flex flex-wrap justify-center gap-4"
				variants={{
					visible: {
						transition: { staggerChildren: 0.1 } // Slower stagger for elegance
					},
				}}
			>
				{socialLinks.map((item) => (
					<motion.a
						key={item.label}
						href={item.url}
						target="_blank"
						rel="noopener noreferrer"
						variants={socialButtonVariants}
						className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-200/60 dark:border-neutral-700/60 bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm shadow-sm hover:shadow-md hover:bg-white dark:hover:bg-neutral-800 transition-all duration-300"
						whileHover={{
							y: -2,
							scale: 1.05,
							transition: { duration: 0.2 }
						}}
						whileTap={{ scale: 0.95 }}
					>
						<span className="opacity-70 group-hover:opacity-100 transition-opacity">
							{item.icon}
						</span>
						<span className="text-sm font-medium text-neutral-600 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
							{item.label}
						</span>
					</motion.a>
				))}
			</motion.div>

			{/* 分割线 */}
			<motion.div
				variants={{
					hidden: { scaleX: 0, opacity: 0 },
					visible: {
						scaleX: 1,
						opacity: 1,
						transition: { duration: 0.8, delay: 0.2 },
					},
				}}
				className="mt-12 w-24 h-1 rounded-full bg-linear-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent"
			/>
		</motion.div>
	);
}

export default SocialLink;
