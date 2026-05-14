import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type {
	CreateTodoReq,
	ListTodosParams,
	Todo,
	TodoPageData,
} from "@/service/generated/model";
import {
	createTodo,
	deleteTodo,
	listTodos,
	updateTodo,
} from "@/service/generated/todo/todo";

/** Todo 列表默认查询参数 */
const todoListParams = {
	page: 1,
	size: 10,
} satisfies ListTodosParams;

/** Todo 未完成状态 */
const TODO_PENDING_STATUS = 1;

/** Todo 已完成状态 */
const TODO_DONE_STATUS = 2;

/** Todo 查询缓存 key */
const todoQueryKeys = {
	all: ["todo"] as const,
	list: ["todo", "list", todoListParams] as const,
};

/** 新增 Todo 表单数据 */
interface CreateTodoInput {
	/** Todo 标题 */
	title: string;
	/** Todo 描述 */
	description: string;
}

/** 切换 Todo 状态参数 */
interface ToggleTodoInput {
	/** 当前 Todo */
	todo: Todo;
}

/** 更新 Todo 表单数据 */
interface UpdateTodoInput {
	/** 当前 Todo */
	todo: Todo;
	/** Todo 标题 */
	title: string;
	/** Todo 描述 */
	description: string;
}

/** 删除 Todo 参数 */
interface DeleteTodoInput {
	/** 当前 Todo */
	todo: Todo;
}

/** Todo 列表查询配置 */
interface TodoListOptions {
	/** 是否启用 Todo 列表查询 */
	enabled: boolean;
}

/** 判断响应数据是否为 Todo 分页数据 */
const isTodoPageData = (data: unknown): data is TodoPageData => {
	return typeof data === "object" && data !== null && "list" in data;
};

/** 判断响应数据是否为 Todo 数据 */
const isTodoData = (data: unknown): data is Todo => {
	return (
		typeof data === "object" &&
		data !== null &&
		"id" in data &&
		"title" in data &&
		"description" in data
	);
};

/** 判断响应数据是否为字符串数据 */
const isStringData = (data: unknown): data is string => {
	return typeof data === "string";
};

/** 读取接口成功响应数据 */
const getResponseData = <TData>(
	response: { message: string; data: unknown },
	isData: (data: unknown) => data is TData,
): TData => {
	if (!isData(response.data)) {
		throw new Error(response.message);
	}

	return response.data;
};

/** 查询 Todo 分页数据 */
const queryTodoPage = async (): Promise<TodoPageData> => {
	const response = await listTodos(todoListParams);

	return getResponseData(response, isTodoPageData);
};

/** 组装新增 Todo 请求体 */
const createTodoPayload = (
	title: string,
	description: string,
): CreateTodoReq => {
	return {
		title,
		description,
	};
};

/** 获取 Todo 更新时使用的状态值 */
const getTodoUpdateStatus = (todo: Todo) => {
	return isTodoDone(todo) ? TODO_DONE_STATUS : TODO_PENDING_STATUS;
};

/** 判断 Todo 是否已完成 */
export const isTodoDone = (todo: Todo) => {
	return todo.status === TODO_DONE_STATUS;
};

/** 新增 Todo 数据 */
const createTodoItem = async (
	title: string,
	description: string,
): Promise<Todo> => {
	const response = await createTodo(createTodoPayload(title, description));

	return getResponseData(response, isTodoData);
};

/** 更新 Todo 数据 */
const updateTodoItem = async ({
	todo,
	title,
	description,
}: UpdateTodoInput): Promise<Todo> => {
	const response = await updateTodo(todo.id, {
		title,
		description,
		status: getTodoUpdateStatus(todo),
	});

	return getResponseData(response, isTodoData);
};

/** 删除 Todo 数据 */
const deleteTodoItem = async ({ todo }: DeleteTodoInput): Promise<string> => {
	const response = await deleteTodo(todo.id);

	return getResponseData(response, isStringData);
};

/** 切换 Todo 完成状态 */
const toggleTodoItem = async ({ todo }: ToggleTodoInput): Promise<Todo> => {
	const nextStatus = isTodoDone(todo) ? TODO_PENDING_STATUS : TODO_DONE_STATUS;
	const response = await updateTodo(todo.id, {
		title: todo.title,
		description: todo.description,
		status: nextStatus,
	});

	return getResponseData(response, isTodoData);
};

/** 查询 Todo 列表 */
export const useTodoList = ({ enabled }: TodoListOptions) => {
	return useQuery({
		queryKey: todoQueryKeys.list,
		queryFn: queryTodoPage,
		enabled,
	});
};

/** 新增 Todo */
export const useCreateTodoItem = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: ({ title, description }: CreateTodoInput) =>
			createTodoItem(title, description),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: todoQueryKeys.all });
		},
	});
};

/** 更新 Todo 内容 */
export const useUpdateTodoItem = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: updateTodoItem,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: todoQueryKeys.all });
		},
	});
};

/** 删除 Todo */
export const useDeleteTodoItem = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: deleteTodoItem,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: todoQueryKeys.all });
		},
	});
};

/** 切换 Todo 完成状态 */
export const useToggleTodoItem = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: toggleTodoItem,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: todoQueryKeys.all });
		},
	});
};
