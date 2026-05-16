import Modal from "@/component/Modal";
import type { TodoAddProps } from "./type";
import useTodoAdd from "./useTodoAdd";

function TodoAdd(props: TodoAddProps) {
	const { ...modalProps } = props;
	const { state, setStates, handleSubmit } = useTodoAdd(props);

	return (
		<Modal {...modalProps}>
			<div className="p-8 pt-4">
				<form
					className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto]"
					onSubmit={handleSubmit}
				>
					<label className="sr-only" htmlFor="todo-title">
						Todo title
					</label>
					<input
						id="todo-title"
						type="text"
						value={state.title}
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
						value={state.description}
						onChange={(event) => setStates({ description: event.target.value })}
						onKeyDown={(event) => event.key === "Enter" && handleSubmit}
						placeholder="请输入描述..."
						className="h-11 min-w-0 flex-1 rounded-lg border border-neutral-300 bg-white px-3 text-sm text-neutral-950 outline-none transition placeholder:text-sm placeholder:text-neutral-400 focus:border-neutral-950 focus:ring-2 focus:ring-neutral-200 dark:border-neutral-700 dark:bg-neutral-950 dark:text-white dark:placeholder:text-neutral-500 dark:focus:border-white dark:focus:ring-white/10"
					/>
					<button
						type="submit"
						className="h-11 rounded-lg bg-black px-3 text-sm font-medium text-white transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-60 lg:w-20 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
					>
						新增
					</button>
				</form>
			</div>
		</Modal>
	);
}
export default TodoAdd;
