import dayjs from "dayjs";
import type { FormEvent } from "react";
import { useState } from "react";
import type { Todo } from "@/service/generated/model";
import { isTodoDone } from "../../-hook/useTodos";

/** Todo 行内更新数据 */
interface TodoRowUpdateInput {
	/** Todo 标题 */
	title: string;
	/** Todo 描述 */
	description: string;
}

interface TodoRowProps {
	/** 当前 Todo */
	todo: Todo;
	/** 是否禁用操作 */
	disabled: boolean;
	/** 切换完成状态 */
	onToggle: (todo: Todo) => void;
	/** 删除 Todo */
	onDelete: (todo: Todo) => void;
	/** 更新 Todo 内容 */
	onUpdate: (
		todo: Todo,
		input: TodoRowUpdateInput,
		onSuccess: () => void,
	) => void;
}

function TodoRow({
	todo,
	disabled,
	onToggle,
	onDelete,
	onUpdate,
}: TodoRowProps) {
	const done = isTodoDone(todo);
	const [isEditing, setIsEditing] = useState(false);
	const [title, setTitle] = useState(todo.title);
	const [description, setDescription] = useState(todo.description);
	const trimmedTitle = title.trim();
	const trimmedDescription = description.trim();
	const canSubmit =
		trimmedTitle.length > 0 && trimmedDescription.length > 0 && !disabled;
	const createdAtText = todo.create_at
		? dayjs(todo.create_at).format("YYYY-MM-DD HH:mm")
		: "";

	const resetEditing = () => {
		setTitle(todo.title);
		setDescription(todo.description);
		setIsEditing(false);
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!canSubmit) {
			return;
		}

		onUpdate(
			todo,
			{
				title: trimmedTitle,
				description: trimmedDescription,
			},
			() => {
				setIsEditing(false);
			},
		);
	};

	if (isEditing) {
		return (
			<form
				className="flex flex-col gap-3 rounded-lg border border-neutral-200 bg-white px-4 py-3 shadow-sm shadow-neutral-200/60 transition dark:border-white/10 dark:bg-neutral-900/70 dark:shadow-none"
				onSubmit={handleSubmit}
			>
				<div className="grid gap-3 sm:grid-cols-2">
					<label className="sr-only" htmlFor={`todo-title-${todo.id}`}>
						Todo title
					</label>
					<input
						id={`todo-title-${todo.id}`}
						type="text"
						value={title}
						disabled={disabled}
						onChange={(event) => setTitle(event.target.value)}
						placeholder="请输入标题..."
						className="h-10 min-w-0 rounded-lg border border-neutral-300 bg-white px-3 text-sm text-neutral-950 outline-none transition placeholder:text-sm placeholder:text-neutral-400 focus:border-neutral-950 focus:ring-2 focus:ring-neutral-200 dark:border-neutral-700 dark:bg-neutral-950 dark:text-white dark:placeholder:text-neutral-500 dark:focus:border-white dark:focus:ring-white/10"
					/>
					<label className="sr-only" htmlFor={`todo-description-${todo.id}`}>
						Todo description
					</label>
					<input
						id={`todo-description-${todo.id}`}
						type="text"
						value={description}
						disabled={disabled}
						onChange={(event) => setDescription(event.target.value)}
						placeholder="请输入描述..."
						className="h-10 min-w-0 rounded-lg border border-neutral-300 bg-white px-3 text-sm text-neutral-950 outline-none transition placeholder:text-sm placeholder:text-neutral-400 focus:border-neutral-950 focus:ring-2 focus:ring-neutral-200 dark:border-neutral-700 dark:bg-neutral-950 dark:text-white dark:placeholder:text-neutral-500 dark:focus:border-white dark:focus:ring-white/10"
					/>
				</div>
				<div className="flex justify-end gap-2">
					<button
						type="button"
						disabled={disabled}
						className="h-9 rounded-lg border border-neutral-200 px-3 text-sm text-neutral-600 transition hover:border-neutral-300 hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/10 dark:text-neutral-300 dark:hover:bg-white/5"
						onClick={resetEditing}
					>
						取消
					</button>
					<button
						type="submit"
						disabled={!canSubmit}
						className="h-9 rounded-lg bg-black px-3 text-sm font-medium text-white transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
					>
						保存
					</button>
				</div>
			</form>
		);
	}

	return (
		<div
			className={[
				"flex min-h-14 items-start gap-3 rounded-lg border border-neutral-200 px-4 py-3 shadow-sm shadow-neutral-200/60 transition sm:min-h-16 sm:gap-4 sm:px-5",
				"bg-white hover:bg-neutral-50 dark:border-white/10 dark:bg-neutral-900/70 dark:shadow-none dark:hover:bg-white/[0.04]",
				disabled ? "opacity-70" : "",
			].join(" ")}
		>
			<button
				type="button"
				disabled={disabled}
				aria-label={done ? "标记为未完成" : "标记为已完成"}
				className={[
					"mt-0.5 flex size-5 shrink-0 items-center justify-center rounded border transition sm:size-6",
					"focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900 disabled:cursor-not-allowed dark:focus-visible:outline-white",
					done
						? "border-neutral-950 bg-neutral-950 shadow-sm dark:border-white dark:bg-white dark:shadow-none"
						: "border-neutral-300 bg-white dark:border-neutral-600 dark:bg-neutral-900",
				].join(" ")}
				onClick={() => onToggle(todo)}
			>
				<span
					className={[
						"h-1.5 w-3 -rotate-45 border-b-2 border-l-2 border-white transition-opacity sm:h-2 sm:w-3.5 dark:border-neutral-950",
						done ? "opacity-100" : "opacity-0",
					].join(" ")}
				/>
			</button>

			<div className="min-w-0 flex-1">
				<p
					className={[
						"truncate text-sm leading-6 transition",
						done
							? "text-neutral-400 line-through decoration-neutral-400 decoration-2"
							: "text-neutral-950 dark:text-white",
					].join(" ")}
				>
					{todo.title}
				</p>
				<p className="mt-0.5 line-clamp-2 text-sm leading-5 text-neutral-500 dark:text-neutral-400">
					{todo.description}
				</p>
				{createdAtText ? (
					<p className="mt-1 text-sm leading-5 text-neutral-400 dark:text-neutral-500">
						创建时间：{createdAtText}
					</p>
				) : null}
			</div>

			<div className="flex shrink-0 items-center gap-2">
				<button
					type="button"
					disabled={disabled}
					className="h-8 rounded-lg bg-black px-3 text-sm font-medium text-white transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
					onClick={() => setIsEditing(true)}
				>
					编辑
				</button>
				<button
					type="button"
					disabled={disabled}
					className="h-8 rounded-lg bg-black px-3 text-sm font-medium text-white transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
					onClick={() => onDelete(todo)}
				>
					删除
				</button>
			</div>
		</div>
	);
}

export default TodoRow;
