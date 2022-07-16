import "../Login_Section/Login.css";
import React, { useState } from "react";
import CircularIndeterminate from "../../Components/Loader/Loader";
import Notification from "../../Components/AlertNotification/Message";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Logo1 from "../../Assets/Images/Logo1.png";
import usePasswordToggleX from "../../Components/PasswordToggle/usePasswordToggleX";
import usePasswordToggle from "../../Components/PasswordToggle/usePasswordToggle";
import LoaderLog from "../../Components/Loaderlogin/Loaderlogin";
import { usePasswordValidation } from "../../hooks/usePasswordValidation";

//
//
function ResetPassword() {
  const navigate = useNavigate();

  const [password, setPassword] = useState({
    firstPassword: "",
    secondPassword: "",
  });
  const [validLength, hasNumber, upperCase, lowerCase, match, specialChar] =
    usePasswordValidation({
      firstPassword: password.firstPassword,
      secondPassword: password.secondPassword,
      requiredLength: 5,
      numberValidation: true,
    });
  const setFirst = (event) => {
    setPassword({ ...password, firstPassword: event.target.value });
  };
  const setSecond = (event) => {
    setPassword({ ...password, secondPassword: event.target.value });
  };
  const [messagesuccess, setmessagesuccess] = useState(false);
  const [error, seterror] = useState("");
  const [success, setsuccess] = useState("");
  const [message, setmessage] = useState(false);
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();
  const [PasswordInputTypex, ToggleIconx] = usePasswordToggleX();
  const [done, setdone] = useState(false);
  const [validationmessage, setvalidationmessage] = useState("");
  const { email } = useParams();
  ///////////////////////
  ///////////////////////
  ///////////////////////
  const HandleSubmit = (e) => {
    e.preventDefault();
    setdone(true);
    PassChange();
  };
  const PassChange = () => {
    axios
      .post(`/admin/change-password`, {
        email: email,
        password: password.secondPassword,
      })
      .then((response) => {
        if (response.status === 200) {
          setdone(false);
          setsuccess(response.data.message);
          setmessagesuccess(true);
          setmessage(false);
        }
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((err) => {
        setdone(false);
        seterror(err.response.data.message);
        setmessage(true);
        setmessagesuccess(false);
      });
  };
  return (
    <div className="Background__Img text-center">
      <div className="content__section">
        <div className="content">
          <div className="Logo">
            <img src={Logo1} alt="Logo1.png" className="w-25" />
          </div>
          <small className="fw-bolder ">
            Set&nbsp;your&nbsp;new&nbsp;password
          </small>
          <div className="Input_feilds">
            <Form onSubmit={HandleSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <div className="text-start text-dark">
                  <Form.Label>Password</Form.Label>
                </div>
                <Form.Control
                  type={PasswordInputTypex}
                  placeholder="EX: A123@a"
                  onChange={setFirst}
                  maxLength="15"
                  required
                />
                <span className="passwordToogle">{ToggleIconx}</span>
                <div className="mt-2">
                  {!validLength ? (
                    <span style={{ color: "red", marginTop: "15px" }}>
                      <small
                        className={
                          password.firstPassword == "" ? "d-none" : "h"
                        }
                      >
                        Minimum 5 characters
                      </small>
                    </span>
                  ) : !lowerCase ? (
                    <span style={{ color: "red", marginTop: "15px" }}>
                      <small
                        className={
                          password.firstPassword == "" ? "d-none" : "h"
                        }
                      >
                        Must Contain A LowerCase Case Letter
                      </small>
                    </span>
                  ) : !hasNumber ? (
                    // <span style={{ color: "green", marginTop: "5px" }}></span>
                    <span style={{ color: "red", marginTop: "15px" }}>
                      <small
                        className={
                          password.firstPassword == "" ? "d-none" : "h"
                        }
                      >
                        Must Contain A Number
                      </small>
                    </span>
                  ) : !upperCase ? (
                    <span style={{ color: "red", marginTop: "15px" }}>
                      <small
                        className={
                          password.firstPassword == "" ? "d-none" : "h"
                        }
                      >
                        Must Contain An UpperCase Letter
                      </small>
                    </span>
                  ) : !specialChar ? (
                    <span style={{ color: "red", marginTop: "15px" }}>
                      <small
                        className={
                          password.firstPassword == "" ? "d-none" : "h"
                        }
                      >
                        Must Contain A Special Character
                      </small>
                    </span>
                  ) : (
                    <span style={{ color: "green", marginTop: "5px" }}></span>
                  )}
                </div>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <div className="text-start text-dark ">
                  <Form.Label>Confirm Password</Form.Label>
                </div>
                <Form.Control
                  type={PasswordInputType}
                  placeholder="Confirm Password"
                  onChange={setSecond}
                  required
                />
                <span className="passwordToogle2">{ToggleIcon}</span>
                <div className="mt-2">
                  {match ? (
                    <span style={{ color: "green", marginTop: "5px" }}>
                      <small>Password Matched!</small>
                    </span>
                  ) : (
                    <span style={{ color: "red", marginTop: "5px" }}>
                      <small
                        className={
                          password.secondPassword == "" ? "d-none" : "h"
                        }
                      >
                        Password did not match
                      </small>
                    </span>
                  )}
                </div>
              </Form.Group>
              {!validLength && !match ? (
                <small>{validationmessage}</small>
              ) : null}
              <div className="text-center my-4">
                {done ? (
                  <div className="loginloadersig">
                    <div className=" text-danger">
                      <LoaderLog className="boxloadersig" />{" "}
                    </div>
                  </div>
                ) : !validLength ||
                  !match ||
                  !lowerCase ||
                  !hasNumber ||
                  !upperCase ||
                  !specialChar ||
                  !validLength ||
                  !match ? null : (
                  <button
                    type="submit"
                    className="button1 me-4 px-4 py-1 w-100"
                    onClick={() => {
                      navigate("/Dashboard");
                    }}
                  >
                    Update
                  </button>
                )}
              </div>
              <div className="mt-3">
                {message ? <h6 className=" text-danger ">{error}</h6> : null}
                {messagesuccess ? (
                  <h6 className=" text-white  ">{success}</h6>
                ) : null}
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
