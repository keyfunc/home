import { useStates } from "@/hook/useStates";
import { useAuthStore } from "@/store/auth";
import { debounce } from "@/util";
import type { TodoKeyProps } from "./type";

export function useTodoKey(props: TodoKeyProps) {
	const token = useAuthStore((state) => state.token);
	const setToken = useAuthStore((state) => state.setToken);

	const { state, setStates } = useStates({
		apiKey: token,
	});

	const handleSubmit = debounce(
		() => {
			setToken(state.apiKey);
			props?.onInitKey?.();
		},
		1000,
		true,
	);

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
	) => {
		const v = e.target.value;
		setStates({ apiKey: v });
	};

	return {
		...state,
		setStates,
		handleSubmit,
		handleInputChange,
	};
}
