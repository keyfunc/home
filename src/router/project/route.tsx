/**
 * @description 项目展示路由布局
 */
import { createFileRoute, Outlet } from "@tanstack/react-router";
import ProjectBreadcrumb from "./-component/ProjectBreadcrumb";

export const Route = createFileRoute("/project")({
	component: ProjectRoute,
});

function ProjectRoute() {
	return (
		<div className="h-dvh overflow-hidden bg-neutral-50 text-neutral-900 transition-colors duration-300 dark:bg-neutral-950 dark:text-neutral-100">
			<main className="mx-auto flex h-full min-h-0 w-full max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8">
				<ProjectBreadcrumb />

				<div className="min-h-0 flex-1 overflow-y-auto">
					{/* project 嵌套路由出口 */}
					<Outlet />
				</div>
			</main>
		</div>
	);
}
