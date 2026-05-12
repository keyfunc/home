import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/project")({
	component: lazyRouteComponent(() => import("@/page/project")),
});
