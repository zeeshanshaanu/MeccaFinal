import React, { useState, useEffect } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import ResponsiveDrawer from "../../Pages/Dashboard/Drawer";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import usePasswordToggle from "../../Components/PasswordToggle/usePasswordToggle";
import usePasswordToggleX from "../../Components/PasswordToggle/usePasswordToggleX";

import { usePasswordValidation } from "../../hooks/usePasswordValidation";
////////////===========////////////=========
////////////===========////////////=========
const drawerWidth = 100;
const Input = styled("input")({
  display: "none",
});
const AddUser = () => {
  const navigate = useNavigate();
  const [upload, setupload] = useState(false);
  const [size, setsize] = useState(false);
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();
  const [PasswordInputTypex, ToggleIconx] = usePasswordToggleX();

  const [selectedFile, setSelectedFile] = useState({
    file: "",
    filepreview: null,
  });
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
  //==////===========////////////
  //==////===========////////////
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
  const [validationmessage, setvalidationmessage] = useState("");
  //////////////=====================//////////////////============
  //////////////=====================//////////////////============
  //////////////=====================//////////////////============
  return (
    <div className="Main_head TopDiv">
      <Box sx={{ display: "flex" }}>
        <div className="for_drawer">
          <ResponsiveDrawer heading="All Users" className="alluser" />
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
          <Form>
            <div className=" d-flex justify-content-between mt-5 mx-4">
              <h4 className="">Add&nbsp;User</h4>
              <div className="d-flex">
                <button
                  className="button1 mx-3 px-4 py-1 fw-bolder"
                  onClick={() => {
                    navigate("/AllUsers");
                  }}
                >
                  <small>Cancel</small>
                </button>
                <button type="submit" className="button1 px-5 py-1 fw-bolder">
                  <small>Add</small>
                </button>
              </div>
            </div>
            {/*  */}
            <div className="for_Form mt-5 mx-4">
              <Container fluid>
                <div className="For_Image my-4">
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
                </div>
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
                        // onChange={(e) => setFname(e.target.value)}
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
                        // onChange={(e) => setFname(e.target.value)}
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
                        // onChange={(e) => setFname(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                {/* ==============SECONDROW=============== */}
                <Row xs="1" sm="1" md="2" lg="3" xl="3">
                  <Col>
                    <Form.Group className="mb-4" controlId="#">
                      <Form.Label>
                        <small className="text fw-bold">Phone</small>
                      </Form.Label>
                      <Form.Control
                        type="tel"
                        name="Phone"
                        placeholder="Phone"
                        className="py-2"
                        // onChange={(e) => setFname(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <div className="text-start text-dark">
                        <Form.Label>Password</Form.Label>
                      </div>
                      <Form.Control
                        type={usePasswordToggle}
                        placeholder="EX: A123@a"
                        onChange={setFirst}
                        maxLength="15"
                        required
                      />
                      <span className="passwordToogle">{ToggleIcon}</span>
                      <div className="mt-2">
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
                          <span
                            style={{ color: "green", marginTop: "5px" }}
                          ></span>
                        )}
                      </div>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <div className="text-start text-dark ">
                        <Form.Label>Confirm Password</Form.Label>
                      </div>
                      <Form.Control
                        type={PasswordInputTypex}
                        placeholder="EX: A123@a"
                        onChange={setSecond}
                        required
                      />
                      <span className="passwordToogle2">{ToggleIconx}</span>
                      <div className="mt-2">
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
                      </div>
                    </Form.Group>
                    {!validLength && !match ? (
                      <small>{validationmessage}</small>
                    ) : null}
                  </Col>
                </Row>
              </Container>
              {/* Form */}
            </div>
          </Form>
        </Box>
      </Box>
    </div>
  );
};

export default AddUser;
