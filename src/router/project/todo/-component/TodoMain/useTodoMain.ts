import { useStates } from "@/hook/useStates";
import { useListTodos } from "@/service/generated/todo/todo";
import { useAuthStore } from "@/store/auth";
import type { TodpMainProps } from "./type";

export function useTodoMain(props: TodpMainProps) {
	const token = useAuthStore((s) => s.token);

	const { state, setStates } = useStates({
		open: false,
	});

	// todo 查询参数
	const { state: queryState, setStates: setQueryState } = useStates({
		page: 1,
		size: 10,
	});

	const {
		data,
		error: listError,
		isFetching,
		isSuccess,
		refetch,
	} = useListTodos(queryState, {
		query: { enabled: !!token },
	});
	const todoList = data?.data.list || [];

	const handleAddModalOpen = () => {
		setStates({ open: true });
	};
	const handleAddModalClose = () => {
		setStates({ open: false });
	};
	// token 初始化后，调用接口
	const handleOnInitKey = () => {
		refetch();
	};

	return {
		...state,
		token,
		listError,
		todoList,
		isFetching,
		isSuccess,
		handleAddModalOpen,
		handleAddModalClose,
		handleOnInitKey,
	};
}
