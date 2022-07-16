import "./Login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CircularIndeterminate from "../../Components/Loader/LoginLoader";
import LogoutLogo from "../../Assets/Images/LogoutLogo.png";
////////======================//////////////////////////======================
////////======================//////////////////////////======================

function Logout() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [done, setdone] = useState(false);
  const [messagesuccess, setmessagesuccess] = useState(false);
  const [error, seterror] = useState("");
  const [success, setsuccess] = useState("");
  const [message, setmessage] = useState(false);
  ///////////////////////
  const HandleSubmit = (e) => {
    e.preventDefault();
    setdone(true);
    LogoutAPI();
  };
  const LogoutAPI = () => {
    axios
      .post(
        "/admin/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token_id")}`,
          },
        }
      )
      .then((response) => {
        if (response.data.code === 200) {
          console.log(response.data);
          setdone(false);
          setsuccess(response.data.message);
          setmessagesuccess(false);
          setmessage(false);
          navigate("/Login");
          // setTimeout(() => {
          // }, 2000);
        } else {
          seterror(response.data.message);
          setdone(false);
          setmessage(true);
        }
        console.log(response.data);
      });
  };
  return (
    <div className="Background__Img text-center">
      <div className="content__section">
        {done ? (
          <div className="loginloader text-white mt-1">
            <CircularIndeterminate className="boxloader" />
          </div>
        ) : (
          <div className="content">
            <img src={LogoutLogo} alt="LogoutLogo.png" className="LogoutLogo" />
            <div className="Input_feilds">
              <div className="mt-4 fw-bolder">
                <small>
                  Are you sure to want to&nbsp;{" "}
                  <span className="h4 fw-bolder">Logout?</span>
                </small>
              </div>
              <div className="for_btn mt-5">
                <button
                  type="submit"
                  onClick={HandleSubmit}
                  className="button1 py-2 px-4"
                >
                  <span>Logout</span>
                </button>
                <button
                  className="Cancel py-2 px-4 ms-4"
                  onClick={() => {
                    navigate("/Dashboard");
                  }}
                >
                  Cancel
                </button>
              </div>
              <div className="mt-3">
                {message ? (
                  <h6 className="fw-bolder text-danger">{error}</h6>
                ) : null}
                {messagesuccess ? (
                  <h6 className="fw-bolder text-success">{success}</h6>
                ) : null}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Logout;
