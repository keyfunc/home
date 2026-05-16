import Checkbox from "@/component/Checkbox";
import MoreMenu from "@/component/MoreMenu";
import type { TodoRowProps } from "./type";
import useTodoRow, { menuItem } from "./useTodoRow";

function TodoRow(props: TodoRowProps) {
	const { todo } = props;
	const {
		isEdit,
		title,
		description,
		setStates,
		handleOnItemClick,
		handleUpdateSubmit,
	} = useTodoRow(props);

	// 编辑时展示
	if (isEdit) {
		return (
			<div className="shrink-0 w-full min-h-26 px-5 py-2 border border-gray-200 rounded-md flex flex-col justify-evenly hover:shadow-sm transition-shadow duration-200 ease-out cursor-pointer">
				<form
					className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto]"
					onSubmit={handleUpdateSubmit}
				>
					<label className="sr-only" htmlFor="todo-title">
						Todo title
					</label>
					<input
						id="todo-title"
						type="text"
						value={title}
						onChange={(event) => setStates({ title: event.target.value })}
						placeholder="请输入标题..."
						className="h-11 min-w-0 rounded-lg border border-neutral-300 bg-white px-3 text-sm text-neutral-950 outline-none transition placeholder:text-sm placeholder:text-neutral-400 focus:border-neutral-950 focus:ring-2 focus:ring-neutral-200 dark:border-neutral-700 dark:bg-neutral-950 dark:text-white dark:placeholder:text-neutral-500 dark:focus:border-white dark:focus:ring-white/10"
					/>
					<label className="sr-only" htmlFor="todo-description">
						Todo description
					</label>
					<input
						id="todo-description"
						type="text"
						value={description}
						onChange={(event) => setStates({ description: event.target.value })}
						onKeyDown={(event) => event.key === "Enter" && handleUpdateSubmit}
						placeholder="请输入描述..."
						className="h-11 min-w-0 flex-1 rounded-lg border border-neutral-300 bg-white px-3 text-sm text-neutral-950 outline-none transition placeholder:text-sm placeholder:text-neutral-400 focus:border-neutral-950 focus:ring-2 focus:ring-neutral-200 dark:border-neutral-700 dark:bg-neutral-950 dark:text-white dark:placeholder:text-neutral-500 dark:focus:border-white dark:focus:ring-white/10"
					/>
					<button
						type="submit"
						className="h-11 rounded-lg bg-black px-3 text-sm font-medium text-white transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-60 lg:w-20 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
					>
						更新
					</button>
				</form>
			</div>
		);
	}

	return (
		<div className="shrink-0 w-full h-26 px-5 py-2 border border-gray-200 rounded-md flex flex-col justify-evenly hover:shadow-sm transition-shadow duration-200 ease-out cursor-pointer">
			<div className="flex justify-between">
				<div className="flex items-center gap-3">
					<Checkbox />
					<span>{todo.title}</span>
				</div>
				<div className="flex items-center gap-2">
					<span>tags</span>
					<MoreMenu items={menuItem} onItemClick={handleOnItemClick} />
				</div>
			</div>
			<div className="pl-6">{todo.description}</div>
			<div className="pl-6 flex gap-4">
				<span>时间：{todo.create_at}</span>
				<span>优先级：中等</span>
			</div>
		</div>
	);
}

export default TodoRow;
