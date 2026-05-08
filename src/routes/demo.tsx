import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/demo")({
	component: lazyRouteComponent(() => import("@/page/demo")),
});
