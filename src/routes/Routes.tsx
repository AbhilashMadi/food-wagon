import { Paths } from "@/routes/paths";
import type { LazyExoticComponent } from "react";
import { lazy, type FC } from "react";
import type { RouteObject } from "@/types/routes";
import { Headers } from "@/resources/headers";

const routeObject = (component: LazyExoticComponent<FC>, path: Paths, title: Headers, isPrivate: boolean = true): RouteObject => {
  return {
    component,
    path,
    title,
    isPrivate,
  };
};

export const routes: RouteObject[] = [
  routeObject(
    lazy(() => import("@/pages/auth/Login")),
    Paths.LOGIN,
    Headers.LOGIN,
    false
  ),
  routeObject(
    lazy(() => import("@/pages/auth/Register")),
    Paths.REGISTER,
    Headers.REGISTER,
    false
  ),
  routeObject(
    lazy(() => import("@/pages/Landing")),
    Paths.MENU,
    Headers.FOOD_WAGON,
  )
];