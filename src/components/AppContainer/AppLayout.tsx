import "./AppLayout.css";
import React from "react";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import TomBarLogo from "../TomBarLogo/TomBarLogo.tsx";

interface RoutesList {
  routes: {
    label: string;
    path: string;
    element: React.JSX.Element;
  }[];
}

const AppLayout = ({ routes }: RoutesList) => {
  return (
    <Box component="div" height="100vh">
      <AppBar color="transparent" elevation={0}>
        <Toolbar>
          <Box component="div" display="flex" alignItems="center">
            <Link key="/" to={"/"}>
              <Button className="toolbar-button">
                <TomBarLogo />
              </Button>
            </Link>
            {routes.map((route) => (
              <Link key={route.path} to={route.path}>
                <Button size="large" className="toolbar-button">
                  {route.label}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
};

export default AppLayout;
