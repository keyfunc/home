/**
 * @description Demo 展示页
 */
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type {
	ErrorResponse,
	Todo,
	TodoPageResponse,
} from "@/service/generated/model";
import { useListTodos } from "@/service/generated/todo/todo";

type TodoPageData = {
	list: Todo[];
	page: number;
	size: number;
	total: number;
};

type TodoListResponse = TodoPageResponse | ErrorResponse;

const skeletonKeys = [
	"todo-skeleton-1",
	"todo-skeleton-2",
	"todo-skeleton-3",
	"todo-skeleton-4",
	"todo-skeleton-5",
];

const getTodoPageData = (response?: TodoListResponse) => {
	if (
		response?.data &&
		typeof response.data === "object" &&
		"list" in response.data
	) {
		return response.data as TodoPageData;
	}

	return undefined;
};

const getStatusText = (status: number) => {
	if (status === 1) {
		return "已完成";
	}

	return "待处理";
};

function Demo() {
	const { data, error, isError, isFetching, isLoading, refetch } =
		useListTodos<TodoListResponse>({
			page: 1,
			size: 10,
		});
	const pageData = getTodoPageData(data);
	const todos = pageData?.list ?? [];

	return (
		<div className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 transition-colors duration-300">
			<main className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
				<header className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
					<div>
						<Link
							to="/"
							className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
						>
							返回首页
						</Link>
						<h1 className="mt-4 text-3xl font-bold tracking-normal sm:text-4xl">
							Todo List
						</h1>
						<p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
							共 {pageData?.total ?? 0} 条任务
						</p>
					</div>

					<button
						type="button"
						onClick={() => refetch()}
						disabled={isFetching}
						className="inline-flex h-10 items-center justify-center rounded-xl bg-neutral-900 px-4 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-neutral-900"
					>
						{isFetching ? "刷新中" : "刷新"}
					</button>
				</header>

				<section className="rounded-2xl border border-neutral-200/70 bg-white/70 p-4 shadow-sm backdrop-blur dark:border-neutral-800/70 dark:bg-neutral-900/70 sm:p-6">
					{isLoading ? (
						<div className="space-y-3">
							{skeletonKeys.map((key) => (
								<div
									key={key}
									className="h-20 animate-pulse rounded-xl bg-neutral-100 dark:bg-neutral-800"
								/>
							))}
						</div>
					) : null}

					{isError ? (
						<div className="flex min-h-48 flex-col items-center justify-center rounded-xl border border-dashed border-red-200 bg-red-50 px-4 text-center dark:border-red-900/70 dark:bg-red-950/30">
							<p className="font-medium text-red-700 dark:text-red-300">
								Todo 列表加载失败
							</p>
							<p className="mt-2 text-sm text-red-600/80 dark:text-red-300/80">
								{error?.message ?? "请稍后重试"}
							</p>
						</div>
					) : null}

					{!isLoading && !isError && todos.length === 0 ? (
						<div className="flex min-h-48 items-center justify-center rounded-xl border border-dashed border-neutral-200 text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
							暂无 Todo
						</div>
					) : null}

					{!isLoading && !isError && todos.length > 0 ? (
						<motion.ul
							initial="hidden"
							animate="visible"
							variants={{
								hidden: { opacity: 0 },
								visible: {
									opacity: 1,
									transition: { staggerChildren: 0.06 },
								},
							}}
							className="divide-y divide-neutral-100 dark:divide-neutral-800"
						>
							{todos.map((todo) => (
								<motion.li
									key={todo.id}
									variants={{
										hidden: { opacity: 0, y: 12 },
										visible: { opacity: 1, y: 0 },
									}}
									className="flex flex-col gap-3 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
								>
									<div className="min-w-0">
										<div className="flex items-center gap-3">
											<span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-sm font-semibold text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
												{todo.id}
											</span>
											<h2 className="truncate text-base font-semibold text-neutral-900 dark:text-white">
												{todo.title}
											</h2>
										</div>
										<p className="mt-2 line-clamp-2 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
											{todo.description || "暂无描述"}
										</p>
									</div>

									<span className="w-fit shrink-0 rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
										{getStatusText(todo.status)}
									</span>
								</motion.li>
							))}
						</motion.ul>
					) : null}
				</section>
			</main>
		</div>
	);
}

export default Demo;
