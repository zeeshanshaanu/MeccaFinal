import React, { useState, useEffect } from "react";
import { Container, Col } from "react-bootstrap";
import "../../Pages/Mecca_Market_section/index.css";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import ResponsiveDrawer from "../Dashboard/Drawer";
import AppBar from "@mui/material/AppBar";
import DeleteIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Form } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import RefreshIcon from "@mui/icons-material/Refresh";
import TickIcon from "../../Assets/Images/TickIcon.png";
///////=========//////////////==========//////////////===========
import axios from "axios";
import ReactPaginate from "react-paginate";
import Notification from "../../Components/AlertNotification/Message";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import CircularIndeterminate from "../../Components/Loader/Loader";
///////=========//////////////==========//////////////===========
///////=========//////////////==========//////////////===========
const AllBlogs = () => {
  const navigate = useNavigate();
  const drawerWidth = 100;
  const [togle, settogle] = useState(true);
  const [status, setstatus] = useState("Published");
  const [viewtoggle, setviewtoggle] = useState(true);
  const [page, setPage] = React.useState(100);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [done, setdone] = useState(false);
  const [GetAllBlogs, setGetAllBlogs] = useState([]);
  const [isDone, setisDone] = useState(false);
  //
  //
  //
  const [per_page, setPageCount] = useState(0);
  const [currentPage, setcurrentPage] = useState(1);
  const [Categoryblog, setCategoryblog] = useState([]);
  const [category, setcategory] = useState("all");
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  //
  const GetAllProf = () => {
    axios
      .get(`blog/view-all`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token_id")}`,
        },
      })
      .then((response) => {
        setGetAllBlogs(response.data.data.blogs);
        // setcurrentPage(currentPage + 1);
        // setPageCount(response.data.last_page_url);
        console.log(response.data);
        setdone(false);
      })
      .catch((err) => console.log(err));
  };
  const handlePageChange = (selectedObject) => {
    console.log(selectedObject);
    setcurrentPage(selectedObject.selected + 1);
    setisDone(true);
    axios
      .get(`/blog/view-all`)
      .then((res) => {
        // setclaims(res.data.otherClaims);
        console.log(res);
        console.log("other");
        // setcurrentPage(currentPage + 1);
        // setPageCount(res.data.totalPages);
        setisDone(false);
      })
      .catch((err) => {
        setisDone(false);
        console.log(err);
      });
  };
  ////////////=============/////////////============
  ////////////=============/////////////============
  ////////////=============/////////////============
  const handleDelete = (blog_id) => {
    console.log(sessionStorage.getItem("token_id"));
    setdone(true);
    axios
      .delete(`/blog/delete?blog_id=${blog_id}`, {
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
  
  const [BlogCat, setBlogCat] = useState([]);
  // const GetBlogCategries = async () => {
  //   axios
  //     .get(`blogCategory/view-all`, {
  //       headers: {
  //         Authorization: `Bearer ${sessionStorage.getItem("token_id")}`,
  //       },
  //     })
  //     .then((response) => {
  //       setBlogCat(response.data.data);
  //       console.log(response.data);
  //       setdone(false);
  //     })
  //     .catch((err) => console.log(err));
  // };
  //
  //
  useEffect(() => {
    // GetBlogCategries();
    GetAllProf();
    setdone(true);
    sessionStorage.setItem("id", "7");
    togle ? setstatus("Published") : setstatus("UnPublished");
  }, [togle]);
  // const [users, setUsers] = useState(Kliques.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 9;
  const pagesVisited = pageNumber * usersPerPage;
  const displayUsers = GetAllBlogs.slice(
    pagesVisited,
    pagesVisited + usersPerPage
  ).map((user) => {
    return (
      <>
         <Col lg={3} md={4} sm={6} className="mt-3">
          <div className="icons_position-delete ms-auto me-1">
            <EditOutlinedIcon
              className="forcolor"
              onClick={() => {
                navigate(`/UpdateBlog/${user.id}`);
              }}
            />
            <DeleteIcon className="forcolor ms-2"
            onClick={() => {
              handleDelete(user.id);
            }} />
          </div>
          <div className="Blog_card mb-5">
            <div className="">
              <img
                src={user.cover_image}
                alt="KliquesDetailBGIMg.png"
                className="KliquesDetailBGIMg"
              />
            </div>
            <div className="mt-4">
              <p class="text-start">
                <span className="text-start">
                  <small>{user.created_at}</small>
                </span>
                &nbsp;
              </p>{" "}
            </div>
            <div className="mt-3">
              <p class=" det fw-bolder">{user.title}&nbsp;</p>
            </div>
            {/*  */}
            <div className="">
              <p class=" ">
                <span className="">{user.category}</span>
              </p>{" "}
            </div>
            {/*  */}
            <hr />
            <div class="Completed">
            <p class="">
              <small
                dangerouslySetInnerHTML={{
                  __html: user.description,
                }}
              />
             </p>
           </div>
            <div
              className="viewblog fw-bolder text-danger pt-3"
                            onClick={() => {
                navigate(`/ViewBlog/${user.id}`);
              }}
            >
              View&nbsp;blog
            </div>
          </div>
        </Col>
        </>
    );
  })
  
  const pageCount = Math.ceil(GetAllBlogs.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="TopDiv">
      <Box sx={{ display: "flex" }}>
        <div className="for_drawer">
          <ResponsiveDrawer heading="Blogs" className="alluser" />
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
          <div className=" pt-5">
            <Container fluid>
              <div className="d-flex justify-content-between ">
                <div className="">
                  <h4 className="">All Blogs</h4>
                </div>
                <div className="">
                  <button
                    onClick={() => {
                      navigate("/AddNewBlog");
                    }}
                    className="button1 px-4 py-2 fw-bolder"
                  >
                    <small>Add&nbsp;New</small>
                  </button>
                </div>{" "}
              </div>
              <div className="d-flex justify-content-between my-4">
                <div className="d-flex">
                  <div className="FilterIcon">
                    <RefreshIcon className="" />
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
              {/*  */}
              {/*  */}
              <div className="">
                <div className="mt-5 forscrollX mx-2">
                  <h5 className="mt-1 me-3 ">Categories:</h5>
                  <div className="d-flex">
                    <button
                      className={
                        category === "all"
                          ? "EducViewActive "
                          : "EducNonActiveClass"
                      }
                      onClick={() => setcategory("all")}
                    >
                      {category === "all" ? (
                        <img src={TickIcon} alt="" className="" />
                      ) : null}
                      &nbsp;All
                    </button>
                    {BlogCat.map((data, index) => (
                      <div className="" key={index}>
                        <button
                          className={
                            category === data.name
                              ? "EducViewActive"
                              : "EducNonActiveClass"
                          }
                          onClick={() => setcategory(data.name)}
                        >
                          {category === data.name ? (
                            <img src={TickIcon} alt="" className="me-2" />
                          ) : null}
                          {data.name}
                        </button>
                      </div>
                    ))}
                  </div>
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
          <Notification notify={notify} setNotify={setNotify} />
        </Box>
      </Box>
    </div>
  );
};

export default AllBlogs;
