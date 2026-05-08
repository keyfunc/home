/**
 * @description 个人简历页面
 */
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

function Resume() {
	return (
		<div className="min-h-screen relative flex flex-col items-center justify-center bg-neutral-50 dark:bg-neutral-950 px-4 overflow-hidden">
			{/* Background Decorative Elements - simpler version */}
			<div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
				<div className="absolute top-[10%] left-[10%] w-[50%] h-[50%] rounded-full bg-blue-200/20 dark:bg-blue-900/10 blur-[80px]" />
				<div className="absolute bottom-[10%] right-[10%] w-[50%] h-[50%] rounded-full bg-purple-200/20 dark:bg-purple-900/10 blur-[80px]" />
			</div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				className="relative z-10 text-center max-w-lg p-8 rounded-3xl bg-white/30 dark:bg-neutral-900/30 backdrop-blur-xl border border-neutral-200/50 dark:border-neutral-800/50 shadow-2xl"
			>
				<div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-linear-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
					{/** biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-10 h-10"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
						/>
					</svg>
				</div>

				<h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-3">
					简历更新中
				</h1>

				<p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
					我的详细简历正在整理中，稍后将会上线。
					<br />
					目前您可以访问我的 GitHub 查看最新项目代码。
				</p>

				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Link
						to="/"
						className="px-6 py-2.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium hover:opacity-90 transition-opacity"
					>
						返回首页
					</Link>
					<a
						href="https://github.com/promonkeyli"
						target="_blank"
						rel="noreferrer"
						className="px-6 py-2.5 rounded-xl bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
					>
						GitHub
					</a>
				</div>
			</motion.div>
		</div>
	);
}

export default Resume;
