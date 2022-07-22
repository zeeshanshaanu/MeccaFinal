import React, { useState, useEffect } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import ResponsiveDrawer from "../../Pages/Dashboard/Drawer";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import usePasswordToggle from "../../Components/PasswordToggle/usePasswordToggle";
//
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
//
const drawerWidth = 100;
const Input = styled("input")({
  display: "none",
});
const EditProfessionals = () => {
  const navigate = useNavigate();
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
        AllProfessionals
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
          navigate("/EditProfessionals");
        }}
      >
        EditProfessionals
      </span>
    </Typography>,
  ];

  const [upload, setupload] = useState(false);
  const [size, setsize] = useState(false);
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();

  //
  const [selectedFile, setSelectedFile] = useState({
    file: [],
    filepreview: null,
  });
  const handleChange = (event) => {
    if (event.target.files[0].size > 300 * 3024) {
      setsize(true);
    } else if (event.target.files[0].size <= 300 * 3024) {
      setSelectedFile({
        ...selectedFile,
        file: event.target.files[0],
        filepreview: URL.createObjectURL(event.target.files[0]),
      });
      setupload(false);
      setsize(false);
    }
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
          <Form>
            <div className=" d-flex justify-content-between mt-5 mx-4">
              <Stack spacing={2}>
                <Breadcrumbs
                  separator={<NavigateNextIcon fontSize="small" />}
                  aria-label="breadcrumb"
                >
                  {breadcrumbs}
                </Breadcrumbs>
              </Stack>
              <div className="btnp d-flex">
                <button
                  className="button1 mx-3 px-4"
                  onClick={() => {
                    navigate("/AllProfessionals");
                  }}
                >
                  <small>Cancel</small>
                </button>
                <button type="submit" className="button1 px-4">
                  <small>Update</small>
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
                      onChange={handleChange}
                    />
                    {!upload ? (
                      upload ? (
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
                        <img className="previewimg" src={selectedFile} alt="" />
                      )
                    ) : (
                      <img
                        className="previewimg"
                        src={selectedFile.filepreview}
                        alt=""
                      />
                    )}
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
                    <Form.Group className="mb-4" controlId="#">
                      <Form.Label>
                        <small className="text fw-bold">Password</small>
                      </Form.Label>
                      <Form.Control
                        type={PasswordInputType}
                        name="jd"
                        placeholder="Password"
                        className="py-2"
                        // onChange={(e) => setFname(e.target.value)}
                        required
                      />
                      <span className="passwordToogle">{ToggleIcon}</span>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-4" controlId="#">
                      <Form.Label>
                        <small className="text fw-bold">Date of Birth</small>
                      </Form.Label>
                      <Form.Control
                        type="date"
                        name="dob"
                        placeholder="Date of Birth"
                        className="py-2"
                        // onChange={(e) => setFname(e.target.value)}
                        required
                      />
                    </Form.Group>
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

export default EditProfessionals;
