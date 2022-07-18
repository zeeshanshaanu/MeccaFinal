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
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  //////////=============/////////////////==============
  //////////=============/////////////////==============
  const [done, setdone] = useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const [GetShopes, setGetShopes] = useState([]);
  const GetServices = () => {
    axios
      .get(`/shop/view-all`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token_id")}`,
        },
      })
      .then((response) => {
        setgridShops(response.data.data.shops);
        setdone(false);
      });
    // .catch((err) => console.log(err));
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
  const displayUsers = gridShops
    .slice(pagesVisited, pagesVisited + usersPerPage)
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

                    <p class="forElipse">
                      {getShopesData.address}
                    </p>

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
  const pageCount = Math.ceil(gridShops.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="">
      <div className="mt-5">
        <Container fluid>
          <div className="row ">{displayUsers}</div>
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
    </div>
  );
};

export default AllShopsgridView;
