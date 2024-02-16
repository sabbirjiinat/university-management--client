import AdminDashboard from "../pages/admin/AdminDashboard/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin/CreateAdmin";
import CreateStudent from "../pages/admin/CreateStudent/CreateStudent";




export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateStudent />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
    ],
  },
];


