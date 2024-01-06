import { type LazyExoticComponent, type FC, lazy } from "react";
import { Paths } from "@/routes/paths";
import { Headers } from "@/resources/headers";
import type { RouteObject } from "@/types/routes";
import { Route, Routes } from "react-router-dom";

const route = (component: LazyExoticComponent<FC>, path: Paths, title: Headers, isPrivate: boolean = true): RouteObject => {
  return {
    component,
    path,
    title,
    isPrivate,
  };
};

const routes: RouteObject[] = [
  route(
    lazy(() => import("@/pages/Home")),
    Paths.HOME,
    Headers.FOOD_WAGON,
    false
  ),
  route(
    lazy(() => import("@/pages/NotFound")),
    Paths.NOT_FOUND,
    Headers.NOT_FOUND,
    false
  )
];

const PageRoutes: FC = () => {
};

export default PageRoutes;
