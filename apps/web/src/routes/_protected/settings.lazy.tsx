import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_protected/settings")({
    component: RouteComponent,
});

function RouteComponent() {
    return <div>Hello /_protected/_layout/settings!</div>;
}