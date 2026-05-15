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
		<div className="h-screen bg-neutral-50 text-neutral-900 transition-colors duration-300 dark:bg-neutral-950 dark:text-neutral-100">
			<main className="mx-auto max-w-7xl h-full grid grid-cols-1 grid-rows-[50px_1fr] gap-2 px-4 py-8 sm:px-6 lg:px-8">
				<ProjectBreadcrumb />
				<Outlet />
			</main>
		</div>
	);
}
