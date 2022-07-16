import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../Pages/Mecca_Market_section/index.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KliquesDetailBGIMg from "../../Assets/Images/KliquesDetailBGIMg.png";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import ResponsiveDrawer from "../Dashboard/Drawer";
import AppBar from "@mui/material/AppBar";
import DeleteIcon from "@mui/icons-material/Delete";
import { Form } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import RefreshIcon from "@mui/icons-material/Refresh";
///////=========//////////////==========//////////////===========
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Eventdata from "../../Pages/Events_Section/For_mockup_data/Event_data.json";
import ReactPaginate from "react-paginate";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
///////=========//////////////==========//////////////===========
const drawerWidth = 100;
///////=========//////////////==========//////////////===========
const All_Events = () => {
  const navigate = useNavigate();
  const [togle, settogle] = useState(true);
  const [status, setstatus] = useState("Published");
  const [viewtoggle, setviewtoggle] = useState(true);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  useEffect(() => {
    sessionStorage.setItem("id", "6");
    togle ? setstatus("Published") : setstatus("UnPublished");
  }, [togle]);
  const [users, setUsers] = useState(Eventdata.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 9;
  const pagesVisited = pageNumber * usersPerPage;
  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return (
        <>
          <Col xxl={3} lg={4} md={12} sm={12}>
            <div className="Events_card mb-5">
              <div className="icons_position">
                {/* <DetailsIcon
              className="forcolor"
              onClick={() => {
                navigate("/EventDetail");
              }}
            /> */}
                <DeleteIcon className="forcolor" />
              </div>
              <div className="card_image">
                <img
                  src={KliquesDetailBGIMg}
                  alt="KliquesDetailBGIMg.png"
                  className="KliquesDetailBGIMg"
                />
              </div>
              <div>
                {/*  */}
                <div className="d-flex justify-content-between mt-4">
                  <div className="">
                    <p class="text-left ">
                      <span className="fw-bolder">Full name:</span>&nbsp;
                    </p>
                  </div>
                  <div className="">
                    <p class="text-left det">
                      {user.firstname}&nbsp;
                      {user.lastname}
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="d-flex justify-content-between">
                  <div className="">
                    <p class="text-left ">
                      <span className="fw-bolder">Date:</span>&nbsp; {user.Date}
                    </p>
                  </div>
                  <div className="">
                    <p class="text-left ">
                      <span className="fw-bolder">Fee:</span>&nbsp; {user.Fee}
                    </p>{" "}
                  </div>
                </div>
                {/*  */}
                <div className="d-flex justify-content-between">
                  <div className="">
                    <p class="text-left ">
                      <span className="fw-bolder">Start:</span>&nbsp;{" "}
                      {user.StartDate}
                    </p>
                  </div>
                  <div className="">
                    <p class="text-left ">
                      <span className="fw-bolder">End:</span>&nbsp;{" "}
                      {user.EndDate}
                    </p>{" "}
                  </div>
                </div>
                {/*  */}
                <div className="d-flex justify-content-between">
                  <div className="">
                    <p class="text-left ">
                      <span className="fw-bolder">Status:</span>&nbsp;
                    </p>
                  </div>
                  <div className="">
                    <p class="text-left Completed">{user.status}</p>
                  </div>
                </div>
                {/*  */}
                {/*  */}
                <div className="d-flex">
                  <div className="">
                    <LocationOnIcon className="icon mt-0" />
                  </div>
                  <div className="">
                    <p class="det">{user.Location}</p>
                  </div>
                </div>
                {/*  */}
                <div className="">
                  <button
                    className="button1 px-2 py-1 px-3"
                    onClick={() => {
                      navigate("/EventDetail");
                    }}
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </>
      );
    });

  ///
  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="TopDiv">
      <Box sx={{ display: "flex" }}>
        <div className="for_drawer">
          <ResponsiveDrawer heading="Events" className="alluser" />
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
          <div className="mt-5 pt-5">
            <Container fluid>
              <div className="d-flex justify-content-between">
                <div className="">
                  <h4 className="">All Events</h4>
                </div>
                <div className="">
                  <button
                    onClick={() => {
                      navigate("/AddNewEvent");
                    }}
                    className="button1 px-3 py-1 fw-bolder"
                  >
                    <small>Add&nbsp;New</small>
                  </button>
                </div>{" "}
              </div>
              <div className="d-flex justify-content-between my-4">
                <div className="d-flex">
                  <div className="FilterIcon">
                    <RefreshIcon className=" " />
                  </div>
                  <div className="FilterIcon ms-4">
                    <FilterAltIcon className="" />
                    <span>Filter</span>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="position-relative">
                    <Form.Group className="" controlId="#">
                      <Form.Control
                        type="search"
                        className="input_field"
                        placeholder="Search"
                        // value={filter}
                        // onChange={(e) => setfilter(e.target.value)}
                      />
                    </Form.Group>
                    <SearchIcon className="search_icon" />
                  </div>
                </div>
              </div>
              <div className="row ">{displayUsers}</div>
              <div className="mt-5">
                <ReactPaginate
                  previousLabel={<ArrowCircleLeftRoundedIcon />}
                  nextLabel={<ArrowCircleRightRoundedIcon />}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName={"paginationBttns"}
                  previousLinkClassName={"previousBttn"}
                  nextLinkClassName={"nextBttn"}
                  disabledClassName={"paginationDisabled"}
                  activeClassName={"paginationActive"}
                />
              </div>
            </Container>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default All_Events;
