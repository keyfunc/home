/**
 * @description 个人简历路由
 */
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/resume")({
	component: ResumeRoute,
});

function ResumeRoute() {
	return (
		<div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-neutral-50 px-4 dark:bg-neutral-950">
			{/* 背景装饰 */}
			<div className="pointer-events-none absolute top-0 left-0 z-0 h-full w-full overflow-hidden">
				<div className="absolute top-[10%] left-[10%] h-[50%] w-[50%] rounded-full bg-blue-200/20 blur-[80px] dark:bg-blue-900/10" />
				<div className="absolute right-[10%] bottom-[10%] h-[50%] w-[50%] rounded-full bg-purple-200/20 blur-[80px] dark:bg-purple-900/10" />
			</div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				className="relative z-10 max-w-lg rounded-3xl border border-neutral-200/50 bg-white/30 p-8 text-center shadow-2xl backdrop-blur-xl dark:border-neutral-800/50 dark:bg-neutral-900/30"
			>
				<div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-linear-to-tr from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/30">
					{/** biome-ignore lint/a11y/noSvgWithoutTitle: 头像占位图标仅作装饰 */}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="h-10 w-10"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
						/>
					</svg>
				</div>

				<h1 className="mb-3 text-3xl font-bold text-neutral-900 dark:text-white">
					简历更新中
				</h1>

				<p className="mb-8 text-neutral-600 leading-relaxed dark:text-neutral-400">
					我的详细简历正在整理中，稍后将会上线。
					<br />
					目前您可以访问我的 GitHub 查看最新项目代码。
				</p>

				<div className="flex flex-col justify-center gap-4 sm:flex-row">
					<Link
						to="/"
						className="rounded-xl bg-neutral-900 px-6 py-2.5 font-medium text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-neutral-900"
					>
						返回首页
					</Link>
					<a
						href="https://github.com/promonkeyli"
						target="_blank"
						rel="noreferrer"
						className="rounded-xl border border-neutral-200 bg-white px-6 py-2.5 text-neutral-700 transition-colors hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
					>
						GitHub
					</a>
				</div>
			</motion.div>
		</div>
	);
}
