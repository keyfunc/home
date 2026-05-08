import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/resume")({
	component: lazyRouteComponent(() => import("@/page/resume")),
});
