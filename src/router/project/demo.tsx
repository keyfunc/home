/**
 * @description Todo List Demo 路由
 */
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/project/demo")({
	component: ProjectDemoRoute,
});

function ProjectDemoRoute() {
	return (
		<section className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
			<div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-neutral-900">
				<h1 className="text-xl font-semibold text-neutral-950 dark:text-white">
					Todo List Demo
				</h1>
				<p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
					示例页面内容正在整理中。
				</p>
			</div>
		</section>
	);
}
