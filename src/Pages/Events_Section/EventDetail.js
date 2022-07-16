import React from "react";
import Box from "@mui/material/Box";
import ResponsiveDrawer from "../../Pages/Dashboard/Drawer";
import EventDetailBGImg from "../../Assets/Images/EventDetailBGImg.png";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import DateRangeIcon from "@mui/icons-material/DateRange";
import EventImg1 from "../../Assets/Images/EventImg1.png";
import EventImg2 from "../../Assets/Images/EventImg2.png";
import EventImg3 from "../../Assets/Images/EventImg3.png";
import EventImg4 from "../../Assets/Images/EventImg4.png";
import EventImg5 from "../../Assets/Images/EventImg5.png";
import { navigate, useNavigate } from "react-router-dom";
import "./Events.css";
import AppBar from "@mui/material/AppBar";
//
//
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
const drawerWidth = 100;
const EventDetail = () => {
  const navigate = useNavigate();
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  const breadcrumbs = [
    <div
      className="fw-bolder AllUsersBredCrumbs"
      underline="hover"
      key="1"
      color="inherit"
      onClick={handleClick}
    >
      <span
        onClick={() => {
          navigate("/All_Events");
        }}
      >
        AllEvents
      </span>
    </div>,
    <Typography
      key="3"
      color="text.primary"
      className="fw-bolder AllUsersBredCrumbs"
    >
      <span
        className="foractive"
        onClick={() => {
          navigate("/EventDetail");
        }}
      >
        EventDetail
      </span>
    </Typography>,
  ];
  return (
    <div className="TopDiv px-3 pb-5">
      <Box sx={{ display: "flex" }}>
        <div className="for_drawer">
          <ResponsiveDrawer heading="Events" className="alluser text-dnager" />
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
            <div className=" d-flex justify-content-between">
              <Stack spacing={2}>
                <Breadcrumbs
                  separator={<NavigateNextIcon fontSize="small" />}
                  aria-label="breadcrumb"
                >
                  {breadcrumbs}
                </Breadcrumbs>
              </Stack>
              <div className="d-flex">
                <button
                  // onClick={() => {
                  //   history.push("#");
                  // }}
                  className="Download px-5 py-2 mx-2"
                >
                  <small>Edit</small>
                </button>
                <button
                  onClick={() => {
                    navigate("/All_Events");
                  }}
                  className="button1 px-5 py-2 mx-2"
                >
                  <small>Back</small>
                </button>
              </div>{" "}
            </div>
            {/*  */}
            <div className="BgImg mt-4 ">
              <img
                src={EventDetailBGImg}
                alt="EventDetailBGImg.png"
                className="w-100"
              />
              <div className="Buttons">
                <div className="d-flex">
                  <button
                    // onClick={() => {
                    //   history.push("/Add_new_user");
                    // }}
                    className="fw-bolder Download2 px-3 py-2 mx-2"
                  >
                    <small>$25.00</small>
                  </button>
                  <button
                    // onClick={() => {
                    //   history.push("/AddNewEvent");
                    // }}
                    className="fw-bolder button1 px-3 py-2"
                  >
                    <small>Register&nbsp;Now</small>
                  </button>
                </div>{" "}
              </div>
            </div>
            {/*  */}
            <div className="Next-Content">
              <div className="d-flex justify-content-between">
                <p className="fw-bolder">Expedition to China</p>
                <div className="">Location</div>
              </div>
              <div className="">
                <FmdGoodOutlinedIcon className="ContentColor" />
                &nbsp;
                <span className="ContentColor">Shangai, China</span>
              </div>
              <div className="my-2">
                <AccessTimeOutlinedIcon className="ContentColor" />
                &nbsp;
                <span className="ContentColor">June 8, 2020</span>
              </div>
              <div className="my-2">
                <DateRangeIcon className="text-danger" />
                &nbsp;
                <span className="text-danger">Add to Calandar</span>
              </div>
              {/*  */}
              <div className="d-flex">
                <div>
                  <p className="Triatholon">Triatholon</p>
                </div>
                <div>
                  <p className="Triatholon mx-2">Marathon</p>
                </div>
                <div>
                  <p className="Triatholon">Weightlifting</p>
                </div>
              </div>
              {/*  */}
              <div className="d-flex justify-content-between">
                <div>
                  <div className="">
                    <p className="fw-bolder">Participants</p>
                  </div>
                  <div class="avatars">
                    <span class="avatar">
                      <img src={EventImg1} alt="EventImg1.png" />
                    </span>
                    <span class="avatar">
                      <img src={EventImg2} alt="EventImg2.png" />
                    </span>
                    <span class="avatar">
                      <img src={EventImg3} alt="EventImg3.png" />
                    </span>
                    <span class="avatar">
                      <img src={EventImg4} alt="EventImg4.png" />
                    </span>
                    <span class="avatar">
                      <img src={EventImg5} alt="EventImg5.png" />
                    </span>
                  </div>
                </div>
                <div className="">
                  <span class="Organizer">
                    <p className="">Organizer</p>
                    <img src={EventImg1} alt="EventImg1.png" />
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <p className="fw-bolder">Event Details</p>
                <small className="">
                  The Gigalodon Hotel is a hotel that has dinner facilities
                  beside a pool{" "}
                  <span className="text-danger">read more...</span>
                </small>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default EventDetail;
