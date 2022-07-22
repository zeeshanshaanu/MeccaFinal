import React, { useState, useEffect } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import ResponsiveDrawer from "../../Pages/Dashboard/Drawer";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import usePasswordToggle from "../../Components/PasswordToggle/usePasswordToggle";
import usePasswordToggleX from "../../Components/PasswordToggle/usePasswordToggleX";
import axios from "axios";
import { usePasswordValidation } from "../../hooks/usePasswordValidation";
const drawerWidth = 100;
const Input = styled("input")({
  display: "none",
});
const AddProfessionals = () => {
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  const breadcrumbs = [
    <div
      className="fw-bolder AllUsersBredCrumbs"
      underline="hover"
      key="2"
      color="inherit"
      onClick={handleClick}
    >
      <span
        onClick={() => {
          navigate("/AllProfessionals");
        }}
      >
        All Professionals
      </span>
    </div>,
    <Typography
      key="3"
      color="text.primary"
      className="fw-bolder AllUsersBredCrumbs "
    >
      <span className="foractive">Add Professionals</span>
    </Typography>,
  ];
  const navigate = useNavigate();
  const [upload, setupload] = useState(false);
  const [size, setsize] = useState(false);
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();
  const [PasswordInputTypex, ToggleIconx] = usePasswordToggleX();
   const [done, setdone] = useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [selectedFile, setSelectedFile] = useState({
    file: "",
    filepreview: null,
  });
  //=======/////////=========
  //=======/////////=========
  const HandleChange = (event) => {
    if (event.target.files[0].size > 100 * 2048) {
      setsize(true);
    } else if (event.target.files[0].size <= 100 * 2048) {
      setSelectedFile({
        ...selectedFile,
        file: event.target.files[0],
        filepreview: URL.createObjectURL(event.target.files[0]),
      });
      setsize(false);
      setupload(true);
    }
  };
  //=======/////////=========
  //=======/////////=========
  //=======/////////==========
  ///=================//////////////////===================////////////////////
  const [validationmessage, setvalidationmessage] = useState("");
  const [password, setPassword] = useState({
    firstPassword: "",
    secondPassword: "",
  });
  const [validLength, hasNumber, upperCase, lowerCase, match, specialChar] =
    usePasswordValidation({
      firstPassword: password.firstPassword,
      secondPassword: password.secondPassword,
      requiredLength: 5,
      numberValidation: true,
    });
  const setFirst = (event) => {
    setPassword({ ...password, firstPassword: event.target.value });
  };
  const setSecond = (event) => {
    setPassword({ ...password, secondPassword: event.target.value });
  };
  ///=================//////////////////===================////////////////////
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setemail] = useState("");
   const [professional, setprofessional] = useState("professional");
   const [signup_method, setsignup_method] = useState("email");

  const HandleSubmit = (e) => {
    console.log(password.secondPassword);
    e.preventDefault();
    setdone(true);
    CreateProfile();
  };
  const CreateProfile = () => {
    const formData = new FormData();
    formData.append("first_name", fname);
    formData.append("last_name", lname);
    formData.append("email", email);
    formData.append("email", email);
    formData.append("signup_method", signup_method);
    formData.append("user_type", professional);
    formData.append("image", selectedFile.file);
    formData.append(
      "password",
      password.secondPassword == "" ? password : password.secondPassword
    );
    axios
      .post("/register", formData, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token_id")}`,
        }
      })
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          setdone(false);
          setNotify({
            isOpen: true,
            message: `${response.data.message}`,
            type: "success",
          });
        }
        setTimeout(() => {
          navigate("/AllProfessionals");
        }, 2000);
      })
      .catch((err) => {
        setdone(false);
        console.log(err.response);
        setNotify({
          isOpen: true,
          message: `${err.response.data.message}`,
          type: "error",
        });
        console.log(err);
      });
  };
  return (
    <div className="Main_head TopDiv">
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
          {/* ======FORM====== */}
          <Form onSubmit={HandleSubmit}>
            <div className=" d-flex justify-content-between mt-5 mx-4">
              <Stack spacing={2}>
                <Breadcrumbs
                  separator={<NavigateNextIcon fontSize="small" />}
                  aria-label="breadcrumb"
                >
                  {breadcrumbs}
                </Breadcrumbs>
              </Stack>
              {/* <div className="d-flex">
                <button
                  className="button1 mx-3 px-4 py-2 fw-bolder"
                  onClick={() => {
                    navigate("/AllProfessionals");
                  }}
                >
                  <small>Cancel</small>
                </button>
                <button type="submit" className="button1 px-5 py-2 fw-bolder">
                  <small>Add</small>
                </button>
              </div> */}
            </div>
            {/*  */}
            <div className="for_Form mt-5 mx-4">
              <Container fluid>
                {/* <div className="For_Image my-4">
                  <label htmlFor="icon-button-file">
                    <Input
                      accept="image/*"
                      id="icon-button-file"
                      type="file"
                      // value={selectedFile}
                      onChange={HandleChange}
                      // required
                    />

                    {!upload ? (
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                      >
                        <div className="addicon">
                          <AddIcon className="icon" />
                        </div>
                      </IconButton>
                    ) : (
                      <img
                        className="previewimg mb-3"
                        src={selectedFile.filepreview}
                        alt=""
                      />
                    )}
                    <br />
                  </label>
                  <div className={size ? "sizeshow" : "sizehide"}>
                    <small>File size excedded than 1MB</small>
                  </div>
                </div> */}
                <Row xs="1" sm="1" md="2" lg="3" xl="3">
                  <Col>
                    <Form.Group className="mb-4" controlId="#">
                      <Form.Label>
                        <small className="text fw-bold">First Name</small>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                        className="py-2"
                        onChange={(e) => setFname(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-4" controlId="#">
                      <Form.Label>
                        <small className="text fw-bold">Last Name</small>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="lastname"
                        placeholder="Last Name"
                        className="py-2"
                        onChange={(e) => setLname(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-4" controlId="#">
                      <Form.Label>
                        <small className="text fw-bold">Email</small>
                      </Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="py-2"
                        onChange={(e) => setemail(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                {/* ==============SECONDROW=============== */}
                <Row>
                  <Col md={6} sm={12} lg={6}>
                    <div className="for_input text-white mt-3">
                      <Form.Label>
                        <small>Password</small>
                        <span className="fw-bolder" style={{ color: "white" }}>
                          *
                        </span>{" "}
                      </Form.Label>
                      <Form.Control
                        type={PasswordInputType}
                        placeholder="EX: A123@a"
                        onChange={setFirst}
                        maxLength="15"
                        required
                        className="w-100 indicator py-2 ps-2"
                      />
                      <span className="password-toogle-icon">{ToggleIcon}</span>
                    </div>
                    {!validLength ? (
                      <span style={{ color: "red", marginTop: "15px" }}>
                        <small
                          className={
                            password.firstPassword == "" ? "d-none" : "h"
                          }
                        >
                          Minimum 5 characters
                        </small>
                      </span>
                    ) : !lowerCase ? (
                      <span style={{ color: "red", marginTop: "15px" }}>
                        <small
                          className={
                            password.firstPassword == "" ? "d-none" : "h"
                          }
                        >
                          Must Contain A LowerCase Case Letter
                        </small>
                      </span>
                    ) : !hasNumber ? (
                      // <span style={{ color: "green", marginTop: "5px" }}></span>
                      <span style={{ color: "red", marginTop: "15px" }}>
                        <small
                          className={
                            password.firstPassword == "" ? "d-none" : "h"
                          }
                        >
                          Must Contain A Number
                        </small>
                      </span>
                    ) : !upperCase ? (
                      <span style={{ color: "red", marginTop: "15px" }}>
                        <small
                          className={
                            password.firstPassword == "" ? "d-none" : "h"
                          }
                        >
                          Must Contain An UpperCase Letter
                        </small>
                      </span>
                    ) : !specialChar ? (
                      <span style={{ color: "red", marginTop: "15px" }}>
                        <small
                          className={
                            password.firstPassword == "" ? "d-none" : "h"
                          }
                        >
                          Must Contain A Special Character
                        </small>
                      </span>
                    ) : (
                      <span style={{ color: "green", marginTop: "5px" }}></span>
                    )}
                  </Col>             
                  <Col md={6} sm={12} lg={6}>
                    <div className="for_input text-white mt-3">
                      <Form.Label>
                        <small>Confirm&nbsp;Password</small>
                        <span className="fw-bolder" style={{ color: "white" }}>
                          *
                        </span>{" "}
                      </Form.Label>
                      <Form.Control
                        type={PasswordInputTypex}
                        placeholder="Confirm Password"
                        onChange={setSecond}
                        required
                                            />
                      <span className="password-toogle-icon">
                        {ToggleIconx}
                      </span>
                    </div>
                    {match ? (
                      <span style={{ color: "green", marginTop: "5px" }}>
                        <small>Password Matched!</small>
                      </span>
                    ) : (
                      <span style={{ color: "red", marginTop: "5px" }}>
                        <small
                          className={
                            password.secondPassword == "" ? "d-none" : "h"
                          }
                        >
                          Password did not match
                        </small>
                      </span>
                    )}
                  </Col>
                </Row>
                <div className="mt-3 d-flex">
                  {!validLength && !match ? (
                    <small>{validationmessage}</small>
                  ) : null}
                  <div className="text-center my-4 float-end">
                    {done ? (
                      <div className="loginloadersig">
                        <div className=" text-danger">
                          {/* <LoaderLog className="boxloadersig" />{" "} */}
                        </div>
                      </div>
                    ) : !validLength ||
                      !match ||
                      !lowerCase ||
                      !hasNumber ||
                      !upperCase ||
                      !specialChar ||
                      !validLength ||
                      !match ? null : (
                      <button type="submit" className="button1 px-5 py-2 fw-bolder">
                        Add
                      </button>
                    )}
                  </div>
                  <div className="mt-4">
                  <button
                  className="button1 mx-3 px-4 py-2 fw-bolder"
                  onClick={() => {
                    navigate("/AllProfessionals");
                  }}
                >
                  <small>Cancel</small>
                </button>
                  </div>
                </div>
           
              </Container>
              {/* Form */}
            </div>
          </Form>
        </Box>
      </Box>
    </div>
  );
};

export default AddProfessionals;
