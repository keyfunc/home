import { useContainerStore } from "../../-store/container";

function useAttr() {
	const state = useContainerStore((store) => store.state);
	const setStates = useContainerStore((store) => store.setStates);

	return { state, setStates };
}

export default useAttr;
