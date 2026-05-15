import { useRef, useState } from "react";

export function useStates<T extends Record<string, any>>(initialState: T) {
	const initialRef = useRef(initialState);
	const [state, setState] = useState<T>(initialRef.current);

	const setStates = (patch: Partial<T> | ((prev: T) => Partial<T>)) => {
		setState((prev) => ({
			...prev,
			...(typeof patch === "function" ? patch(prev) : patch),
		}));
	};

	const reset = () => {
		setState(initialRef.current);
	};

	return {
		state,
		setStates,
		reset,
	};
}
