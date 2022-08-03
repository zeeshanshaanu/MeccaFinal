import ResponsiveDrawer from "../../Pages/Dashboard/Drawer";
import CircularIndeterminate from "../../Components/Loader/Loader";
import "../User_Section/AllUser.css";
import Logo1 from "../../Assets/Images/Logo1.png";
////////==========MUI TABLE==========////////////============/
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import SearchIcon from "@mui/icons-material/Search";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import AppBar from "@mui/material/AppBar";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "bootstrap/dist/css/bootstrap.min.css";
////////==========MUI Breadcrumbs==========////////////============
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import GradeIcon from "@mui/icons-material/Grade";
import ReactPaginate from "react-paginate";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import axios from "axios";
//
const columns = [
  { label: "Name", minWidth: 50, align: "left" },
  { label: "Professional Type", minWidth: 50, align: "left" },
  { label: "Email", minWidth: 50, align: "left" },
  {
    id: "Join",
    label: "Join\u00a0Date",
    minWidth: 50,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    label: "Address",
    minWidth: 50,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "Rating",
    label: "Rating",
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
//==///==///
//==///==///
//==///==///
const AllProfessionals = () => {
  //==///==///
  //==///==///
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
          navigate("/AllProfessionals");
        }}
      >
        Professionals
      </span>
    </Typography>,
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [pageCount, setPageCount] = useState(1);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [per_page, setper_page] = useState("");
  //
  //
  const [done, setdone] = useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [filter, setfilter] = useState("");
  const [GetProfessionals, setGetProfessionals] = useState([]);
  const [Professional_data, setProfessional_data] = useState("");
  const [Professional_data_total, setProfessional_data_total] = useState("");
  const GetAllProf = (currentPage) => {
    axios
      .get(`/get-all-professionals?per_page=8&page=${currentPage}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token_id")}`,
        },
      })
      .then((response) => {
        setGetProfessionals(response.data.data.professionals);
        setPageCount(response.data.data.last_page);
        setProfessional_data(response.data.data.to);
        setProfessional_data_total(response.data.data.total);
        setdone(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    sessionStorage.setItem("id", "3");
    GetAllProf();
    setdone(true);
  }, []);
  //
  const handlePageChange = async (data) => {
    let currentPage = data.selected + 1;
    const Professional_data = await GetAllProf(currentPage);
    setGetProfessionals(Professional_data);
  };
  //
  //
  //
  //
  return (
    <div className="TopDiv">
      <Box sx={{ display: "flex" }}>
        <div className="for_drawer">
          <ResponsiveDrawer heading="Professionals" className="alluser" />
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
          <div className="d-flex justify-content-between me-3 mt-5">
            <Stack spacing={2}>
              <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
              >
                {breadcrumbs}
              </Breadcrumbs>
            </Stack>
            {/* <div className="">
              <button
                onClick={() => {
                  navigate("/AddProfessionals");
                }}
                className="button1 px-4 py-2 fw-bolder"
              >
                <small>Add&nbsp;New</small>
              </button>
            </div> */}
            {""}
          </div>
          {/*  */}
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
                  placeholder="Professional Name, Email or Type"
                  value={filter}
                  onChange={(e) => setfilter(e.target.value)}
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
                <TableContainer sx={{ maxHeight: 650 }}>
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
                      {GetProfessionals &&
                        GetProfessionals.filter((admin) => {
                          if (filter === "") {
                            return GetProfessionals;
                          } else if (
                            (admin.last_name &&
                              admin.last_name
                                .toString()
                                .includes(filter.toString().toUpperCase())) ||
                            (admin.email &&
                              admin.email
                                .toString()
                                .includes(filter.toString().toUpperCase())) ||
                            (admin.first_name &&
                              admin.first_name
                                .toString()
                                .toUpperCase()
                                .includes(filter.toString().toUpperCase())) ||
                            (admin.phone &&
                              admin.phone
                                .toString()
                                .includes(filter.toString()))
                          ) {
                            return GetProfessionals;
                          }
                        }).map((findProf) => {
                          return (
                            <TableRow
                              hover
                              role="checkbox"
                              tabIndex={-1}
                              key={findProf.code}
                            >
                              <TableCell>
                                <img
                                  src={findProf.image}
                                  alt=""
                                  className="ProfesProfileImg"
                                />
                                &nbsp;
                                <span className="">
                                  {findProf.first_name}&nbsp;
                                  {findProf.last_name}
                                </span>
                              </TableCell>
                              <TableCell>Nothing form server</TableCell>

                              <TableCell>{findProf.email}</TableCell>
                              <TableCell>Nothing form server</TableCell>
                              <TableCell className="w-25">
                                {findProf.address && findProf.address}
                              </TableCell>
                              <TableCell>
                                {" "}
                                <GradeIcon className="text-warning Rating_Icon" />
                                <GradeIcon className="text-warning Rating_Icon" />
                                <GradeIcon className="text-warning Rating_Icon" />
                              </TableCell>
                              {/* <TableCell>
                                {findProf.is_profile_setup === 1 ? (
                                  <div className="text-success">Active</div>
                                ) : (
                                  <div className="text-danger">Inactive</div>
                                )}
                              </TableCell> */}
                              <TableCell>
                                <div className="App">
                                  {" "}
                                  <span
                                    onClick={() => {
                                      navigate(
                                        `/ProfessionalsDetail/${findProf.id}`
                                      );
                                    }}
                                    className="view fw-bolder"
                                  >
                                    <VisibilityOutlinedIcon />
                                  </span>{" "}
                                  {/* <span
                                    onClick={() => {
                                      navigate("/EditProfessionals");
                                    }}
                                    className="view mx-1"
                                  >
                                    <EditIcon />
                                  </span> */}
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
                <div className="d-flex mt-5">
                  <p className="text-muted ms-3">
                    Showing&nbsp;{Professional_data}&nbsp;of{" "}
                    {Professional_data_total} enteries
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
        </Box>
      </Box>
    </div>
  );
};

export default AllProfessionals;
