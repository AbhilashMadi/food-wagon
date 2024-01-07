import type { FC } from "react";
import { Outlet } from "react-router-dom";

const AuthLayout: FC = () => {
  return (
    <main className="font-primary">
      <Outlet />
    </main>
  );
};

export default AuthLayout;
