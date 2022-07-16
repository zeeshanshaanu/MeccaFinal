import React, { useEffect } from "react";
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
const columns = [
  { id: "name", label: "Name", minWidth: 50, align: "left" },
  { id: "email", label: "Email", minWidth: 50, align: "left" },
  {
    id: "Phone",
    label: "Phone",
    minWidth: 50,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "date",
    label: "Date\u00a0of\u00a0Birth",
    minWidth: 50,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "Join",
    label: "Join\u00a0Date",
    minWidth: 50,
    align: "left",
    format: (value) => value.toFixed(2),
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

function createData(img, name, email, Phone, date, Join, Status, Action) {
  return { img, name, email, Phone, date, Join, Status, Action };
}

const rows = [createData()];
const drawerWidth = 100;
const AllUsers = () => {
  const navigate = useNavigate();

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
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

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
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
                className="button1 px-3 py-1 fw-bolder"
              >
                <small>Add&nbsp;New</small>
              </button>
            </div>{" "}
          </div>
          {/*  */}
          <div className="d-flex justify-content-between my-4">
            <small className="fw-bolder">Search&nbsp;Users</small>
            <div className="position-relative w-75">
              <Form.Group className="" controlId="#">
                <Form.Control
                  type="search"
                  className="input_field w-100"
                  // value={filter}
                  // onChange={(e) => setfilter(e.target.value)}
                />
              </Form.Group>
              <SearchIcon className="Kliquesearch_icon" />
            </div>
            <div className="FilterIcon me-3">
              <FilterAltIcon className="" />
              <span>Filter</span>
            </div>
          </div>
          {/* ===============TABLE================ */}
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
                            <TableCell>
                              <img
                                src={Logo1}
                                alt="Logo1.ong"
                                className="w-25"
                              />
                              &nbsp;
                              <span className="">john</span>
                            </TableCell>
                            <TableCell>king.khaan@live.com</TableCell>
                            <TableCell>0131646979</TableCell>
                            <TableCell>12-52-1999</TableCell>
                            <TableCell>21-25-2015</TableCell>
                            <TableCell>
                              <span className="Active">Active</span>
                            </TableCell>
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
                                <span
                                  onClick={() => {
                                    navigate("/EditUser");
                                  }}
                                  className="mx-1 view"
                                >
                                  <EditIcon />
                                </span>
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
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default AllUsers;
