/* eslint-disable no-unused-vars */
import Box from "@mui/material/Box";
import Form from "react-bootstrap/Form";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ResponsiveDrawer from "../Dashboard/Drawer";
import AppBar from "@mui/material/AppBar";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Row, Col } from "react-bootstrap";
import FormGroup from "@mui/material/FormGroup";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

////////////=============/////////////============
const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
    },
    "&:before": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },
    "&:after": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12,
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 16,
    height: 16,
    margin: 2,
  },
}));
////////////=============/////////////============
const drawerWidth = 280;
const UpdateService = () => {
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
  const { service_id } = useParams();
  const ServicesUpdate = () => {
    axios
      .put(
        `/service/update?service_id=${service_id}&name=${name}&description=${description}&isActive${isActive}`,
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
          navigate("/AllServices");
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
  const [description, setDescription] = useState("");
  const [Services, setServices] = useState([]);
  //////=============///////////////============/////
  console.log(isActive);
  //////=============///////////////============/////
  const GetServices = () => {
    axios
      .get(`/service/view_all`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token_id")}`,
        },
      })
      .then((response) => {
        setdone(true);
        // setServices(response.data.data);
        response.data.data
          .filter((servicess) => {
            return service_id == servicess.service_id;
          })
          .map((servicess) => {
            setDescription(servicess.description);
            setName(servicess.name);
            setIsActive(servicess.isactive);
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
          <ResponsiveDrawer heading="All Services" className="alluser" />
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
                  Update&nbsp;Service
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
                    <Form.Label className="text-dark">Service Name</Form.Label>
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
                    <Form.Label className="text-dark">
                      Description (Optional)
                    </Form.Label>
                  </div>
                  <Form.Group className="mb-3">
                    <input
                      type="text"
                      // pattern="[A-Za-z]{3,}"
                      // title="Must not contain any number or special character"
                      placeholder="Description"
                      name="ServicesName"
                      value={description}
                      className="w-100 py-2 ps-2 categoryinput"
                      onChange={(e) => setDescription(e.target.value)}
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
                  Update&nbsp;Service
                </button>
              </div>
            </div>
          </Form>
        </Box>
      </Box>
    </div>
  );
};

export default UpdateService;
