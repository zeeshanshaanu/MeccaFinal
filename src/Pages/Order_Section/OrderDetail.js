import React from "react";
import { Form, Row, Col, Container } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
import ResponsiveDrawer from "../../Pages/Dashboard/Drawer";
import "../../Pages/User_Section/AllUser.css";
import Box from "@mui/material/Box";
import GradeIcon from "@mui/icons-material/Grade";

// table
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import AppBar from "@mui/material/AppBar";
import "./Orders.css";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import EventImg1 from "../../Assets/Images/EventImg1.png";
//
//
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    <span className="threedots" />
  </a>
));
//
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
    label: "ID",
    minWidth: 30,
    align: "left",
  },
  { label: "Customer", minWidth: 100, align: "left" },
  { label: "Product", minWidth: 100, align: "left" },
  {
    label: "Created On",
    minWidth: 100,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    label: "Pirce",
    minWidth: 100,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    label: "Delivery Status",
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
    align: "center",
    format: (value) => value.toFixed(2),
  },
];

function createData(
  ID,
  Customer,
  Product,
  Created,
  Pirce,
  Delivery,
  Status,
  Action
) {
  return {
    ID,
    Customer,
    Product,
    Created,
    Pirce,
    Delivery,
    Status,
    Action,
  };
}

const rows = [
  createData(
    "001",
    "john",
    "Shirt",
    "01-08-2021",
    "$121",
    "Delivered",
    "Active",
    <h2>:</h2>
  ),
];
const drawerWidth = 100;
const OrderDetail = () => {
  const navigate = useNavigate();
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
    <Typography
      key="3"
      color="text.primary"
      className="fw-bolder AllUsersBredCrumbs "
    >
      <span
        className="foractive"
        onClick={() => {
          navigate("/OrderDetail");
        }}
      >
        OrderDetail
      </span>
    </Typography>,
  ];

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
    <div className="TopDiv pb-5">
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
          <div className="d-flex justify-content-between ms-lg-3 my-4 mt-5">
            <Stack spacing={2}>
              <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
              >
                {breadcrumbs}
              </Breadcrumbs>
            </Stack>
            <div className="d-flex">
              <div className="position-relative">
                <Form.Group className="mx-3" controlId="#">
                  <Form.Control
                    type="search"
                    className="input_field w-100"
                    placeholder="Search"
                    // value={filter}
                    // onChange={(e) => setfilter(e.target.value)}
                  />
                </Form.Group>
                <SearchIcon className="search_icon" />
              </div>
              <div className="for_button">
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
              </div>
            </div>
          </div>
          {/* ===============TABLE================ */}
          {/* <div className="Table mx-lg-3">
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
                    {rows
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.code}
                          >
                            <TableCell>001</TableCell>
                            <TableCell>john</TableCell>
                            <TableCell>Shirt</TableCell>
                            <TableCell>01-08-2021</TableCell>
                            <TableCell>$121</TableCell>
                            <TableCell>Delivered</TableCell>
                            <TableCell>Active</TableCell>
                            <TableCell>
                              <div className="App">
                                <Dropdown>
                                  <Dropdown.Toggle as={CustomToggle} />
                                  <Dropdown.Menu size="xs" title="">
                                    <Dropdown.Item>
                                      {" "}
                                      <span
                                        onClick={() => {
                                          navigate("#");
                                        }}
                                        className="abc"
                                      >
                                        View Detail{" "}
                                      </span>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                      <span className="abc" onClick={() => {}}>
                                        Delete
                                      </span>
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </div> */}
          {/*  */}
          {/*  */}
          {/*  */}
          <Container fluid>
            <Row className="Invoice   px-3 mt-5">
              <Col className="">
                <p className="fw-bolder">Invoice</p>
                <div className="ms-3 mt-5">
                  <div className="table">
                    <p className="fw-bolder">Order Details</p>
                    <table className="forwidth">
                      {/*  */}
                      <tr>
                        <td className="ContentColor">Amount</td>
                        <td className="for_text_align">
                          <span className="fw-bolder">$25</span>
                        </td>
                      </tr>
                      {/*  */}
                      <tr>
                        <td className="ContentColor">Inc. Tax</td>
                        <td className="for_text_align">
                          <span className="fw-bolder">$2</span>
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
                        <td className="fw-bolder">Total</td>
                        <td className="for_text_align">
                          <span className="fw-bolder">$27</span>
                        </td>
                      </tr>
                    </table>
                  </div>
                  {/*  */}
                  {/*  */}
                  {/*  */}

                  <div className="table">
                    <p className="fw-bolder mt-4">Customer Details</p>
                    <table className="forwidth">
                      {/*  */}
                      <tr>
                        <td className="ContentColor">Customer&nbsp;Name</td>
                        <td className="for_text_align">
                          <span className="fw-bolder">John&nbsp;Doe</span>
                        </td>
                      </tr>
                      {/*  */}
                      <tr>
                        <td className="ContentColor">Email</td>
                        <td className="for_text_align">
                          <span className="fw-bolder">Abc@gmail.com</span>
                        </td>
                      </tr>
                      {/*  */}
                      <tr>
                        <td className="ContentColor">Phone&nbsp;Number</td>
                        <td className="for_text_align">
                          <span className="fw-bolder">+92 312 1234567</span>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </Col>
              {/*  */}
              {/*  */}
              {/*  */}
              <Col className="Rating_content bg-white p-4">
                <div className="RatingStars">
                  <p className="fw-bolder">Reviews and Ratings</p>
                  <span className="fw-bolder">5.0</span>&nbsp;
                  <GradeIcon className="text-warning Rating_Icon" />
                  <GradeIcon className="text-warning Rating_Icon" />
                  <GradeIcon className="text-warning Rating_Icon" />
                  <GradeIcon className="text-warning Rating_Icon" />
                  <GradeIcon className="text-warning Rating_Icon" />
                </div>
                {/*  */}
                {/*  */}
                {/*  */}
                {/*  */}
                <div className="d-flex mt-5">
                  <div className="img">
                    <img
                      src={EventImg1}
                      alt="EventImg1.png"
                      className="ratingIMg mt-1"
                    />
                  </div>
                  <div className="">
                    <div className="d-flex justify-content-between">
                      <div className="">
                        <p className="ReviewierName">Malik&nbsp;Haris</p>
                      </div>
                      <div className="">
                        <span className="fw-bolder">
                          <small>5.0</small>
                        </span>
                        &nbsp;
                        <span>
                          <GradeIcon className="text-warning yellowstar" />
                          <GradeIcon className="text-warning yellowstar" />
                          <GradeIcon className="text-warning yellowstar" />
                          <GradeIcon className="text-warning yellowstar" />
                          <GradeIcon className="text-warning yellowstar" />
                        </span>
                      </div>
                    </div>
                    <div className="textHeight ReviewierName">
                      <small>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ullamcorper quam non ut aliquet turpis sed.
                      </small>
                    </div>
                  </div>
                </div>
                {/*  */}
                {/*  */}
                {/*  */}
                {/*  */}
                <div className="d-flex mt-5">
                  <div className="img">
                    <img
                      src={EventImg1}
                      alt="EventImg1.png"
                      className="ratingIMg mt-1"
                    />
                  </div>
                  <div className="">
                    <div className="d-flex justify-content-between">
                      <div className="">
                        <p className="ReviewierName">Malik&nbsp;Haris</p>
                      </div>
                      <div className="">
                        <span className="fw-bolder">
                          <small>5.0</small>
                        </span>
                        &nbsp;
                        <span>
                          <GradeIcon className="text-warning yellowstar" />
                          <GradeIcon className="text-warning yellowstar" />
                          <GradeIcon className="text-warning yellowstar" />
                          <GradeIcon className="text-warning yellowstar" />
                          <GradeIcon className="text-warning yellowstar" />
                        </span>
                      </div>
                    </div>
                    <div className="textHeight ReviewierName">
                      <small>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ullamcorper quam non ut aliquet turpis sed.
                      </small>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default OrderDetail;
