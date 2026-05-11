/**
 * @description 菜单导航组件
 */

import { Link } from "@tanstack/react-router";
import { menuItems } from "./data";

function MenuNav() {
	return (
		<div className="grid w-full min-w-0 max-w-[540px] grid-cols-2 gap-3 px-0 sm:gap-4 lg:px-2">
			{menuItems.map((item) => (
				<Link
					key={item.label}
					to={item.url}
					target={item.url.startsWith("http") ? "_blank" : undefined}
					rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
					className="group relative isolate flex min-h-20 items-center gap-2.5 overflow-hidden rounded-[18px] border border-white/75 bg-white/75 px-3 py-3 shadow-[0_14px_34px_rgba(15,23,42,0.08),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-[0_18px_42px_rgba(15,23,42,0.12)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900/30 dark:border-white/10 dark:bg-neutral-900/70 dark:shadow-none dark:hover:bg-neutral-900 sm:min-h-24 sm:gap-4 sm:px-4"
				>
					<span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-2xl bg-neutral-50/90 text-neutral-900 ring-1 ring-neutral-200/80 shadow-lg shadow-neutral-200/60 dark:bg-white/5 dark:text-white dark:ring-white/10 dark:shadow-none sm:size-14">
						<span
							className="size-4 bg-current mask-center mask-no-repeat mask-contain sm:size-5"
							style={{
								maskImage: `url(${item.iconUrl})`,
								WebkitMaskImage: `url(${item.iconUrl})`,
							}}
							aria-hidden="true"
						/>
					</span>

					<span className="relative z-10 min-w-0 flex-1 text-left text-sm leading-tight text-slate-900 sm:text-base dark:text-white">
						{item.label}
					</span>

					<span
						className="relative z-10 ml-auto flex size-7 shrink-0 items-center justify-center rounded-full bg-neutral-100/90 text-neutral-800 shadow-lg shadow-neutral-200/70 transition duration-300 group-hover:translate-x-0.5 group-hover:bg-white group-hover:text-black dark:bg-white/5 dark:text-neutral-200 dark:shadow-none dark:group-hover:bg-white/10 dark:group-hover:text-white sm:size-9"
						aria-hidden="true"
					>
						<span
							className="size-4 bg-current mask-[url('/svg/arrow.svg')] mask-center mask-no-repeat mask-contain"
							aria-hidden="true"
						/>
					</span>
				</Link>
			))}
		</div>
	);
}

export default MenuNav;
