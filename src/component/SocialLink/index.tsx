/**
 * @description 社交链接组件
 */
import { socialLinks } from "./data";

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
						className="group relative isolate inline-flex h-8 items-center gap-1.5 overflow-hidden rounded-full border border-neutral-200/80 bg-white/80 px-3 text-xs text-neutral-700 shadow-sm shadow-neutral-200/70 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-neutral-300 hover:bg-white hover:text-black hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900/20 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300 dark:shadow-none dark:hover:border-white/20 dark:hover:bg-white/10 dark:hover:text-white sm:h-9 sm:gap-2 sm:px-3.5 sm:text-sm"
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
						<span className="text-sm">{item.label}</span>
					</a>
				))}
			</div>
		</div>
	);
}

export default SocialLink;
