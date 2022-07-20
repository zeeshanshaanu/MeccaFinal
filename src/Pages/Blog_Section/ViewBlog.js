import React, { useEffect, useState } from "react";
import ResponsiveDrawer from "../../Pages/Dashboard/Drawer";
import Box from "@mui/material/Box";
import KliquesDetailBGIMg from "../../Assets/Images/KliquesDetailBGIMg.png";
import AppBar from "@mui/material/AppBar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import CircularIndeterminate from "../../Components/Loader/LoginLoader";

const drawerWidth = 100;
const ViewBlog = () => {
  const { id } = useParams();
  const [done, setdone] = useState(false);
  const [title, settitle] = useState([]);
  const [created_at, setcreated_at] = useState([]);
  const [description, setdescription] = useState([]);
  const [category, setcategory] = useState([]);
  const [Image, setImage] = useState([]);
  const GetShopDetail = () => {
    axios
      .get(`blog/view?blog_id=${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token_id")}`,
        },
      })
      .then((response) => {
        settitle(response.data.data.title);
        setcreated_at(response.data.data.created_at);
        setdescription(response.data.data.description);
        setcategory(response.data.data.category);
        setImage(response.data.data.cover_image);
        setdone(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    GetShopDetail();
    setdone(true);
    sessionStorage.setItem("id", "7");
  }, []);
  return (
    <div className="TopDiv px-3 pb-5 mt-5">
      <Box sx={{ display: "flex" }}>
        <div className="for_drawer">
          <ResponsiveDrawer heading="Blogs" className="alluser" />
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
            <>
              <div className="w-100">
                <img
                  src={Image}
                  alt="KliquesDetailBGIMg.png"
                  className="w-100 KliquesDetailBGIMg"
                />
              </div>
              <div className="Content mt-5">
                <div className="d-flex">
                  <p className="fw-bolder">Title:</p>
                  <p className="ms-4">{title}</p>
                </div>
                <div className="d-flex">
                  <p className="fw-bolder">Category :</p>
                  <p className="ms-4">{category}</p>
                </div>
                <div className="d-flex">
                  <p className="fw-bolder">Date :</p>
                  <p className="ms-4">{created_at}</p>
                </div>
              </div>
              <div className="Description mt-4">
                <p className="fw-bolder">Description</p>
                <div className="pe-5">
                  <p class="">
                    <small
                      dangerouslySetInnerHTML={{
                        __html: description,
                      }}
                    />
                  </p>
                </div>
              </div>
            </>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default ViewBlog;
