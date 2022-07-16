import React from "react";
import ResponsiveDrawer from "../../Pages/Dashboard/Drawer";
import Box from "@mui/material/Box";
import KliquesImg from "../../Assets/Images/KliquesImg.png";
import KliquesDetailBGIMg from "../../Assets/Images/KliquesDetailBGIMg.png";
import AppBar from "@mui/material/AppBar";

const drawerWidth = 100;

const KliquesDetail = () => {
  return (
    <div className="TopDiv px-3 pb-5 mt-5">
      <Box sx={{ display: "flex" }}>
        <div className="for_drawer">
          <ResponsiveDrawer heading="Kliques" className="alluser" />
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
            <img src={KliquesImg} alt="KliquesImg.png" className="KliquesImg" />
          </div>
          <div className="Content">
            <div className="d-flex justify-content-between">
              <p className="fw-bolder">Barcelona Football Club</p>
              <p className="fw-bolder">Active</p>
            </div>
            <div className="">
              <small>
                Category:&nbsp;<span className="fw-bolder">Sports</span>
              </small>
            </div>
          </div>
          <div className="Description mt-4">
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
            <div className="mt-4">
              <p className="fw-bolder TotalMembers">
                Total Members:&nbsp; <span className="text-dark"> 1.5</span>
                <span className="text-dark">K</span>
              </p>
            </div>
            <div className="d-flex">
              <p className="Gray"></p>
              <p className="Gray mx-2"></p>
              <p className="Gray"></p>
              <div className="">
                <p className="mt-2 ms-4 ViewAllMembers">View All Members</p>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default KliquesDetail;
