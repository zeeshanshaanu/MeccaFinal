import React from "react";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo1 from "../../Assets/Images/Logo1.png";
import "./notification.css";

const Toastnotify = ({ title, body }) => {
  let hideNotif = title === "";

  if (!hideNotif) {
    toast.info(<Display />, {
      icon: <img src={Logo1} alt="" className="notificationimgwidth" />,
    });
  }

  function Display() {
    return (
      <div>
        <h4>{title}</h4>
        <p>{body}</p>
      </div>
    );
  }

  return (
    <ToastContainer
      autoClose={3000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover={false}
    />
  );
};

Toastnotify.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};

export default Toastnotify;
