/* eslint-disable @typescript-eslint/explicit-function-return-type */
import ErrorBoundary from "@/pages/handlers/ErrorBoundary";
import { Paths } from "@/routes/paths";
import { createBrowserRouter } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export default createBrowserRouter([
  {
    path: Paths.HOME,
    lazy: () => import("@/pages/Home"),
    loader: () => import("@/components/splash/HomeSplashScreen"),
    index: true,
    ErrorBoundary,
  },
  {
    path: Paths.AUTH,
    lazy: () => import("@/pages/auth/AuthLayout"),
    ErrorBoundary,
    children: [
      {
        path: Paths.LOGIN,
        lazy: () => import("@/pages/auth/Login"),
        index: true,
      },
      {
        path: Paths.REGISTER,
        lazy: () => import("@/pages/auth/Register"),
      },
    ],
  },
  {
    path: Paths.LANDING,
    lazy: () => import("@/pages/Layout"),
    ErrorBoundary,
    children: [
      {
        path: Paths.MENU,
        lazy: () => import("@/pages/Landing"),
        index: true,
      },
    ],
  },
  {
    path: Paths.NOT_FOUND,
    lazy: () => import("@/pages/handlers/NotFound"),
    ErrorBoundary,
  },
]);
