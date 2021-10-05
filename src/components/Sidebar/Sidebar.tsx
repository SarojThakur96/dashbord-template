import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { RiDashboardFill, RiDashboard2Fill, RiMapFill,BsArrowBarRight,BsArrowBarLeft } from "react-icons/all";
import "./style.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useState } from "react";
const Sidebar = () => {
  const [toggleCollapsed, setToggleCollapsed] = useState(false);

  return (
    <ProSidebar style={{ height: "87vh" }} collapsed={toggleCollapsed}>
      <SidebarHeader>
        {/**
         *  You can add a header for the sidebar ex: logo
         */}

          <Menu iconShape="square">
              {toggleCollapsed ? (
                <MenuItem
                  title="Expand Menu"
                  icon={
                    <BsArrowBarRight
                      size="25px"
                      onClick={() => setToggleCollapsed(false)}
                    />
                  }
                ></MenuItem>
              ) : (

                <MenuItem
                  title="Collapse Menu"
                  style={{display:'flex',justifyContent:'flex-end',marginLeft:'60px'}}
                  icon={<BsArrowBarLeft size="25px" />}
                  onClick={() => setToggleCollapsed(true)}
                >
                </MenuItem>
              )
               }
             </Menu>
      </SidebarHeader>
      <SidebarContent>
        {/**
         *  You can add the content of the sidebar ex: menu, profile details, ...
         */}
        <Menu iconShape="round">
          <MenuItem icon={<RiDashboardFill />}>
            Dashboard
            <Link to="/" />
          </MenuItem>
          <MenuItem icon={<RiMapFill />}>
            Map View
            <Link to="/map" />
          </MenuItem>
          <SubMenu title="Reports" icon={<RiDashboard2Fill />}>
            <MenuItem>Report 1</MenuItem>
            <MenuItem>Report 2</MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>
      <SidebarFooter>
        {/**
         *  You can add a footer for the sidebar ex: copyright
         */}
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Sidebar;
