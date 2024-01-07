import type { FC } from "react";
import { Outlet } from "react-router-dom";

export const Component: FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

Component.displayName = "Layout";
