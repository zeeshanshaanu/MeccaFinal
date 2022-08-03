import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import ResponsiveDrawer from "../../Pages/Dashboard/Drawer";
import "./Community.css";
import AppBar from "@mui/material/AppBar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Logo1 from "../../Assets/Images/Logo1.png";
import Like from "../../Assets/Images/Like.svg";
import Dislike from "../../Assets/Images/Dislike.svg";
import TextsmsIcon from "@mui/icons-material/Textsms";
import Communitybg from "../../Assets/Images/Communitybg.svg";
import CircularIndeterminate from "../../Components/Loader/Loader";
import ReactPaginate from "react-paginate";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import CloseIcon from "@mui/icons-material/Close";
import CommunityMenu from "../../Components/SelectCatgeriesOption/CommunityMenu";
//////////////============///////////==============///////
//////////////============///////////==============///////

//////////////============///////////==============///////
//////////////============///////////==============///////
const drawerWidth = 100;
//////////////============///////////==============///////
const Community = () => {
  //////////////============///////////==============///////
  //////////////============///////////==============///////
  //////////////============///////////==============///////
  const [anchorEl, setAnchorEl] = useState(null);
  const [pageCount, setPageCount] = useState(1);
  const [entries, setentries] = useState("");
  const [totalentries, settotalentries] = useState("");

  const [Community, setCommunity] = useState([]);
  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  //////////////============///////////==============///////
  //////////////============///////////==============///////



  //   const { id } = useParams();
  const GetCommunity = (currentPage) => {
    setdone(true);
    axios
      .get(`/quoraQuestion/view-all?per_page=8&page=${currentPage}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token_id")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setCommunity(res.data.data.quora_questions);
        setPageCount(res.data.data.last_page);
        console.log(pageCount);
        setentries(res.data.data.to);
        settotalentries(res.data.data.total);
        setdone(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handlePageChange = async (data) => {
    let currentPage = data.selected + 1;
    const blogs = await GetCommunity(currentPage);
    setCommunity(blogs);
  };
  //
  const { id } = useParams();
  const [done, setdone] = useState(false);
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [created_at, setcreated_at] = useState("");
  const [description, setdescription] = useState([]);
  const [category, setcategory] = useState("");
  const [Image, setImage] = useState([]);
  const [profile, setprofile] = useState([]);
  const [title, settitle] = useState("");
  const [show, setshow] = useState(false);
  //
  const GetShopDetail = (id) => {
    axios
      .get(`quoraQuestion/view?question_id=${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token_id")}`,
        },
      })
      .then((response) => {
        setcreated_at(response.data.data.added_at);
        setdescription(response.data.data.quora_question);
        setcategory(response.data.data.category);
        settitle(response.data.data.added_by.title);
        setImage(response.data.data.image);
        setfirstname(response.data.data.added_by.first_name);
        setlastname(response.data.data.added_by.last_name);
        setprofile(response.data.data.added_by.profile_image);

        setdone(false);
      })
      .catch((err) => console.log(err));
  };
  //////////////============///////////==============///////

  useEffect(() => {
    GetCommunity();
    setdone(true);
    sessionStorage.setItem("id", "14");
  }, []);
  const [pageNumber, setPageNumber] = useState(0);

  const navigate = useNavigate();
  const breadcrumbs = [
    <div
      className="fw-bolder AllUsersBredCrumbs"
      underline="hover"
      key="1"
      color="inherit"
      onClick={() => handleClick()}
    >
      <span
        onClick={() => {
          navigate("/All_Events");
        }}
      >
        Community
      </span>
    </div>,
    <Typography
      key="3"
      color="text.primary"
      className="fw-bolder AllUsersBredCrumbs"
    >
      <span className="foractive">Community</span>
    </Typography>,
  ];
  const [filter, setfilter] = useState("");
  return (
    <div className="TopDiv px-3 pb-5">
      <Box sx={{ display: "flex" }}>
        <div className="for_drawer">
          <ResponsiveDrawer
            heading="Community"
            className="alluser text-dnager"
          />
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
            <div className=" d-flex">
              <Stack spacing={2} className="my-auto">
                <Breadcrumbs
                  separator={<NavigateNextIcon fontSize="small" />}
                  aria-label="breadcrumb"
                >
                  {breadcrumbs}
                </Breadcrumbs>
              </Stack>
              <div className="d-flex my-auto ms-3">
                <div className="card postcards px-2 py-1 ">
                  <p className="m-auto" onClick={() => setfilter("post")}>
                    Post
                  </p>
                </div>
                <div
                  className="card postcards px-2 ms-2"
                  onClick={() => setfilter("question")}
                >
                  <p className="m-auto">Question</p>
                </div>
              </div>
            </div>
            {done ? (
              <div className="stylishLoader">
                <CircularIndeterminate className="allagentsLoader" />
              </div>
            ) : (
              <>
                <div className="d-flex mt-5">
                  <div className="row ">
                    {Community &&
                      Community.filter((data) =>
                        filter == "post" ? data.image != "" : data.image == ""
                      ).map((val) => (
                        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 mt-4">
                          <div className="card p-3 Community_card">
                            <div className="d-flex flex-column">
                              <div className="d-flex">
                                {val.image == "" ? null : (
                                  <img
                                    className="postimgg my-auto"
                                    src={val.image}
                                    //   src={Logo1}
                                    alt=""
                                  />
                                )}
                                <span className="my-auto">
                                  <p className="my-auto mb-0">
                                    {val.added_by.first_name}&nbsp;
                                    {val.added_by.last_name}
                                  </p>
                                  <small>{val.added_by.title}</small>
                                </span>
                                <p className="ms-auto my-auto">
                                  {val.added_at}
                                </p>
                              </div>
                              <p className="ms-1 quoraquestion pt-2">
                                {val.quora_question}
                              </p>
                            </div>
                            <div className="d-flex mt-auto">
                              <div className="my-auto d-flex">
                                <span className="d-flex my-auto">
                                  <img
                                    className="Likeicon my-auto"
                                    src={Like}
                                    alt=""
                                  />
                                  <p className="text-muted my-auto mx-2">
                                    {val.upvotes}
                                  </p>
                                </span>
                                <span className="d-flex my-auto">
                                  <img
                                    className="Likeicon my-auto"
                                    src={Dislike}
                                    alt=""
                                  />
                                  <p className="text-muted my-auto mx-2">
                                    {val.downvotes}
                                  </p>
                                </span>
                                <span
                                  className="d-flex my-auto"
                                  onClick={() => {
                                    GetShopDetail(val.id);
                                    setshow(true);
                                  }}
                                >
                                  <TextsmsIcon className="commentsicon my-auto" />
                                  <p className="text-muted my-auto ms-2">
                                    {val.replies}
                                  </p>
                                </span>
                              </div>
                              <p
                                className="ms-auto my-auto text-danger"
                                onClick={() => {
                                  GetShopDetail(val.id);
                                  setshow(true);
                                }}
                              >
                                Details
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                  {show ? (
                    <div className="forcommunitydetails mt-4">
                      <div className="card p-2">
                        <CloseIcon
                          className="ms-auto for-closeicon"
                          onClick={() => setshow(false)}
                        />
                        <img
                          src={Image}
                          alt="reload"
                          className="Communityimgg"
                        />
                        <center>
                          <img
                            className="forprofile_img"
                            src={profile}
                            alt=""
                          />
                        </center>
                        <p className="text-muted pt-4">
                          {firstname}&nbsp;{lastname}
                        </p>
                        <p className="text-muted">{category}</p>
                        <p className="text-muted">
                          {title === null ? "No Title" : title}
                        </p>
                        <p className="text-muted">{created_at}</p>

                        <div className="card w-100">
                          <div className="d-flex border-bottom mb-0 pt-3">
                            <p className="text-muted">Comments</p>
                            <TextsmsIcon className="text-muted ms-2" />
                          </div>
                          <p className="text-muted">{description}</p>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
                <div className="d-flex mt-5 my-auto">
                  <p className="text-muted ms-3">
                    Showing&nbsp;{entries}&nbsp;of&nbsp;{totalentries}
                    &nbsp; enteries
                  </p>
                  <div className="ms-auto my-auto">
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
              </>
            )}
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Community;
