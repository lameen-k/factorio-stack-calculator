import Home from "pages/Home";
import Item from "pages/Item";
import { RouteObject } from "react-router-dom";
import { RoutePath } from "./constants";

export const routerTree: RouteObject[] = [
  {
    path: RoutePath.HOME,
    element: <Home />,
  },
  {
    path: RoutePath.ITEM,
    element: <Item />,
  },
];
