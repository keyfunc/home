/**
 * @description 社交链接组件
 */
import { type SocialColor, socialLinks } from "./data";

/** 社交标签主题样式 */
const socialColorClassNames: Record<SocialColor, string> = {
	blue: "border-blue-200/80 bg-blue-50/80 text-blue-700 shadow-blue-200/70 hover:border-blue-300 hover:bg-white hover:text-blue-800 dark:border-blue-400/15 dark:bg-blue-400/10 dark:text-blue-300 dark:shadow-none dark:hover:border-blue-300/30 dark:hover:bg-blue-400/15 dark:hover:text-blue-200",
	purple:
		"border-violet-200/80 bg-violet-50/80 text-violet-700 shadow-violet-200/70 hover:border-violet-300 hover:bg-white hover:text-violet-800 dark:border-violet-400/15 dark:bg-violet-400/10 dark:text-violet-300 dark:shadow-none dark:hover:border-violet-300/30 dark:hover:bg-violet-400/15 dark:hover:text-violet-200",
};

function SocialLink() {
	return (
		<div className="flex w-full max-w-[760px] flex-col items-center gap-6 lg:items-start lg:gap-8">
			{/* 个人信息 */}
			<div className="flex w-full flex-col items-center justify-center gap-4 text-center sm:flex-row sm:text-left lg:justify-start">
				{/* 头像 */}
				<div className="size-24 shrink-0 rounded-full bg-white p-0.5 shadow-2xl sm:size-28 lg:size-32">
					<img
						src="/images/avatar.jpg"
						alt="Young 头像"
						title="Young"
						decoding="async"
						className="size-full rounded-full object-cover ring-2 ring-white dark:ring-white"
					/>
				</div>

				{/* 名字 & 简介 */}
				<div className="flex min-w-0 flex-col gap-2 sm:gap-3">
					<h1 className="text-2xl font-bold tracking-tight text-black sm:text-3xl dark:text-white">
						Young
					</h1>
					<p className="max-w-[36rem] text-base text-neutral-600 sm:text-lg dark:text-neutral-400">
						Full Stack Developer · Frontend & Go Enthusiast
					</p>
				</div>
			</div>

			{/* 社交链接 */}
			<div className="flex w-full flex-wrap items-center justify-center gap-2.5 sm:gap-3 lg:flex-nowrap lg:justify-start">
				{socialLinks.map((item) => (
					<a
						key={item.label}
						href={item.url}
						target="_blank"
						rel="noopener noreferrer"
						className={`group relative isolate inline-flex h-8 items-center gap-1.5 overflow-hidden rounded-full border px-3 text-xs font-semibold shadow-sm backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900/20 sm:h-9 sm:gap-2 sm:px-3.5 sm:text-sm ${socialColorClassNames[item.color]}`}
					>
						<span
							className="absolute inset-x-2 top-0 h-px bg-white/80 dark:bg-white/20"
							aria-hidden="true"
						/>
						<span
							className="size-3.5 shrink-0 bg-current transition-transform duration-300 [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain] group-hover:scale-110 sm:size-4"
							style={{
								maskImage: `url(${item.iconUrl})`,
								WebkitMaskImage: `url(${item.iconUrl})`,
							}}
							aria-hidden="true"
						/>
						<span>{item.label}</span>
					</a>
				))}
			</div>
		</div>
	);
}

export default SocialLink;
