/**
 * @description 项目首页路由
 */
import { createFileRoute } from "@tanstack/react-router";
import ProjectCard from "./-component/ProjectCard";
import { projects } from "./-data/project";

export const Route = createFileRoute("/project/")({
	component: ProjectIndexRoute,
});

function ProjectIndexRoute() {
	return (
		<section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
			{projects.map((project) => (
				<ProjectCard key={project.title} project={project} />
			))}
		</section>
	);
}
