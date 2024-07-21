import { Box, Toolbar } from "@mui/material";
import React from "react";
import { NavBar, Sidebar } from "../components";

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Navbar */}
      <NavBar drawerWidth={drawerWidth} />

      {/* Sidebar */}
      <Sidebar drawerWidth={drawerWidth} />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        {children}
      </Box>
    </Box>
  );
};
