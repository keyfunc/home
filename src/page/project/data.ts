import type { ProjectItem } from "./component/ProjectCard";

/** 作品项目列表 */
export const projects: ProjectItem[] = [
	{
		title: "template",
		description:
			"前端、后端、运维相关的模版，开箱即用; 工程里都设计了一套 AGENTS.md 用于规范 AI 代码生成",
		url: "https://github.com/keyfunc/template",
		iconUrl: "/svg/template.svg",
		tags: ["Template", "Frontend", "Backend", "Devops"],
		status: "迭代中",
	},
	{
		title: "create-clear",
		description: "模版生成工具 npm 包，拉取 template 项目中定义好的模版",
		url: "https://www.npmjs.com/package/create-clear",
		iconUrl: "/svg/npm.svg",
		tags: ["NPM", "Tools", "Node.js", "Template Generate"],
		status: "已发布",
	},
	{
		title: "todo list",
		description: "客服端使用React，服务端采用 Golang net/http 标准库开发",
		url: "/",
		iconUrl: "/svg/todo.svg",
		tags: [
			"React",
			"TailwindCSS",
			"Tanstack Query",
			"Tanstack Router",
			"Golang",
			"net/http",
		],
		status: "已上线",
		isDemo: true,
	},
];
