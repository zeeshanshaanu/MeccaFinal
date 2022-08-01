import React, { useState, useEffect } from "react";
import KliquesImg from "../../Assets/Images/KliquesImg.png";
import KliquesDetailBGIMg from "../../Assets/Images/KliquesDetailBGIMg.png";
import ResponsiveDrawer from "../../Pages/Dashboard/Drawer";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Row, Col } from "react-bootstrap";
import MeccaMarket_data from "../../Pages/Mecca_Market_section/For_mockup_data/MeccaMarket_data.json";
import ReactPaginate from "react-paginate";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
//
//
//
//
const drawerWidth = 100;
const ShopDetail = () => {
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
        className=""
        onClick={() => {
          navigate("/AllShopes");
        }}
      >
        All Shops
      </span>
    </Typography>,
    <Typography
      key="3"
      color="text.primary"
      className="fw-bolder AllUsersBredCrumbs"
    >
      <span
        className="foractive"
        onClick={() => {
          navigate("");
        }}
      >
        Shop Detail
      </span>
    </Typography>,
  ];
  const [togle, settogle] = useState(true);
  const [status, setstatus] = useState("Published");
  const [viewtoggle, setviewtoggle] = useState(true);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [user_data, setuser_data] = useState("");
  const [user_data_total, setuser_data_total] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  // const [users, setUsers] = useState(MeccaMarket_data.slice(0, 50));
  const [done, setdone] = useState(false);
  const { id } = useParams();
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
  const [pageCount, setPageCount] = useState(1);
  const [GetAllShopProducts, setGetAllShopProducts] = useState([]);
  const GetShopProducts = (currentPage) => {
    axios
      .get(
        `/get-products-by-shop?shop_id=${id}&per_page=8&page=${currentPage}`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token_id")}`,
          },
        }
      )
      .then((response) => {
        setGetAllShopProducts(response.data.data.products);
        setPageCount(response.data.data.last_page);
        setuser_data(response.data.data.to);
        setuser_data_total(response.data.data.total);
        setdone(false);
      })
      .catch((err) => console.log(err.response));
  };

  const handlePageChange = async (data) => {
    let currentPage = data.selected + 1;
    const blogs = await GetShopProducts(currentPage);
    setGetAllShopProducts(blogs);
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
            <Col xxl={3} lg={4} md={12} sm={12} className="text-small">
              <div className="Product_card mb-5 w-auto">
                <div className="">
                  {user.image === "" ? (
                    <img
                      src={KliquesDetailBGIMg}
                      alt=""
                      className="KliquesDetailBGIMg"
                    />
                  ) : (
                    <img
                      src={user.image}
                      alt=""
                      className="KliquesDetailBGIMg"
                    />
                  )}
                </div>
              
                <div className="mt-3">
                  {/*  */}
                  <div className="d-flex justify-content-between">
                    <p class="">
                      <span className="fw-bolder">Title:</span>&nbsp;{" "}
                      {user.title}
                    </p>
                    <p class="">
                      <span className="fw-bolder">Category:</span>&nbsp;
                      {user.category}
                    </p>
                  </div>
                  {/*  */}
                  <div className="d-flex justify-content-between">
                    <p class="fw-bolder ProductCardTextColor">
                      <span className="fw-bolder">Cost price:</span>&nbsp; $
                      {user.cost_price}
                    </p>
                    <p class="">
                      <p class="fw-bolder ProductCardTextColor">
                        <span className="fw-bolder">Price:</span>&nbsp; $
                        {user.price}
                      </p>{" "}
                    </p>
                  </div>
                  {/*  */}
                  <div className="d-flex justify-content-between">
                    <p class="fw-bolder  ">
                      <span className="fw-bolder">Stock:</span>&nbsp; $
                      {user.is_sell_out_of_stock}
                    </p>
                    <p class="">
                      <span className="fw-bolder">Sku:</span>&nbsp;
                      {user.sku === null ? "No Data" : user.sku}
                    </p>
                  </div>
                  {/*  */}
                  <div className="d-flex justify-content-between">
                    <p class="fw-bolder  ">
                      <span className="fw-bolder">QTY:</span>&nbsp; $
                      {user.incoming_quantity}
                    </p>
                    <p class="">
                      <span className="fw-bolder">Available QTY:</span>&nbsp;
                      {user.available_quantity}
                    </p>
                  </div>
                  {/*  */}
                </div>
                <hr />
                <div class="Completed">
                  <p class="fw-bolder">Description :</p>
                  <p class="description">
                    <small
                      dangerouslySetInnerHTML={{
                        __html: user.description,
                      }}
                    />
                  </p>
                </div>
              </div>
            </Col>
            {/* <Col xxl={3} lg={4} md={4} sm={12} className="mt-3">
              <div className="Product_card mb-5">
                <div className="card_image">
                  <img src={KliquesDetailBGIMg} alt="" className="ProductImg" />
                </div>
                <div className="mt-2">
                  <div className="d-flex justify-content-between">
                    <p class="">Title:&nbsp; {user.title}</p>
                    <p class="">Category:&nbsp;{user.category}</p>
                  </div>
                  <p class="fw-bolder ProductCardTextColor">Price:&nbsp; ${user.price}</p>
                  <p class="">Sku:&nbsp;{user.sku === "" ? "No Data" : user.sku}</p>
                </div>
              </div>
            </Col> */}
          </>
        );
      }
    );
  // const pageCount = Math.ceil(GetAllShopProducts.length / usersPerPage);
  // const changePage = ({ selected }) => {
  //   setPageNumber(selected);
  // };
  //
  //
  //
  const [name, setName] = useState("");
  const [categ, setCateg] = useState("");
  const [Description, setDescription] = useState("");
  const [added_by, setadded_by] = useState("");
  const [cover_image, setcover_image] = useState("");
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
        setName(response.data.data.name);
        setCateg(response.data.data.category);
        setDescription(response.data.data.description);
        setadded_by(response.data.data.added_by);
        setcover_image(response.data.data.cover_image);
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
            <div className="my-4">
              <Stack spacing={2}>
                <Breadcrumbs
                  separator={<NavigateNextIcon fontSize="small" />}
                  aria-label="breadcrumb"
                >
                  {breadcrumbs}
                </Breadcrumbs>
              </Stack>
            </div>
            <div className="">
              <img
                src={cover_image}
                alt=""
                className="w-100 KliquesDetailBGIMg"
              />
            </div>
            <div className="Content">
              <div className="">
                <p>
                  Market Owner:&nbsp;
                  <span className="fw-bolder">{added_by}</span>
                </p>
                <p>
                  User Type:&nbsp;<span className="fw-bolder">{added_by}</span>
                </p>
                <p>
                  Shop Name:&nbsp;<span className="fw-bolder">{name}</span>
                </p>
              </div>
              <div className="">
                <small>
                  Category:&nbsp;<span className="fw-bolder">Sports</span>
                </small>
              </div>
            </div>
            <div className="Description mt-4">
              <p className="fw-bolder">Description</p>
              <div className="pe-5">
                <small>{Description}</small>
              </div>
              <div className="">
                <h4 className="mt-5 fw-bolder"> Products:</h4>
              </div>
            </div>
            <div className="row ">{displayUsers}</div>
            <div className="d-flex mt-5 my-auto">
              <p className="text-muted ms-3">
                Showing&nbsp;{user_data}&nbsp;of&nbsp;{user_data_total}
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
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default ShopDetail;
