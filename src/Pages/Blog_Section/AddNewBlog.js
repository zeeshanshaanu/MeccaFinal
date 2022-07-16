import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { Container, Form, Row, Col } from "react-bootstrap";
import ResponsiveDrawer from "../../Pages/Dashboard/Drawer";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "react-quill/dist/quill.snow.css";
import "./Blog.css";
import { Hint } from "react-autocomplete-hint";
import AppBar from "@mui/material/AppBar";
import { FloraEditor } from "./FloraEditor";
//
//
const options = [];
const drawerWidth = 100;
const Input = styled("input")({
  display: "none",
});
const AddNewBlog = () => {
  const handlebody = (e) => {
    seteditor(e);
  };
  const navigate = useNavigate();
  const [editor, seteditor] = useState("");
  const [upload, setupload] = useState(false);
  const [size, setsize] = useState(false);
  const [done, setdone] = useState(false);
  const [errormessage, seterrormessage] = useState("");
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
  //
  //
  //
  //
  //
  const [title, settitle] = useState("");
  const [date, setdate] = useState("");
  const [category_id, setcategory_id] = useState("");

  const AddBlog = () => {
    console.log(sessionStorage.getItem("description"));
    const formData = new FormData();
    formData.append("title", title);
    formData.append("cover_image", selectedFile.file);
    formData.append("date", date);
    formData.append("category_id", category_id);
    formData.append("description", sessionStorage.getItem("description"));
    axios
      .post("/blog/add", formData, {
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
          navigate("/AllBlogs");
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
  const [Text, setText] = useState("");

  useEffect(() => {
    seterrormessage("");
  }, [category_id]);
  const GetCategries = async () => {
    const response = await axios.get(`/blogCategory/view-all`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token_id")}`,
      },
    });
    // console.log(response.data);
    setdone(false);
    response.data.data.map((data) =>
      options.push(data.name && data.name.toLowerCase())
    );
  };
  // console.log(options);
  useEffect(() => {
    GetCategries();
  }, [Text]);
  const HandleSubmit = async (e) => {
    e.preventDefault();
    setdone(true);

    let response = await axios.get(`/blogCategory/view-all`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token_id")}`,
      },
    });
    setdone(false);
    console.log(response);
    // let result = await response..data.data.filter(
    //   (data) => data.name.toLowerCase() == name.toLowerCase()
    // );
    // console.log(result);
    // if (result.length > 0) {
    //   result.map((data) => {
    //     sessionStorage.setItem("catid", data._id);
    //     AddBlog();
    //   });
    // } else {
    //   seterrormessage("Category does'nt exist. Please add a new category.");
    // }
  };
  //
  //
  return (
    <div className="Main_head TopDiv pb-5">
      <Box sx={{ display: "flex" }}>
        <div className="for_drawer">
          <ResponsiveDrawer heading="Blog" className="alluser" />
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
            <div className=" d-flex justify-content-between mx-4 mt-5">
              <h4 className="">Add&nbsp;New&nbsp;Blog</h4>
              <div className="btnp d-flex mb-5">
                <button
                  className="button1 mx-3 px-4"
                  onClick={() => {
                    navigate("/AllBlogs");
                  }}
                >
                  <small>Cancel</small>
                </button>
                <button type="submit" className="button1 px-5">
                  <small>Add</small>
                </button>
              </div>
            </div>
            {/*  */}
            <div className="for_Form  mx-4">
              <Container fluid>
                <div className="For_Image mb-5 mt-4">
                  <label htmlFor="icon-button-file">
                    <Input
                      accept="image/*"
                      id="icon-button-file"
                      type="file"
                      onChange={HandleChange}
                    />
                    {!upload ? (
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                      >
                        <div className="addBlogicon">
                          <AddIcon className="Blogicon" />
                        </div>
                      </IconButton>
                    ) : (
                      <img
                        className="mb-3 w-100 imgshow"
                        src={selectedFile.filepreview}
                        alt=""
                      />
                    )}
                    <br />
                  </label>
                  <div className={size ? "sizeshow" : "sizehide"}>
                    <div className="fw-bolder">
                      <small>File size excedded than 1MB</small>
                    </div>
                  </div>
                </div>
                {/*  */}
                {/*  */}
                {/*  */}
                <Row xs="1" sm="1" md="2" lg="4" xl="3">
                  <Col>
                    <Form.Group className="mb-4" controlId="#">
                      <Form.Label>
                        <small className="text fw-bold">Title</small>
                      </Form.Label>
                      <Form.Control
                        type="title"
                        name="title"
                        placeholder="Title"
                        className="py-2"
                        required
                        onChange={(e) => settitle(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-4" controlId="#">
                      <Form.Label>
                        <small className="text fw-bold">Category</small>
                      </Form.Label>
                      {/* <Form.Control
                        type="title"
                        name="title"
                        placeholder="ID"
                        className="py-2"
                        required
                        onChange={(e) => setcategory_id(e.target.value)}
                      /> */}
                      <Hint options={options}>
                        <input
                          className="w-100 py-1 ps-2"
                          value={Text}
                          onChange={(e) => setText(e.target.value)}
                          // onChange={(e) => setcategory_id(e.target.value)}
                        />
                      </Hint>
                      <small className="text-danger">{errormessage}</small>
                    </Form.Group>
                  </Col>
                  {/* <Col>
                    <Form.Group className="mb-4" controlId="#">
                      <Form.Label>
                        <small className="text fw-bold">Date</small>
                      </Form.Label>
                      <Form.Control
                        type="date"
                        name="title"
                        placeholder="Date"
                        className="py-2"
                        required
                        onChange={(e) => setdate(e.target.value)}
                      />
                    </Form.Group>
                  </Col> */}
                </Row>
                <Row>
                  <Col>
                    <div className=" mb-5">
                      <p className="text-dark fw-bold">Description</p>
                      <FloraEditor />
                    </div>
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

export default AddNewBlog;
