import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import ResponsiveDrawer from "../../Pages/Dashboard/Drawer";
import "./Events.css";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import EventImg1 from "../../Assets/Images/EventImg1.png";
import CircularIndeterminate from "../../Components/Loader/Loader";
//////////////============///////////==============///////
//////////////============///////////==============///////
//////////////============///////////==============///////
//////////////============///////////==============///////
////////============///////////==============/////////////
//////////////============///////////==============///////
const drawerWidth = 100;
//////////////============///////////==============///////
const AttendeesDetails = () => {
  //
  const { id } = useParams();

  const [done, setdone] = useState(false);
  const [atten, setatten] = useState([]);
  const [img, setimg] = useState([]);
  const [gender, setgender] = useState("");
  const [adsress, setaddress] = useState("");

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const AttendeDetail = async () => {
    await axios
      .get(`/event/view?event_id=${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token_id")}`,
        },
      })
      .then((res) => {
        console.log(res);
        setatten(res.data.data.attendees);
        console.log(res.data.data.attendees.map((val) => val.profile.gender));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const navigate = useNavigate();
  const breadcrumbs = [
    <div
      className="fw-bolder AllUsersBredCrumbs"
      underline="hover"
      key="1"
      color="inherit"
      onClick={() => handleClick()}
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
      <span className="foractive">AttendeesDetail</span>
    </Typography>,
  ];
  useEffect(() => {
    AttendeDetail();
    setdone(false);
  }, []);

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
            {done ? (
              <div className="stylishLoader">
                <CircularIndeterminate className="allagentsLoader" />
              </div>
            ) : (
              atten &&
              atten.map((val) => {
                return (
                  <div className="row mt-3">
                    <div className="col-4">
                      <div className="card w-100 p-3">
                        <div className="d-flex">
                          <img
                            className="width-attende my-auto"
                            src={val.profile.image}
                            alt="reload"
                          />
                          <div className=" ms-3 my-auto">
                            <p className="text-muted mb-0">
                              {val.profile.gender}
                            </p>
                            <p className="text-muted mb-0">
                              {" "}
                              {val.profile.phone}
                            </p>
                            <p className="text-muted mb-0">
                              {val.profile.address}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default AttendeesDetails;
