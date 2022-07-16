import "./Login.css";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import CircularIndeterminate from "../../Components/Loader/LoginLoader";
import Logo1 from "../../Assets/Images/Logo1.png";
import usePasswordToggle from "../../Components/PasswordToggle/usePasswordToggle";
import React, { useState, useContext } from "react";
import { UserContext } from "../../Contexts/User";
import axios from "axios";

////////======================//////////////////////////======================
////////======================//////////////////////////======================
function Login() {
  const navigate = useNavigate();
  const { fetchCurrentUser, login, setUserState } = useContext(UserContext);
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [done, setdone] = useState(false);
  const [messagesuccess, setmessagesuccess] = useState(false);
  const [error, seterror] = useState("");
  const [success, setsuccess] = useState("");
  const [message, setmessage] = useState(false);
  ///////////////////////
  // const HandleSubmit = (e) => {
  //   e.preventDefault();
  //   setdone(true);
  //   loginUser();
  // };
  // const loginUser = async () => {
  //   try {
  //     await login({ email, password });
  //     await fetchCurrentUser().then(setUserState);
  //     setTimeout(() => {
  //       navigate("/Dashboard");
  //     }, 2000);
  //   } catch (error) {
  //     console.log({ error });
  //     setdone(false);
  //     seterror(error.response.data.message);
  //     setmessage(true);
  //     setmessagesuccess(false);
  //   }
  // };
  const HandleSubmit = (e) => {
    e.preventDefault();
    LoginAPI();
    setdone(true);
  };
  const LoginAPI = () => {
    axios
      .post(`/admin/login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.data.code === 200) {
          sessionStorage.setItem("token_id", response.data.data.token);
          setdone(false);
          setsuccess(response.data.message);
          setmessagesuccess(false);
          setmessage(false);
          setTimeout(() => {
            navigate("/Dashboard");
          }, 1000);
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
            <div className="Logo">
              <img src={Logo1} alt="Logo1.png" className="w-25" />
            </div>
            <h5 className="text-dark pt-2 fw-bolder">Login</h5>
            <div className="Input_feilds">
              <Form onSubmit={HandleSubmit}>
                <Form.Group className="" controlId="exampleForm.ControlInput1">
                  <div className="text-start text-white">
                    <Form.Label>Email</Form.Label>
                  </div>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    required
                    onChange={(e) => setemail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-2"
                  controlId="exampleForm.ControlInput1"
                >
                  <div className="text-start text-white">
                    <Form.Label>Password</Form.Label>
                  </div>
                  <Form.Control
                    type={PasswordInputType}
                    placeholder="password"
                    className="w-100"
                    required
                    onChange={(e) => setpassword(e.target.value)}
                  />
                  <span className="passwordToogle">{ToggleIcon}</span>
                </Form.Group>
                <div className="Fpass text-start text-dark ForgetPassword">
                  <small
                    onClick={() => {
                      navigate("/ForgetPassword");
                    }}
                  >
                    Forgot Password?
                  </small>
                </div>
                <div className="for_btn mt-4">
                  <button type="submit" className="button1 w-100 py-2">
                    <span>Login</span>
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
              </Form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
