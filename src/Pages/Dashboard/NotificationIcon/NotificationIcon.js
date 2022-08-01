import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./NotificationIcon.css";
import CloseIcon from "@mui/icons-material/Close";
import logo1 from "../../../Assets/Images/Logo1.png";
import { useNavigate } from "react-router-dom";

export default function NotificationIcon() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [show, setshow] = React.useState(true);
  const [show1, setshow1] = React.useState(true);
  const [show2, setshow2] = React.useState(true);
  const [show3, setshow3] = React.useState(true);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleshow = () => {
    setshow(false);
  };
  const handleshow1 = () => {
    setshow2(false);
  };
  const handleshow2 = () => {
    setshow3(false);
  };
  const navigate = useNavigate();

  return (
    <div className="notiicon">
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <NotificationsIcon className="text-dark Dashboardnavbar " />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        className="height-menu px-4"
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        // onClick={handleClose}
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
          {show ? (
            <div className="d-flex">
              <div>
                <MenuItem>
                  <img className="h-25 w-25" src={logo1} alt="" />{" "}
                  <p className="ml-2 my-auto text-notii">Add Two Files</p>
                </MenuItem>
              </div>
              <div className="my-auto  closeiconnnn">
                <CloseIcon onClick={handleshow} className="closeiconhead" />
              </div>
            </div>
          ) : null}
          <hr />
          <center>
            <a
              className="notiveiw m"
              onClick={() => {
                sessionStorage.setItem("id", "Notifications");
                navigate("/Notifications");
              }}
            >
              <small className="text-primary">See All Notifications</small>
            </a>
          </center>
        </div>
      </Menu>
    </div>
  );
}
