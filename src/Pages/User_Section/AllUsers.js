import React, { useContext, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
import ResponsiveDrawer from "../../Pages/Dashboard/Drawer";
import "../User_Section/AllUser.css";
import Box from "@mui/material/Box";
// table
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AppBar from "@mui/material/AppBar";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
//
import ReactPaginate from "react-paginate";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import CircularIndeterminate from "../../Components/Loader/Loader";
import axios from "axios";
import UserFilter from "../../Components/All Filters/UsersFilters/UserFilter";
import AllUserContext from "../../Contexts/AllUsers/AllUserContext";
const columns = [
  { label: "Name", minWidth: 50, align: "left" },
  { label: "Email", minWidth: 50, align: "left" },
  {
    label: "User Type",
    minWidth: 50,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },

  {
    id: "Status",
    label: "Status",
    minWidth: 50,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "Action",
    label: "Action",
    minWidth: 50,
    align: "left",
    format: (value) => value.toFixed(2),
  },
];
const drawerWidth = 100;
const AllUsers = () => {
  const user = useContext(AllUserContext);

  const [allusers, setalluser] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [done, setdone] = useState(false);
  const [user_data, setuser_data] = useState("");
  const [user_data_total, setuser_data_total] = useState("");
  const [filter, setfilter] = useState("");
  const navigate = useNavigate();
  //
  //
  //
  const GetAllUser = (currentPage) => {
    axios
      .get(`get-all-users?users_type=user&per_page=8&page=${currentPage}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token_id")}`,
        },
      })
      .then((response) => {
        setalluser(response.data.data.users);
        setPageCount(response.data.data.last_page);
        setuser_data(response.data.data.to);
        setuser_data_total(response.data.data.total);
        setdone(false);
      })
      .catch((err) => console.log(err));
  };

  const handlePageChange = async (data) => {
    let currentPage = data.selected + 1;
    const blogs = await GetAllUser(currentPage);
    setalluser(blogs);
  };
  const breadcrumbs = [
    <Typography
      key="3"
      color="text.primary"
      className="fw-bolder AllUsersBredCrumbs"
    >
      <span
        className="foractive"
        onClick={() => {
          navigate("/AllUsers");
        }}
      >
        AllUsers
      </span>
    </Typography>,
  ];
  useEffect(() => {
    GetAllUser();
    setdone(true);
    sessionStorage.setItem("id", "2");
  }, []);
  // useEffect(() => {
  //   GetAllUser();
  //   setdone(true);
  //   sessionStorage.setItem("id", "2");
  // }, [user.reload]);

  return (
    <div className="TopDiv">
      <Box sx={{ display: "flex" }}>
        <div className="for_drawer">
          <ResponsiveDrawer heading="Users" className="alluser" />
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
          <div className="d-flex justify-content-between me-3 mt-5 pt-5">
            <Stack spacing={2}>
              <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
              >
                {breadcrumbs}
              </Breadcrumbs>
            </Stack>
            <div className="">
              <button
                onClick={() => {
                  navigate("/AddUser");
                }}
                className="button1 px-4 py-2 fw-bolder"
              >
                <small>Add&nbsp;New</small>
              </button>
            </div>{" "}
          </div>
          {/*  */}
          <div className="d-flex justify-content-between my-4">
            <div className="position-relative w-75">
              {/* <small className="fw-bolder">Search&nbsp;Users</small> */}
              <Form.Group className="" controlId="#">
                <Form.Control
                  type="search"
                  className="forpaaddingleft input_field w-100"
                  placeholder="Search by name, user type, email"
                  value={filter}
                  onChange={(e) => setfilter(e.target.value)}
                />
              </Form.Group>
              <SearchIcon className="Kliquesearch_icon" />
            </div>
            <div className="FilterIcon px-3 me-3">
              {/* <FilterAltIcon className="" /> */}
              <UserFilter />
            </div>
          </div>
          {/* ===============TABLE================ */}
          {done ? (
            <div className="stylishLoader">
              <CircularIndeterminate className="allagentsLoader" />
            </div>
          ) : (
            <div className="Table me-3">
              <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <TableContainer sx={{ maxHeight: 500 }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow className="fw-bolder">
                        {columns.map((column) => (
                          <TableCell
                            className="fw-bolder"
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                          >
                            {column.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {console.log(user.searchid)}

                      {user.searchid === 1
                        ? allusers &&
                          allusers
                            .filter((admin) => {
                              if (
                                user.names == "" &&
                                user.emails === "" &&
                                user.usertypes === ""
                              ) {
                                return allusers;
                              } else if (
                                (admin.last_name &&
                                  admin.last_name
                                    .toString()
                                    .includes(
                                      user.names
                                        .toString()
                                        .toUpperCase()
                                        .toLowerCase()
                                    )) ||
                                (admin.email &&
                                  admin.email
                                    .toString()
                                    .includes(
                                      user.names
                                        .toString()
                                        .toUpperCase()
                                        .toLowerCase()
                                    )) ||
                                (admin.first_name &&
                                  admin.first_name
                                    .toString()
                                    .toUpperCase()
                                    .includes(
                                      user.names
                                        .toString()
                                        .toUpperCase()
                                        .toLowerCase()
                                    )) ||
                                (admin.user_type &&
                                  admin.user_type
                                    .toString()
                                    .includes(user.names.toString()))
                              ) {
                                return allusers;
                              }
                            })
                            .map((userGet) => {
                              return (
                                <TableRow
                                  hover
                                  role="checkbox"
                                  tabIndex={-1}
                                  key={userGet.code}
                                >
                                  <TableCell>
                                    <img
                                      src={userGet.profile.image}
                                      alt=""
                                      className="usersimges"
                                    />
                                    &nbsp;
                                    <span className="">
                                      {userGet.first_name}&nbsp;
                                      {userGet.last_name}
                                    </span>
                                  </TableCell>
                                  <TableCell>{userGet.email}</TableCell>
                                  <TableCell>{userGet.user_type}</TableCell>
                                  <TableCell>
                                    {userGet.is_profile_setup === 1 ? (
                                      <span className="text-success">
                                        Active
                                      </span>
                                    ) : (
                                      <span className="text-danger">
                                        Inactive
                                      </span>
                                    )}
                                  </TableCell>
                                  <TableCell>
                                    <div className="App">
                                      {" "}
                                      <span
                                        onClick={() => {
                                          navigate(
                                            `/UserDetail/${userGet.user_id}`
                                          );
                                        }}
                                        className="fw-bolder view"
                                      >
                                        <VisibilityOutlinedIcon />
                                      </span>{" "}
                                      <span className="view" onClick={() => {}}>
                                        <DeleteIcon />
                                      </span>
                                    </div>
                                  </TableCell>
                                </TableRow>
                              );
                            })
                        : allusers &&
                          allusers
                            .filter((admin) => {
                              if (filter === "") {
                                return allusers;
                              } else if (
                                (admin.last_name &&
                                  admin.last_name
                                    .toString()
                                    .includes(
                                      filter
                                        .toString()
                                        .toUpperCase()
                                        .toLowerCase()
                                    )) ||
                                (admin.email &&
                                  admin.email
                                    .toString()
                                    .includes(
                                      filter
                                        .toString()
                                        .toUpperCase()
                                        .toLowerCase()
                                    )) ||
                                (admin.first_name &&
                                  admin.first_name
                                    .toString()
                                    .toUpperCase()
                                    .includes(
                                      filter
                                        .toString()
                                        .toUpperCase()
                                        .toLowerCase()
                                    )) ||
                                (admin.user_type &&
                                  admin.user_type
                                    .toString()
                                    .includes(filter.toString()))
                              ) {
                                return allusers;
                              }
                            })
                            .map((userGet) => {
                              return (
                                <TableRow
                                  hover
                                  role="checkbox"
                                  tabIndex={-1}
                                  key={userGet.code}
                                >
                                  <TableCell>
                                    <img
                                      src={userGet.profile.image}
                                      alt=""
                                      className="usersimges"
                                    />
                                    &nbsp;
                                    <span className="">
                                      {userGet.first_name}&nbsp;
                                      {userGet.last_name}
                                    </span>
                                  </TableCell>
                                  <TableCell>{userGet.email}</TableCell>
                                  <TableCell>{userGet.user_type}</TableCell>
                                  <TableCell>
                                    {userGet.is_profile_setup === 1 ? (
                                      <span className="text-success">
                                        Active
                                      </span>
                                    ) : (
                                      <span className="text-danger">
                                        Inactive
                                      </span>
                                    )}
                                  </TableCell>
                                  <TableCell>
                                    <div className="App">
                                      {" "}
                                      <span
                                        onClick={() => {
                                          navigate(
                                            `/UserDetail/${userGet.user_id}`
                                          );
                                        }}
                                        className="fw-bolder view"
                                      >
                                        <VisibilityOutlinedIcon />
                                      </span>{" "}
                                      <span className="view" onClick={() => {}}>
                                        <DeleteIcon />
                                      </span>
                                    </div>
                                  </TableCell>
                                </TableRow>
                              );
                            })}
                    </TableBody>
                  </Table>
                </TableContainer>
                <div className="d-flex mt-5 my-auto">
                  <p className="text-muted ms-3">
                    Showing&nbsp;{user_data}&nbsp;of&nbsp;{user_data_total}
                    &nbsp; enteries
                  </p>
                  <div className="ms-auto my-auto">
                    {console.log(pageCount)}
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
                </div>
              </Paper>
            </div>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default AllUsers;
