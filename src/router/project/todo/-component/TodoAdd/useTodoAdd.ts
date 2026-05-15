import { useStates } from "@/hook/useStates";
import type { TodoAddProps } from "./type";

const useTodoAdd = (props: TodoAddProps) => {
	const { state, setStates } = useStates({ title: "", description: "" });

	// const createTodo = useCreateTodoItem();
	const handleSubmit = (event: any) => {
		// event.preventDefault();
		// createTodo.mutate(
		// 	{
		// 		title: trimmedTitle,
		// 		description: trimmedDescription,
		// 	},
		// 	{
		// 		onSuccess: () => {
		// 			setTitle("");
		// 			setDescription("");
		// 		},
		// 	},
		// );
	};

	return {
		state,
		setStates,
		handleSubmit,
	};
};

export default useTodoAdd;
