/**
 * @description Todo List 路由
 */

import TodoAdd from "../TodoAdd";
import TodoKey from "../TodoKey";
import TodoRow from "../TodoRow";
import TodoSkeleton from "../TodoSkeleton";
import type { TodpMainProps } from "./type";
import { useTodoMain } from "./useTodoMain";

function TodoMain(props: TodpMainProps) {
	const {
		open,
		token,
		todoList,
		listError,
		isFetching,
		isSuccess,
		handleAddModalOpen,
		handleAddModalClose,
		handleOnInitKey,
	} = useTodoMain(props);

	return (
		<section className="h-full min-h-0 flex flex-col gap-5 p-5">
			<div className=" flex flex-col gap-5">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-4">
						<img
							src="/svg/menu.svg"
							alt="todo-menu"
							className="w-6 h-6 md:hidden"
							onClick={() => props?.onAddClick?.()}
						/>
						<h1 className="text-3xl font-semibold text-neutral-950 dark:text-white">
							{props.title}
						</h1>
					</div>
					<button
						type="submit"
						disabled={!token}
						onClick={handleAddModalOpen}
						className="h-8 rounded-sm bg-black px-3 text-sm text-white transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-60 lg:w-20 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
					>
						新增
					</button>
				</div>

				<TodoKey onInitKey={handleOnInitKey} />
			</div>

			<div className="border flex-1 min-h-0 overflow-y-auto border-gray-200 rounded-md flex flex-col gap-4 p-5">
				{/* 没有 api key 占位文字提示 */}
				{!token && (
					<div className="flex h-full min-h-64 items-center justify-center px-4 py-3 text-sm text-neutral-400 sm:px-5">
						请输入 API Key 后初始化
					</div>
				)}

				{/* 出错提示 */}
				{listError && (
					<div className="flex min-h-14 items-center px-4 py-3 text-sm text-neutral-600 sm:min-h-16 sm:px-5 dark:text-neutral-400">
						{listError.message}
					</div>
				)}

				{/* 数据加载骨架 */}
				{isFetching && <TodoSkeleton />}

				{/* 数据为 0 的占位 */}
				{isSuccess && todoList.length === 0 && (
					<div className="flex h-full min-h-64 items-center justify-center px-4 py-3 text-sm text-neutral-400 sm:px-5">
						暂无待办事项
					</div>
				)}

				{!isFetching &&
					isSuccess &&
					todoList.length !== 0 &&
					todoList.map((todo) => <TodoRow key={todo.id} todo={todo} />)}
			</div>

			{/* todo 新增 form modal */}
			<TodoAdd open={open} onClose={handleAddModalClose} title="Todo 新增" />
		</section>
	);
}

export default TodoMain;
