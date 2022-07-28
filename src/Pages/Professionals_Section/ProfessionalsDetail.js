import { Col, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ResponsiveDrawer from "../../Pages/Dashboard/Drawer";
import Box from "@mui/material/Box";
import KliquesImg from "../../Assets/Images/KliquesImg.png";
import KliquesDetailBGIMg from "../../Assets/Images/KliquesDetailBGIMg.png";
import Carousel from "react-bootstrap/Carousel";
import AppBar from "@mui/material/AppBar";
import "./Professionals.css";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import CircularIndeterminate from "../../Components/Loader/Loader";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";
const drawerWidth = 100;
const ProfessionalsDetail = () => {
  const navigate = useNavigate();
  const [done, setdone] = useState(false);
  //////////////////==================////////////////============
  const { id } = useParams();
  //////////////////==================////////////////============
  //////////////////==================////////////////============
  //////////////////==================////////////////============
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [Status, setStatus] = useState("");
  //////////////////==================////////////////============
  const [websiteLink, setwebsiteLink] = useState("");
  const [ProfAddress, setProfAddress] = useState("");
  const [dob, setdob] = useState("");
  const [ProflieImg, setProflieImg] = useState();
  const [phone, setphone] = useState("");
  //////////////////==================////////////////============
  //////////////////==================////////////////============
  const [getavailabilities, setGetavailabilities] = useState([]);
  const [GetCertificates, setGetCertificates] = useState([]);
  const [getportfolios, setGetportfolios] = useState([]);
  const [gettestimonials, setGettestimonials] = useState([]);
  const [getservices, setGetservices] = useState([]);
  const [getMedia, setGetMedia] = useState([]);
  //////////////////==================////////////////============
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
          navigate("/AllProfessionals");
        }}
      >
        All Professionals
      </span>
    </Typography>,
    <Typography
      key="3"
      color="text.primary"
      className="fw-bolder AllUsersBredCrumbs"
    >
      <span className="foractive">Professionals Detail</span>
    </Typography>,
  ];
  const GetAllProfDetail = () => {
    axios
      .get(`/view-professional-profile?professional_id=${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token_id")}`,
        },
      })
      .then((response) => {
        setfirstname(response.data.data.first_name);
        setlastname(response.data.data.last_name);
        setemail(response.data.data.email);
        setStatus(response.data.data.is_profile_setup);
        //////////////////==================////////////////============
        //////////////////==================////////////////============
        setwebsiteLink(response.data.data.profile.website_link);
        setProfAddress(response.data.data.profile.address);
        setdob(response.data.data.profile.dob);
        setProflieImg(response.data.data.profile.image);
         setphone(response.data.data.profile.phone);
        //////////////////==================////////////////============
        //////////////////==================////////////////============
        setGetavailabilities(response.data.data.profile.availabilities);
        setGetportfolios(response.data.data.profile.portfolios);
        setGettestimonials(response.data.data.profile.testimonials);
        setGetservices(response.data.data.profile.services);
        setGetMedia(response.data.data.profile.media);
        setGetCertificates(response.data.data.profile.certificates);
        setdone(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    GetAllProfDetail();
    setdone(true);
  }, []);

  //////////////////==================////////////////============
  //////////////////==================////////////////============

  return (
    <div className="TopDiv px-3 pb-5 mt-5">
      <Box sx={{ display: "flex" }}>
        <div className="for_drawer">
          <ResponsiveDrawer heading="Professionals" className="alluser" />
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
          {done ? (
            <div className="stylishLoader">
              <CircularIndeterminate className="allagentsLoader" />
            </div>
          ) : (
            <>
              <div className="pt-5">
                {/* <Carousel className=""> */}
                {getMedia.map((mediaImg, index) => {
                  return (
                    <>
                      <Carousel.Item>
                        <img
                          src={mediaImg.file === "" ? "" : <p>No images</p>}
                          alt="KliquesDetailBGIMg.png"
                          className="w-100"
                        />
                      </Carousel.Item>
                    </>
                  );
                })}
                {/* </Carousel> */}
                <img
                  src={ProflieImg && ProflieImg}
                  alt=""
                  className="KliquesImg"
                />
              </div>
              <div className="BasicInfo">
                <h5 className="fw-bolder mb-4">Basic Information</h5>
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <p className="fw-bolder">Full Name:</p>&nbsp;
                    <p className="">
                      {firstname}&nbsp;{lastname}
                    </p>
                  </div>
                  <p className="fw-bolder ">
                    {Status === 1 ? (
                      <div className="text-success">Active</div>
                    ) : (
                      <div className="text-danger">Inactive</div>
                    )}
                  </p>
                </div>
                {/*  */}
                <div className="d-flex">
                  <p className="fw-bolder">Email:&nbsp;</p>
                  <div className="">
                    <small className="">{email}</small>
                  </div>
                </div>
                {/*  */}
                <div className="d-flex">
                  <p className="fw-bolder">Phone #:&nbsp;</p>
                  <div className="">
                    <small className="">{phone}</small>
                  </div>
                </div>
                {/*  */}
                <div className="d-flex">
                  <p className="fw-bolder">Location:&nbsp;</p>
                  <div className="">
                    <small className="">{ProfAddress}</small>
                  </div>
                </div>
                {/*  */}
                <div className="d-flex">
                  <p className="fw-bolder">Website Link:&nbsp;</p>
                  <div className="">
                    <small className=""><span onClick={() => window.open(websiteLink)}>
                      {" "}
                      <span className="">
                        {" "}
                        Visit Website{" "}
                      </span>
                    </span></small>
                  </div>
                </div>
                {/*  */}
                <div className="d-flex">
                  <p className="fw-bolder">Date of birth:&nbsp;</p>
                  <div className="">
                    <small className="">{dob}</small>
                  </div>
                </div>
                {/*  */}
                <div className="d-flex">
                  <p className="fw-bolder">Age:&nbsp;</p>
                  <div className="">
                    <small className="">{phone}</small>
                  </div>
                </div>
                {/*  */}
                <div className="d-flex">
                  <p className="fw-bolder">About Me:&nbsp;</p>
                  <div className="">
                    <small className="">{phone}</small>
                  </div>
                </div>
              </div>
              {/*  */}
              {/*  */}
              {/*  */}
              <hr />
              <div className="Services">
                <h3 className="fw-bolder mb-4">Services:</h3>
                <Row>
                  {getservices.lenght === 0
                    ? "No Data"
                    : getservices.map((servic) => {
                        return (
                          <Col lg={3} md={4} sm={12}>
                            <div className="Services_card mb-5">
                              <div className="mt-2 d-flex justify-content-end">
                                <p class="fw-bolder ProductCardTextColor ">
                                  {servic.isPremium === 1 ? (
                                    <div className="text-success fw-bolder">
                                      <small>Premium</small>
                                    </div>
                                  ) : (
                                    <div className="text-danger fw-bolder">
                                      <small>Free</small>
                                    </div>
                                  )}
                                </p>
                              </div>
                              <div className="mt-2 d-flex justify-content-between">
                                <p class="fw-bolder">Tittle:</p>
                                <p>
                                  <samall>{servic.name}</samall>
                                </p>
                              </div>
                              <div className="mt-2 d-flex justify-content-between">
                                <p class="fw-bolder ProductCardTextColor">
                                  Experience:
                                </p>
                                <p>
                                  <samall>{servic.experience}</samall>
                                </p>
                              </div>
                            </div>
                          </Col>
                        );
                      })}
                </Row>
              </div>
              <hr />
              <h3 className="fw-bolder mb-4">Certifications</h3>
              <div className="">
                {/*  */}
                {/*  */}
                <Row>
                  {GetCertificates.lenght === 0
                    ? "No Data"
                    : GetCertificates.map((CertificatesGets) => {
                        return (
                          <Col lg={3} md={4} sm={12}>
                            <div className="Events_card mb-5">
                              <div className="card_image">
                                <img
                                  src={CertificatesGets.file}
                                  alt=""
                                  className="KliquesDetailBGIMg"
                                />
                              </div>
                              <div>
                                <div className="d-flex justify-content-between mt-4">
                                  <div className="">
                                    <p class="text-left ">
                                      <span className="fw-bolder">Tittle:</span>
                                      &nbsp;
                                    </p>
                                  </div>
                                  <div className="">
                                    <p class="text-left det">
                                      {CertificatesGets.title}
                                    </p>
                                  </div>
                                </div>
                                {/*  */}
                                {/*  */}
                                <div className="">
                                  <div class="Completed">
                                      <span className="fw-bolder">
                                        Description:
                                      </span>
                                    <p class="">
                                      <small
                                        dangerouslySetInnerHTML={{
                                          __html: CertificatesGets.description,
                                        }}
                                      />
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                        );
                      })}
                </Row>
              </div>
              {/*  */}
              {/*  */}
              {/*  */}
              <hr />
              <div className="Testimonials">
                <h3 className="fw-bolder mb-4">Testimonials:</h3>
                <Row>
                  {gettestimonials.map((textimon) => {
                    return (
                      <Col xxl={3} lg={4} md={4} sm={12}>
                        <div className="TestimonialsCard mb-5">
                          <p className="d-flex justify-content-end">
                            {textimon.isActive === 1 ? (
                              <div className="text-success fw-bolder">
                                <small>Active</small>
                              </div>
                            ) : (
                              <div className="text-danger fw-bolder">
                                <small>Inactive</small>
                              </div>
                            )}
                          </p>
                          <div className="mt-2 d-flex justify-content-between">
                            <p class="fw-bolder">Client&nbsp;Name:</p>
                            <p>
                              <samall>{textimon.client_name}</samall>
                            </p>
                          </div>
                          {/*  */}
                          {/*  */}
                          <div className="mt-2 d-flex justify-content-between">
                            <p class="fw-bolder ProductCardTextColor">
                              Company:
                            </p>
                            <p>
                              <samall class="">{textimon.company}</samall>
                            </p>
                          </div>
                          {/*  */}
                          {/*  */}
                          <div className="mt-2 ">
                            <p class="fw-bolder ProductCardTextColor">
                              Feedback:
                            </p>
                            <p>
                              <samall>{textimon.feedback}</samall>
                            </p>
                          </div>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </div>
              <hr />
              <div className="Portfolio">
                <h3 className="fw-bolder mb-4">Portfolio:</h3>
                <Row>
                  {getportfolios.map((prot) => {
                    return (
                      <Col xxl={3} lg={4} md={4} sm={12}>
                        <div className="Events_card mb-5">
                          <div className="card_image">
                            <img
                              src={prot.media_url}
                              alt="KliquesDetailBGIMg.png"
                              className="KliquesDetailBGIMg"
                            />
                          </div>
                          <div>
                            {/*  */}
                            <div className="d-flex justify-content-between mt-4">
                              <div className="">
                                <p class="text-left ">
                                  <span className="fw-bolder">Tittle:</span>
                                  &nbsp;
                                </p>
                              </div>
                              <div className="">
                                <p class="text-left det">{prot.title}</p>
                              </div>
                            </div>
                            {/*  */}
                            <div className="d-flex justify-content-between mt-4">
                              <div className="">
                                <p class="text-left ">
                                  <span className="fw-bolder">URL:</span>&nbsp;
                                </p>
                              </div>
                              <div className="">
                                <p class="text-left det">{prot.link}</p>
                              </div>
                            </div>
                            {/*  */}
                            {/*  */}
                            <div className="">
                              <div className="">
                                <p class="text-left ">
                                  <span className="fw-bolder">
                                    Description:
                                  </span>
                                  &nbsp;
                                </p>
                              </div>
                              <div className="">
                                <p class="text-left det">{prot.description}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </div>
              {/*  */}
              {/*  */}
              {/*  */}
              <hr />
              <div className="">
                <h3 className="fw-bolder mb-4">Availability & Hours:</h3>
                <h6 className="fw-bolder mb-4">Hours of Operation</h6>
                <div className="AvailabilityHours mb-5">
                  {/*  */}
                  {/*  */}
                  {getavailabilities.map((index) => {
                    return (
                      <>
                        <div className="d-flex justify-content-between">
                          <h5 class="fw-bolder">{index.day}:</h5>
                          <h5 class="fw-bolder">
                            {index.status === 1 ? (
                              <div className="text-success fw-bolder">
                                <small>Active</small>
                              </div>
                            ) : (
                              <div className="text-danger fw-bolder">
                                <small>Inactive</small>
                              </div>
                            )}
                          </h5>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                          <div className="">
                            <p className="">
                              <span className="fw-bolder text-danger">
                                Start Time:
                              </span>
                              &nbsp;
                              <div className="">
                                <small>{index.from}</small>
                              </div>
                            </p>
                          </div>
                          <div className="">
                            <p className="">
                              <span className="fw-bolder text-danger">
                                End Time:
                              </span>
                              &nbsp;
                              <div className="">
                                <small>{index.to}</small>
                              </div>
                            </p>
                          </div>
                        </div>
                        <hr />
                      </>
                    );
                  })}
                </div>
              </div>
              {/*  */}
              {/*  */}
              {/*  */}
              <hr />
              <Row>
                <Col xxl={3} lg={2} md={4} sm={12}>
                  <div className="Pricing">
                    <h3 className="fw-bolder mb-4">Pricing:</h3>
                    <div className="PricingCard d-flex">
                      {/*  */}
                      {/*  */}
                      <div className="ms-3">
                        <p class="fw-bolder ProductCardTextColor mb-0">
                          <samall>Weight Loss</samall>
                        </p>
                        <p className="mb-0">
                          <span className="Exp">Exp:</span>{" "}
                          <samall>2 year</samall>
                        </p>
                        {/*  */}
                        {/*  */}
                        <div className="d-flex justify-content-between">
                          <div className="d-flex mt-0">
                            <WorkspacePremiumIcon
                              style={{ color: "#F43C2C" }}
                            />
                            <p class="fw-bolder ProductCardTextColor">
                              Premium:
                            </p>
                          </div>
                          {/*  */}
                          <div className="">
                            <p className="fw-bolder text-danger ms-5">500$</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default ProfessionalsDetail;
