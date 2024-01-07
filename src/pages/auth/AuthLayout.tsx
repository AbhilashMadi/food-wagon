import type { FC } from "react";
import { Outlet } from "react-router-dom";

export const Component: FC = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

Component.displayName = "AuthLayout";
