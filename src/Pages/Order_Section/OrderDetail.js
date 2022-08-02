import React, { useState, useEffect, useRef } from "react";
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
import EventImg1 from "../../Assets/Images/Photo1.png";
//
//
import Logo1 from "../../Assets/Images/Logo1.png";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CircularIndeterminate from "../../Components/Loader/Loader";
import { useReactToPrint } from "react-to-print";

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

const drawerWidth = 100;
const OrderDetail = () => {
  var x = 10;
  const { id } = useParams();
  ////////////=====/////////BASIC INFO//===============/////////////====
  ////////////=====/////////BASIC INFO//===============/////////////====
  ////////////=====/////////BASIC INFO//===============/////////////====
  const [done, setdone] = useState(false);
  const [status, setstatus] = useState("");
  const [customerFName, setcustomerFName] = useState("");
  const [customerLName, setcustomerLName] = useState("");
  const [CustEmail, setCustEmail] = useState("");
  const [CustShopName, setCustShopName] = useState("");
  const [CustShopAddress, setCustShopAddress] = useState("");
  const [CustShopemail, setCustShopemail] = useState("");
  const [CustShopphoneno, setCustShopphoneno] = useState("");
  const [CustShopwebsite, setCustShopwebsite] = useState("");
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
        setstatus(response.data.data.status);
        setcustomerFName(response.data.data.customer.first_name);
        setcustomerLName(response.data.data.customer.last_name);
        setCustEmail(response.data.data.customer.email);
        setCustShopName(response.data.data.shop.name);
        setCustShopAddress(response.data.data.shop.address);
        setCustShopemail(response.data.data.shop.email);
        setCustShopphoneno(response.data.data.shop.phone);
        setCustShopwebsite(response.data.data.shop.email);
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
    <Typography key="3" color="text.primary" className=" AllUsersBredCrumbs ">
      <span className="foractive fw-bolder">OrderDetail</span>
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
  var TotalPrices = 0;
  const UnitPrice = (Price) => {
    TotalPrices += Price;
  };
  var Totalqty = 0;
  const QTYY = (qty) => {
    Totalqty += qty;
  };
  //
  //
  const [pdf, setpdf] = useState([]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

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
              {/* <button
                className="download button1 px-4 py-2"
                onClick={() => handlePrint}
              >
                Download Invoice
              </button> */}
              <button
                className="download button1 px-4 py-2"
                onClick={handlePrint}
              >
                <small>Download&nbsp;Invoice</small>
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
                  <div className="card p-3">
                    {/* BasicInfo */}
                    {/* BasicInfo */}
                    {/* BasicInfo */}
                    <div className="BasicInfo">
                      <div className="d-flex justify-content-between">
                        <h6 className=" fw-bolder">Basic Information</h6>
                        <div className=" ">
                          {status === "pending" ? (
                            <span className="px-3 py-1 bg-warning text-white">
                              {status}
                            </span>
                          ) : (
                            <span className="px-3 py-1 bg-success text-white">
                              {status}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className=" py-3 px-3 bg-light forBorderTop">
                        {/*  */}
                        {/*  */}
                        <div className="d-flex justify-content-between">
                          <div className="">
                            <p className="text-dark ">Customer Name</p>
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
                            <p className="text-dark ">Customer Email</p>
                          </div>
                          <div>
                            <p>{CustEmail}</p>
                          </div>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="d-flex justify-content-between">
                          <div className="">
                            <p className="text-dark ">Shop Name</p>
                          </div>
                          <div>
                            <p>{CustShopName}</p>
                          </div>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="d-flex justify-content-between">
                          <div className="">
                            <p className="text-dark ">Shop Address</p>
                          </div>
                          <div>
                            <p>{CustShopAddress}</p>
                          </div>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="d-flex justify-content-between">
                          <div className="">
                            <p className="text-dark ">Shop Phone#</p>
                          </div>
                          <div>
                            <p> Dummy data!!</p>
                          </div>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="d-flex justify-content-between">
                          <div className="">
                            <p className="text-dark ">Shop website</p>
                          </div>
                          <div>
                            <p> Dummy data!!</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Shipping Address */}
                    {/* Shipping Address */}
                    {/* Shipping Address */}
                    <div className="Shipping_Address mt-4">
                      <h6 className=" mb-2 fw-bolder">Shipping Address</h6>
                      <div className="py-3 px-3 bg-light forBorderTop">
                        {/*  */}
                        {/*  */}
                        <div className="d-flex justify-content-between">
                          <div className="">
                            <p className="text-dark ">Company</p>
                          </div>
                          <div>
                            <p>{company}</p>
                          </div>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="d-flex justify-content-between">
                          <div className="">
                            <p className="text-dark ">Phone Number</p>
                          </div>
                          <div>
                            <p>{Custphone}</p>
                          </div>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="d-flex justify-content-between">
                          <div className="">
                            <p className="text-dark ">Address</p>
                          </div>
                          <div>
                            <p>{address1}</p>
                          </div>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="d-flex justify-content-between">
                          <div className="">
                            <p className="text-dark ">City</p>
                          </div>
                          <div>
                            <p>{customercity}</p>
                          </div>
                        </div>

                        {/*  */}
                        {/*  */}
                        <div className="d-flex justify-content-between">
                          <div className="">
                            <p className="text-dark ">State</p>
                          </div>
                          <div>
                            <p>{customerstate}</p>
                          </div>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="d-flex justify-content-between">
                          <div className="">
                            <p className="text-dark ">Country</p>
                          </div>
                          <div>
                            <p>{Custcountry}</p>
                          </div>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="d-flex justify-content-between">
                          <div className="">
                            <p className="text-dark ">Zip</p>
                          </div>
                          <div>
                            <p>{Custzip}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Billing_Address */}
                    {/* Billing_Address */}
                    {/* Billing_Address */}
                    {/* Billing_Address */}
                    <h6 className=" mt-4 mb-2 fw-bolder">Billing Address</h6>
                    <div className="Billing_Address py-3 px-3 bg-light forBorderTop">
                      {/*  */}
                      {/*  */}
                      <div className="d-flex justify-content-between">
                        <div className="">
                          <p className="text-dark ">Phone Number</p>
                        </div>
                        <div>
                          <p>{BillCustphone}</p>
                        </div>
                      </div>
                      {/*  */}
                      {/*  */}
                      <div className="d-flex justify-content-between">
                        <div className="">
                          <p className="text-dark ">Address</p>
                        </div>
                        <div>
                          <p>{Billaddress1}</p>
                        </div>
                      </div>
                      {/*  */}
                      {/*  */}
                      <div className="d-flex justify-content-between">
                        <div className="">
                          <p className="text-dark ">City</p>
                        </div>
                        <div>
                          <p>{Billcustomercity}</p>
                        </div>
                      </div>

                      {/*  */}
                      {/*  */}
                      <div className="d-flex justify-content-between">
                        <div className="">
                          <p className="text-dark ">State</p>
                        </div>
                        <div>
                          <p>{Billcustomerstate}</p>
                        </div>
                      </div>
                      {/*  */}
                      {/*  */}
                      <div className="d-flex justify-content-between">
                        <div className="">
                          <p className="text-dark ">Country</p>
                        </div>
                        <div>
                          <p>{BillCustcountry}</p>
                        </div>
                      </div>
                      {/*  */}
                      {/*  */}
                      <div className="d-flex justify-content-between">
                        <div className="">
                          <p className="text-dark ">Zip</p>
                        </div>
                        <div>
                          <p>{BillCustzip}</p>
                        </div>
                      </div>
                    </div>
                    {/* Products */}
                    {/* Products */}
                    {/* Products */}
                    <div className="products mt-4 ">
                      <h6 className="fw-bolder">Products Details</h6>
                      <div className=" ForProductsHeight">
                        {ShopProducts.map((productsGets) => {
                          return (
                            <div className="d-flex justify-content-between bg-light p-2 mt-3">
                              <div className="d-flex">
                                <div>
                                  <img
                                    src={productsGets.image}
                                    alt="EventImg1.png"
                                    className="OrderDetailImgWidth"
                                  />
                                </div>
                                <div className="">
                                  <p className="ms-3 ">{productsGets.title}</p>
                                  {/*  */}
                                  <p className="ms-3 ">
                                    {productsGets.product_variant_name}
                                  </p>
                                  {/*  */}
                                  <p className="ms-3 ">
                                    {productsGets.link_variant_name}
                                  </p>
                                </div>
                              </div>
                              {/*  */}
                              <div className="">
                                <div className=" ProductCardTextColor ">
                                  <div className="">
                                    <span className="">
                                      <small> Unit Price </small>:&nbsp;
                                      <span
                                        className="float-end"
                                        onClick={UnitPrice(
                                          productsGets.unit_price
                                        )}
                                      >
                                        ${productsGets.unit_price}
                                      </span>
                                    </span>
                                  </div>
                                </div>
                                {/*  */}
                                <div className=" mt-3">
                                  <span className="me-1">
                                    <small>QTY </small>:&nbsp;
                                    <span
                                      className="float-end"
                                      onClick={QTYY(productsGets.quantity)}
                                    >
                                      {" "}
                                      {productsGets.quantity}
                                    </span>
                                  </span>
                                </div>
                                {/*  */}
                                <div className=" mt-3">
                                  <span className="">
                                    <small> Total Price:&nbsp; </small>
                                    <span className="float-end">
                                      {" "}
                                      ${productsGets.total_price}
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="Billing_Address py-3 px-3 bg-light forBorderTop mt-4">
                      <div className="d-flex justify-content-between ">
                        <div className="">
                          <p className="text-dark ">Total&nbsp;Quantity</p>
                        </div>
                        <div>
                          <span className="float-end">{Totalqty}</span>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between mt-3">
                        <div className="">
                          <p className="text-dark ">Total&nbsp;Price</p>
                        </div>
                        <div>
                          <span className="float-end">${TotalPrices}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                {/*  */}
                {/*  */}
                {/*  */}
                {/*  */}
                <Col lg={4} md={6} sm={12} className="" ref={componentRef}>
                  <div className="card p-3">
                    <div className="Shipping_Address">
                      <center>
                        <img src={Logo1} alt="" className="w-25" />
                        <div className="">
                          Order No: # <span className="">31531831351</span>
                        </div>
                        <div className=" pt-3">
                          <p>
                            Date:
                            <span className=""> 07/12/2022 </span>
                          </p>
                        </div>
                      </center>
                      <h6 className=" mb-2 fw-bolder">Customer&nbsp;Details</h6>
                      <div className="py-3 px-3 bg-light forBorderTop">
                        {/*  */}
                        {/*  */}
                        <div className="d-flex justify-content-between">
                          <div className="">
                            <p className="text-dark ">Customer&nbsp;Name</p>
                          </div>
                          <div>
                            <p>
                              {" "}
                              {customerFName}&nbsp;{customerLName}
                            </p>
                          </div>
                        </div>
                        {/*  */}
                        <div className="d-flex justify-content-between">
                          <div className="">
                            <p className="text-dark ">Email</p>
                          </div>
                          <div>
                            <p>{CustEmail}</p>
                          </div>
                        </div>
                        {/*  */}
                        <div className="d-flex justify-content-between">
                          <div className="">
                            <p className="text-dark ">Phone&nbsp;No</p>
                          </div>
                          <div>
                            <p>+923004567198</p>
                          </div>
                        </div>
                        {/*  */}
                      </div>
                      {/*  */}
                      <h6 className=" mb-2 fw-bolder mt-1">
                        Shop&nbsp;Details
                      </h6>
                      <div className="py-3 px-3 bg-light forBorderTop">
                        <div className="d-flex justify-content-between">
                          <div className="">
                            <p className="text-dark ">Shope&nbsp;Name</p>
                          </div>
                          <div>
                            <p>{CustShopName}</p>
                          </div>
                        </div>
                        {/*  */}

                        <div className="d-flex justify-content-between">
                          <div className="">
                            <p className="text-dark ">Email</p>
                          </div>
                          <div>
                            <p>{CustShopemail === "" ? "" : CustShopemail}</p>
                          </div>
                        </div>

                        {/*  */}
                        <div className="d-flex justify-content-between">
                          <div className="">
                            <p className="text-dark ">Phone&nbsp;Number</p>
                          </div>
                          <div>
                            <p>
                              {" "}
                              {CustShopphoneno === "" ? "" : CustShopphoneno}
                            </p>
                          </div>
                        </div>
                        {/*  */}
                        <div className="d-flex justify-content-between">
                          <div className="">
                            <p className="text-dark ">Website</p>
                          </div>
                          <div>
                            <p>
                              {" "}
                              {CustShopwebsite === "" ? "" : CustShopwebsite}
                            </p>
                          </div>
                        </div>
                      </div>
                      <h6 className=" mb-2 fw-bolder mt-1">
                        Shipping&nbsp;Details
                      </h6>
                      <div className="py-3 px-3 bg-light forBorderTop">
                        <div className="d-flex justify-content-between">
                          <div className="">
                            <p className="text-dark ">Shipping&nbsp;Address</p>
                          </div>
                          <div>
                            <p className="line-h">
                              {address1 === "" ? "" : address1}
                            </p>
                          </div>
                        </div>
                        {/*  */}
                        <div className="d-flex justify-content-between">
                          <div className="">
                            <p className="text-dark ">Billing&nbsp;Address</p>
                          </div>
                          <div>{!Billaddress1 ? "" : Billaddress1}</div>
                        </div>
                        {/*  */}
                      </div>
                      <h6 className=" mb-2 fw-bolder mt-1">
                        Order&nbsp;Details
                      </h6>
                      <div className="py-3 px-3 bg-light forBorderTop">
                        {ShopProducts.map((productsGets) => {
                          return (
                            <div className="d-flex justify-content-between bg-light p-2 mt-3">
                              <div className="d-flex">
                                <div>
                                  <img
                                    src={productsGets.image}
                                    alt="EventImg1.png"
                                    className="OrderDetailImgWidth "
                                  />
                                </div>
                                <div className="">
                                  <p className="ms-1">{productsGets.title}</p>
                                  {/*  */}
                                  <p className="ms-1">
                                    {productsGets.product_variant_name}
                                  </p>
                                  {/*  */}
                                  <p className="ms-1">
                                    {productsGets.link_variant_name}&nbsp;
                                  </p>
                                </div>
                              </div>
                              {/*  */}
                              <div className="">
                                <div className=" ProductCardTextColor ">
                                  <div className="">
                                    <span className="">
                                      <small>Unit&nbsp;Price</small>:&nbsp;
                                      <span className="">
                                        ${productsGets.unit_price}
                                      </span>
                                    </span>
                                  </div>
                                </div>
                                {/*  */}
                                <div className=" mt-3">
                                  <span className="me-1">
                                    <small>QTY </small>:&nbsp;
                                    <span className="float-end">
                                      {" "}
                                      {productsGets.quantity}
                                    </span>
                                  </span>
                                </div>
                                {/*  */}
                                <div className=" mt-3">
                                  <span className=" d-flex justify-content-between">
                                    <small>Total&nbsp;Price:</small>&nbsp;
                                    <span className="ms-auto">
                                      {" "}
                                      ${productsGets.total_price}
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                        {/*  */}

                        {/*  */}
                        <div className="d-flex justify-content-between mt-2">
                          <div className="d-flex">
                            <p className="fw-bolder">Total Quantity</p>
                          </div>
                          <div>
                            <p>03</p>
                          </div>
                        </div>
                        {/*  */}
                        <div className="d-flex justify-content-between mt-2">
                          <div className="d-flex">
                            <p className="fw-bolder">Sub Total</p>
                          </div>
                          <div>
                            <p>$75</p>
                          </div>
                        </div>
                        {/*  */}
                        <div className="d-flex justify-content-between mt-2">
                          <div className="d-flex">
                            <p className="fw-bolder">Inc.Tax</p>
                          </div>
                          <div>
                            <p>$2</p>
                          </div>
                        </div>
                        {/*  */}
                        <div className="d-flex justify-content-between mt-2">
                          <div className="d-flex">
                            <p className="fw-bolder">Shipping Charges</p>
                          </div>
                          <div>
                            <p>$12</p>
                          </div>
                        </div>
                        {/*  */}
                        <div className="d-flex justify-content-between mt-2">
                          <div className="d-flex">
                            <p className="fw-bolder">Discount Price</p>
                          </div>
                          <div>
                            <p>-$5</p>
                          </div>
                        </div>
                        {/*  */}
                        <div className="py-3 px-3 bg-light forBorderTop">
                          <div className="d-flex justify-content-between mt-2">
                            <div className="d-flex">
                              <p className="fw-bolder">Total</p>
                            </div>
                            <div>
                              <p>$89</p>
                            </div>
                          </div>
                        </div>
                        <p className="text-center fw-bolder">
                          Thanku for Shopping with us
                        </p>
                      </div>
                    </div>
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
