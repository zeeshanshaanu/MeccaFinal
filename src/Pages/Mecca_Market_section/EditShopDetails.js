import React from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import ResponsiveDrawer from "../../Pages/Dashboard/Drawer";
import Box from "@mui/material/Box";
import Logo1 from "../../Assets/Images/Logo1.png";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";

//
const drawerWidth = 100;
const EditShopDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="Main_head TopDiv pb-5">
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
          {/* ======FORM====== */}
          <Form>
            <div className="d-flex justify-content-between mt-5 mx-4">
              <h4 className="">Edit&nbsp;Product&nbsp;Details</h4>
              <div className="btnp d-flex">
                <button
                  className="button1 mx-3 px-4"
                  onClick={() => {
                    navigate("/AllShops");
                  }}
                >
                  <small>Cancel</small>
                </button>
                <button className="button1 px-4">
                  <small>Update</small>
                </button>
              </div>
            </div>
            {/*  */}
            <div className="for_Form mt-4 mx-4">
              <Container fluid className="mb-4">
                <div className="for_Images d-flex">
                  <img src={Logo1} alt="Logo1.png" className="mb-3" />
                  <img src={Logo1} alt="Logo1.png" className="mb-3" />
                </div>
                <Row xs="1" sm="1" md="2" lg="3" xl="3">
                  <Col>
                    <Form.Group className="mb-4" controlId="#">
                      <Form.Label>
                        <small className="text fw-bold">Product Name</small>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="product"
                        placeholder="Product Name"
                        className="py-2"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-4" controlId="#">
                      <Form.Label>
                        <small className="text fw-bold">Main Category</small>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="category"
                        placeholder="For Dropdown"
                        className="py-2"
                        // onChange={(e) => setFname(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-4" controlId="#">
                      <Form.Label>
                        <small className="text fw-bold">
                          Secondary Category
                        </small>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="secondary"
                        placeholder="Secondary Category"
                        className="py-2"
                        // onChange={(e) => setFname(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                {/* ==============SECONDROW=============== */}

                <Row xs="1" sm="1" md="1" lg="1" xl="1">
                  <Col>
                    <Form.Group className="mb-4" controlId="#">
                      <Form.Label>
                        <small className="text fw-bold">Description</small>
                      </Form.Label>
                      <textarea
                        placeholder="Description..."
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </Form.Group>
                  </Col>
                </Row>
                {/* ==============SECONDROW=============== */}
                <Row xs="1" sm="1" md="2" lg="3" xl="3">
                  <Col>
                    <Form.Group className="mb-4" controlId="#">
                      <Form.Label>
                        <small className="text fw-bold">Location</small>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="available"
                        placeholder="Available Size"
                        className="py-2"
                        // onChange={(e) => setFname(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-4" controlId="#">
                      <Form.Label>
                        <small className="text fw-bold">Address</small>
                      </Form.Label>
                      <Form.Control
                        type="address"
                        name="colors"
                        placeholder="Colors"
                        className="py-2"
                        // onChange={(e) => setFname(e.target.value)}
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

export default EditShopDetails;
