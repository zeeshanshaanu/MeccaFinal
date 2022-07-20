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
// 
// 
// 
// 
const drawerWidth = 100;
const Viewitem = () => {
  const [togle, settogle] = useState(true);
  const [status, setstatus] = useState("Published");
  const [viewtoggle, setviewtoggle] = useState(true);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  // const [users, setUsers] = useState(MeccaMarket_data.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);
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
  const [GetAllShopProducts, setGetAllShopProducts] = useState([])
  const GetShopProducts = () => {
    axios
      .get(`/get-products-by-shop?shop_id=${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token_id")}`,
        },
      })
      .then((response) => {
        setGetAllShopProducts(response.data.data.products)
        console.log(response.data.data.products)
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
  const displayUsers = GetAllShopProducts
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return (
        <>
          <Col xxl={2} lg={3} md={4} sm={6} className="mt-3">
            <div className="Product_card mb-5">
              <div className="card_image">
                <img
                  src={KliquesDetailBGIMg}
                  alt="KliquesDetailBGIMg.png"
                  className="ProductImg w-100"
                />
              </div>
              <div className="">
                <p class="">{user.title}</p>
                <p class="fw-bolder ProductCardTextColor">{user.price}</p>
                <p class="">{user.sku}</p>
              </div>
            </div>
          </Col>
        </>
      );
    });
  const pageCount = Math.ceil(GetAllShopProducts.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  // 
  // 
  // 
  const [name, setName] = useState("")
  const [categ, setCateg] = useState("")
  const [Description, setDescription] = useState("")
  const [added_by, setadded_by] = useState("")
  const [cover_image, setcover_image] = useState("")
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
          <ResponsiveDrawer heading="Kliques" className="alluser" />
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
            <div className="">
              <img
                src={KliquesDetailBGIMg}
                alt="KliquesDetailBGIMg.png"
                className="w-100 KliquesDetailBGIMg"
              />
              <img src={KliquesImg} alt="KliquesImg.png" className="KliquesImg" />
            </div>
            <div className="forBorderSet">
              <div className="p-4">
                {/*  */}
                {/*  */}
                  <div className="d-flex justify-content-between">
                    <p className="fw-bolder">Product Name:</p>
                    <p>XYZ</p>
                  </div>
                {/*  */}
                {/*  */}
                  <div className="d-flex justify-content-between">
                    <p className="fw-bolder">Category:</p>
                    <p>XYZ</p>
                  </div>
                {/*  */}
                {/*  */}
                  <div className="d-flex justify-content-between">
                    <p className="fw-bolder">Link with shops:</p>
                    <p>XYZ</p>
                  </div>
                {/*  */}
                {/*  */}
                  <div className="d-flex justify-content-between">
                    <p className="fw-bolder">Availabe Quantity:</p>
                    <p>XYZ</p>
                  </div>
                {/*  */}
                {/*  */}
                  <div className="d-flex justify-content-between">
                    <p className="fw-bolder">Incoming Quantity:</p>
                    <p>XYZ</p>
                  </div>
                {/*  */}
                {/*  */}
                  <div className="d-flex justify-content-between">
                    <p className="fw-bolder">Price:</p>
                    <p>XYZ</p>
                  </div>
                {/*  */}
                {/*  */}
                  <div className="d-flex justify-content-between">
                    <p className="fw-bolder">Cost Price:</p>
                    <p>XYZ</p>
                  </div>
                {/*  */}
                {/*  */}
                  <div className="d-flex justify-content-between">
                    <p className="fw-bolder">Compare at Price:</p>
                    <p>XYZ</p>
                  </div>
                {/*  */}
                {/*  */}
                  <div className="d-flex justify-content-between">
                    <p className="fw-bolder">Sku:</p>
                    <p>XYZ</p>
                  </div>
                {/*  */}
                {/*  */}
                  <div className="d-flex justify-content-between">
                    <p className="fw-bolder">Barcode:</p>
                    <p>XYZ</p>
                  </div>
                {/*  */}
                {/*  */}
                  <div className="d-flex justify-content-between">
                    <p className="fw-bolder">Tags:</p>
                    <p>XYZ</p>
                  </div>
                {/*  */}
                {/*  */}
                  <div className="d-flex justify-content-between">
                    <p className="fw-bolder">Production Description:</p>
                    <p>XYZ</p>
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
        </Box>
      </Box>
    </div>
  );
};

export default Viewitem;
