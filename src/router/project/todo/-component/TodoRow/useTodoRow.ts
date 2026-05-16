import { useQueryClient } from "@tanstack/react-query";
import type { MoreMenuItem } from "@/component/MoreMenu/type";
import { useStates } from "@/hook/useStates";
import {
	getListTodosQueryKey,
	useDeleteTodo,
	useUpdateTodo,
} from "@/service/generated/todo/todo";
import { toast } from "@/util";
import type { TodoRowProps } from "./type";

export const menuItem: MoreMenuItem[] = [
	{
		label: "修改",
		key: "update",
	},
	{
		label: "删除",
		key: "delete",
	},
];

function useTodoRow(props: TodoRowProps) {
	const queryClient = useQueryClient();
	const { state, setStates } = useStates({
		isEdit: false,
		title: props.todo.title,
		status: props.todo.status,
		description: props.todo.description,
	});

	const { mutate: updateTodo } = useUpdateTodo({
		mutation: {
			onSuccess: (res) => {
				setStates({ isEdit: false });
				toast("保存成功");
				queryClient.invalidateQueries({
					queryKey: getListTodosQueryKey(),
				});
			},
			onError: (err) => {
				toast(err.message);
			},
		},
	});

	const { mutate: deleteTodo } = useDeleteTodo({
		mutation: {
			onSuccess: (res) => {
				toast("删除成功");
				queryClient.invalidateQueries({
					queryKey: getListTodosQueryKey(),
				});
			},
			onError: (err) => {
				toast(err.message);
			},
		},
	});

	const handleOnItemClick = (data: MoreMenuItem) => {
		if (data.key === "update") {
			setStates({ isEdit: true });
		}
		if (data.key === "delete") {
			deleteTodo({
				id: props.todo.id,
			});
		}
	};

	const handleUpdateSubmit = (event: any) => {
		event.preventDefault(); // 阻止原生 form 的默认提交行为
		if (state.title === "" || state.description === "") {
			toast("标题和描述不能为空");
			return;
		}
		console.log(state.description, state.title);
		updateTodo({
			id: props.todo.id,
			data: {
				title: state.title,
				description: state.description,
				status: state.status,
			},
		});
	};

	return { ...state, setStates, handleOnItemClick, handleUpdateSubmit };
}

export default useTodoRow;
