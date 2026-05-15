/**
 * @description Todo List 路由
 */
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import Drawer from "@/component/Drawer";
import TodoMain from "./-component/TodoMain";
import TodoNav from "./-component/TodoNav";

export const Route = createFileRoute("/project/todo/")({
	component: TodoPage,
});

function TodoPage() {
	const [open, setOpen] = useState(false);

	return (
		<div className="h-full min-h-0 grid grid-cols-1 md:grid-cols-[260px_1fr] border border-gray-200 rounded-md shadow-3xl">
			{/* 移动设备上只展示中间区域，左侧的菜单通过抽屉进行存放 */}
			<div className="hidden md:block md:border-r md:border-r-gray-200">
				<TodoNav />
			</div>
			<div className="h-full min-h-0">
				<TodoMain title="标题" onAddClick={() => setOpen(true)} />
			</div>

			{/* 移动设备上，抽屉存放菜单 */}
			<Drawer width="50vw" open={open} onClose={() => setOpen(false)}>
				<TodoNav />
			</Drawer>
		</div>
	);
}
