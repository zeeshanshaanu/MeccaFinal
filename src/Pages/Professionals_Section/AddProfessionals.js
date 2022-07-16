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
const drawerWidth = 100;
const Input = styled("input")({
  display: "none",
});
const AddProfessionals = () => {
  const navigate = useNavigate();
  const [upload, setupload] = useState(false);
  const [size, setsize] = useState(false);
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();

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
              <h4 className="">Add&nbsp;Professionals</h4>
              <div className="d-flex">
                <button
                  className="button1 mx-3 px-4 py-1 fw-bolder"
                  onClick={() => {
                    navigate("/AllProfessionals");
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

export default AddProfessionals;
