import "../Login_Section/Login.css";
import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import CircularIndeterminate from "../../Components/Loader/Loader";
import { useNavigate } from "react-router-dom";
import Logo1 from "../../Assets/Images/Logo1.png";
import LoaderLog from "../../Components/Loaderlogin/Loaderlogin";
//
//
function ForgetPassword() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [done, setdone] = useState(false);
  const [messagesuccess, setmessagesuccess] = useState(false);
  const [error, seterror] = useState("");
  const [success, setsuccess] = useState("");
  const [message, setmessage] = useState(false);

  const HandleSubmit = (e) => {
    e.preventDefault();
    setdone(true);
    OtpSend();
  };
  const OtpSend = () => {
    const formData = new FormData();
    formData.append("email",email);
    axios
      .post("/forgot-password", formData, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token_id")}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
            setdone(false);
            setmessagesuccess(true);
            setmessage(false);
            setsuccess(response.data.message);
            //   response.data.message === "user not found"
            //     ? seterror(response.data.message)
            //     : setsuccess(response.data.message);
                    response.data.message === "otp send successfully to your registered email address."
            ? setTimeout(() => {
                navigate(`/OTPverification/${email}`);
              }, 1000)
            : seterror(response.data.message);
        }
      })
      .catch((err) => {
        setdone(false);
        seterror(err.response.data.message);
        setmessage(true);
      });
  };
  return (
    <div className="Background__Img text-center">
      <div className="content__section">
        <div className="content">
          <div className="Logo">
            <img src={Logo1} alt="Logo1.png" className="w-25 mb-3" />
          </div>
          <small className="fw-bolder">Reset your Password</small>
          <br />
          <small className="mb-4 text-danger">
            Please enter your registered email
          </small>
          <div className="Input_feilds">
              <Form onSubmit={HandleSubmit}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <div className="text-start text-white">
                    <Form.Label>Registered Email</Form.Label>
                  </div>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={(e) => setemail(e.target.value)}
                    required
                  />
                </Form.Group>
                <div className="">
                  {message ? <h6 className=" text-danger">{error}</h6> : null}
                  {messagesuccess ? (
                    <h6 className=" text-danger my-2">{success}</h6>
                  ) : null}
                </div>
                <div className="for_btn">
                  {done ? (
                    <div className="LoaderLog text-white">
                      <LoaderLog className="boxloader" />
                    </div>
                  ) : (
                    <button type="submit" className="button1 w-100 py-2 mt-4">
                      Submit
                    </button>
                  )}
                </div>
                <div className="Fpass text-start text-dark my-2">
                  <small>
                    Remember Email?{" "}
                    <span
                      className="ForgetPassword"
                      onClick={() => {
                        navigate("/Login");
                      }}
                    >
                      Login
                    </span>
                  </small>
                </div>
              </Form>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
