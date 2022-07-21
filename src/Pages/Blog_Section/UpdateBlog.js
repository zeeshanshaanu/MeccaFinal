import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { Container, Form, Row, Col } from "react-bootstrap";
import ResponsiveDrawer from "../../Pages/Dashboard/Drawer";
import Box from "@mui/material/Box";
import { EditorState } from "draft-js";
import "react-quill/dist/quill.snow.css";
import "./Blog.css";
import AppBar from "@mui/material/AppBar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { FloraEditor } from "./FloraEditor";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Hint } from "react-autocomplete-hint";
const drawerWidth = 100;
const options = [""];
const Input = styled("input")({
  display: "none",
});
const UpdateBlog = () => {
  const { id } = useParams();
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
          navigate("/AllBlogs");
        }}
      >
        AllBlogs
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
          navigate("/UpdateBlog");
        }}
      >
        UpdateBlog
      </span>
    </Typography>,
  ];

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  useEffect(() => {
    GetBlogs();
  }, [editorState]);
  const [uploadim, setuploadim] = useState(true);
  const [editor, seteditor] = useState("");
  const [upload, setupload] = useState(false);
  const [size, setsize] = useState(false);
  const [done, setdone] = useState(false);
  const [errormessage, seterrormessage] = useState("");
  const [isActive, setisActive] = useState(false);
  const [Text, setText] = useState("");
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [selectedFile, setSelectedFile] = useState({
    file: [],
    filepreview: null,
  });
  const handleChange = (event) => {
    setupload(false);
    if (event.target.files[0].size > 300 * 3024) {
      setsize(true);
    } else if (event.target.files[0].size <= 300 * 3024) {
      setSelectedFile({
        ...selectedFile,
        file: event.target.files[0],
        filepreview: URL.createObjectURL(event.target.files[0]),
      });
      setuploadim(false);
      setupload(true);
      setsize(false);
    }
  };
  //
  //
  //
  const [cat_id, setcat_id] = useState(0);
  const HandleSubmit = async (e) => {
    e.preventDefault();
    setisActive(true);
    let response = await axios.get(`/blogCategory/view-all`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token_id")}`,
      },
    });
    setisActive(false);
    let result = await response.data.data.filter(
      (data) => data.name.toLowerCase() == Text.toLowerCase()
    );
    console.log(result && result);
    if (result.length > 0) {
      result.map((data) => {
        sessionStorage.setItem("cat_id", data.blog_category_id);
        setcat_id(data.blog_category_id);
        UpdateBlog();
      });
    } else {
      seterrormessage("Category does'nt exist. Please add a new category.");
    }
  };
  //
  //
  //
  const GetCategries = async () => {
    const response = await axios.get(`/blogCategory/view-all`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token_id")}`,
      },
    });
    setdone(false);
    console.log(response);
    response.data.data.map((data) =>
      options.push(data.name && data.name.toLowerCase())
    );
  };
  //
  //
  //
  useEffect(() => {
    GetCategries();
  }, [Text]);

  const [title, settitle] = useState([]);
  // const [date, setdate] = useState("");
  const [description, setdescription] = useState("");
  const [cover_image, setcover_image] = useState("");
  const UpdateBlog = () => {
    axios
      .post(
        `/blog/update?blog_id=${id}&title=${title}&category_id=${
          sessionStorage.getItem("cat_id") || (cat_id && cat_id)
        }&description=${sessionStorage.getItem(
          "description"
        )}&cover_image=${selectedFile.file}`,
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
  //
  //
  const [Blogss, setBlogss] = useState([]);
  const GetBlogs = () => {
    axios
      .get(`/blog/view-all`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token_id")}`,
        },
      })
      .then((response) => {
        setdone(true);
        setBlogss(response.data.data.blogs);
        // console.log(response.data.data.blogs);
        console.log(
          response.data.data.blogs.filter((servicess) => {
            return id == servicess.id;
          })
        );
        response.data.data.blogs
          .filter((servicess) => {
            return id == servicess.id;
          })
          .map((servicess) => {
            settitle(servicess.title);
            setcover_image(servicess.cover_image);
            setText(servicess.category);
            sessionStorage.setItem("blogupdate", servicess.description);
          });
      })
      .catch((err) => console.log(err));
  };
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
              <Stack spacing={2}>
                <Breadcrumbs
                  separator={<NavigateNextIcon fontSize="small" />}
                  aria-label="breadcrumb"
                >
                  {breadcrumbs}
                </Breadcrumbs>
              </Stack>
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
                  <small>Update</small>
                </button>
              </div>
            </div>
            {/*  */}
            <div className=" mx-4">
              <Container fluid>
                <div className="For_Image">
                  <div className="d-inline-block">
                    <label htmlFor="icon-button-file">
                      <Input
                        accept="image/*"
                        id="icon-button-file"
                        type="file"
                        onChange={handleChange}
                      />
                      {/* {console.log(upload)} */}
                      {!upload ? (
                        <img className="previewimg" src={cover_image} alt="" />
                      ) : !uploadim ? (
                        <img
                          className="previewimg"
                          src={selectedFile.filepreview}
                          alt=""
                        />
                      ) : (
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                        >
                          <div className="addicon">
                            <AddIcon className="icon" />
                          </div>
                        </IconButton>
                      )}
                    </label>
                  </div>
                  {/* {console.log(cover_image)} */}
                  <div className={size ? "sizeshow" : "sizehide"}>
                    <div className="text-dark">
                      <small>File size excedded than 1MB</small>
                    </div>
                  </div>
                </div>
                <Row xs="1" sm="1" md="2" lg="4" xl="3">
                  <Col>
                    <Form.Group className="mb-4" controlId="#">
                      <Form.Label>
                        <small className="text fw-bold">Title</small>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Title"
                        className="py-2"
                        value={title}
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
                      <Hint options={options}>
                        <input
                          className="w-100 py-2 ps-2 forBorderSet"
                          value={Text && Text}
                          onChange={(e) => setText(e.target.value)}
                          // onChange={(e) => setcategorytext(e.target.value)}
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
            </div>
          </Form>
        </Box>
      </Box>
    </div>
  );
};
UpdateBlog.modules = {
  toolbar: [
    [{ header: "1" }, { header: "1" }, { header: [3, 4, 5, 6] }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strick", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "video"],
    ["clean"]["code-block"],
  ],
};
UpdateBlog.formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strick",
  "blockquote",
  "list",
  "link",
  "image",
  "video",
  "clean",
  "code-block",
];
export default UpdateBlog;
