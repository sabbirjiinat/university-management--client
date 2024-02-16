import { Layout, Menu } from "antd";
import { sidebarLinkGenerator } from "../../utils/sidebarLinkGenerator";
import { adminPaths } from "../../routes/adminRoutes";
const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div
        style={{
          color: "white",
          height: "4rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Ph Uni</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarLinkGenerator(adminPaths, "admin")}
      />
    </Sider>
  );
};

export default Sidebar;
