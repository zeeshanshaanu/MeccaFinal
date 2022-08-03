import React, { useContext, useState } from "react";
import Menu from "@mui/material/Menu";
import { Button } from "react-bootstrap";
// import "./NotificationIcon.css";
import CloseIcon from "@mui/icons-material/Close";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Switch from "@mui/material/Switch";
import Slider from "@mui/material/Slider";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { Hint } from "react-autocomplete-hint";
import axios from "axios";
import AllUserContext from "../../../Contexts/AllUsers/AllUserContext";
///////=============//////////////=============//////
///////=============//////////////=============//////
const options = [];

function valuetext(value) {
  return `${value}°C`;
}
function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {console.log(value)}
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};

const PrettoSlider = styled(Slider)({
  color: "#014876",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#FF8C00",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});
///////=============//////////////=============//////
///////=============//////////////=============//////

export default function UserFilter() {
  const user = useContext(AllUserContext);
  ///////=============//////////////=============//////
  ///////=============//////////////=============//////
  const [name, setname] = useState(false);
  const [name_data, setname_data] = useState("");
  const [email, setemail] = useState(false);
  const [email_data, setemail_data] = useState("");
  const [usertype, setusertype] = useState(false);
  const [usertype_data, setusertype_data] = useState("");
  const [show, setshow] = useState(true);

  ///////=============//////////////=============//////
  ///////=============//////////////=============//////
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setshow(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSubmit = () => {
    setshow(false);
    user.setnames(name_data);
    user.setemails(email_data);
    user.setusertypes(usertype_data);
    console.log(user.reload);
    user.setreload(!user.reload);
    console.log(user.reload);
    user.setsearchid(1);
  };
  return (
    <div>
      <span
        className="pb-4"
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <FilterAltIcon className="" /> Filter
      </span>
      {show ? (
        <Menu
          className="height-menu px-4"
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <div className="px-4">
            <div className="d-flex flex-column wrapr">
              <div className="d-flex justify-content-between">
                <div className="me-5">
                  <h5>Filter&nbsp;Your&nbsp;Search</h5>
                </div>
                <div className="my-auto icnclose ml-5">
                  <CloseIcon onClick={handleClose} className="forcolor" />
                </div>
              </div>

              {/* ///Name/// */}
              <div className="d-flex flex-column">
                <div>
                  <div className="d-flex justify-content-between">
                    <small className="mt-1">Name</small>
                    <Switch onClick={() => setname(!name)} />
                  </div>
                </div>
                {name ? (
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      value={name_data}
                      onChange={(e) => setname_data(e.target.value)}
                      placeholder="Enter Name here"
                    />
                  </div>
                ) : null}
              </div>
              {/* ///Email/// */}
              <div className="d-flex flex-column">
                <div>
                  <div className="d-flex justify-content-between">
                    <small className="mt-1">Email</small>
                    <Switch onClick={() => setemail(!email)} />
                  </div>
                </div>
                {email ? (
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      value={email_data}
                      placeholder="Enter Email here"
                      onChange={(e) => setemail_data(e.target.value)}
                    />
                  </div>
                ) : null}
              </div>
              {/* ///User&nbsp;Type/// */}
              <div className="d-flex flex-column">
                <div>
                  <div className="d-flex justify-content-between">
                    <small className="mt-1">User&nbsp;Type</small>
                    <Switch onClick={() => setusertype(!usertype)} />
                  </div>
                </div>
                {usertype ? (
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      value={usertype_data}
                      placeholder="Enter User Type"
                      onChange={(e) => setusertype_data(e.target.value)}
                    />
                  </div>
                ) : null}
              </div>
            </div>

            <hr />
            <div className="d-flex justify-content-end ">
              <Button
                className="filterbuttonprop "
                onClick={handleSubmit}
                variant="outlined"
              >
                Apply
              </Button>
            </div>
          </div>
        </Menu>
      ) : null}
    </div>
  );
}
