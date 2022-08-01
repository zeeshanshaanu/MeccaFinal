import React, { useEffect, useState } from "react";
import axios from "axios";
import ResponsiveDrawer from "../../Pages/Dashboard/Drawer";
import Box from "@mui/material/Box";
import KliquesDetailBGIMg from "../../Assets/Images/KliquesDetailBGIMg.png";
import AppBar from "@mui/material/AppBar";
import { useNavigate, useParams } from "react-router-dom";
import CircularIndeterminate from "../../Components/Loader/LoginLoader";

const drawerWidth = 100;
const UserDetail = () => {
  const { id } = useParams();
  const [done, setdone] = useState(false);
  const [GetSpecficUser, setGetSpecficUser] = useState({});
  //
  //
  //
  const GetShopDetail = () => {
    axios
      .get(`user/viewProfile?user_id=${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token_id")}`,
        },
      })
      .then((response) => {
        setGetSpecficUser(response.data.data);
        setdone(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    GetShopDetail();
    setdone(true);
    sessionStorage.setItem("id", "2");
  }, []);
  return (
    <div className="TopDiv px-3 pb-5 mt-5">
      <Box sx={{ display: "flex" }}>
        <div className="for_drawer">
          <ResponsiveDrawer heading="Users" className="alluser" />
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
                  src={GetSpecficUser.Image}
                  className="w-100 KliquesDetailBGIMg"
                />
              </div>
              <div className="Content mt-5">
                <div className="d-flex">
                  <p className="fw-bolder">Name:</p>
                  <p className="ms-4">
                    {GetSpecficUser.first_name}&nbsp;{GetSpecficUser.last_name}
                  </p>
                </div>
                <div className="d-flex">
                  <p className="fw-bolder">Email :</p>
                  <p className="ms-4">{GetSpecficUser.email}</p>
                </div>
                <div className="d-flex">
                  <p className="fw-bolder">Phone # :</p>
                  <p className="ms-4">{GetSpecficUser.phone}</p>
                </div>
                <div className="d-flex">
                  <p className="fw-bolder">Address :</p>
                  <p className="ms-4">{GetSpecficUser.address}</p>
                </div>
                <div className="d-flex">
                  <p className="fw-bolder">Date of birth :</p>
                  <p className="ms-4">{GetSpecficUser.dob}</p>
                </div>
                <div className="d-flex">
                  <p className="fw-bolder">Age:</p>
                  <p className="ms-4">{GetSpecficUser.age}</p>
                </div>
                <div className="d-flex">
                  <p className="fw-bolder">Gender :</p>
                  <p className="ms-4">{GetSpecficUser.gender}</p>
                </div>
                <div className="d-flex">
                  <p className="fw-bolder">Organization :</p>
                  <p className="ms-4">
                    {GetSpecficUser.organization === null
                      ? "No Organization found"
                      : GetSpecficUser.organization}
                  </p>
                </div>
              </div>
              <div className="Description mt-4">
                <p className="fw-bolder">Biography</p>
                <div className="pe-5">
                  <p class="">
                    <small
                      dangerouslySetInnerHTML={{
                        __html: GetSpecficUser.biography,
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

export default UserDetail;
