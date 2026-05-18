import { createFileRoute } from "@tanstack/react-router";
import { useStates } from "@/hook/useStates";
import { layouts } from "../-data/layout";
import Flex from "./-component/flex";
import Grid from "./-component/grid";

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
    <div className="h-full flex flex-col gap-2">
      <div className="flex gap-2">
        {layouts.map((i) => (
          <button
            type="button"
            key={i.value}
            className="py-2 px-5 rounded-md cursor-pointer shadow-xs text-sm hover:shadow-2xl"
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
      <div className="flex-1 border border-gray-200 rounded-md shadow-md">
        {LayoutTplMap[state.tpl]}
      </div>
    </div>
  );
}
