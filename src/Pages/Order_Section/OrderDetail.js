import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import ResponsiveDrawer from "../../Pages/Dashboard/Drawer";
import "../../Pages/User_Section/AllUser.css";
import Box from "@mui/material/Box";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
// table
import AppBar from "@mui/material/AppBar";
import "./Orders.css";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import EventImg1 from "../../Assets/Images/EventImg1.png";
//
//
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

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
const drawerWidth = 100;
const OrderDetail = () => {
  const { id } = useParams();
  ////////////=====///////////===============/////////////====
  const [done, setdone] = useState(false);
  const [customerFName, setcustomerFName] = useState("");
  const [customerLName, setcustomerLName] = useState("");
  const [CustEmail, setCustEmail] = useState("");
  const [CustShopName, setCustShopName] = useState("");

  ////////////=====///////////===============/////////////====
  const GetShopDetail = () => {
    axios
      .get(`/order/view?order_id=${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token_id")}`,
        },
      })
      .then((response) => {
        setcustomerFName(response.data.data.customer.first_name);
        setcustomerLName(response.data.data.customer.last_name);
        setCustEmail(response.data.data.customer.email);
        setCustShopName(response.data.data.shop.name);
        // setstart_at_time(response.data.data.start_at_time);
        // setend_at_time(response.data.data.end_at_time);
        // setdescription(response.data.data.description);
        // setcategory(response.data.data.category);
        // setsub_category(response.data.data.sub_category);
        // setImage(response.data.data.cover_image);
        // setRegistrationFee(response.data.data.registration_fee);
        // setlocationAddress(response.data.data.location_address);
        // setschedule_at(response.data.data.schedule_at);
        // //////////////===========LINKS=///////////==============///////
        // setwebsite_url(response.data.data.website_url);
        // setvideo_url(response.data.data.video_url);
        // setmedia_url(response.data.data.media_url);
        // setmeeting_url(response.data.data.meeting_url);
        // //////////////============Organizer///////////==============///////
        // setOrganizerImg(response.data.data.created_by.image);
        // setOrgFirstName(response.data.data.created_by.first_name);
        // setOrgLastName(response.data.data.created_by.last_name);
        // //////////////============///Attendees////////==============///////
        // setAttendees(response.data.data.attendees);
        //////////////============///////////==============///////
        setdone(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    GetShopDetail();
    setdone(true);
  }, []);

  ////////////=====///////////===============/////////////====
  ////////////=====///////////===============/////////////====
  ////////////=====///////////===============/////////////====
  ////////////=====///////////===============/////////////====
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
          </div>
          <Container fluid>
            <Row className=" px-3 mt-5">
              <Col lg={8} md={6} sm={12} className="">
                {/* BasicInfo */}
                {/* BasicInfo */}
                {/* BasicInfo */}
                <div className="BasicInfo">
                  <h4 className="fw-bolder mb-2">Basic Information</h4>
                  <div className="d-flex py-3 px-3 bg-danger">
                    <div className="img">
                      <img
                        src={EventImg1}
                        alt=""
                        className="OrderDetailImgWidth"
                      />
                    </div>
                    <div className="ms-3">
                      <p>
                        {customerFName}&nbsp;{customerLName}
                      </p>
                      <p>{CustShopName}</p>
                      <p>{CustEmail}</p>
                    </div>
                  </div>
                </div>
                {/* Shipping Address */}
                {/* Shipping Address */}
                {/* Shipping Address */}
                <div className="Shipping_Address mt-4">
                  <h4 className="fw-bolder mb-2">Shipping Address</h4>
                  <div className="py-3 px-3 bg-danger">
                    {/*  */}
                    {/*  */}
                    <div className="d-flex justify-content-between">
                      <div className="">
                      <p className="text-white fw-bolder">Company</p>
                      </div>
                      <div>
                      {/* <p>{address1}</p> */}
                      <p>One</p>
                      </div>
                    </div>
                      {/*  */}
                    {/*  */}
                    <div className="d-flex justify-content-between">
                      <div className="">
                      <p className="text-white fw-bolder">Phone Number</p>
                      </div>
                      <div>
                      {/* <p>{address1}</p> */}
                      <p>asdfdasf</p>
                      </div>
                    </div>
                    {/*  */}
                    {/*  */}
                    <div className="d-flex justify-content-between">
                      <div className="">
                      <p className="text-white fw-bolder">City</p>
                      </div>
                      <div>
                      {/* <p>{address1}</p> */}
                      <p>One</p>
                      </div>
                    </div>
                    {/*  */}
                    {/*  */}
                    <div className="d-flex justify-content-between">
                      <div className="">
                      <p className="text-white fw-bolder">State</p>
                      </div>
                      <div>
                      {/* <p>{address1}</p> */}
                      <p>Two</p>
                      </div>
                    </div>
                    {/*  */}
                    {/*  */}
                    <div className="d-flex justify-content-between">
                      <div className="">
                      <p className="text-white fw-bolder">Country</p>
                      </div>
                      <div>
                      {/* <p>{address1}</p> */}
                      <p>asdfdasf</p>
                      </div>
                    </div>
                    {/*  */}
                    {/*  */}
                    <div className="d-flex justify-content-between">
                      <div className="">
                      <p className="text-white fw-bolder">Zip</p>
                      </div>
                      <div>
                      {/* <p>{address1}</p> */}
                      <p>asdfdasf</p>
                      </div>
                    </div>
                                    </div>
                </div>
                {/* Products */}
                {/* Products */}
                {/* Products */}
                <div className="products mt-4">
                  <h4 className="fw-bolder">products</h4>
                  <Col xxl={2} lg={3} md={4} sm={6} className="mt-3">
                    <div className="Product_card mb-5">
                      <div className="card_image">
                        <img
                          // src={OrganizerImg}
                          src={EventImg1}
                          alt="EventImg1.png"
                          className="ProductImg"
                        />
                      </div>
                      <div className="mt-2">
                        <p class="">
                          asdfasdf
                          {/* {OrgFirstName}&nbsp;{OrgLastName} */}
                        </p>
                        <p class="fw-bolder ProductCardTextColor">
                          {/* {OrgEmail} */}
                          asdfasdf
                        </p>
                      </div>
                    </div>
                  </Col>
                </div>
                {/* <div className="ms-3 mt-5">
                  <div className="table">
                    <p className="fw-bolder">Order Details</p>
                    <table className="forwidth">
                    
                      <tr>
                        <td className="ContentColor">Amount</td>
                        <td className="for_text_align">
                          <span className="fw-bolder">$25</span>
                        </td>
                      </tr>
                      
                      <tr>
                        <td className="ContentColor">Inc. Tax</td>
                        <td className="for_text_align">
                          <span className="fw-bolder">$2</span>
                        </td>
                      </tr>
                   
                      <tr>
                        <td className="ContentColor">Age</td>
                        <td className="for_text_align">
                          <span className="fw-bolder">23</span>
                        </td>
                      </tr>
                      
                      <tr>
                        <td className="fw-bolder">Total</td>
                        <td className="for_text_align">
                          <span className="fw-bolder">$27</span>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div className="table">
                    <p className="fw-bolder mt-4">Customer Details</p>
                    <table className="forwidth">
                      
                      <tr>
                        <td className="ContentColor">Customer&nbsp;Name</td>
                        <td className="for_text_align">
                          <span className="fw-bolder">John&nbsp;Doe</span>
                        </td>
                      </tr>
                      
                      <tr>
                        <td className="ContentColor">Email</td>
                        <td className="for_text_align">
                          <span className="fw-bolder">Abc@gmail.com</span>
                        </td>
                      </tr>
                      
                      <tr>
                        <td className="ContentColor">Phone&nbsp;Number</td>
                        <td className="for_text_align">
                          <span className="fw-bolder">+92 312 1234567</span>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div> */}
              </Col>
            </Row>
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default OrderDetail;
