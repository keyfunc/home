import type { ProjectItem } from "../-component/ProjectCard";

/** 作品项目列表 */
export const projects: ProjectItem[] = [
	{
		title: "template",
		description:
			"覆盖前端、后端和运维场景的开箱即用模板，并内置 AGENTS.md 规范 AI 协作",
		url: "https://github.com/keyfunc/template",
		iconUrl: "/svg/template.svg",
		tags: ["Template", "Frontend", "Backend", "Devops"],
		status: "迭代中",
	},
	{
		title: "create-uno",
		description: "用于拉取 template 预设模板的 npm 初始化工具，快速创建项目",
		url: "https://www.npmjs.com/package/create-uno",
		iconUrl: "/svg/npm.svg",
		tags: ["NPM", "Tools", "Node.js", "Template Generate"],
		status: "已发布",
	},
	{
		title: "uno",
		description: "面向项目开发的脚手架工具，用于减少重复的模板生成工作",
		url: "https://www.npmjs.com/package/@keyfun/uno",
		iconUrl: "/svg/npm.svg",
		tags: ["NPM", "CLI", "Node.js", "File Generate"],
		status: "已发布",
	},
	{
		title: "todo list",
		description: "React 客户端配合 Golang net/http 服务端的待办事项演示项目",
		url: "/project/todo",
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
