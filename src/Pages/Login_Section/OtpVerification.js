import "./Login.css";
import React, { useState, useEffect } from "react";
import CircularIndeterminate from "../../Components/Loader/Loader";
import axios from "axios";
import Notification from "../../Components/AlertNotification/Message";
import { useNavigate, useParams } from "react-router-dom";
import Logo1 from "../../Assets/Images/Logo1.png";
//
//
function OtpVerification() {
  const navigate = useNavigate();
  const { email } = useParams();
  const [done, setdone] = useState(false);
  const [messagesuccess, setmessagesuccess] = useState(false);
  const [error, seterror] = useState("");
  const [success, setsuccess] = useState("");
  const [message, setmessage] = useState(false);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  // Notification Message
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  ////////////////////
  const HandleSubmit = (e) => {
    e.preventDefault();
    OtpVerify();
    setdone(true);
    navigate("/ResetPassword");
  };
  const OtpVerify = () => {
    const code = otp.join("");
    // console.log(otp);
    axios
      .post(`/admin/verify-otp`, {
        email: email,
        otp: code,
      })
      .then((response) => {
        if (response.status === 200) {
          setdone(false);
          setsuccess(response.data.message);
          response.data.message === "incorrect otp"
            ? seterror(response.data.message)
            : navigate(`/ResetPassword/${email}`);
          setmessagesuccess(true);
          setmessage(false);
        }
        setTimeout(() => {
          // response.data.message === "incorrect otp"
          //   ? seterror("incorrect otp")
          //   :
        }, 1000);
      })
      .catch((err) => {
        setdone(false);
        // seterror("Invalid OTP");
        seterror(err.response.data.message);
        setmessage(true);
        setmessagesuccess(false);
      });
  };
  //////////////////
  const [counter, setcounter] = useState(59);
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setcounter(counter - 1), 1000);
    return () => {
      clearInterval(timer);
    };
  }, [counter]);
  //////////////////
  //Handling Reset
  //////////////////
  const handleResend = () => {
    axios
      .post(`/admin/send-otp`, {
        email: email,
      })
      .then((response) => {
        setcounter(59);
        if (response.status === 200) {
          setsuccess(response.data.message);
        }
      })
      .catch((err) => {
        seterror(err.response.data.message);
      });
  };
  return (
    <div className="Background__Img text-center">
      <div className="content__section">
        <div className="content">
          <div className="Logo">
            <img src={Logo1} alt="Logo1.png" className="w-25 mb-2" />
          </div>
          <small className="fw-bolder">Verify&nbsp;Your&nbsp;OTP</small>
          <br />
          <small className="mb-4">Enter the code to verify your account.</small>
          <div className="row">
            <div className="col">
              <div className="d-flex justify-content-center">
                <div className="row">
                  <div className="col text-center">
                    {otp.map((data, index) => {
                      return (
                        <input
                          className="otp-field"
                          type="text"
                          name="otp"
                          maxLength="1"
                          key={index}
                          value={data}
                          onChange={(e) => handleChange(e.target, index)}
                          onFocus={(e) => e.target.select()}
                          required
                        />
                      );
                    })}
                    <div className="mt-3">
                      {message ? (
                        <h6 className=" text-danger ">{error}</h6>
                      ) : null}
                      {messagesuccess ? (
                        <h6 className=" text-success  ">{success}</h6>
                      ) : null}
                    </div>
                    <p className="text-dark my-3">
                      OTP Entered - {otp.join("")}
                    </p>
                    {done ? (
                      <CircularIndeterminate className="boxloader" />
                    ) : (
                      <p>
                        <button
                          className="Download px-4 py-1 me-4"
                          onClick={() => setOtp([...otp.map(() => "")])}
                        >
                          Clear
                        </button>
                        <button
                          className="button1 px-3 py-1"
                          onClick={HandleSubmit}
                        >
                          Verify OTP
                        </button>
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center text-dark">
                <small>Didn’t receive a code?&nbsp;</small>
                {counter === 0 ? (
                  <p className="ForgetPassword" onClick={handleResend}>
                    &nbsp; Resend
                  </p>
                ) : (
                  <div style={{ color: "#000" }}>00:{counter}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Notification notify={notify} setNotify={setNotify} />
    </div>
  );
}

export default OtpVerification;
