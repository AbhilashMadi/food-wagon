import type { Paths } from "@/routes/paths";
import type { FC, LazyExoticComponent } from "react";
import type { Headers } from "@/resources/headers";


export interface RouteObject {
  component: LazyExoticComponent<FC>,
  path: Paths,
  title: Headers,
  isPrivate: boolean,
}