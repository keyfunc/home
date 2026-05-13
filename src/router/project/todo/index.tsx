/**
 * @description Todo List 路由
 */
import { createFileRoute } from "@tanstack/react-router";
import type { FormEvent } from "react";
import { useState } from "react";
import TodoRow from "./-component/TodoRow";
import TodoSkeleton from "./-component/TodoSkeleton";
import {
	useCreateTodoItem,
	useDeleteTodoItem,
	useTodoList,
	useToggleTodoItem,
	useUpdateTodoItem,
} from "./-hook/useTodos";

export const Route = createFileRoute("/project/todo/")({
	component: TodoPage,
});

function TodoPage() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const todoQuery = useTodoList();
	const createTodo = useCreateTodoItem();
	const toggleTodo = useToggleTodoItem();
	const updateTodo = useUpdateTodoItem();
	const deleteTodo = useDeleteTodoItem();
	const todos = todoQuery.data?.list ?? [];
	const trimmedTitle = title.trim();
	const trimmedDescription = description.trim();
	const canSubmit =
		trimmedTitle.length > 0 &&
		trimmedDescription.length > 0 &&
		!createTodo.isPending;
	const actionDisabled =
		toggleTodo.isPending || updateTodo.isPending || deleteTodo.isPending;

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!canSubmit) {
			return;
		}

		createTodo.mutate(
			{
				title: trimmedTitle,
				description: trimmedDescription,
			},
			{
				onSuccess: () => {
					setTitle("");
					setDescription("");
				},
			},
		);
	};

	return (
		<section className="flex h-full min-h-0 w-full overflow-hidden">
			<div className="flex h-full min-h-0 w-full flex-col rounded-lg border border-neutral-200/80 bg-white/90 p-5 shadow-sm shadow-neutral-200/60 backdrop-blur sm:p-6 lg:p-7 dark:border-white/10 dark:bg-neutral-900/80 dark:shadow-none">
				<h1 className="text-2xl font-semibold text-neutral-950 sm:text-3xl dark:text-white">
					Todo
				</h1>

				<form
					className="mt-5 grid gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto]"
					onSubmit={handleSubmit}
				>
					<label className="sr-only" htmlFor="todo-title">
						Todo title
					</label>
					<input
						id="todo-title"
						type="text"
						value={title}
						onChange={(event) => setTitle(event.target.value)}
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
						onChange={(event) => setDescription(event.target.value)}
						placeholder="请输入描述..."
						className="h-11 min-w-0 flex-1 rounded-lg border border-neutral-300 bg-white px-3 text-sm text-neutral-950 outline-none transition placeholder:text-sm placeholder:text-neutral-400 focus:border-neutral-950 focus:ring-2 focus:ring-neutral-200 dark:border-neutral-700 dark:bg-neutral-950 dark:text-white dark:placeholder:text-neutral-500 dark:focus:border-white dark:focus:ring-white/10"
					/>
					<button
						type="submit"
						disabled={!canSubmit}
						className="h-11 rounded-lg bg-black px-3 text-sm font-medium text-white transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-60 lg:w-20 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
					>
						新增
					</button>
				</form>

				{createTodo.isError ? (
					<p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
						{createTodo.error.message}
					</p>
				) : null}

				{toggleTodo.isError ? (
					<p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
						{toggleTodo.error.message}
					</p>
				) : null}

				{updateTodo.isError ? (
					<p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
						{updateTodo.error.message}
					</p>
				) : null}

				{deleteTodo.isError ? (
					<p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
						{deleteTodo.error.message}
					</p>
				) : null}

				<div className="mt-5 min-h-0 flex-1 space-y-3 overflow-y-auto rounded-lg border border-neutral-200 bg-neutral-50/80 p-3 dark:border-white/10 dark:bg-neutral-950">
					{todoQuery.isPending ? <TodoSkeleton /> : null}

					{todoQuery.isError ? (
						<div className="flex min-h-14 items-center px-4 py-3 text-sm text-neutral-600 sm:min-h-16 sm:px-5 dark:text-neutral-400">
							{todoQuery.error.message}
						</div>
					) : null}

					{todoQuery.isSuccess && todos.length === 0 ? (
						<div className="flex h-full min-h-64 items-center justify-center px-4 py-3 text-sm text-neutral-400 sm:px-5">
							暂无待办事项
						</div>
					) : null}

					{todoQuery.isSuccess && todos.length > 0
						? todos.map((todo) => (
								<TodoRow
									key={todo.id}
									todo={todo}
									disabled={actionDisabled}
									onDelete={(nextTodo) => deleteTodo.mutate({ todo: nextTodo })}
									onToggle={(nextTodo) => toggleTodo.mutate({ todo: nextTodo })}
									onUpdate={(nextTodo, input, onSuccess) =>
										updateTodo.mutate(
											{ todo: nextTodo, ...input },
											{ onSuccess },
										)
									}
								/>
							))
						: null}
				</div>
			</div>
		</section>
	);
}
