import { Outlet } from "@remix-run/react";

export default function Route() {
  return (
    <div>
      중첩2 레이아웃
      <Outlet />
    </div>
  );
}
