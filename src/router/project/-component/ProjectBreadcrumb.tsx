import { useRouter } from "@tanstack/react-router";

/** 项目页返回按钮组件 */
function ProjectBreadcrumb() {
	const router = useRouter();

	return (
		<header className="h-full flex items-center">
			<button
				type="button"
				onClick={() => router.history.back()}
				className="group inline-flex h-9 items-center gap-2 rounded-lg px-2.5 text-sm font-medium text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-white"
			>
				<img
					src="/svg/back.svg"
					alt=""
					aria-hidden="true"
					className="h-4 w-4 opacity-70 transition-opacity group-hover:opacity-100 dark:invert"
				/>
				<span>返回</span>
			</button>
		</header>
	);
}

export default ProjectBreadcrumb;
