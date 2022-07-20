/* eslint-disable no-unused-vars */
import Notification from "../../../Components/AlertNotification/Message";
import ResponsiveDrawer from "../../Dashboard/Drawer";
import CircularIndeterminate from "../../../Components/Loader/Loader";
import "../../Services_Management/Services.css";
import MainMenu from "../../../Components/SelectCatgeriesOption/MainMenu";
////////=======/===////////////===========
////////=======/===////////////===========
import Box from "@mui/material/Box";
import Form from "react-bootstrap/Form";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AppBar from "@mui/material/AppBar";
import Table from "react-bootstrap/Table";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
////////////=============/////////////============
////////////=============/////////////============
const drawerWidth = 100;
const Blogs = () => {
  const [filter, setfilter] = useState("");
  ////////////=============/////////////==========
  const navigate = useNavigate();
  const [done, setdone] = useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  ////////////=============/////////////============
  const [tokenauth, settokenauth] = useState("");
  const [Blog, setBlog] = useState([]);
  const GetServices = () => {
    axios
      .get(`blogCategory/view-all`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token_id")}`,
        },
      })
      .then((response) => {
        setBlog(response.data.data);
        console.log(response.data);
        setdone(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    sessionStorage.setItem("id", "12");
    GetServices();
    setdone(true);
  }, []);
  ////////////=============/////////////============
  ////////////=============/////////////============
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [level, setlevel] = useState("");
  //
  //
  //
  const AddBlogCatg = () => {
    const formData = new FormData();
    // formData.append("description", description);
    formData.append("name", name);
    axios
      .post("blogCategory/add", formData, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token_id")}`,
        },
      })
      .then((response) => {
        if (response.data.code === 200) {
          setdone(false);
          setNotify({
            isOpen: true,
            message: `${response.data.message}`,
            type: "success",
          });
        }
        setTimeout(() => {
          window.location.reload();
        }, 1000);
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
    AddBlogCatg();
  };

  ////////////=============/////////////============
  ////////////=============/////////////============
  ////////////=============/////////////============
  const handleDelete = (blog_category_id) => {
    console.log(sessionStorage.getItem("token_id"));
    setdone(true);
    axios
      .delete(`/blog/delete?blog_id=${blog_category_id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token_id")}`,
        },
      })
      .then((response) => {
        console.log(response);
        setdone(false);
        if (response.data.code === 200) {
          setdone(false);
          setNotify({
            isOpen: true,
            message: `${response.data.message}`,
            type: "success",
          });
        }
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((err) => {
        setdone(false);
        setNotify({
          isOpen: true,
          message: `${err.response.message}`,
          type: "error",
        });
      });
  };
  ////////////=============/////////////============
  ////////////=============/////////////============
  return (
    <div className="overflow-none">
      <div className="TopDiv">
        <Box sx={{ display: "flex" }}>
          <div className="for_drawer">
            <ResponsiveDrawer
              heading="Services & Categories"
              className="alluser"
            />
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
            {done ? (
              <div className="stylishLoader">
                <CircularIndeterminate className="allagentsLoader" />
              </div>
            ) : (
              <div className="mt-5 pt-5">
                <Form onSubmit={HandleSubmit} className="">
                  <div class="">
                    <MainMenu />
                    <div className="">
                      <div className="">
                        <h4 className="fw-bolder">
                          Add&nbsp;Blog&nbsp;Category
                        </h4>
                        <Form.Label className="text-dark">
                          Enter Blog Name*
                        </Form.Label>
                      </div>
                      <Form.Group className="mb-3">
                        <input
                          type="text"
                          // pattern="[A-Za-z]{3,}"
                          // title="Must not contain any number or special character"
                          placeholder="Category Name"
                          name="Blog Name"
                          required
                          className="w-25 py-1 ps-2 categoryinput"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </Form.Group>
                      {/* </Col>
                    <Col lg={4} md={6} sm={12}> */}
                      {/* <div className="">
                        <Form.Label className="text-dark">
                          Description (Optional)
                        </Form.Label>
                      </div>
                      <Form.Group className="mb-3">
                        <input
                          type="text"
                         
                          placeholder="Description"
                          name="ServicesName"
                          className="w-25 py-1 ps-2 categoryinput"
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </Form.Group> */}
                    </div>
                    <div className="">
                      <button className="button1 py-2 w-25">Add</button>
                    </div>
                  </div>
                </Form>
                <div className="Show_List py-5">
                  <div className="">
                    <div className=" d-flex justify-content-between">
                      <div className="">
                        <h4 className="text-dark mb-5 fw-bolder">
                          All&nbsp;Blogs
                        </h4>
                      </div>
                      {/*  */}
                      <div className="position-relative w-75">
                        <Form.Group className="mx-3" controlId="#">
                          <Form.Control
                            placeholder="Search by Service name"
                            type="search"
                            className="input_field "
                            value={filter}
                            onChange={(e) => setfilter(e.target.value)}
                          />
                        </Form.Group>
                        <SearchIcon className="ServicesSearch_icon" />
                      </div>
                    </div>

                    <div className="d-flex justify-content-center">
                      <Table className="w-100">
                        <thead>
                          <tr>
                            <th>S.No#</th>
                            <th>Blog&nbsp;name</th>
                            {/* <th>Description</th>
                            <th>Status</th> */}
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Blog.filter((admin) => {
                            if (filter === "") {
                              return Blog;
                            } else if (
                              admin.name &&
                              admin.name
                                .toString()
                                .toUpperCase()
                                .includes(filter.toString().toUpperCase())
                            ) {
                              return Blog;
                            }
                          }).map((index) => (
                            <tr>
                              <td>{index.blog_category_id}</td>
                              <td>{index.name}</td>

                              {/* <td>{index.description}</td> */}
                              {/* <td>
                                {" "}
                                {index.isActive === 1 ? (
                                  <div
                                    style={{
                                      textAlign: "center",
                                      color: "green",
                                      fontWeight: "bolder",
                                      paddingTop: 5,
                                      paddingBottom: 5,
                                      paddingLeft: 15,
                                      paddingRight: 15,
                                      borderRadius: "8px",
                                      backgroundColor:
                                        "rgba(117, 162, 66, 0.15)",
                                    }}
                                  >
                                    <small>Active</small>{" "}
                                  </div>
                                ) : index.isActive === 1 ? (
                                  <div style={{ color: "blue" }}>
                                    <small>Active</small>{" "}
                                  </div>
                                ) : index.isActive === 0 ? (
                                  <div
                                    className=""
                                    style={{
                                      textAlign: "center",
                                      color: "red",
                                      fontWeight: "bolder",
                                      paddingTop: 5,
                                      paddingBottom: 5,
                                      paddingLeft: 13,
                                      paddingRight: 13,
                                      borderRadius: "8px",
                                      backgroundColor:
                                        "rgba(117, 162, 66, 0.15)",
                                    }}
                                  >
                                    Inactive
                                  </div>
                                ) : (
                                  <div style={{ color: "red" }}>
                                    <small> Not&nbsp;Available </small>{" "}
                                  </div>
                                )}
                              </td> */}
                              <td>
                                <div className="d-flex icon-popup">
                                  <EditIcon
                                    className="actions  mx-2"
                                    onClick={() => {
                                      navigate(
                                        `/UpdateBlogCategory/${index.blog_category_id}`
                                      );
                                    }}
                                  />
                                  <div
                                    className="DeleteIcon"
                                    onClick={() => {
                                      handleDelete(index.blog_category_id);
                                    }}
                                  >
                                    <DeleteIcon />
                                  </div>
                                  {/* <Deletepopup
                                  className="actions"
                                  onClick={() => {
                                    handleDelete(index.service_id);
                                  }}
                                /> */}
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <Notification notify={notify} setNotify={setNotify} />
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Blogs;
