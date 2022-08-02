import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import ResponsiveDrawer from "../../Pages/Dashboard/Drawer";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { Col } from "react-bootstrap";
import "./Events.css";
import AppBar from "@mui/material/AppBar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import EventImg1 from "../../Assets/Images/EventImg1.png";
//////////////============///////////==============///////
//////////////============///////////==============///////
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import CircularIndeterminate from "../../Components/Loader/Loader";
//////////////============///////////==============///////
//////////////============///////////==============///////
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
//////////////============///////////==============///////
//////////////============///////////==============///////
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChatIcon from "@mui/icons-material/Chat";
//////////////============///////////==============///////
//////////////============///////////==============///////
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));
const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
//
//////////////============///////////==============///////
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
//////////////============///////////==============///////
//////////////============///////////==============///////
const drawerWidth = 100;
//////////////============///////////==============///////
const EventDetail = () => {
  //////////////============///////////==============///////
  //////////////============///////////==============///////
  //////////////============///////////==============///////
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //////////////============///////////==============///////
  //////////////============///////////==============///////
  const [expanded, setExpanded] = React.useState("panel1");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const { id } = useParams();
  //////////////============///////////==============///////
  const [ReplayHide, setReplayHide] = useState(false);
  const [CommentID, setCommentID] = useState(0);
  //////////////============///////////==============///////

  const HandleHide = () => {
    // CommentID == id ? setReplayHide(!ReplayHide) : console.log("hello");
    // console.log(CommentID);
    setReplayHide(!ReplayHide)
   };

  //////////////============///////////==============///////
  //////////////============///////////==============///////
  const [done, setdone] = useState(false);
  const [title, settitle] = useState([]);
  const [status, setstatus] = useState([]);
  const [type, settype] = useState([]);
  const [start_at_time, setstart_at_time] = useState([]);
  const [end_at_time, setend_at_time] = useState([]);
  const [description, setdescription] = useState([]);
  const [category, setcategory] = useState([]);
  const [sub_category, setsub_category] = useState([]);
  const [Image, setImage] = useState([]);
  const [registrationfee, setRegistrationFee] = useState([]);
  const [locationAddress, setlocationAddress] = useState([]);
  const [schedule_at, setschedule_at] = useState([]);
  //////////////============///////////==============///////
  const [ticket_available_from, setticket_available_from] = useState([]);
  const [ticket_available_to, setticket_available_to] = useState([]);
  //////////////============///////////==============///////
  const [website_url, setwebsite_url] = useState([]);
  const [video_url, setvideo_url] = useState([]);
  const [media_url, setmedia_url] = useState([]);
  const [meeting_url, setmeeting_url] = useState([]);
  //////////////============///////////==============///////
  const [OrganizerImg, setOrganizerImg] = useState([]);
  const [OrgFirstName, setOrgFirstName] = useState([]);
  const [OrgLastName, setOrgLastName] = useState([]);
  const [OrgEmail, setOrgEmail] = useState([]);
  //////////////============///////////==============///////
  const [Attendees, setAttendees] = useState([]);
  const [Faqs, setFaqs] = useState([]);
  const [comments, setComments] = useState([]);
  const [Totalcomments, setTotalComments] = useState([]);
  const [show, setshow] = useState(false);
  const [eventid, seteventid] = useState("");
  //////////////============///////////==============///////
  //////////////============///////////==============///////
  //////////////============///////////==============///////
  //////////////============///////////==============///////
  //////////////============///////////==============///////
  const images = [];
  const GetShopDetail = async () => {
    await axios
      .get(`/event/view?event_id=${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token_id")}`,
        },
      })

      .then((response) => {
        console.log(response);
        seteventid(response.data.data.event_id);
        response.data.data.attendees.map((data) =>
          images.push(data.profile.image)
        );
        console.log(images && images);
        settitle(response.data.data.title);
        settype(response.data.data.type);
        setstatus(response.data.data.status);
        setstart_at_time(response.data.data.start_at_time);
        setend_at_time(response.data.data.end_at_time);
        setdescription(response.data.data.description);
        setcategory(response.data.data.category);
        setsub_category(response.data.data.sub_category);
        setImage(response.data.data.cover_image);
        setRegistrationFee(response.data.data.registration_fee);
        setlocationAddress(response.data.data.location_address);
        setschedule_at(response.data.data.schedule_at);
        //////////////===========LINKS=///////////==============///////////
        setwebsite_url(response.data.data.website_url);
        setvideo_url(response.data.data.video_url);
        setmedia_url(response.data.data.media_url);
        setmeeting_url(response.data.data.meeting_url);
        //////////////============Organizer///////////==============///////
        setOrganizerImg(response.data.data.created_by.image);
        setOrgFirstName(response.data.data.created_by.first_name);
        setOrgLastName(response.data.data.created_by.last_name);
        setOrgEmail(response.data.data.created_by.email);
        //////////////============///Attendees////////==============///////
        setAttendees(response.data.data.attendees);
        setFaqs(response.data.data.faqs);
        setComments(response.data.data.comments);
        //////////////============///////////==============////////////////
        //////////////============///////////==============////////////////
        setticket_available_from(response.data.data.ticket_available_from);
        setticket_available_to(response.data.data.ticket_available_to);
        setTotalComments(response.data.data.total_comments);
        //////////////============///////////==============///////
        setdone(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    GetShopDetail();
    setdone(true);
  }, []);
  //////////////============///////////==============///////
  //////////////============///////////==============///////
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
        AllEvents
      </span>
    </div>,
    <Typography
      key="3"
      color="text.primary"
      className="fw-bolder AllUsersBredCrumbs"
    >
      <span className="foractive">EventDetail</span>
    </Typography>,
  ];
  return (
    <div className="TopDiv px-3 pb-5">
      <Box sx={{ display: "flex" }}>
        <div className="for_drawer">
          <ResponsiveDrawer heading="Events" className="alluser text-dnager" />
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
            <div className=" d-flex justify-content-between">
              <Stack spacing={2}>
                <Breadcrumbs
                  separator={<NavigateNextIcon fontSize="small" />}
                  aria-label="breadcrumb"
                >
                  {breadcrumbs}
                </Breadcrumbs>
              </Stack>
              <div className="d-flex">
                <button
                  onClick={() => {
                    navigate("/All_Events");
                  }}
                  className="button1 px-5 py-2 mx-2"
                >
                  <small>Back</small>
                </button>
              </div>{" "}
            </div>
            {/*  */}
            {done ? (
              <div className="stylishLoader">
                <CircularIndeterminate className="allagentsLoader" />
              </div>
            ) : (
              <div className="">
                <div className="mt-4">
                  <img
                    src={Image}
                    alt="EventDetailBGImg.png"
                    className="w-100 SpecficImg"
                  />
                  <div className="Buttons">
                    <div className="d-flex">
                      <p className="fw-bolder Download2 px-3 py-2 mx-2">
                        <small>${registrationfee}</small>
                      </p>
                    </div>{" "}
                  </div>
                </div>
                {/*  */}
                <div className="Next-Content">
                  <div className="mb-4 d-flex justify-content-between ">
                    <h4 className="fw-bolder">{title}</h4>
                    <div className="">
                      <h5 class="text-left">
                        Status:&nbsp;
                        {status === "active" ? (
                          <span className="text-success">{status}</span>
                        ) : (
                          <>{status}</>
                        )}
                      </h5>
                      <div className="">
                        <h5 class="text-left">
                          Type:&nbsp;
                          {type === "online" ? (
                            <span className="text-success">{type}</span>
                          ) : (
                            <>
                              <span className="text-warning">{type}</span>
                            </>
                          )}
                        </h5>
                      </div>
                      {/* /////////////==========COMMENT BOX=///////////////========////////// */}
                      {/* /////////////==========COMMENT BOX=///////////////========////////// */}
                      {/* /////////////==========COMMENT BOX=///////////////========////////// */}
                      <div className="Comment_Box mt-5">
                        <div className="">
                          <div>
                            <span
                              className="forcolor pb-3"
                              id="demo-customized-button"
                              aria-controls={
                                open ? "demo-customized-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={open ? "true" : undefined}
                              variant="contained"
                              disableElevation
                              onClick={handleClick}
                              endIcon={<KeyboardArrowDownIcon />}
                            >
                              <ChatIcon />
                              &nbsp; Total {Totalcomments} Comments
                            </span>
                            <StyledMenu
                              id="demo-customized-menu"
                              anchorEl={anchorEl}
                              open={open}
                              onClose={handleClose}
                            >
                              <div className="BoxWidth p-4">
                                <span className="text-end forcolor">
                                  Comment & Replys
                                </span>
                                <div className="mb-4">
                                  {comments.map((GetComments) => {
                                    return (
                                      <>
                                        <div className="mt-3">
                                          <div className="d-flex">
                                            <div className="">
                                              <img
                                                src={EventImg1}
                                                alt=""
                                                className="CommentImg"
                                              />
                                            </div>
                                            &nbsp;
                                            <div>
                                              <small>
                                                {
                                                  GetComments.comment_by
                                                    .first_name
                                                }
                                                &nbsp;
                                                {
                                                  GetComments.comment_by
                                                    .last_name
                                                }
                                              </small>
                                              <div className="">
                                                <small>
                                                  {GetComments.body}
                                                </small>
                                              </div>
                                            </div>
                                            <div className="text-end w-100">
                                              <div className="">
                                                <small>
                                                  {GetComments.published_at}
                                                </small>
                                              </div>
                                              <span
                                                className="float-end text-primary forcolor"
                                                onClick={() => {
                                                  // setCommentID(GetComments.id);
                                                  HandleHide()
                                                }}
                                              >
                                                {" "}
                                                {ReplayHide ? (
                                                  <small>Hide Replys</small>
                                                ) : (
                                                  <small>
                                                    {GetComments.childs.length}
                                                    &nbsp;Replys
                                                  </small>
                                                )}
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                        {GetComments.childs &&
                                          GetComments.childs.map((GetRplys) => {
                                            return (
                                              <>
                                                <div className="my-4 ms-4 ">
                                                  {ReplayHide ? (
                                                    <div className="d-flex my-auto">
                                                      <div className="my-auto">
                                                        <img
                                                          src={EventImg1}
                                                          alt=""
                                                          className="CommentImg"
                                                        />
                                                      </div>
                                                      &nbsp;
                                                      <div className="my-auto">
                                                        <small>
                                                          {
                                                            GetRplys.comment_by
                                                              .first_name
                                                          }
                                                          &nbsp;
                                                          {
                                                            GetRplys.comment_by
                                                              .last_name
                                                          }
                                                        </small>
                                                        <div className="">
                                                          <small>
                                                            {GetRplys.body}
                                                          </small>
                                                        </div>
                                                      </div>
                                                      <div className="text-end w-100">
                                                        <small>
                                                          {
                                                            GetRplys.published_at
                                                          }
                                                        </small>
                                                      </div>
                                                    </div>
                                                  ) : null}
                                                </div>
                                              </>
                                            );
                                          })}
                                        <hr />
                                      </>
                                    );
                                  })}
                                </div>
                              </div>
                            </StyledMenu>
                          </div>
                        </div>
                      </div>
                      {/* /////////////==========COMMENT BOX=///////////////========////////// */}
                      {/* /////////////==========COMMENT BOX=///////////////========////////// */}
                      {/* /////////////==========COMMENT BOX=///////////////========////////// */}
                    </div>
                  </div>
                  <div className="d-flex">
                    <div>
                      <p className="Triatholon px-3 py-1">{category}</p>
                    </div>
                    <div>
                      <p className="Triatholon mx-2 px-3 py-1">
                        {sub_category}
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <FmdGoodOutlinedIcon className="ContentColor" />
                    &nbsp;
                    <span className="ContentColor">{locationAddress}</span>
                  </div>
                  <div className="my-2">
                    <AccessTimeOutlinedIcon className="ContentColor" />
                    &nbsp;
                    <span className="ContentColor">
                      {start_at_time} - {end_at_time}
                    </span>
                  </div>
                  <div className="my-2">
                    <DateRangeIcon className="ContentColor" />
                    &nbsp;
                    <span className="ContentColor">{schedule_at}</span>
                  </div>
                  <div className="my-2">
                    <span className="fw-bolder">
                      Ticket Availability Date :{" "}
                    </span>
                    &nbsp;
                    <span className="ContentColor">
                      {ticket_available_from}&nbsp;-&nbsp;{ticket_available_to}
                    </span>
                  </div>
                  {/*  */}
                  {/*  */}
                  {/*  */}
                  {/*  */}
                  {/*  */}
                  {/*  */}
                  <div className="mt-4 text-decoration-none d-flex">
                    <LanguageOutlinedIcon
                      className=" text-danger ContentColor"
                      onClick={() => window.open(website_url)}
                    />
                    &nbsp;
                    <p onClick={() => window.open(website_url)}>
                      {" "}
                      <span className="ContentColor text-decoration-none">
                        {" "}
                        Visit Website{" "}
                      </span>
                    </p>
                  </div>
                  {/*  */}
                  {/*  */}
                  <div
                    className="mt-2 d-flex"
                    onClick={() => window.open(website_url)}
                  >
                    <SubscriptionsOutlinedIcon
                      className="text-danger"
                      onClick={() => window.open(website_url)}
                    />
                    &nbsp;
                    <span className="ContentColor text-decoration-none">
                      {" "}
                      <p>Watch video </p>
                    </span>
                  </div>
                  {/*  */}
                  {/*  */}
                  <div className="mt-2 d-flex">
                    <PeopleAltOutlinedIcon
                      className=" text-danger ContentColor"
                      onClick={() => window.open(website_url)}
                    />
                    &nbsp;
                    <span className="ContentColor text-decoration-none">
                      <p onClick={() => window.open(website_url)}>
                        Join Meeting{" "}
                      </p>
                    </span>
                  </div>
                  {/*  */}
                  {/*  */}
                  <div className="mt-2 mb-4 d-flex">
                    <CollectionsOutlinedIcon
                      className=" text-danger ContentColor"
                      onClick={() => window.open(website_url)}
                    />
                    &nbsp;
                    <p onClick={() => window.open(website_url)}>View media </p>
                  </div>
                  {/*  */}
                  {/*  */}
                  {/*  */}
                  {/*  */}
                  <div className="mt-4 w-50">
                    <p className="fw-bolder">Description</p>
                    <small className="">
                      <span className=" ">{description}</span>
                    </small>
                  </div>
                  {/*  */}
                  {/*  */}
                  {/*  */}
                  {/*  */}
                  <div>
                    <div className="mt-4">
                      <p className="fw-bolder">Attendees</p>
                    </div>
                    <div className="d-flex">
                      <div class="avatars d-flex">
                        {Attendees.length === 0
                          ? "Not Registration Yet"
                          : Attendees.slice(0, 4).map((data) => (
                              <div
                                className="avatar"
                                onClick={() => {
                                  navigate(`/AttendeesDetails/${eventid}`);
                                }}
                              >
                                <img
                                  className="AttendeesImgWidth"
                                  src={data.profile.image}
                                />
                              </div>
                            ))}
                      </div>
                      {Attendees.map((data) => data.profile.image).length >
                      4 ? (
                        <p className="text-muted my-auto ms-3">
                          {Attendees.map((data) => data.profile.image).length >
                          4
                            ? Attendees.map((data) => data.profile.image)
                                .length - 4
                            : Attendees.map((data) => data.profile.image)
                                .length}{" "}
                          Total Attendees
                        </p>
                      ) : null}
                    </div>
                  </div>
                  {/*  */}
                  {/*  */}
                  {/*  */}
                  {/*  */}
                  <div className="FAQS_And_Comments ">
                    <p className="fw-bolder mt-4">FAQS</p>
                    {/*  */}

                    <div className="">
                      {Faqs.length == 0 ? (
                        <span className="">No Faqs</span>
                      ) : (
                        Faqs.map((getFaq) => {
                          return (
                            <>
                              <Accordion
                                className="my-3 w-50"
                                expanded={expanded === "panel2"}
                                onChange={handleChange("panel2")}
                              >
                                <AccordionSummary
                                  style={{
                                    backgroundColor: "#F65824",
                                    width: "100%",
                                  }}
                                  aria-controls="panel1d-content"
                                  id="panel1d-header"
                                >
                                  <div className="d-flex justify-content-between">
                                    <Typography className="  applicationh1 text-white fw-bolder">
                                      {getFaq.question}
                                    </Typography>
                                  </div>
                                </AccordionSummary>
                                <AccordionDetails>
                                  <Typography>
                                    <p className="text-start fw-bolder">
                                      Answer:
                                    </p>
                                    <p className=" fw-bolder">
                                      {" "}
                                      {getFaq.answer}
                                    </p>
                                  </Typography>
                                </AccordionDetails>
                              </Accordion>
                            </>
                          );
                        })
                      )}
                    </div>
                  </div>
                  {/*  */}
                  {/*  */}
                  {/*  */}
                  {/*  */}
                  <Col xxl={2} lg={3} md={4} sm={6} className="mt-3">
                    <p className="fw-bolder">Organizer</p>
                    <div className="Product_card mb-5 h-auto">
                      <div className="card_image">
                        <img
                          src={OrganizerImg}
                          alt="EventImg1.png"
                          className="EventDetailProductImg"
                        />
                      </div>
                      <div className="mt-2">
                        <p class="">
                          {OrgFirstName}&nbsp;{OrgLastName}
                        </p>
                        <p class="fw-bolder ProductCardTextColor">{OrgEmail}</p>
                      </div>
                    </div>
                  </Col>
                </div>
              </div>
            )}
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default EventDetail;
