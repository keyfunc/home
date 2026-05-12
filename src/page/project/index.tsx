/**
 * @description Project 展示页
 */
import { Link } from "@tanstack/react-router";
import ProjectCard from "./component/ProjectCard";
import { projects } from "./data";

function Project() {
	return (
		<div className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 transition-colors duration-300">
			<main className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8">
				<header>
					<nav
						aria-label="页面路径"
						className="flex items-center gap-2 text-sm"
					>
						<Link
							to="/"
							className="group inline-flex h-9 items-center gap-2 rounded-lg px-2.5 font-medium text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-white"
						>
							<img
								src="/svg/home.svg"
								alt=""
								aria-hidden="true"
								className="h-4 w-4 opacity-70 transition-opacity group-hover:opacity-100 dark:invert"
							/>
							<span>主页</span>
						</Link>
						<span
							aria-hidden="true"
							className="text-neutral-300 dark:text-neutral-700"
						>
							&gt;
						</span>
						<span
							aria-current="page"
							className="font-medium text-neutral-950 dark:text-white"
						>
							项目
						</span>
					</nav>
				</header>

				{/* demo 列表 */}
				<section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
					{projects.map((project) => (
						<ProjectCard key={project.title} project={project} />
					))}
				</section>
			</main>
		</div>
	);
}

export default Project;
