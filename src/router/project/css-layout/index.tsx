import { createFileRoute } from "@tanstack/react-router";
import { useStates } from "@/hook/useStates";
import { layouts } from "../-data/layout";
import Flex from "./-component/Flex";
import Grid from "./-component/Grid";

export const Route = createFileRoute("/project/css-layout/")({
	component: RouteComponent,
});

const LayoutTplMap: Record<string, React.ReactNode> = {
	flex: <Flex />,
	grid: <Grid />,
};

function RouteComponent() {
	const { state, setStates } = useStates({ tpl: "flex" });

	return (
		<div className="h-full min-h-0 flex flex-col gap-2">
			<div className="flex">
				{layouts.map((i) => (
					<button
						type="button"
						key={i.value}
						className="py-1 px-3 cursor-pointer text-sm font-bold"
						style={{
							background: i.value === state.tpl ? "#000000" : "#e5e7eb",
							color: i.value === state.tpl ? "#ffffff" : "#000000",
						}}
						onClick={() => {
							setStates({ tpl: i.value });
						}}
					>
						{i.label}
					</button>
				))}
			</div>
			<div className="flex-1 min-h-0 overflow-hidden border border-gray-200 rounded-md shadow-md">
				{LayoutTplMap[state.tpl]}
			</div>
		</div>
	);
}
