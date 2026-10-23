import { Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  component: Outlet,
});
