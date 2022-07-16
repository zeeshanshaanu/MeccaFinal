import "../Login_Section/Login.css";
import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import CircularIndeterminate from "../../Components/Loader/Loader";
import { useNavigate } from "react-router-dom";
import Logo1 from "../../Assets/Images/Logo1.png";
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
    axios
      .post(`/admin/send-otp`, {
        email: email,
      })
      .then((response) => {
        if (response.status === 200) {
          if (response.status === 200) {
            setdone(false);
            setmessagesuccess(true);
            setmessage(false);
            setsuccess(response.data.message);
            //   response.data.message === "user not found"
            //     ? seterror(response.data.message)
            //     : setsuccess(response.data.message);
          }
          response.data.message === "otp sent"
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
                  required
                  onChange={(e) => setemail(e.target.value)}
                />
              </Form.Group>
              <div className="mt-3">
                {message ? <h6 className=" text-danger">{error}</h6> : null}
                {messagesuccess ? (
                  <h6 className=" text-white  ">{success}</h6>
                ) : null}
              </div>
              <div className="for_btn mt-4">
                {/* {done ? (
                  <div className="loginloader text-white">
                    <CircularIndeterminate className="boxloader" />
                  </div>
                ) : (
                )} */}
                <button
                  type="submit"
                  className="button1 w-100 py-2"
                  onClick={() => {
                    navigate("/OtpVerification");
                  }}
                >
                  Submit
                </button>
              </div>
              <div className="Fpass text-start text-dark my-2">
                <small>
                  Remember Email?{" "}
                  <span
                    className="ForgetPassword"
                    onClick={() => {
                      navigate("/");
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
