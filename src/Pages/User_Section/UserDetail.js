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
              <div className="col col-lg-4 Product_card Content mt-5 h-100">
                <center>
                  <div className="d-flex">
                    <div className="">
                      <img
                        src={GetSpecficUser.image}
                        className="UserDetailImg"
                      />
                    </div>
                    {/*  */}
                    <div className="ms-4 my-auto">
                      <p className="text-start">
                        {GetSpecficUser.first_name}&nbsp;
                        {GetSpecficUser.last_name}
                      </p>
                      <p className="d-flex text-start">
                        {GetSpecficUser.title === null ? (
                          <span className="text-danger">
                            <small>No Title</small>
                          </span>
                        ) : (
                          <>{GetSpecficUser.title}</>
                        )}
                        <p className="text-start">
                          &nbsp;
                          <span>At </span>
                          {GetSpecficUser.organization === null ? (
                            <span className="text-danger">
                              <small>No Organization found</small>
                            </span>
                          ) : (
                            <>{GetSpecficUser.organization}</>
                          )}
                        </p>
                      </p>
                      <div className="d-flex justify-content-between">
                        <div className=" ">
                        <p className="text-start">{GetSpecficUser.from_date}</p>
                        </div>
                        <div className="ms-5 ps-5">
                          <p className="text-end">
                            {GetSpecficUser.is_currently_work === null ? (
                              <small className="text-danger float-lg-end">
                                Not working yet
                              </small>
                            ) : (
                              <small className="text-success">Present</small>
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </center>
                <div className="">
                  <div className="w-100 text-end">
                    <span className="">
                      {GetSpecficUser.is_profile_setup === 1 ? (
                        <span className="fw-bolder text-success">Active</span>
                      ) : (
                        <span className="fw-bolder text-danger">Inactive</span>
                      )}
                    </span>
                  </div>
                </div>
                <div className="table mx-0">
                  <tr>
                    <td>
                      <p className="fw-bolder">Email :</p>
                    </td>
                    <td>
                      {" "}
                      <p className="ms-4">{GetSpecficUser.email}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="fw-bolder">Phone # :</p>
                    </td>
                    <td>
                      {" "}
                      <p className="ms-4">{GetSpecficUser.phone}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="fw-bolder">Address :</p>
                    </td>
                    <td>
                      {" "}
                      <p className="ms-4">{GetSpecficUser.address}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="fw-bolder">Date of birth :</p>
                    </td>
                    <td>
                      {" "}
                      <p className="ms-4">{GetSpecficUser.dob}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="fw-bolder">Age:</p>
                    </td>
                    <td>
                      {" "}
                      <p className="ms-4">{GetSpecficUser.age}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="fw-bolder">Gender :</p>
                    </td>
                    <td>
                      {" "}
                      <p className="ms-4">{GetSpecficUser.gender}</p>
                    </td>
                  </tr>
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
              </div>
            </>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default UserDetail;
