import React, { useState, useEffect } from "react";
import ResponsiveDrawer from "../../Pages/Dashboard/Drawer";
import "../../Pages/User_Section/AllUser.css";
import Box from "@mui/material/Box";
import axios from "axios";

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
//
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import GradeIcon from "@mui/icons-material/Grade";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import AppBar from "@mui/material/AppBar";
import { Form } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
import "./MeccaMarket.css";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import CircularIndeterminate from "../../Components/Loader/Loader";
//
//
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
const columns = [
  { label: "Title", minWidth: 130, align: "left" },
  // { label: "Rating", minWidth: 150, align: "left" },
  {
    label: "Sku",
    minWidth: 150,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    label: "Shop",
    minWidth: 100,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    label: "Category",
    minWidth: 180,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    label: "Pirce",
    minWidth: 120,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    label: "Stock",
    minWidth: 180,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    label: "Rating",
    minWidth: 180,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    label: "Added By",
    minWidth: 100,
    align: "left",
    format: (value) => value.toFixed(2),
  },
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
const AllItems = () => {
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
  // 
  // 
  // 
  const [filter, setfilter] = useState("");
  const [GetItems, setGetItems] = useState([]);
  const [done, setdone] = useState(false);
  // const [per_page, setper_page] = useState(100);

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
        All Items
      </span>
    </Typography>,
  ];
  const GetAllProductItem = () => {
    axios
      .get(`product/view-all?per_page=${100}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token_id")}`,
        },
      })
      .then((response) => {
        setGetItems(response.data.data.products);
        // console.log(response.data.data.products);
        setdone(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    sessionStorage.setItem("id", "4");
    GetAllProductItem();
    setdone(true);
  }, []);
  return (
    <div className="TopDiv">
      <Box sx={{ display: "flex" }}>
        <div className="for_drawer">
          <ResponsiveDrawer heading="Mecca Market" className="alluser" />
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
           <div className="mt-5 py-4">
              <Stack spacing={2}>
              <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
              >
                {breadcrumbs}
              </Breadcrumbs>
            </Stack>
              </div>
          <div className="d-flex justify-content-between">
            <div className="me-3  ">
              <Button
                id="demo-customized-button"
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon className="AllShopes" />}
              >
                <span className="AllShopes">All&nbsp;Items</span>
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
                <MenuItem
                  disableRipple
                  onClick={() => {
                    navigate("/AllShopes");
                  }}
                >
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
            {/*  */}
            <div className="d-flex justify-content-between  ">
              <small className="fw-bolder  my-auto">Search&nbsp;Items</small>
              <div className="position-relative w-100 my-auto">
                <Form.Group className="mx-3" controlId="#">
                  <Form.Control
                    type="search"
                    className="input_field"
                  // value={filter}
                  // onChange={(e) => setfilter(e.target.value)}
                  />
                </Form.Group>
                <SearchIcon className="search_icon ms-2 ps-1" />
              </div>
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
              <TableContainer sx={{ minWidth: 1080 }}>
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
                    {GetItems.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                      .map((index) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={index.code}
                          >
                            <TableCell>
                              <img
                                src={Logo1}
                                alt="Logo1.ong"
                                className="w-25"
                              />
                              &nbsp;
                              <span>{index.title}</span>
                            </TableCell>
                            <TableCell>{index.sku}</TableCell>
                            <TableCell>{index.shops.map((getshopname)=>{
                              return(
                                <>{getshopname.name}<br /></>
                              )
                            }) }</TableCell>
                            <TableCell>{index.category}</TableCell>
                            <TableCell>${index.price}</TableCell>
                            {/* <TableCell>
                              <span className="S">{index.compare_at_price}</span>{" "}
                              <span className="M">{index.compare_at_price}</span>
                            </TableCell> */}
                            <TableCell>{index.available_quantity}&nbsp;<span className="fw-bolder">In stock</span></TableCell>
                              <TableCell>
                              <GradeIcon className="text-warning Rating_Icon" />
                              <GradeIcon className="text-warning Rating_Icon" />
                              <GradeOutlinedIcon className="text-warning Rating_Icon" />
                            </TableCell>
                            {/* <TableCell className="">
                              <span className="Orange">{index.compare_at_price}</span>&nbsp;
                              <span className="Green">{index.compare_at_price}</span>&nbsp;
                              <span className="Blue">{index.compare_at_price}</span>
                              </TableCell> */}
                             <TableCell>{index.added_by.first_name}&nbsp;{index.added_by.last_name}</TableCell>
                             
                          
                            <TableCell>
                              {" "}
                              <span >
                                {index.isActive === 1 ? (
                                  <small className="Available" >Available</small>
                                ) :
                                  (
                                    <small className="UnAvailable">Out&nbsp;of&nbsp;Stock</small>
                                  )}
                              </span>
                            </TableCell>
                            <TableCell>
                              <div className="App">
                                <span
                                  onClick={() => {
                                    navigate("/Viewitem");
                                  }}
                                  className="view"
                                >
                                  <VisibilityOutlinedIcon />
                                </span>
                                <span className="view mx-2" onClick={() => { }}>
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
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={GetItems.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </div>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default AllItems;
