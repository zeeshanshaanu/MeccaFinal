/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState, useEffect } from "react";
import ResponsiveDrawer from "../../Pages/Dashboard/Drawer";
import "../../Pages/User_Section/AllUser.css";
import Box from "@mui/material/Box";
import { Form } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
// table
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import Notification from "../../Components/AlertNotification/Message";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import GradeIcon from "@mui/icons-material/Grade";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AppBar from "@mui/material/AppBar";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewListIcon from "@mui/icons-material/ViewList";
import "./MeccaMarket.css";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AllShopsgridView from "./AllShopsgridView";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import CircularIndeterminate from "../../Components/Loader/Loader";
//
import ReactPaginate from "react-paginate";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));
//
const columns = [
  { label: "Shop Name", minWidth: 100, align: "left" },
  {
    label: "Category",
    maxWidth: 50,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    label: "Address",
    minWidth: 100,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    label: "Rating",
    minWidth: 100,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  // {
  //   label: "Pirce",
  //   minWidth: 100,
  //   align: "left",
  //   format: (value) => value.toLocaleString("en-US"),
  // },
  // {
  //   label: "Size",
  //   minWidth: 100,
  //   align: "left",
  //   format: (value) => value.toFixed(2),\
  // },
  // {
  //   label: "Location",
  //   minWidth: 100,
  //   align: "left",
  //   format: (value) => value.toFixed(2),
  // },
  // {
  //   label: "Color",
  //   minWidth: 100,
  //   align: "left",
  //   format: (value) => value.toFixed(2),
  // },
  {
    id: "Status",
    label: "Status",
    minWidth: 100,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "Action",
    label: "Action",
    minWidth: 100,
    align: "left",
    format: (value) => value.toFixed(2),
  },
];
const drawerWidth = 100;
const AllShops = () => {
  const breadcrumbs = [
    <Typography
      key="3"
      color="text.primary"
      className="fw-bolder AllUsersBredCrumbs"
    >
      <span
        className="foractive"
        onClick={() => {
          navigate("/AllShopes");
        }}
      >
        All Shops
      </span>
    </Typography>,
  ];
  const [pageCount, setPageCount] = useState(1);
  const [showList, setshowList] = useState(false);
  const [showGrid, setshowGrid] = useState(true);
  const [user_data, setuser_data] = useState("");
  const [user_data_total, setuser_data_total] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const HandleList = () => {
    setshowList(!showList);
    setshowGrid(false);
  };

  const HandleGrid = () => {
    setshowGrid(true);
    setshowList(false);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  ////========//////////////=========
  ////========//////////////=========
  ////========//////////////=========
  const [done, setdone] = useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [GetShopes, setGetShopes] = useState([]);
  const [filter, setfilter] = useState("");

  const GetServices = (currentPage) => {
    axios
      .get(`/shop/view-all?per_page=8&page=${currentPage}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token_id")}`,
        },
      })
      .then((response) => {
        setGetShopes(response.data.data.shops);
        setPageCount(response.data.data.last_page);
        setuser_data(response.data.data.to);
        setuser_data_total(response.data.data.total);
        setdone(false);
      })
      .catch((err) => console.log(err));
  };
  const handlePageChange = async (data) => {
    let currentPage = data.selected + 1;
    const blogs = await GetServices(currentPage);
    setGetShopes(blogs);
  };
  //
  //
  //

  useEffect(() => {
    sessionStorage.setItem("id", "4");
    GetServices();
    setdone(true);
  }, []);
  return (
    <div className="TopDiv w-100">
      <Box sx={{ display: "flex" }}>
        <div className="for_drawer">
          <ResponsiveDrawer heading="Mecca&nbsp;Market" className="alluser" />
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
          {done ? (
            <div className="stylishLoader">
              <CircularIndeterminate className="allagentsLoader" />
            </div>
          ) : (
            <div className="Table ms-3 pt-5  ">
              {/* <MapRealEstate /> */}
              <div className="my-4">
                <Stack spacing={2}>
                  <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                  >
                    {breadcrumbs}
                  </Breadcrumbs>
                </Stack>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <div className="">
                  <Button
                    id="demo-customized-button"
                    aria-controls={open ? "demo-customized-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    disableElevation
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon className="AllShopes" />}
                  >
                    <span className="AllShopes">All&nbsp;Shops</span>
                  </Button>
                  <StyledMenu
                    id="demo-customized-menu"
                    MenuListProps={{
                      "aria-labelledby": "demo-customized-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose} disableRipple>
                      All&nbsp;Shops
                    </MenuItem>
                    <MenuItem
                      disableRipple
                      onClick={() => {
                        navigate("/AllItems");
                      }}
                    >
                      All&nbsp;Items
                    </MenuItem>
                  </StyledMenu>
                </div>
                <div className="d-flex">
                  <div className="">
                    <div className="position-relative w-100 ">
                      <Form.Group className="" controlId="#">
                        <Form.Control
                          placeholder="Search..."
                          type="search"
                          className="input_field w-100"
                          value={filter}
                          onChange={(e) => setfilter(e.target.value)}
                        />
                      </Form.Group>
                      <SearchIcon className="search_icon" />
                    </div>
                  </div>
                  <div className="FilterIcon mx-3 px-2 my-auto">
                    <FilterAltIcon className="" />
                    <span>Filter</span>
                  </div>
                  <div className="toggle">
                    {showGrid ? (
                      <GridViewIcon className="icons" onClick={HandleList} />
                    ) : (
                      <ViewListIcon className="icons" onClick={HandleGrid} />
                    )}
                  </div>
                </div>
              </div>
              <Paper
                sx={{ width: "100%", overflow: "hidden" }}
                className={showList ? "ShowTable" : "d-none"}
              >
                <TableContainer sx={{ maxHeight: 500 }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
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
                      {GetShopes && GetShopes.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                        .filter((admin) => {
                          if (filter === "") {
                            return GetShopes;
                          } else if (
                            (admin.name &&
                              admin.name
                                .toString()
                                .includes(filter.toString().toLowerCase())) ||
                            (admin.category &&
                              admin.category
                                .toString()
                                .includes(filter.toString().toLowerCase())) ||
                            (admin.address &&
                              admin.address
                                .toString()
                                .includes(filter.toString().toLowerCase()))
                          ) {
                            return GetShopes;
                          }
                        })
                        .map((allShopes) => {
                          return (
                            <TableRow
                              hover
                              role="checkbox"
                              tabIndex={-1}
                              key={allShopes.code}
                            >
                              <TableCell>
                                <span>{allShopes.name}</span>
                              </TableCell>
                              <TableCell>{allShopes.category}</TableCell>
                              <TableCell>{allShopes.address}</TableCell>
                              <TableCell>
                                {allShopes.total_ratings === 0 ? (
                                  <div className="">
                                    <small className="text-danger fw-bolder">
                                      No&nbsp;Rating
                                    </small>
                                  </div>
                                ) : allShopes.total_ratings === 1 ? (
                                  <div className="">
                                    <GradeIcon className="text-warning Rating_Icon" />
                                  </div>
                                ) : allShopes.total_ratings === 2 ? (
                                  <div className="">
                                    <GradeIcon className="text-warning Rating_Icon" />
                                    <GradeIcon className="text-warning Rating_Icon" />
                                  </div>
                                ) : allShopes.total_ratings === 3 ? (
                                  <div className="">
                                    <GradeIcon className="text-warning Rating_Icon" />
                                    <GradeIcon className="text-warning Rating_Icon" />
                                    <GradeIcon className="text-warning Rating_Icon" />
                                  </div>
                                ) : allShopes.total_ratings === 4 ? (
                                  <div className="">
                                    <GradeIcon className="text-warning Rating_Icon" />
                                    <GradeIcon className="text-warning Rating_Icon" />
                                    <GradeIcon className="text-warning Rating_Icon" />
                                    <GradeIcon className="text-warning Rating_Icon" />
                                  </div>
                                ) : allShopes.total_ratings === 5 ? (
                                  <div className="">
                                    <GradeIcon className="text-warning Rating_Icon" />
                                    <GradeIcon className="text-warning Rating_Icon" />
                                    <GradeIcon className="text-warning Rating_Icon" />
                                    <GradeIcon className="text-warning Rating_Icon" />
                                    <GradeIcon className="text-warning Rating_Icon" />
                                  </div>
                                ) : (
                                  <div className="">
                                    <GradeOutlinedIcon className="text-warning Rating_Icon" />
                                  </div>
                                )}
                              </TableCell>
                              <TableCell>
                                {" "}
                                <span className="">
                                  {allShopes.isActive === 1 ? (
                                    <div
                                      style={{
                                        color: "green",
                                        fontWeight: "bolder",
                                      }}
                                    >
                                      <small>Active</small>{" "}
                                    </div>
                                  ) : allShopes.isActive === 0 ? (
                                    <div
                                      className=""
                                      style={{
                                        fontWeight: "bolder",
                                        color: "red",
                                      }}
                                    >
                                      Inactive
                                    </div>
                                  ) : (
                                    <div style={{ color: "red" }}>
                                      <small> Not&nbsp;Available </small>{" "}
                                    </div>
                                  )}
                                </span>
                              </TableCell>
                              <TableCell>
                                <div className="App">
                                  <span
                                    className="view mx-1"
                                    onClick={() => {}}
                                  >
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
                <div className="d-flex mt-5">
                  <p className="text-muted ms-3">
                    Showing&nbsp;{user_data}&nbsp;of{" "}
                    {user_data_total} enteries
                  </p>
                  <div className="ms-auto">
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
          {showGrid ? <AllShopsgridView /> : ""}
          <Notification notify={notify} setNotify={setNotify} />
        </Box>
      </Box>
    </div>
  );
};

export default AllShops;
