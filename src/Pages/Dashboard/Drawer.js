import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import useStyles from "./Style.js";
// ICONS
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PieChartIcon from "@mui/icons-material/PieChart";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import NotesOutlinedIcon from "@mui/icons-material/NotesOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SideBarLogo from "../../Assets/Images/SideBarLogo.png";
import ServicesIcon from "../../Assets/Images/ServicesIcon.png";
// notifications
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function ResponsiveDrawer(props) {
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const { heading } = props;
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openp = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [idside, setidside] = useState("1");
  const [notifyshow, setnotifyshow] = useState(true);
  const shownotification = () => {
    setnotifyshow(!notifyshow);
  };
  const classes = useStyles();
  const ItemList = [
    {
      text: "Dashboard",
      icon: (
        <PieChartIcon
          className={
            sessionStorage.getItem("id") == "1" ? "clickicon" : " icon22"
          }
        />
      ),
      id: "1",
      onClick: (id) => {
        sessionStorage.setItem("id", "1");
        setidside(id && id);
        navigate("/Dashboard");
      },
    },
    //
    {
      text: "Users",
      icon: (
        <PeopleOutlineIcon
          className={
            sessionStorage.getItem("id") == "2" ? "clickicon" : " icon22"
          }
        />
      ),
      id: "2",
      onClick: (id) => {
        sessionStorage.setItem("id", "2");
        setidside(id && id);
        navigate("/AllUsers");
      },
    },
    {
      text: "Professionals",
      icon: (
        <PermIdentityIcon
          className={
            sessionStorage.getItem("id") == "3" ? "clickicon" : " icon22"
          }
        />
      ),
      id: "3",
      onClick: (id) => {
        sessionStorage.setItem("id", "3");
        setidside(id && id);
        navigate("/AllProfessionals");
      },
    },
    {
      text: "Mecca Market",
      icon: (
        <StorefrontOutlinedIcon
          className={
            sessionStorage.getItem("id") == "4" ? "clickicon" : " icon22"
          }
        />
      ),
      id: "4",
      onClick: (id) => {
        sessionStorage.setItem("id", "4");
        setidside(id && id);
        navigate("/AllShopes");
      },
    },
    {
      text: "Kliques",
      icon: (
        <GroupAddOutlinedIcon
          className={
            sessionStorage.getItem("id") == "5" ? "clickicon" : " icon22"
          }
        />
      ),
      id: "5",
      onClick: (id) => {
        sessionStorage.setItem("id", "5");
        setidside(id && id);
        navigate("/AllKliques");
      },
    },
    {
      text: "Events",
      icon: (
        <EventNoteOutlinedIcon
          className={
            sessionStorage.getItem("id") == "6" ? "clickicon" : " icon22"
          }
        />
      ),
      id: "6",
      onClick: (id) => {
        sessionStorage.setItem("id", "6");
        setidside(id && id);
        navigate("/All_Events");
      },
    },

    {
      text: "Blog",
      icon: (
        <NotesOutlinedIcon
          className={
            sessionStorage.getItem("id") == "7" ? "clickicon" : " icon22"
          }
        />
      ),
      id: "7",
      onClick: (id) => {
        sessionStorage.setItem("id", "7");
        setidside(id && id);
        navigate("/AllBlogs");
      },
    },
    {
      text: "Orders",
      icon: (
        <ShoppingCartOutlinedIcon
          className={
            sessionStorage.getItem("id") == "8" ? "clickicon" : " icon22"
          }
        />
      ),
      id: "8",
      onClick: (id) => {
        sessionStorage.setItem("id", "8");
        setidside(id && id);
        navigate("/All_Orders");
      },
    },
    {
      text: "App Settings",
      icon: (
        <SettingsOutlinedIcon
          className={
            sessionStorage.getItem("id") == "12"
              ? "clickicon serviceicon"
              : " icon22"
          }
        />
      ),

      id: "12",
      onClick: (id) => {
        sessionStorage.setItem("id", "12");
        setidside(id && id);
        navigate("/AppSetings");
      },
    },

    {
      text: "Settings",
      icon: (
        <SettingsOutlinedIcon
          className={
            sessionStorage.getItem("id") == "9" ? "clickicon" : " icon22"
          }
        />
      ),
      id: "9",
      onClick: (id) => {
        sessionStorage.setItem("id", "9");
        setidside(id && id);
        navigate("/Setting");
      },
    },
    {
      text: "Logout",
      icon: (
        <LogoutOutlinedIcon
          className={
            sessionStorage.getItem("id") == "10" ? "clickicon" : " icon22"
          }
        />
      ),
      id: "10",
      onClick: (id) => {
        sessionStorage.setItem("id", "10");
        setidside(id && id);
        navigate("/Logout");
      },
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar position="fixed" className="bg-none">
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 0,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography className="text-dark " variant="h6" component="div">
            <h6 className="dashboardheading">{heading}</h6>
          </Typography>

          <React.Fragment>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
              className="Dashboardnavbar"
            >
              <Tooltip title="Notifications">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <NotificationsIcon
                    className="text-dark Dashboardnavbar"
                    onClick={shownotification}
                  />
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={openp}
              onClose={handleClose}
              onClick={handleClose}
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
              <MenuItem>
                <Avatar /> Profile
              </MenuItem>
              <MenuItem>
                <Avatar /> My account
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <PersonAdd fontSize="small" />
                </ListItemIcon>
                Add another account
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </React.Fragment>
          <p className="Dashboardparanavbar">Jhon Doe@gmail.com</p>
          <img
            src={SideBarLogo}
            alt="SideBarLogo.png"
            className="ProfileLogo"
          />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? null : (
              // <ChevronRightIcon className="baton" />
              <>
                <ChevronLeftIcon className="baton" />
              </>
            )}
          </IconButton>

          <img
            src={SideBarLogo}
            alt="SideBarLogo.png"
            className="sidebarLogo"
          />
        </DrawerHeader>
        <div className="drawer">
          <div className={classes.head}> </div>
          <List className="sidebaritems">
            {ItemList.map((item) => {
              const { text, icon, id, onClick } = item;
              return (
                <div
                  className={
                    sessionStorage.getItem("id") &&
                    sessionStorage.getItem("id") === id
                      ? "ps-3 clickdiv"
                      : "ps-4"
                  }
                >
                  <ListItemButton
                    key={id}
                    onClick={onClick}
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 1 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <span className={classes.icons}>{icon}</span>
                    </ListItemIcon>
                    <ListItemText primary={text} className={classes.text} />
                  </ListItemButton>
                </div>
              );
            })}
            {/* <button onClick={() => navigate("/")} className="buttonTwo">
              Logout
            </button> */}
          </List>
        </div>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box>
    </Box>
  );
}
