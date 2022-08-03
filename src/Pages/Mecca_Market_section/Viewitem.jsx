import React, { useState, useEffect } from "react";
import KliquesImg from "../../Assets/Images/KliquesImg.png";
import KliquesDetailBGIMg from "../../Assets/Images/KliquesDetailBGIMg.png";
import ResponsiveDrawer from "../Dashboard/Drawer";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Row, Col } from "react-bootstrap";
import MeccaMarket_data from "./For_mockup_data/MeccaMarket_data.json";
import ReactPaginate from "react-paginate";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CircularIndeterminate from "../../Components/Loader/Loader";
//
const drawerWidth = 100;
const Viewitem = () => {
  const navigate = useNavigate();
  const breadcrumbs = [
    <Typography
      key="3"
      color="text.primary"
      className="fw-bolder AllUsersBredCrumbs"
    >
      <span
        className=""
        onClick={() => {
          navigate("/AllItems");
        }}
      >
        All Items
      </span>
    </Typography>,
    <Typography
      key="3"
      color="text.primary"
      className="fw-bolder AllUsersBredCrumbs"
    >
      <span className="foractive">Item Details</span>
    </Typography>,
  ];
  const [togle, settogle] = useState(true);
  const [status, setstatus] = useState("Published");
  const [viewtoggle, setviewtoggle] = useState(true);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  // const [users, setUsers] = useState(MeccaMarket_data.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);
  const [done, setdone] = useState(false);
  const usersPerPage = 9;
  const pagesVisited = pageNumber * usersPerPage;

  useEffect(() => {
    sessionStorage.setItem("id", "4");
    GetShopDetail();
    GetShopProducts();
    setdone(true);
    sessionStorage.setItem("id", "4");
    togle ? setstatus("Published") : setstatus("UnPublished");
  }, [togle]);
  //
  //
  //
  //
  //
  const { id } = useParams();
  const [GetAllShopProducts, setGetAllShopProducts] = useState([]);
  const [getInfo, setgetInfo] = useState({});
  const GetShopProducts = () => {
    axios
      .get(`/product/view?product_id=${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token_id")}`,
        },
      })
      .then((response) => {
        setGetAllShopProducts(response.data.data.shops);
        setgetInfo(response.data.data);
        setdone(false);
      })
      .catch((err) => console.log(err.response));
  };
  //
  //
  //
  //
  //
  //
  //
  const displayUsers =
    GetAllShopProducts &&
    GetAllShopProducts.slice(pagesVisited, pagesVisited + usersPerPage).map(
      (user) => {
        return (
          <>
            <Col xxl={3} lg={4} md={12} sm={12} className="text-small mt-4">
              <div className="Product_card mb-5 w-auto h-100">
                <div className="">
                  {user.cover_image === "" ? (
                    <img
                      src={KliquesDetailBGIMg}
                      alt=""
                      className="KliquesDetailBGIMg"
                    />
                  ) : (
                    <img
                      src={user.cover_image}
                      alt=""
                      className="KliquesDetailBGIMg"
                    />
                  )}
                </div>

                <div className="mt-3">
                  {/*  */}
                  <div className="">
                    <p class="">
                      <span className="fw-bolder">Name:</span>&nbsp; {user.name}
                    </p>
                  </div>
                  {/*  */}
                  <div className="">
                    <p class="">
                      <span className="fw-bolder">Location:</span>&nbsp;{" "}
                      {user.location_address}
                    </p>
                  </div>
                  {/*  */}
                  <div className="">
                    <p class="">
                      <span className="fw-bolder">Email:</span>&nbsp;{" "}
                      {user.email}
                    </p>
                  </div>
                  {/*  */}
                  <div className="">
                    <p class="">
                      <span className="fw-bolder">Phone:</span>&nbsp;{" "}
                      {user.phone}
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </>
        );
      }
    );
  //
  //
  //
  const GetShopDetail = () => {
    axios
      .get(`/shop/view?shop_id=${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token_id")}`,
        },
      })
      .then((response) => {
        setdone(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="TopDiv px-3 mt-5">
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
          <div className="">
            <div className="mb-5">
              <Stack spacing={2}>
                <Breadcrumbs
                  separator={<NavigateNextIcon fontSize="small" />}
                  aria-label="breadcrumb"
                >
                  {breadcrumbs}
                </Breadcrumbs>
              </Stack>
            </div>
          </div>
          {/*  */}
          {done ? (
            <div className="stylishLoader">
              <CircularIndeterminate className="allagentsLoader" />
            </div>
          ) : (
            <div className="">
              <div className="">
                <img
                  src={KliquesDetailBGIMg}
                  alt="KliquesDetailBGIMg.png"
                  className="w-100 KliquesDetailBGIMg"
                />
                <img
                  src={KliquesImg}
                  alt="KliquesImg.png"
                  className="KliquesImg"
                />
              </div>
              <div className="forBorderSet">
                <div className="p-4">
                  {/*  */}
                  {/*  */}
                  <div className="d-flex justify-content-between">
                    <p className="fw-bolder">Title:</p>
                    <p>{getInfo.title}</p>
                  </div>
                  {/*  */}
                  {/*  */}
                  <div className="d-flex justify-content-between">
                    <p className="fw-bolder">Category:</p>
                    <p>{getInfo.category}</p>
                  </div>
                  {/*  */}
                  {/*  */}
                  <div className="d-flex justify-content-between">
                    <p className="fw-bolder">Link with shops:</p>
                    <p> Dummy data !</p>
                  </div>
                  {/*  */}
                  {/*  */}
                  <div className="d-flex justify-content-between">
                    <p className="fw-bolder">Availabe Quantity:</p>
                    <p>{getInfo.available_quantity}</p>
                  </div>
                  {/*  */}
                  {/*  */}
                  <div className="d-flex justify-content-between">
                    <p className="fw-bolder">Incoming Quantity:</p>
                    <p>{getInfo.incoming_quantity}</p>
                  </div>
                  {/*  */}
                  {/*  */}
                  <div className="d-flex justify-content-between">
                    <p className="fw-bolder">Price:</p>
                    <p>{getInfo.price}</p>
                  </div>
                  {/*  */}
                  {/*  */}
                  <div className="d-flex justify-content-between">
                    <p className="fw-bolder">Cost Price:</p>
                    <p>{getInfo.cost_price}</p>
                  </div>
                  {/*  */}
                  {/*  */}
                  <div className="d-flex justify-content-between">
                    <p className="fw-bolder">Compare at Price:</p>
                    <p>{getInfo.compare_at_price}</p>
                  </div>
                  {/*  */}
                  {/*  */}
                  <div className="d-flex justify-content-between">
                    <p className="fw-bolder">Sku:</p>
                    <p>{getInfo.sku}</p>
                  </div>
                  {/*  */}
                  {/*  */}
                  <div className="d-flex justify-content-between">
                    <p className="fw-bolder">Barcode:</p>
                    <p>{getInfo.barcode}</p>
                  </div>
                  {/*  */}
                  {/*  */}
                  <div className="d-flex justify-content-between">
                    <p className="fw-bolder">Tags:</p>
                    <p>{getInfo.is_contain_tags}</p>
                  </div>
                  {/*  */}
                  {/*  */}
                  <div className="">
                    <p className="fw-bolder">Production Description:</p>
                    <p className="ms-5">{getInfo.description}</p>
                  </div>
                  {/* <div className="mt-2">
                    <span className="S">M</span>{" "}
                    <span className="M">S</span>
                    <span className="ms-1 M">xs</span>{" "}
                    <span className="M">xxl</span>
                  </div> */}
                </div>
              </div>

              <div className="row ">{displayUsers}</div>
              {/* <div className="mt-5">
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
          </div> */}
            </div>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default Viewitem;
