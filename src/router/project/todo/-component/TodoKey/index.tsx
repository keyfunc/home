import type { TodoKeyProps } from "./type";
import { useTodoKey } from "./useTodoKey";

function TodoKey(props: TodoKeyProps) {
	const { apiKey, handleSubmit, handleInputChange } = useTodoKey(props);

	return (
		<div className="flex flex-col gap-3 sm:flex-row">
			<input
				id="todo-api-key"
				type="password"
				value={apiKey}
				onChange={handleInputChange}
				placeholder="请录入 API key"
				autoComplete="off"
				className="h-9 min-w-0 rounded-lg border border-neutral-300 bg-white px-3 text-sm text-neutral-950 outline-none transition placeholder:text-sm placeholder:text-neutral-400 focus:border-neutral-950 focus:ring-2 focus:ring-neutral-200 sm:w-64 dark:border-neutral-700 dark:bg-neutral-950 dark:text-white dark:placeholder:text-neutral-500 dark:focus:border-white dark:focus:ring-white/10"
			/>
			<button
				type="submit"
				onClick={handleSubmit}
				className="h-9 rounded-lg bg-black px-3 text-sm text-white transition hover:bg-black sm:w-24 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
			>
				API 初始化
			</button>
		</div>
	);
}

export default TodoKey;
