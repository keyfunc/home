import { useStates } from "@/hook/useStates";
import type { CollapseProps } from "./type";

function Collapse(props: CollapseProps) {
	const { state, setStates } = useStates({ collapse: props.collapse ?? true });

	const onToggle = () => {
		setStates({ collapse: !state.collapse });
	};

	return (
		<div className="w-ful flex flex-col p-4 border border-gray-300 rounded-md hover:shadow-md">
			<button
				type="button"
				className="flex items-center justify-between cursor-pointer"
				onClick={onToggle}
			>
				<div>{props.title}</div>
				<img
					src="/svg/chevron-right.svg"
					alt="chevron"
					className="w-4 h-4 transition-all ease-out duration-400"
					style={{
						rotate: state.collapse ? "0deg" : "90deg",
					}}
				/>
			</button>
			<div
				className="min-h-0 transition-[grid-template-rows] ease-out duration-200 grid"
				style={{
					gridTemplateRows: state.collapse ? "0fr" : "1fr",
					opacity: state.collapse ? 0 : 1,
					marginTop: state.collapse ? 0 : 12,
				}}
			>
				<div className="overflow-hidden">{props.children}</div>
			</div>
		</div>
	);
}

export default Collapse;
