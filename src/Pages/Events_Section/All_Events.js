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
import axios from "axios";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Eventdata from "../../Pages/Events_Section/For_mockup_data/Event_data.json";
import NoImage from "../../Assets/Images/NoImage.png";
import Logo1 from "../../Assets/Images/Logo1.png";
import ReactPaginate from "react-paginate";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import CircularIndeterminate from "../../Components/Loader/Loader";
import Notification from "../../Components/AlertNotification/Message";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { fontSize } from "@mui/system";
///////=========//////////////==========//////////////===========
const drawerWidth = 100;
///////=========//////////////==========//////////////===========
const All_Events = () => {
  const navigate = useNavigate();
  /////////=====/////=API Calling========//////
  /////////=====/////=API Calling========//////
  const [togle, settogle] = useState(true);
  const [status, setstatus] = useState("Published");
  const [viewtoggle, setviewtoggle] = useState(true);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [filter, setfilter] = useState("");
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [done, setdone] = useState(false);
  const [pageCount, setPageCount] = useState(1);
  const [AllEvents, setAllEvents] = useState([]);
  /////////=====/////=API Calling========///////
  const GetAllEvents = (currentPage) => {
    setdone(true);
    axios
      .get(`/event/view-all?per_page=8&page=${currentPage}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token_id")}`,
        },
      })
      .then((response) => {
        setAllEvents(response.data.data.events);
        setPageCount(response.data.data.last_page);
        // console.log(response.data);
        setdone(false);
      })
      .catch((err) => console.log(err));
  };

  const handlePageChange = async (data) => {
    let currentPage = data.selected + 1;
    const Events = await GetAllEvents(currentPage);
    setAllEvents(Events);
  };
  ////////////=============/////////////============
  ////////////=============/////////////============
  ////////////=============/////////////============
  const handleDelete = (event_id) => {
    console.log(sessionStorage.getItem("token_id"));
    setdone(true);
    axios
      .delete(`/event/delete?event_id=${event_id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token_id")}`,
        },
      })
      .then((response) => {
        console.log(response);
        setdone(false);
        if (response.data.code === 200) {
          setdone(false);
          setNotify({
            isOpen: true,
            message: `${response.data.message}`,
            type: "success",
          });
        }
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((err) => {
        setdone(false);
        setNotify({
          isOpen: true,
          message: `${err.response.message}`,
          type: "error",
        });
      });
  };
  ////////////=============/////////////============
  ////////////=============/////////////============
  useEffect(() => {
    GetAllEvents(1);
    sessionStorage.setItem("id", "6");
    togle ? setstatus("Published") : setstatus("UnPublished");
  }, [togle]);
  // const [users, setUsers] = useState(Eventdata.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);
  const displayUsers =
    AllEvents &&
    AllEvents
          .filter((blog) => {
        if (filter === "") {
          return AllEvents;
        } else if (
          (blog.category &&
            blog.category
              .toString()
              .toLowerCase()
              .includes(filter.toString().toLowerCase())) ||
          (blog.title &&
            blog.title
              .toString()
              .toLowerCase()
              .includes(filter.toString().toLowerCase()))
        ) {
          return AllEvents;
        }
      })
      .map((user) => {
        return (
          <>
            <Col xxl={3} lg={4} md={12} sm={12} className="text-small">
              <div className="fw-bolder ">
                {user.type === "physical" ? (
                  <span className="TypeStyle px-4 py-2">{user.type}</span>
                ) : (
                  <span className="TypeStyleOnline px-4 py-2">{user.type}</span>
                )}
              </div>
              <div className="Events_card mb-5">
                <div className="icons_position">
                  <DeleteIcon
                    className="forcolor"
                    onClick={() => {
                      handleDelete(user.event_id);
                    }}
                  />
                </div>
                <div className="">
                  <div className="">
                    {user.cover_image === "" ? (
                      <img
                        src={Logo1}
                        alt="KliquesDetailBGIMg.png"
                        className="KliquesDetailBGIMg"
                      />
                    ) : (
                      <img
                        src={user.cover_image}
                        alt="KliquesDetailBGIMg.png"
                        className="KliquesDetailBGIMg"
                      />
                    )}
                  </div>
                </div>
                <div>
                  {/*  */}
                  <div className="d-flex justify-content-between mt-4">
                    <div className="">
                      <p class="text-left ">
                        <span className="fw-bolder">Title:</span>&nbsp;
                      </p>
                    </div>
                    <div className="">
                      <p class="text-left det fw-bolder">{user.title}</p>
                    </div>
                  </div>
                  {/*  */}
                  <div className="d-flex justify-content-between">
                    <div className="">
                      <p class="text-left ">
                        <span className="fw-bolder">Category:</span>&nbsp;{" "}
                        {user.category}
                      </p>
                    </div>
                     {/*  */}
                     <div className="d-flex">
                    <div className="">
                      <p class="text-left">
                        <span className="fw-bolder">Status:</span>&nbsp;
                      </p>
                  </div>
                    <div className="">
                      <p class="text-left">{user.status==="active" ? (
                        <span className="text-success">{user.status}</span>
                      ):
                      (
                        <>
                        {user.status}
                        </>
                      ) }</p>
                    </div>
                  </div>
                  </div>
                  {/*  */}
                  <div className="d-flex justify-content-between">
                    <div className="">
                      <p class="text-left ">
                        <span className="fw-bolder">Date:</span>&nbsp;{" "}
                        {user.schedule_at}
                      </p>
                    </div>
                    <div className="">
                      <p class="text-left ">
                        <span className="fw-bolder">Attendees limit:</span>&nbsp;{" "}
                        {user.attendees_limit}
                      </p>{" "}
                    </div>
                  </div>
                  {/*  */}
                  <div className="d-flex justify-content-between">
                    <div className="">
                      <p class="text-left ">
                        <span className="fw-bolder">Start:</span>&nbsp;{" "}
                        {user.start_at_time}
                      </p>
                    </div>
                    <div className="">
                      <p class="text-left ">
                        <span className="fw-bolder">End:</span>&nbsp;{" "}
                        {user.end_at_time}
                      </p>{" "}
                    </div>
                  </div>
                  {/*  */}
                  <div className="d-flex justify-content-between">
                    <div className="">
                      <p class="text-left ">
                        <span className="fw-bolder">Ticket Availability:</span>&nbsp;{" "}
                        {user.ticket_available_from} - {user.ticket_available_to}
                      </p>
                    </div>
                    <div className="">
                      <p class="text-left ">
                         
                      </p>{" "}
                    </div>
                  </div>
              
                  {/*  */}
                  {/*  */}
                  <div className="d-flex">
                    <div className="">
                      <LocationOnIcon className="icon mt-0 ms-0" />
                    </div>
                    <div className="forElipse ms-0">
                      <p class="det ms-0 ps-0">{user.location_address}</p>
                    </div>
                  </div>
                  {/*  */}
                  <div className="d-flex justify-content-between">
                    <button
                      className="button1 px-4"
                      onClick={() => {
                        navigate(`/EventDetail/${user.event_id}`);
                      }}
                    >
                      Details
                    </button>
                    <div className="">
                      <p class="text-left ">
                        <span className="fw-bolder">Fee:</span>&nbsp;{" "}
                        ${user.registration_fee}
                      </p>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </>
        );
      });

  ///
  // const pageCount = Math.ceil(users.length / usersPerPage);

  const HandleRefresh = () => {
    GetAllEvents(1);
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
          <div className="mt-5">
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
                    className="button1 px-4 py-2 fw-bolder"
                  >
                    <small>Add&nbsp;New</small>
                  </button>
                </div>{" "}
              </div>
              <div className="d-flex justify-content-between my-4">
                <div className="FilterIcon px-3">
                  <RefreshIcon className="" onClick={HandleRefresh} />
                                 </div>
                <div className="position-relative w-75">
                  <Form.Group className="" controlId="#">
                    <Form.Control
                      type="search"
                      className="input_field w-100"
                      placeholder="Search  by title"
                      onChange={(e) => setfilter(e.target.value)}
                    />
                  </Form.Group>
                  <SearchIcon className="ms-1 Kliquesearch_icon" />
                </div>
              </div>
              {done ? (
                <div className="stylishLoader">
                  <CircularIndeterminate className="allagentsLoader" />
                </div>
              ) : (
                <div className="row">{displayUsers}</div>
              )}
              <div className="mt-5">
                <ReactPaginate
                  previousLabel={<ArrowCircleLeftRoundedIcon />}
                  nextLabel={<ArrowCircleRightRoundedIcon />}
                  pageCount={pageCount}
                  pageRange={5}
                  marginPagesDisplayed={2}
                  onPageChange={handlePageChange}
                  containerClassName={"paginationBttns"}
                  previousLinkClassName={"previousBttn"}
                  nextLinkClassName={"nextBttn"}
                  disabledClassName={"paginationDisabled"}
                  activeClassName={"paginationActive"}
                />
              </div>
            </Container>
          </div>
          <Notification notify={notify} setNotify={setNotify} />
        </Box>
      </Box>
    </div>
  );
};

export default All_Events;
