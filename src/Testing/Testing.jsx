import { AppBar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ResponsiveDrawer from "../Pages/Dashboard/Drawer";
const drawerWidth = 100;
const Testing = () => {
  return (
    <div className="TopDiv">
      <Box sx={{ display: "flex" }}>
        <div className="for_drawer">
          <ResponsiveDrawer heading="Orders" className="alluser" />
        </div>
        <AppBar
          className="fortrans"
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        ></AppBar>
        <Box
          sx={{
            flexGrow: 1,
            my: 5,
            mx: 1,
            mt: 5,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <div className="mt-5">
            <h3>hello testing</h3>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Testing;
