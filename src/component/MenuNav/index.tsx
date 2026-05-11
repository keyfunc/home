/**
 * @description 菜单导航组件
 */

import { Link } from "@tanstack/react-router";
import { type MenuColor, menuItems } from "./data";

/** 菜单主题样式 */
const menuColorClassNames: Record<
	MenuColor,
	{
		iconPanel: string;
		arrow: string;
		wave: string;
	}
> = {
	blue: {
		iconPanel:
			"bg-blue-50/80 text-blue-600 ring-blue-100 shadow-blue-200/50 dark:bg-blue-500/10 dark:text-blue-300 dark:ring-blue-400/20",
		arrow:
			"bg-blue-100/70 text-blue-600 shadow-blue-200/60 dark:bg-blue-400/10 dark:text-blue-300 dark:shadow-none",
		wave: "text-blue-100/60 dark:text-blue-500/10",
	},
	purple: {
		iconPanel:
			"bg-violet-50/80 text-violet-600 ring-violet-100 shadow-violet-200/50 dark:bg-violet-500/10 dark:text-violet-300 dark:ring-violet-400/20",
		arrow:
			"bg-violet-100/70 text-violet-600 shadow-violet-200/60 dark:bg-violet-400/10 dark:text-violet-300 dark:shadow-none",
		wave: "text-violet-100/60 dark:text-violet-500/10",
	},
};

function MenuNav() {
	return (
		<div className="grid w-full min-w-0 max-w-[540px] grid-cols-2 gap-3 px-0 sm:gap-4 lg:px-2">
			{menuItems.map((item) => {
				const colorClassNames = menuColorClassNames[item.color];

				return (
					<Link
						key={item.label}
						to={item.url}
						target={item.url.startsWith("http") ? "_blank" : undefined}
						rel={
							item.url.startsWith("http") ? "noopener noreferrer" : undefined
						}
						className="group relative isolate flex min-h-20 items-center gap-2.5 overflow-hidden rounded-[18px] border border-white/75 bg-white/75 px-3 py-3 shadow-[0_14px_34px_rgba(15,23,42,0.08),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-[0_18px_42px_rgba(15,23,42,0.12)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900/30 dark:border-white/10 dark:bg-neutral-900/70 dark:shadow-none dark:hover:bg-neutral-900 sm:min-h-24 sm:gap-4 sm:px-4"
					>
						<span
							className={`pointer-events-none absolute inset-x-0 bottom-0 z-0 h-12 w-full bg-current transition-transform duration-300 [mask-image:url('/svg/wave.svg')] mask-center mask-no-repeat mask-size-[100%_100%] group-hover:scale-x-105 sm:h-14 ${colorClassNames.wave}`}
							aria-hidden="true"
						/>

						<span
							className={`relative z-10 flex size-10 shrink-0 items-center justify-center rounded-2xl ring-1 shadow-lg sm:size-14 ${colorClassNames.iconPanel}`}
						>
							<span
								className="size-4 bg-current mask-center mask-no-repeat mask-contain sm:size-5"
								style={{
									maskImage: `url(${item.iconUrl})`,
									WebkitMaskImage: `url(${item.iconUrl})`,
								}}
								aria-hidden="true"
							/>
						</span>

						<span className="relative z-10 min-w-0 flex-1 text-left text-sm font-bold leading-tight text-slate-900 sm:text-base dark:text-white">
							{item.label}
						</span>

						<span
							className={`relative z-10 ml-auto flex size-7 shrink-0 items-center justify-center rounded-full shadow-lg transition duration-300 group-hover:translate-x-0.5 sm:size-9 ${colorClassNames.arrow}`}
							aria-hidden="true"
						>
							<span
								className="size-4 bg-current mask-[url('/svg/arrow.svg')] mask-center mask-no-repeat mask-contain"
								aria-hidden="true"
							/>
						</span>
					</Link>
				);
			})}
		</div>
	);
}

export default MenuNav;
