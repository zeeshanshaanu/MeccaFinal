// import * as React from "react";
// import "../Dashboard/Dashboard.css";
// import { Form } from "react-bootstrap";
// import PropTypes from "prop-types";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from "@mui/icons-material/Menu";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import { useHistory } from "react-router-dom";
// import useStyles from "./Style.js";
// import Badge from "@mui/material/Badge";
// // ICONS
// import PieChartIcon from "@mui/icons-material/PieChart";
// import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
// import PermIdentityIcon from "@mui/icons-material/PermIdentity";
// import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
// import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
// import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
// import NotesOutlinedIcon from "@mui/icons-material/NotesOutlined";
// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
// import SearchIcon from "@mui/icons-material/Search";
// import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
// import SideBarLogo from "../Images/SideBarLogo.png";
// //
// //
// const drawerWidth = 240;

// function ResponsiveDrawer(props) {
//   const history = useHistory();
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };
//   const { heading } = props;
//   //
//   const ItemList = [
//     {
//       text: "Dashboard",
//       icon: <PieChartIcon />,
//       onClick: () => history.push("/Dashboard"),
//     },
//     {
//       text: "Users",
//       icon: <PeopleOutlineIcon />,
//       onClick: () => history.push("/AllUsers"),
//     },
//     {
//       text: "Professionals",
//       icon: <PermIdentityIcon />,
//       onClick: () => history.push("/AllProfessionals"),
//     },
//     {
//       text: "Mecca Market",
//       icon: <StorefrontOutlinedIcon />,
//       onClick: () => history.push("/AllShopes"),
//     },
//     {
//       text: "Kliques",
//       icon: <GroupAddOutlinedIcon />,
//       onClick: () => history.push("/AllKliques"),
//     },
//     {
//       text: "Events",
//       icon: <EventNoteOutlinedIcon />,
//       onClick: () => history.push("/All_Events"),
//     },
//     {
//       text: "Blog",
//       icon: <NotesOutlinedIcon />,
//       onClick: () => history.push("/AllBlogs"),
//     },
//     {
//       text: "Orders",
//       icon: <PieChartIcon />,
//       onClick: () => history.push("/All_Orders"),
//     },

//     {
//       text: "Settings",
//       icon: <SettingsOutlinedIcon />,
//       onClick: () => history.push("/Setting"),
//     },
//   ];
//   const classes = useStyles();
//   //
//   const drawer = (
//     <div className="drawer">
//       <div className={classes.head}>
//         {" "}
//         <img src={SideBarLogo} alt="SideBarLogo.png" className="ms-4 ps-3" />
//       </div>
//       <List>
//         {ItemList.map((item, index) => {
//           const { text, icon, onClick } = item;
//           return (
//             <div className="">
//               <ListItem button key={index} onClick={onClick}>
//                 {icon && (
//                   <ListItemIcon>
//                     <span className={classes.icons}>{icon}</span>
//                   </ListItemIcon>
//                 )}
//                 <ListItemText primary={text} className={classes.text} />
//               </ListItem>
//             </div>
//           );
//         })}
//         <button onClick={() => history.push("/")} className="buttonTwo">
//           Logout
//         </button>
//       </List>
//     </div>
//   );

//   const container =
//     window !== undefined ? () => window().document.body : undefined;
//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         sx={{
//           width: { sm: `calc(100% - ${drawerWidth}px)` },
//           ml: { sm: `${drawerWidth}px` },
//         }}
//       >
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: "none" }, color: "black" }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             className="fw-bolder"
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ color: "black" }}
//           >
//             {heading}
//           </Typography>

//           <div className="topbarcontent">
//             {/* <div className="d-flex justify-content-between usericon">
//               <div className="position-relative w-50 mt-3 searchbar">
//                 <Form.Group className="mx-3" controlId="#">
//                   <Form.Control
//                     type="search"
//                     placeholder="search item"
//                     className="input_field"

//                    />
//                 </Form.Group>
//                 <SearchIcon className="search_icon" />
//               </div>
//               <Badge color="error" variant="dot" className="mt-4">

//                 <NotificationsIcon
//                   sx={{
//                     position: "relative",
//                     bottom: 6,
//                     left: 8,
//                     textDecoration: "none",
//                     color: "#4F6367",
//                   }}
//                 />
//               </Badge>
//               <div className="for_LoginAdmin">
//                 <small className="Jones fw-bold">Jones Ferdinand</small>
//                 <img src={SideBarLogo} alt="SideBarLogo.png" className="w-25" />
//               </div>
//             </div> */}
//             <Box>
//               <Typography
//                 variant="h6"
//                 noWrap
//                 component="div"
//                 sx={{
//                   fontSize: "small",
//                   position: "relative",
//                   top: 10,
//                   right: 15,
//                   // display: { md: "none" },
//                   color: "#4F6367",
//                 }}
//               ></Typography>
//             </Box>
//           </div>
//         </Toolbar>
//       </AppBar>
//       <Box
//         component="nav"
//         sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
//         aria-label="mailbox folders"
//       >
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true,
//           }}
//           sx={{
//             display: { xs: "block", sm: "none" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: drawerWidth,
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>
//         <Drawer
//           variant="permanent"
//           sx={{
//             display: { xs: "none", sm: "block" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: drawerWidth,
//             },
//           }}
//           open
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           p: 3,
//           width: { sm: `calc(100% - ${drawerWidth}px)` },
//         }}
//       >
//         <Toolbar />
//       </Box>
//     </Box>
//   );
// }

// ResponsiveDrawer.propTypes = {
//   window: PropTypes.func,
// };

// export default ResponsiveDrawer;
