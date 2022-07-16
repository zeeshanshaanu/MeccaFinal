import React from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import ResponsiveDrawer from "../../Pages/Dashboard/Drawer";
import Box from "@mui/material/Box";
import Logo1 from "../../Assets/Images/Logo1.png";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";

//
const drawerWidth = 100;

const EditProductDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="Main_head TopDiv">
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
            <div className=" d-flex justify-content-between mt-5 mx-4">
              <h4 className="">Edit&nbsp;Product&nbsp;Details</h4>
              <div className="btnp d-flex">
                <button
                  className="button1 mx-3 px-4"
                  onClick={() => {
                    navigate("/AllShopes");
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
            <div className="for_Form mt-5 mx-4">
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
                        // onChange={(e) => setFname(e.target.value)}
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
                <Row xs="1" sm="1" md="2" lg="3" xl="3">
                  <Col>
                    <Form.Group className="mb-4" controlId="#">
                      <Form.Label>
                        <small className="text fw-bold">Price</small>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="Price"
                        placeholder="$$"
                        className="py-2"
                        // onChange={(e) => setFname(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-4" controlId="#">
                      <Form.Label>
                        <small className="text fw-bold">Discount Option</small>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="discount"
                        placeholder="Discount Option"
                        className="py-2"
                        // onChange={(e) => setFname(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-4" controlId="#">
                      <Form.Label>
                        <small className="text fw-bold">
                          Discount Percentage
                        </small>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="percentage"
                        placeholder="%%"
                        className="py-2"
                        // onChange={(e) => setFname(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row xs="1" sm="1" md="2" lg="3" xl="3">
                  <Col>
                    <Form.Group className="mb-4" controlId="#">
                      <Form.Label>
                        <small className="text fw-bold">Quantity</small>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="quantity"
                        placeholder="Quantity"
                        className="py-2"
                        // onChange={(e) => setFname(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-4" controlId="#">
                      <Form.Label>
                        <small className="text fw-bold">Description</small>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="description"
                        placeholder="Description"
                        className="py-2"
                        // onChange={(e) => setFname(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-4" controlId="#">
                      <Form.Label>
                        <small className="text fw-bold">Brand</small>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="Brand"
                        placeholder="Brand"
                        className="py-2"
                        // onChange={(e) => setFname(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                {/* ==============SECONDROW=============== */}
                <Row xs="1" sm="1" md="2" lg="3" xl="3">
                  <Col>
                    <Form.Group className="mb-4" controlId="#">
                      ``
                      <Form.Label>
                        <small className="text fw-bold">Available Size</small>
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
                        <small className="text fw-bold">Available Colors</small>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="colors"
                        placeholder="Colors"
                        className="py-2"
                        // onChange={(e) => setFname(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-4" controlId="#">
                      <Form.Label>
                        <small className="text fw-bold">Shipping Method</small>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="shipping"
                        placeholder="Shipping Method"
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

export default EditProductDetails;
