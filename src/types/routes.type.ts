import { ReactNode } from "react";

export type TRoute = {
    path: string;
    element: ReactNode;
  };
  
  export type TUserRoutes = {
    name: string;
    path?: string;
    element?: ReactNode;
    children?: TUserRoutes[];
  };

  export type TUserSidebar = {
    key: string;
    label: ReactNode;
    children?: TUserSidebar[];
  };