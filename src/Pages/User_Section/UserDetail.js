import React from "react";
import Box from "@mui/material/Box";
import ResponsiveDrawer from "../../Pages/Dashboard/Drawer";
import UserDetailImg from "../../Assets/Images/UserDetailImg.png";
import Photo1 from "../../Assets/Images/Photo1.png";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
//
//
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const drawerWidth = 100;
const UserDetail = () => {
  const navigate = useNavigate();
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  const breadcrumbs = [
    <div
      className="fw-bolder AllUsersBredCrumbs"
      underline="hover"
      key="2"
      color="inherit"
      onClick={handleClick}
    >
      <span
        onClick={() => {
          navigate("/AllUsers");
        }}
      >
        AllUsers
      </span>
    </div>,
    // <div
    //   className="fw-bolder AllUsersBredCrumbs"
    //   underline="hover"
    //   key="1"
    //   color="inherit"
    //   onClick={handleClick}
    // >
    //   <span
    //     onClick={() => {
    //       navigate("/EditUser");
    //     }}
    //   >
    //     EditUser
    //   </span>
    // </div>,
    <Typography
      key="3"
      color="text.primary"
      className="fw-bolder AllUsersBredCrumbs"
    >
      <span
        className="foractive"
        onClick={() => {
          navigate("/UserDetail");
        }}
      >
        UserDetail
      </span>
    </Typography>,
  ];

  return (
    <div className=" TopDiv pb-5 ms-lg-5">
      <Box sx={{ display: "flex" }}>
        <div className="for_drawer">
          <ResponsiveDrawer heading="Users Detail" className="alluser" />
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
          <div className="Main mx-3 mt-5">
            <div className="my-5">
              <Stack spacing={2}>
                <Breadcrumbs
                  separator={<NavigateNextIcon fontSize="small" />}
                  aria-label="breadcrumb"
                >
                  {breadcrumbs}
                </Breadcrumbs>
              </Stack>
            </div>
            <div className="d-flex">
              <div className="img">
                <img
                  src={UserDetailImg}
                  alt="UserDetailImg.png"
                  className="UserDetailPhoto"
                />
              </div>
              <div className="content mt-3 ms-4">
                <div className="d-flex justify-content-between">
                  <div>
                    <h3>
                      <span className="fw-bolder">Arthur</span> Dorrance
                    </h3>
                  </div>
                  {/*  */}
                  {/* <div className="ms-5">
                    <button
                      className="px-5 py-1 Download"
                      onClick={() => {
                        navigate("/All_Users");
                      }}
                    >
                      Back
                    </button>
                  </div> */}
                </div>
                <div>
                  <p className="ContentColor">dorrance@email.com</p>
                  <p className="ContentColor">Member since September 5, 2021</p>
                </div>
              </div>
            </div>
            <hr className="w-75" />
            <div>
              <Container>
                <Row>
                  <Col lg={6} md={6} sm={12}>
                    <div className="table">
                      <table className="">
                        {/*  */}
                        <tr>
                          <td className="ContentColor">Date of Birth</td>
                          <td className="for_text_align">
                            <span className="fw-bolder">14-03-1997</span>
                          </td>
                        </tr>
                        {/*  */}
                        <tr>
                          <td className="ContentColor">Phone</td>
                          <td className="for_text_align">
                            <span className="fw-bolder">+92 254 144 0444</span>
                          </td>
                        </tr>
                        {/*  */}
                        <tr>
                          <td className="ContentColor">Age</td>
                          <td className="for_text_align">
                            <span className="fw-bolder">23</span>
                          </td>
                        </tr>
                        {/*  */}
                        <tr>
                          <td className="ContentColor">Gender</td>
                          <td className="for_text_align">
                            <span className="fw-bolder">Female</span>
                          </td>
                        </tr>
                        {/*  */}
                        <tr>
                          <td className="ContentColor">Country</td>
                          <td className="for_text_align">
                            <span className="fw-bolder">Pakistan</span>
                          </td>
                        </tr>
                        {/*  */}
                        <tr>
                          <td className="ContentColor">Address</td>
                          <td className="for_text_align">
                            <span className="fw-bolder">
                              F-54, Downtown, KPK
                            </span>
                          </td>
                        </tr>
                        {/*  */}
                        <tr>
                          <td className="ContentColor">About Me</td>
                          <td className="for_text_align">
                            <span className="fw-bolder">Lorem Ipsum</span>
                          </td>
                        </tr>
                        {/*  */}
                        <tr>
                          <td className="ContentColor">
                            Fitness & Health Intrest
                          </td>
                          <td className="for_text_align">
                            <span className="fw-bolder">Lorem Ipsum</span>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </Col>
                  {/*  */}
                  <Col lg={6} md={6} sm={12}>
                    {/* <div className="Pictures">
                      <p className="ContentColor">Photos</p>
                    </div> */}
                    <div className="d-flex">
                      <img src={Photo1} alt="Photo1.png" className="" />
                      <img src={Photo1} alt="Photo1.png" className="ms-2" />
                    </div>
                    <div className="d-flex mt-3">
                      <img src={Photo1} alt="Photo1.png" className="" />
                      <img src={Photo1} alt="Photo1.png" className="ms-2" />
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default UserDetail;
