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
		<div className="h-full p-5 flex flex-col sm:flex-row gap-5">
			<div className="hidden sm:block shrink-0">
				<TodoNav />
			</div>
			<div className="w-full flex flex-col gap-5">
				<div className="flex items-center gap-10">
					<img
						src="/svg/menu.svg"
						alt="todo-menu"
						className="w-6 h-6 sm:hidden"
						onClick={() => setOpen(true)}
					/>
					<div className="flex gap-3">
						<span>今天</span>
						<span>2026-5-14 星期四</span>
					</div>
				</div>
				<div className="flex-1">
					<TodoMain />
				</div>
			</div>

			<Drawer width="50vw" open={open} onClose={() => setOpen(false)}>
				<TodoNav />
			</Drawer>
		</div>
	);
}
