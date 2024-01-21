import { Outlet } from "@remix-run/react";

export default function Route() {
  return (
    <div>
      중첩1 레이아웃
      <Outlet />
    </div>
  );
}
