/* eslint-disable no-unused-vars */
import Box from "@mui/material/Box";
import Form from "react-bootstrap/Form";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ResponsiveDrawer from "../../Dashboard/Drawer";
import AppBar from "@mui/material/AppBar";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Row, Col } from "react-bootstrap";
import FormGroup from "@mui/material/FormGroup";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

////////////=============/////////////============
////////////=============/////////////============
const drawerWidth = 280;
const UpdateVarient = () => {
  const navigate = useNavigate();
  ///////////=============/////////////===========
  const [category, setcategory] = useState("");
  const [done, setdone] = useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [isActive, setIsActive] = useState("");
  const { id } = useParams();
  const ServicesUpdate = () => {
    axios
      .put(
        `/variantOption/update?variant_option_id=${id}&name=${name}&value=${value}&type=${type}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token_id")}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        if (response.data.code === 200) {
          setdone(false);
          setNotify({
            isOpen: true,
            message: `${response.data.message}`,
            type: "success",
          });
        }
        setTimeout(() => {
          navigate("/Varients");
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
  const HandleSubmit = (e) => {
    e.preventDefault();
    setdone(true);
    ServicesUpdate();
  };
  //  ===========////////////===========////////////////
  const [name, setName] = useState("");
  const [type, settype] = useState("");
  const [value, setvalue] = useState("");
  const [Services, setServices] = useState([]);
  //////=============///////////////============/////
  console.log(isActive);
  //////=============///////////////============/////
  const GetServices = () => {
    axios
      .get(`/variantOption/view_all`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token_id")}`,
        },
      })
      .then((response) => {
        setdone(true);
        console.log(response.data.data);
        console.log(id);
        console.log(
          response.data.data.filter((servicess) => {
            return servicess.variant_option_id == id;
          })
        );
        response.data.data
          .filter((servicess) => {
            return id == servicess.variant_option_id;
          })
          .map((servicess) => {
            settype(servicess.type);
            setName(servicess.name);
            setvalue(servicess.value);
          });
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    sessionStorage.setItem("id", "12");
    GetServices();
    setdone(true);
  }, []);
  //  ===========////////////===========////////////////
  return (
    <div className="TopDiv">
      <Box sx={{ display: "flex" }}>
        <div className="for_drawer">
          <ResponsiveDrawer heading="App Settings" className="alluser" />
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
          <Form onSubmit={HandleSubmit}>
            <div class="form-group mt-5 pt-5">
              <Row>
                <Form.Label className="text-dark mb-5 fw-bolder">
                  Update&nbsp;Varient
                </Form.Label>
                {/*  */}
                {/*  */}
                {/* <Col lg={3} md={6} sm={12}>
                  <Form.Group className="mb-3">
                    <div className="">
                      <Form.Label className="text-dark">Service Id*</Form.Label>
                    </div>
                    <input
                      type="text"
                   className="w-100 py-1 ps-2 categoryinput"
                     />
                  </Form.Group>
                </Col> */}
                {/*  */}
                {/*  */}
                <Col lg={4} md={4} sm={12}>
                  <div className="">
                    <Form.Label className="text-dark"> Name</Form.Label>
                  </div>
                  <Form.Group className="mb-3">
                    <input
                      type="text"
                      // pattern="[A-Za-z]{3,}"
                      // title="Must not contain any number or special character"
                      placeholder="Service Name"
                      value={name}
                      className="w-100 py-2 ps-2 categoryinput"
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col lg={4} md={4} sm={12}>
                  <div className="">
                    <Form.Label className="text-dark">Type</Form.Label>
                  </div>
                  <Form.Group className="mb-3">
                    <input
                      type="text"
                      // pattern="[A-Za-z]{3,}"
                      // title="Must not contain any number or special character"
                      placeholder="Type"
                      name="ServicesName"
                      value={type}
                      className="w-100 py-2 ps-2 categoryinput"
                      onChange={(e) => settype(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col lg={4} md={4} sm={12}>
                  <div className="">
                    <Form.Label className="text-dark">Value</Form.Label>
                  </div>
                  <Form.Group className="mb-3">
                    <input
                      type="text"
                      // pattern="[A-Za-z]{3,}"
                      // title="Must not contain any number or special character"
                      placeholder="Value"
                      name="ServicesName"
                      value={value}
                      className="w-100 py-2 ps-2 categoryinput"
                      onChange={(e) => setvalue(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                {/*  */}
                {/*  */}
                {/* <Col lg={4} md={4} sm={12}>
                  <div className="">
                    <Form.Label className="text-dark">
                      Service Status (Optional)
                    </Form.Label>
                  </div>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Android12Switch
                          defaultChecked
                          className="radiobtn"
                          value={isActive}
                          onChange={(e) => setIsActive(e.target.value)}
                        />
                      }
                      label="ON/OFF"
                    />
                  </FormGroup>
                </Col> */}
              </Row>
              <div className="d-flex  mt-4">
                <button className="button1 px-5 py-2">
                  Update&nbsp;varient
                </button>
              </div>
            </div>
          </Form>
        </Box>
      </Box>
    </div>
  );
};

export default UpdateVarient;
