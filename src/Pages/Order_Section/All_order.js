import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ResponsiveDrawer from "../../Pages/Dashboard/Drawer";
import "../../Pages/User_Section/AllUser.css";
import Box from "@mui/material/Box";
// table
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import AppBar from "@mui/material/AppBar";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CircularIndeterminate from "../../Components/Loader/Loader";
import ReactPaginate from "react-paginate";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
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
//
const columns = [
  {
    label: "Order ID",
    minWidth: 30,
    align: "left",
  },
  {
    label: "Order Date",
    minWidth: 100,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  { label: "Customer", minWidth: 100, align: "left" },
  {
    label: "Total Quanitity",
    minWidth: 100,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    label: "Total Price",
    minWidth: 100,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    label: "Shop",
    minWidth: 100,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    label: "Status",
    minWidth: 100,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    label: "Action",
    minWidth: 100,
    align: "left",
    format: (value) => value.toFixed(2),
  },
];
//
const drawerWidth = 100;
const All_Orders = () => {
  const [done, setdone] = useState(false);
  const [GetOrders, setGetOrders] = useState([]);
  const [pageCount, setPageCount] = useState(1);

  const GetAllOrders = () => {
    axios
      .get(`/orders`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token_id")}`,
        },
      })
      .then((response) => {
        setGetOrders(response.data.data.orders);
        setdone(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    sessionStorage.setItem("id", "8");
    GetAllOrders();
    setdone(true);
  }, []);
  const navigate = useNavigate();
  const [filter, setfilter] = useState("");
  function HandleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  const breadcrumbs = [
    <div
      className="fw-bolder AllUsersBredCrumbs"
      underline="hover"
      key="2"
      color="inherit"
      onClick={HandleClick}
    >
      <span
        onClick={() => {
          navigate("/All_Orders");
        }}
      >
        AllOrders
      </span>
    </div>,
  ];
  //
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //
  //
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="TopDiv">
      <Box sx={{ display: "flex" }}>
        <div className="for_drawer">
          <ResponsiveDrawer heading="Orders" className="alluser" />
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
          {/*  */}
          <div className="d-flex justify-content-between my-4 mt-5">
            <Stack spacing={2}>
              <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
              >
                {breadcrumbs}
              </Breadcrumbs>
            </Stack>
          </div>
          <div className=" ">
            <div className="d-flex justify-content-between my-4">
              <div className="FilterIcon px-3">
                <FilterAltIcon className="" />
                <span>Filter</span>
              </div>
              {/* <small className="fw-bolder">Search&nbsp;Professionals</small> */}
              <div className="position-relative w-75 me-3">
                <Form.Group className="" controlId="#">
                  <Form.Control
                    type="search"
                    className="input_field w-100"
                    placeholder="Professional Name, Email or Phone"
                    value={filter}
                    onChange={(e) => setfilter(e.target.value)}
                  />
                </Form.Group>
                <SearchIcon className="Kliquesearch_icon" />
              </div>
            </div>
            {/* <div className="for_button">
                <div>
                  <Button
                    className="button1 px-3 mx-3"
                    id="demo-customized-button"
                    aria-controls="demo-customized-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    variant="contained"
                    disableElevation
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon />}
                  >
                    All
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
                      Completed
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                      Cancelled
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                      Pending
                    </MenuItem>
                  </StyledMenu>
                </div>
              </div> */}
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
                      {GetOrders.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                        .filter((admin) => {
                          if (filter === "") {
                            return GetOrders;
                          } else if (
                            (admin.order_id &&
                              admin.order_id
                                .toString()
                                .includes(filter.toString().toUpperCase())) ||
                            (admin.customer.first_name &&
                              admin.customer.first_name
                                .toString()
                                .includes(filter.toString().toUpperCase())) ||
                            (admin.customer.last_name &&
                              admin.customer.last_name
                                .toString()
                                .toUpperCase()
                                .includes(filter.toString().toUpperCase())) ||
                            (admin.phone &&
                              admin.phone
                                .toString()
                                .includes(filter.toString()))
                          ) {
                            return GetOrders;
                          }
                        })
                        .map((getorderss) => {
                          return (
                            <TableRow
                              hover
                              role="checkbox"
                              tabIndex={-1}
                              key={getorderss.code}
                            >
                              <TableCell>{getorderss.order_id}</TableCell>
                              <TableCell>{getorderss.created_at}</TableCell>
                              <TableCell>
                                {getorderss.customer.first_name}&nbsp;
                                {getorderss.customer.last_name}
                              </TableCell>
                              <TableCell>no data</TableCell>
                              <TableCell>no data</TableCell>
                              <TableCell>{getorderss.shop.name}</TableCell>
                              <TableCell>{getorderss.status}</TableCell>
                              <TableCell>
                                <div className="App">
                                  <span
                                    onClick={() => {
                                      navigate(
                                        `/OrderDetail/${getorderss.order_id}`
                                      );
                                    }}
                                    className="view fw-bolder"
                                  >
                                    <VisibilityOutlinedIcon />
                                  </span>

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
                <div className="d-flex mt-5 my-auto">
                  <p className="text-muted ms-3">
                    Showing&nbsp;1&nbsp;of&nbsp;11 &nbsp; enteries
                  </p>
                  <div className="ms-auto my-auto">
                    <ReactPaginate
                      previousLabel={<ArrowCircleLeftRoundedIcon />}
                      nextLabel={<ArrowCircleRightRoundedIcon />}
                      pageCount={pageCount}
                      pageRange={5}
                      marginPagesDisplayed={2}
                      // onPageChange={handlePageChange}
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

export default All_Orders;
