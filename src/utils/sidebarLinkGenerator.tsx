import { NavLink } from "react-router-dom";
import { TUserRoutes, TUserSidebar } from "../types";

export const sidebarLinkGenerator = (items: TUserRoutes[],role:string) => {
  const sidebar = items.reduce((acc: TUserSidebar[], item) => {
    if (item.name && item.path) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    } else if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
        })),
      });
    }
    return acc;
  }, []);
  return sidebar;
};
