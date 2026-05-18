import { Link } from "@tanstack/react-router";

/** 外部项目链接地址 */
type ExternalProjectUrl = `http://${string}` | `https://${string}`;

/** 站内项目链接地址 */
type InternalProjectUrl = "/project/todo";

/** 项目展示卡片基础信息 */
interface BaseProjectItem {
	/** 项目名称 */
	title: string;
	/** 项目简介 */
	description: string;
	/** 项目图标地址 */
	iconUrl: string;
	/** 项目标签 */
	tags: string[];
	/** 项目状态 */
	status: string;
	/** 是否为 Demo 项目 */
	isDemo?: boolean;
}

/** 外部项目展示卡片信息 */
type ExternalProjectItem = BaseProjectItem & {
	/** 项目链接 */
	url: ExternalProjectUrl;
};

/** 站内项目展示卡片信息 */
type InternalProjectItem = BaseProjectItem & {
	/** 项目链接 */
	url: InternalProjectUrl;
};

/** 项目展示卡片信息 */
export type ProjectItem = ExternalProjectItem | InternalProjectItem;

interface ProjectCardProps {
	/** 项目信息 */
	project: ProjectItem;
}

const cardClassName =
	"group relative flex h-70 flex-col rounded-lg border border-neutral-200/80 bg-white/80 p-5 shadow-sm shadow-neutral-200/60 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:bg-white hover:shadow-xl hover:shadow-neutral-200/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900/20 dark:border-white/10 dark:bg-neutral-900/70 dark:shadow-none dark:hover:border-white/20 dark:hover:bg-neutral-900";

/** 判断项目是否为外部链接项目 */
const isExternalProject = (
	project: ProjectItem,
): project is ExternalProjectItem => project.url.startsWith("http");

function ProjectCard({ project }: ProjectCardProps) {
	const content = (
		<>
			<div className="flex items-start justify-between gap-4">
				<span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-900 ring-1 ring-neutral-200/70 dark:bg-white/5 dark:text-white dark:ring-white/10">
					<span
						className="size-5 bg-current mask-center mask-no-repeat mask-contain"
						style={{
							maskImage: `url(${project.iconUrl})`,
							WebkitMaskImage: `url(${project.iconUrl})`,
						}}
						aria-hidden="true"
					/>
				</span>
				<div className="flex shrink-0 items-center gap-2">
					<span className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-600 dark:bg-white/5 dark:text-neutral-300">
						{project.status}
					</span>
				</div>
			</div>

			<div className="mt-5 flex flex-1 flex-col gap-3">
				<div className="flex min-w-0 items-center gap-2">
					<h2 className="min-w-0 truncate text-lg font-semibold text-neutral-950 dark:text-white">
						{project.title}
					</h2>
					{project.isDemo ? (
						<span className="shrink-0 bg-neutral-600 p-px shadow-[0_6px_14px_rgba(82,82,82,0.22)] [clip-path:polygon(0_0,100%_0,100%_100%,0_100%,7px_50%)] dark:bg-neutral-300 dark:shadow-[0_6px_14px_rgba(212,212,212,0.14)]">
							<span className="block bg-white py-0.5 pr-2 pl-3.5 font-sans text-[11px] font-black tracking-[0.16em] text-neutral-600 [clip-path:polygon(0_0,100%_0,100%_100%,0_100%,7px_50%)] dark:bg-neutral-900 dark:text-neutral-300">
								DEMO
							</span>
						</span>
					) : null}
				</div>
				<p className="line-clamp-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
					{project.description}
				</p>
			</div>

			<div className="mt-5 flex flex-wrap gap-2">
				{project.tags.map((tag) => (
					<span
						key={tag}
						className="rounded-md bg-neutral-100 px-2 py-1 text-xs text-neutral-600 dark:bg-white/5 dark:text-neutral-300"
					>
						{tag}
					</span>
				))}
			</div>
		</>
	);

	if (isExternalProject(project)) {
		return (
			<a
				href={project.url}
				target="_blank"
				rel="noopener noreferrer"
				className={cardClassName}
			>
				{content}
			</a>
		);
	}

	return (
		<Link to={project.url} className={cardClassName}>
			{content}
		</Link>
	);
}

export default ProjectCard;
