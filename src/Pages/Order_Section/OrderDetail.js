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
import Logo1 from "../../Assets/Images/Logo1.png";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CircularIndeterminate from "../../Components/Loader/Loader";
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
  var x = 10;
  const { id } = useParams();
  ////////////=====/////////BASIC INFO//===============/////////////====
  ////////////=====/////////BASIC INFO//===============/////////////====
  ////////////=====/////////BASIC INFO//===============/////////////====
  const [done, setdone] = useState(false);
  const [customerFName, setcustomerFName] = useState("");
  const [customerLName, setcustomerLName] = useState("");
  const [CustEmail, setCustEmail] = useState("");
  const [CustShopName, setCustShopName] = useState("");
  ////////////=====/////////shipping addres//===============/////////////====
  ////////////=====/////////shipping addres//===============/////////////====
  ////////////=====/////////shipping addres//===============/////////////====
  const [company, setcompany] = useState("");
  const [Custphone, setCustphone] = useState("");
  const [address1, setaddress1] = useState("");
  const [customercity, setcustomercity] = useState("");
  const [customerstate, setcustomestate] = useState("");
  const [Custcountry, setCustcountry] = useState("");
  const [Custzip, setCustzip] = useState("");
  ////////////=====/////////BILLING address//===============/////////////====
  ////////////=====/////////BILLING address//===============/////////////====
  ////////////=====/////////BILLING address//===============/////////////====
  const [Billcompany, setBillcompany] = useState("");
  const [BillCustphone, setBillCustphone] = useState("");
  const [Billaddress1, setBilladdress1] = useState("");
  const [Billcustomercity, setBillcustomercity] = useState("");
  const [Billcustomerstate, setBillcustomestate] = useState("");
  const [BillCustcountry, setBillCustcountry] = useState("");
  const [BillCustzip, setBillCustzip] = useState("");
  ////////////=====///////////==ShopProducts=============/////////////====
  const [ShopProducts, setShopProducts] = useState([]);

  ////////////=====///////////===============/////////////====
  const GetShopDetail = () => {
    axios
      .get(`/order/view?order_id=${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token_id")}`,
        },
      })
      .then((response) => {
        ////////////=====/////////BASIC INFO//===============/////////////====
        ////////////=====/////////BASIC INFO//===============/////////////====
        setcustomerFName(response.data.data.customer.first_name);
        setcustomerLName(response.data.data.customer.last_name);
        setCustEmail(response.data.data.customer.email);
        setCustShopName(response.data.data.shop.name);
        ////////////=====/////////shipping addres//===============/////////////====
        ////////////=====/////////shipping addres//===============/////////////====
        setcompany(response.data.data.shipping_address.company);
        setCustphone(response.data.data.shipping_address.phone);
        setaddress1(response.data.data.shipping_address.address1);
        setcustomercity(response.data.data.shipping_address.city);
        setcustomestate(response.data.data.shipping_address.state);
        setCustcountry(response.data.data.shipping_address.country);
        setCustzip(response.data.data.shipping_address.zip);
        ////////////=====/////////BILLING ADDRESS//===============/////////////====
        ////////////=====/////////BILLING ADDRESS//===============/////////////====
        setBillcompany(response.data.data.billing_address.company);
        setBillCustphone(response.data.data.billing_address.phone);
        setBilladdress1(response.data.data.billing_address.address);
        setBillcustomercity(response.data.data.billing_address.city);
        setBillcustomestate(response.data.data.billing_address.state);
        setBillCustcountry(response.data.data.billing_address.country);
        setBillCustzip(response.data.data.billing_address.zip);
        //////////////============///////////=PRODUCTS===///////=======////////==
        //////////////============///////////=PRODUCTS===///////=======////////==
        setShopProducts(response.data.data.products);
        console.log(response.data.data.products);
        setdone(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    var x = 5;
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
    // console.info("You clicked a breadcrumb.");
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
          <div className="d-flex justify-content-between my-4 mt-5">
            <Stack spacing={2}>
              <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
              >
                {breadcrumbs}
              </Breadcrumbs>
            </Stack>
            <div className="">
              <button className="download button1 px-4 py-2">
                Download Invoice
              </button>
            </div>
          </div>
          {done ? (
            <div className="stylishLoader">
              <CircularIndeterminate className="allagentsLoader" />
            </div>
          ) : (
          <Container fluid>
            <Row className=" mt-5">
              <Col lg={8} md={6} sm={12} className="">
                {/* BasicInfo */}
                {/* BasicInfo */}
                {/* BasicInfo */}
                <div className="BasicInfo">
                  <h4 className="fw-bolder mb-2">Basic Information</h4>
                  <div className=" py-3 px-3 bg-light forBorderTop">
                    {/*  */}
                    {/*  */}
                    <div className="d-flex justify-content-between">
                      <div className="">
                        <p className="text-dark fw-bolder">Name</p>
                      </div>
                      <div>
                        <p>
                          {customerFName}&nbsp;{customerLName}
                        </p>
                      </div>
                    </div>
                    {/*  */}
                    {/*  */}
                    <div className="d-flex justify-content-between">
                      <div className="">
                        <p className="text-dark fw-bolder">Shop Name</p>
                      </div>
                      <div>
                        <p>{CustShopName}</p>
                      </div>
                    </div>
                    {/*  */}
                    {/*  */}
                    <div className="d-flex justify-content-between">
                      <div className="">
                        <p className="text-dark fw-bolder">Customer Email</p>
                      </div>
                      <div>
                        <p>{CustEmail}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Shipping Address */}
                {/* Shipping Address */}
                {/* Shipping Address */}
                <div className="Shipping_Address mt-4">
                  <h4 className="fw-bolder mb-2">Shipping Address</h4>
                  <div className="py-3 px-3 bg-light forBorderTop">
                    {/*  */}
                    {/*  */}
                    <div className="d-flex justify-content-between">
                      <div className="">
                        <p className="text-dark fw-bolder">Company</p>
                      </div>
                      <div>
                        <p>{company}</p>
                      </div>
                    </div>
                    {/*  */}
                    {/*  */}
                    <div className="d-flex justify-content-between">
                      <div className="">
                        <p className="text-dark fw-bolder">Phone Number</p>
                      </div>
                      <div>
                        <p>{Custphone}</p>
                      </div>
                    </div>
                    {/*  */}
                    {/*  */}
                    <div className="d-flex justify-content-between">
                      <div className="">
                        <p className="text-dark fw-bolder">Address</p>
                      </div>
                      <div>
                        <p>{address1}</p>
                      </div>
                    </div>
                    {/*  */}
                    {/*  */}
                    <div className="d-flex justify-content-between">
                      <div className="">
                        <p className="text-dark fw-bolder">City</p>
                      </div>
                      <div>
                        <p>{customercity}</p>
                      </div>
                    </div>

                    {/*  */}
                    {/*  */}
                    <div className="d-flex justify-content-between">
                      <div className="">
                        <p className="text-dark fw-bolder">State</p>
                      </div>
                      <div>
                        <p>{customerstate}</p>
                      </div>
                    </div>
                    {/*  */}
                    {/*  */}
                    <div className="d-flex justify-content-between">
                      <div className="">
                        <p className="text-dark fw-bolder">Country</p>
                      </div>
                      <div>
                        <p>{Custcountry}</p>
                      </div>
                    </div>
                    {/*  */}
                    {/*  */}
                    <div className="d-flex justify-content-between">
                      <div className="">
                        <p className="text-dark fw-bolder">Zip</p>
                      </div>
                      <div>
                        <p>{Custzip}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
                {/*  */}
                {/*  */}
                {/*  */}
                <h4 className="fw-bolder mt-4 mb-2">Billing Address</h4>
                <div className="py-3 px-3 bg-light forBorderTop">
                  {/*  */}
                  {/*  */}
                  <div className="d-flex justify-content-between">
                    <div className="">
                      <p className="text-dark fw-bolder">Phone Number</p>
                    </div>
                    <div>
                      <p>{BillCustphone}</p>
                    </div>
                  </div>
                  {/*  */}
                  {/*  */}
                  <div className="d-flex justify-content-between">
                    <div className="">
                      <p className="text-dark fw-bolder">Address</p>
                    </div>
                    <div>
                      <p>{Billaddress1}</p>
                    </div>
                  </div>
                  {/*  */}
                  {/*  */}
                  <div className="d-flex justify-content-between">
                    <div className="">
                      <p className="text-dark fw-bolder">City</p>
                    </div>
                    <div>
                      <p>{Billcustomercity}</p>
                    </div>
                  </div>

                  {/*  */}
                  {/*  */}
                  <div className="d-flex justify-content-between">
                    <div className="">
                      <p className="text-dark fw-bolder">State</p>
                    </div>
                    <div>
                      <p>{Billcustomerstate}</p>
                    </div>
                  </div>
                  {/*  */}
                  {/*  */}
                  <div className="d-flex justify-content-between">
                    <div className="">
                      <p className="text-dark fw-bolder">Country</p>
                    </div>
                    <div>
                      <p>{BillCustcountry}</p>
                    </div>
                  </div>
                  {/*  */}
                  {/*  */}
                  <div className="d-flex justify-content-between">
                    <div className="">
                      <p className="text-dark fw-bolder">Zip</p>
                    </div>
                    <div>
                      <p>{BillCustzip}</p>
                    </div>
                  </div>
                </div>
                {/* Products */}
                {/* Products */}
                {/* Products */}
                <div className="products mt-4 w-100">
                  <h4 className="fw-bolder">Products Details</h4>
                  {ShopProducts.map((productsGets) => {
                    return (
                      <div className="mt-3">
                        <div className="d-flex justify-content-between bg-light p-2">
                          <div className="d-flex">
                            <div>
                              <img
                                src={productsGets.image}
                                alt="EventImg1.png"
                                className="OrderDetailImgWidth"
                              />
                            </div>
                            <div>
                              <p class="ms-3 fw-bolder">{productsGets.title}</p>
                              {/*  */}
                              <p class="ms-3 fw-bolder">
                                {productsGets.product_variant_name}
                              </p>
                              {/*  */}
                              <p class="ms-3 fw-bolder">
                                {productsGets.link_variant_name}
                              </p>
                            </div>
                          </div>
                          {/*  */}
                          <div className="">
                            <div className=" ProductCardTextColor ">
                              <div className="ms-4">
                                <span class="fw-bolder">
                                  ${productsGets.total_price}
                                </span>
                              </div>
                              <div className="mt-5 pt-2">
                                <span class="me-1">
                                  QTY :&nbsp;{productsGets.quantity}
                                </span>
                              </div>
                            </div>
                           
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Col>
              {/*  */}
              {/*  */}
              {/*  */}
              {/*  */}
              <Col lg={4} md={6} sm={12} className="">
                <div className="MainDiv">
                  <center>
                    <img src={Logo1} alt="" className="" />
                    <div className="">
                      Order No: # <span className="fw-bolder">31531831351</span>
                    </div>
                    <div className="">
                      <p>
                        Date:
                        <span className="fw-bolder"> 07/12/2022 </span>
                      </p>
                    </div>
                  </center>
                </div>
              </Col>
            </Row>
          </Container>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default OrderDetail;
