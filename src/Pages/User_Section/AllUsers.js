import React, { useEffect, useState } from "react";
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
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Logo1 from "../../Assets/Images/Logo1.png";
import AppBar from "@mui/material/AppBar";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
//
import ReactPaginate from "react-paginate";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import CircularIndeterminate from "../../Components/Loader/Loader";
import axios from "axios";
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
  const [allusers, setalluser] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [done, setdone] = useState(false);
  const navigate = useNavigate();
  //
  //
  //
  const GetAllUser = (currentPage) => {
    axios
      .get(`get-all-users?users_type=user&per_page=10&page=${currentPage}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token_id")}`,
        },
      })
      .then((response) => {
        setalluser(response.data.data.users);
        setPageCount(response.data.data.last_page);
        // console.log(response.data);
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

  return (
    <div className="TopDiv">
      <Box sx={{ display: "flex" }}>
        <div className="for_drawer">
          <ResponsiveDrawer heading="All Users" className="alluser" />
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
            <div className="FilterIcon px-3">
              <FilterAltIcon className="" />
              <span>Filter</span>
            </div>
            <div className="position-relative w-75">
              {/* <small className="fw-bolder">Search&nbsp;Users</small> */}
              <Form.Group className="me-3" controlId="#">
                <Form.Control
                  type="search"
                  className="forpaaddingleft input_field w-100"
                  placeholder="Search..."
                  // value={filter}
                  // onChange={(e) => setfilter(e.target.value)}
                />
              </Form.Group>
              <SearchIcon className="Kliquesearch_icon" />
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
                      {allusers &&
                        allusers.map((userGet) => {
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
                                  className="ProfesProfileImg"
                                />
                                &nbsp;
                                <span className="">
                                  {userGet.first_name}&nbsp;{userGet.last_name}
                                </span>
                              </TableCell>
                              <TableCell>{userGet.email}</TableCell>
                              <TableCell>{userGet.user_type}</TableCell>
                              <TableCell>{userGet.is_profile_setup}</TableCell>
                              <TableCell>
                                <div className="App">
                                  {" "}
                                  <span
                                    onClick={() => {
                                      navigate("/UserDetail");
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
              </Paper>
            </div>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default AllUsers;
