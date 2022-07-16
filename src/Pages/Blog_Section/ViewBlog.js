import React, { useEffect } from "react";
import ResponsiveDrawer from "../../Pages/Dashboard/Drawer";
import Box from "@mui/material/Box";
import KliquesDetailBGIMg from "../../Assets/Images/KliquesDetailBGIMg.png";
import AppBar from "@mui/material/AppBar";
const drawerWidth = 100;

const ViewBlog = () => {
  useEffect(() => {
    sessionStorage.setItem("id", "7");
  }, []);
  return (
    <div className="TopDiv px-3 pb-5 mt-5">
      <Box sx={{ display: "flex" }}>
        <div className="for_drawer">
          <ResponsiveDrawer heading="Blogs" className="alluser" />
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
          <div className="">
            <img
              src={KliquesDetailBGIMg}
              alt="KliquesDetailBGIMg.png"
              className="w-100"
            />
          </div>
          <div className="Content mt-5">
            <div className="d-flex">
              <p className="fw-bolder">Title :</p>
              <p className="ms-4">How to Manage</p>
            </div>
            <div className="d-flex">
              <p className="fw-bolder">Author :</p>
              <p className="ms-4">Ema Watson</p>
            </div>
          </div>
          <div className="Description ps-5 mt-4">
            <p className="fw-bolder">Description</p>
            <div className="pe-5">
              <small>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sagittis egestas pulvinar sit aliquet morbi dolor, facilisi
                vitae. Cursus a eu eget nunc feugiat fringilla eget a. Massa
                adipiscing vitae nec tempor vitae, pulvinar fringilla ac. Ut
                curabitur gravida vitae viverra sed.
              </small>
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default ViewBlog;
