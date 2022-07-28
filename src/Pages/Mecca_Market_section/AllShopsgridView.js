import React, { useState, useEffect } from "react";
import { Container, Col } from "react-bootstrap";
import "./index.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import EventImg1 from "../../Assets/Images/EventImg1.png";
import EventDetailBGImg from "../../Assets/Images/EventDetailBGImg.png";
import KliquesDetailBGIMg from "../../Assets/Images/KliquesDetailBGIMg.png";
import BodyBuilder from "../../Assets/Images/BodyBuilder.jpg";
import { useNavigate } from "react-router-dom";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import GradeIcon from "@mui/icons-material/Grade";
import axios from "axios";
///////=========//////////////==========//////////////===========
import MeccaMarket_data from "../../Pages/Mecca_Market_section/For_mockup_data/MeccaMarket_data.json";
import ReactPaginate from "react-paginate";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import Carousel from "react-bootstrap/Carousel";
import CircularIndeterminate from "../../Components/Loader/Loader";
const AllShopsgridView = () => {
  const navigate = useNavigate();
  const [togle, settogle] = useState(true);
  const [status, setstatus] = useState("Published");
  const [viewtoggle, setviewtoggle] = useState(true);
  const [page, setPage] = React.useState(0);
  const [filter, setfilter] = useState("");
  const [pageCount, setPageCount] = useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  //////////=============/////////////////==============
  //////////=============/////////////////==============
  const [done, setdone] = useState(false);
  const [shops_data, setshops_data] = useState("");
  const [shops_data_total, setshops_data_total] = useState("");
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const [GetShopes, setGetShopes] = useState([]);
  const GetServices = (currentPage) => {
    setdone(true);
    axios
      .get(`/shop/view-all?per_page=8&page=${currentPage}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token_id")}`,
        },
      })
      .then((response) => {
        setgridShops(response.data.data.shops);
        setPageCount(response.data.data.last_page);
        setshops_data(response.data.data.to);
        setshops_data_total(response.data.data.total);
        setdone(false);
      })
      .catch((err) => console.log(err));
  };
  const handlePageChange = async (data) => {
    let currentPage = data.selected + 1;
    const blogs = await GetServices(currentPage);
    setgridShops(blogs);
  };
  //////////=============/////////////////==============
  //////////=============/////////////////==============

  useEffect(() => {
    sessionStorage.setItem("id", "4");
    sessionStorage.setItem("id", "12");
    GetServices();
    setdone(true);
    togle ? setstatus("Published") : setstatus("UnPublished");
  }, [togle]);
  // const [gridShops, setgridShops] = useState(GetShopes.slice(0, 20));
  const [gridShops, setgridShops] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 9;
  const pagesVisited = pageNumber * usersPerPage;
  const displayUsers =
    gridShops &&
    gridShops
      .slice(pagesVisited, pagesVisited + usersPerPage)
      .filter((blog) => {
        if (filter === "") {
          return gridShops;
        } else if (
          (blog.category &&
            blog.category
              .toString()
              .toLowerCase()
              .includes(filter.toString().toLowerCase())) ||
          (blog.name &&
            blog.name
              .toString()
              .toLowerCase()
              .includes(filter.toString().toLowerCase()))
        ) {
          return gridShops;
        }
      })
      .map((getShopesData) => {
        return (
          <>
            {done ? (
              <div className="stylishLoader">
                <CircularIndeterminate className="allagentsLoader" />
              </div>
            ) : (
              <Col xxl={3} lg={4} md={12} sm={12}>
                <div className="property_card mb-5">
                  <div>
                    <div className="my-2">
                      {getShopesData.cover_image === null ? (
                        <div className="">
                          <img
                            src={KliquesDetailBGIMg}
                            alt="KliquesDetailBGIMg.png"
                            className="KliquesDetailBGIMg"
                          />{" "}
                        </div>
                      ) : (
                        <div className="">
                          <img
                            src={getShopesData.cover_image}
                            alt=""
                            className="KliquesDetailBGIMg"
                          />
                        </div>
                      )}
                    </div>
                    <div className="d-flex justify-content-between mt-4">
                      <div className="">
                        <p class="text-left para det fw-bolder">Full Name:</p>
                      </div>
                      <div className="">
                        <p class="text-left det"> {getShopesData.name}</p>
                      </div>
                    </div>
                    <div className="forscroll">
                      <p class="text-left fw-bolder">Address:</p>
                      <p class="forElipse">{getShopesData.address}</p>
                    </div>
                    <div className=" d-flex justify-content-between">
                      <p class="text-left para det fw-bolder">Catagory:</p>
                      <p class="det">{getShopesData.category}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      {/* <div className="d-flex">
                      <div className="">
                        <LocationOnIcon className="icon mt-2" />
                      </div>
                      <div className="">
                        <small className="fw-bolder text-danger">
                          latitude:
                        </small>{" "}
                        <small>{getShopesData.location_lat}</small>{" "}
                        <div className="">
                          <small className="fw-bolder text-danger">
                            longitude:{" "}
                          </small>
                          <small>{getShopesData.location_long}</small>
                        </div>
                      </div>
                    </div> */}
                      <div className="Rating">
                        {getShopesData.total_ratings === 0 ? (
                          <div className="">
                            <small className="text-danger fw-bolder">
                              No&nbsp;Rating
                            </small>
                          </div>
                        ) : getShopesData.total_ratings === 1 ? (
                          <div className="">
                            <GradeIcon className="text-warning Rating_Icon" />
                            <GradeIcon className="text-warning Rating_Icon" />
                          </div>
                        ) : (
                          <div className="">
                            <GradeOutlinedIcon className="text-warning Rating_Icon" />
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="mt-2">
                      <p
                        className="button1 px-2 mt-4"
                        onClick={() => {
                          navigate(`/ShopDetail/${getShopesData.id}`);
                        }}
                      >
                        <small>Visit&nbsp;Shop</small>
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            )}
          </>
        );
      });

  ///
  // const pageCount = Math.ceil(gridShops.length / usersPerPage);

  return (
    <div className="">
      <div className="mt-5">
        <Container fluid>
          {done ? (
            <div className="stylishLoader">
              <CircularIndeterminate className="allagentsLoader" />
            </div>
          ) : (
            <div className="row">{displayUsers}</div>
          )}
          <div className="mt-5 d-flex">
            <p className="text-muted my-auto">
              {" "}
              Showing&nbsp;{shops_data}&nbsp;of&nbsp;{shops_data_total}
            </p>
            <div className="my-auto ms-auto">
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
        </Container>
      </div>
    </div>
  );
};

export default AllShopsgridView;
