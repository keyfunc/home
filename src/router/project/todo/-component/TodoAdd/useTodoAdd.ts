import { useQueryClient } from "@tanstack/react-query";
import { useStates } from "@/hook/useStates";
import {
	getListTodosQueryKey,
	useCreateTodo,
} from "@/service/generated/todo/todo";
import { toast } from "@/util";
import type { TodoAddProps } from "./type";

const useTodoAdd = (props: TodoAddProps) => {
	const { state, setStates } = useStates({ title: "", description: "" });
	const queryClient = useQueryClient();

	// 新增
	const { mutate } = useCreateTodo({
		mutation: {
			onSuccess() {
				setStates({ title: "", description: "" });
				props?.onClose?.();
				queryClient.invalidateQueries({
					queryKey: getListTodosQueryKey(),
				});
			},
			onError(error) {
				toast(error.message);
			},
		},
	});

	const handleSubmit = (event: any) => {
		event.preventDefault();
		if (state.title === "" || state.description === "") {
			toast("标题或者描述不能为空");
			return;
		}
		mutate({ data: state });
	};

	return {
		state,
		setStates,
		handleSubmit,
	};
};

export default useTodoAdd;
