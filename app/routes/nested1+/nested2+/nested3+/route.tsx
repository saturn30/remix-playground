import { Outlet } from "@remix-run/react";

export default function Route() {
  return (
    <div>
      <Outlet />
      중첩3
    </div>
  );
}
