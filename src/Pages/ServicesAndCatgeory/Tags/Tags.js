/* eslint-disable no-unused-vars */
import Notification from "../../../Components/AlertNotification/Message";
import ResponsiveDrawer from "../../Dashboard/Drawer";
import CircularIndeterminate from "../../../Components/Loader/Loader";
import Box from "@mui/material/Box";
import Form from "react-bootstrap/Form";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../../Pages/Services_Management/Services.css";
import AppBar from "@mui/material/AppBar";
import Table from "react-bootstrap/Table";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
// MUI DROP DOWN MENU
import SearchIcon from "@mui/icons-material/Search";
import MainMenu from "../../../Components/SelectCatgeriesOption/MainMenu";
////////////=============/////////////============
////////////=============/////////////============
////////////=============/////////////============
const drawerWidth = 100;
const Tags = () => {
    const [filter, setfilter] = useState("");
    ////////////=============/////////////==========
    const navigate = useNavigate();
    const [done, setdone] = useState(false);
    const [notify, setNotify] = useState({
        isOpen: false,
        message: "",
        type: "",
    });
    ////////////=============/////////////============
    const [tokenauth, settokenauth] = useState("");
    const [Services, setServices] = useState([]);
    const GetServices = () => {
        axios
            .get(`/tag/view_all`, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token_id")}`,
                },
            })
            .then((response) => {
                setServices(response.data.data);
                console.log(response.data);
                setdone(false);
            })
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        sessionStorage.setItem("id", "12");
        GetServices();
        setdone(true);
    }, []);
    ////////////=============/////////////============
    ////////////=============/////////////============
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [level, setlevel] = useState("");
    //
    //
    //
    const AddAdminServices = () => {
        const formData = new FormData();
        formData.append("description", description);
        formData.append("name", name);
        axios
            .post("/tag/add", formData, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token_id")}`,
                },
            })
            .then((response) => {
                if (response.data.code === 200) {
                    setdone(false);
                    setNotify({
                        isOpen: true,
                        message: `${response.data.message}`,
                        type: "success",
                    });
                }
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            })
            .catch((err) => {
                setdone(false);
                console.log(err.response);
                setNotify({
                    isOpen: true,
                    message: `${err.response.data.message}`,
                    type: "error",
                });
                console.log(err);
            });
    };
    const HandleSubmit = (e) => {
        e.preventDefault();
        setdone(true);
        AddAdminServices();
    };
    ////////////=============/////////////============
    ////////////=============/////////////============
    ////////////=============/////////////============
    const handleDelete = (tag_id) => {
        // console.log(sessionStorage.getItem("token_id"));
        setdone(true);
        axios
            .delete(`/tag/delete?tag_id=${tag_id}`, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token_id")}`,
                },
            })
            .then((response) => {
                console.log(response);
                setdone(false);
                if (response.data.code === 200) {
                    setdone(false);
                    setNotify({
                        isOpen: true,
                        message: `${response.data.message}`,
                        type: "success",
                    });
                }
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            })
            .catch((err) => {
                setdone(false);
                setNotify({
                    isOpen: true,
                    message: `${err.response.message}`,
                    type: "error",
                });
            });
    };

    ////////////=============/////////////============
    return ( <
            div className = "overflow-none" >
            <
            div className = "TopDiv" >
            <
            Box sx = {
                { display: "flex" }
            } >
            <
            div className = "for_drawer" >
            <
            ResponsiveDrawer heading = "Services & Categories"
            className = "alluser" /
            >
            <
            /div> <
            AppBar className = "fortrans"
            position = "fixed"
            sx = {
                {
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }
            } >
            <
            /AppBar> <
            Box sx = {
                {
                    flexGrow: 1,
                    my: 5,
                    mx: 1,
                    mt: 5,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }
            } >
            <
            div className = "mt-5 pt-5" >
            <
            Form onSubmit = { HandleSubmit }
            className = "" >
            <
            div class = "" >
            <
            MainMenu / >
            <
            div className = "" > { /*  */ } { /*  */ } {
                /* <Col lg={4} md={4} sm={12}>
                                      <Form.Group className="mb-3">
                                        <div className="">
                                          <Form.Label className="text-dark">
                                            Service Id*
                                          </Form.Label>
                                        </div>
                                        <input
                                          type="number"
                                          placeholder="ID#"
                                          name="AddServicesId"
                                          readOnly
                                          className="w-100  py-1 ps-2 categoryinput"
                                         />
                                      </Form.Group>
                                    </Col> */
            } { /*  */ } { /*  */ } { /* <Col lg={4} md={6} sm={12}> */ } <
            div className = "" >
            <
            h4 className = "fw-bolder mb-4" > Add Tags < /h4> <
            Form.Label className = "text-dark" > Tags Name * < /Form.Label> < /
            div > <
            Form.Group className = "mb-3" >
            <
            input type = "text"
            // pattern="[A-Za-z]{3,}"
            // title="Must not contain any number or special character"
            placeholder = "Service Name"
            name = "ServicesName"
            required className = "w-25 py-1 ps-2 categoryinput"
            onChange = {
                (e) => setName(e.target.value)
            }
            /> < /
            Form.Group > {
                /* </Col>
                                    <Col lg={4} md={6} sm={12}> */
            } <
            div className = "" >
            <
            Form.Label className = "text-dark" >
            Description(Optional) <
            /Form.Label> < /
            div > <
            Form.Group className = "mb-3" >
            <
            input type = "text"
            // pattern="[A-Za-z]{3,}"
            // title="Must not contain any number or special character"
            placeholder = "Description"
            name = "ServicesName"
            className = "w-25 py-1 ps-2 categoryinput"
            onChange = {
                (e) => setDescription(e.target.value)
            }
            /> < /
            Form.Group > { /*  */ } { /*  */ } {
                /* <Col lg={3} md={6} sm={12}>
                                    <div className="">
                                      <Form.Label className="text-dark">
                                        Service Name (Optional)
                                      </Form.Label>
                                    </div>
                                    <FormGroup>
                                      <FormControlLabel
                                        control={
                                          <Android12Switch
                                            defaultChecked
                                            className="radiobtn"
                                            name="Status"
                                            onChange={(e) => setlevel(e.target.value)}
                                          />
                                        
                                        }
                                        label="ON/OFF"
                                      />
                                    </FormGroup>
                                  </Col> */
            } <
            /div> <
            div className = "  mt-5" >
            <
            button className = "button1 py-2 w-25" > Add & nbsp; tags < /button> < /
            div > <
            /div> < /
            Form > <
            div className = "Show_List py-5" >
            <
            div className = "" >
            <
            div className = " d-flex justify-content-between" >
            <
            div className = "" >
            <
            h4 className = "text-dark mb-5 fw-bolder" >
            All & nbsp; Tags <
            /h4> < /
            div > { /*  */ } <
            div className = "position-relative w-75" >
            <
            Form.Group className = "mx-3"
            controlId = "#" >
            <
            Form.Control placeholder = "Search by Service name"
            type = "search"
            className = "input_field "
            value = { filter }
            onChange = {
                (e) => setfilter(e.target.value)
            }
            /> < /
            Form.Group > <
            SearchIcon className = "ServicesSearch_icon" / >
            <
            /div> < /
            div > {
                done ? ( <
                    div className = "stylishLoader" >
                    <
                    CircularIndeterminate className = "allagentsLoader" / >
                    <
                    /div>
                ) : ( <
                        div className = "d-flex justify-content-center" >
                        <
                        Table className = "w-100" >
                        <
                        thead >
                        <
                        tr >
                        <
                        th > S.No# < /th> <
                        th > Product & nbsp; name < /th> <
                        th > Description < /th> <
                        th > Status < /th> <
                        th > Action < /th> < /
                        tr > <
                        /thead> <
                        tbody > {
                            Services.length !== 0 ? (
                                Services.filter((admin) => {
                                    if (filter === "") {
                                        return Services;
                                    } else if (
                                        (admin.name &&
                                            admin.name
                                            .toString()
                                            .toUpperCase()
                                            .includes(
                                                filter.toString().toUpperCase()
                                            )) ||
                                        (admin.tag_id &&
                                            admin.tag_id.toString().toUpperCase())
                                    ) {
                                        return Services;
                                    }
                                }).map((index) => ( <
                                        tr >
                                        <
                                        td > { index.tag_id } < /td> <
                                        td > { index.name } < /td> <
                                        td > { index.description } < /td> <
                                        td > { " " } {
                                            index.isActive === 1 ? ( <
                                                div style = {
                                                    {
                                                        textAlign: "center",
                                                        color: "green",
                                                        fontWeight: "bolder",
                                                        paddingTop: 5,
                                                        paddingBottom: 5,
                                                        paddingLeft: 15,
                                                        paddingRight: 15,
                                                        borderRadius: "8px",
                                                        backgroundColor: "rgba(117, 162, 66, 0.15)",
                                                    }
                                                } >
                                                <
                                                small > Active < /small>{" "} < /
                                                div >
                                            ) : index.isActive === 1 ? ( <
                                                div style = {
                                                    { color: "blue" }
                                                } >
                                                <
                                                small > Active < /small>{" "} < /
                                                div >
                                            ) : index.isActive === 0 ? ( <
                                                div className = ""
                                                style = {
                                                    {
                                                        textAlign: "center",
                                                        color: "red",
                                                        fontWeight: "bolder",
                                                        paddingTop: 5,
                                                        paddingBottom: 5,
                                                        paddingLeft: 13,
                                                        paddingRight: 13,
                                                        borderRadius: "8px",
                                                        backgroundColor: "rgba(117, 162, 66, 0.15)",
                                                    }
                                                } >
                                                Inactive <
                                                /div>
                                            ) : ( <
                                                div style = {
                                                    { color: "red" }
                                                } >
                                                <
                                                small > Not & nbsp; Available < /small>{" "} < /
                                                div >
                                            )
                                        } <
                                        /td> <
                                        td >
                                        <
                                        div className = "d-flex icon-popup" >
                                        <
                                        EditIcon className = "actions  mx-2"
                                        onClick = {
                                            () => {
                                                navigate(
                                                    `/UpdateService/${index.tag_id}`
                                                );
                                            }
                                        }
                                        /> <
                                        div className = "DeleteIcon"
                                        onClick = {
                                            () => {
                                                handleDelete(index.tag_id);
                                            }
                                        } >
                                        <
                                        DeleteIcon / >
                                        <
                                        /div> {
                                        /* <Deletepopup
                                                                          className="actions"
                                                                          onClick={() => {
                                                                            handleDelete(index.service_id);
                                                                          }}
                                                                        /> */
                                    } <
                                    /div> < /
                                    td > <
                                    /tr>
                                ))
                        ): ( <
                            span className = "text-danger fw-bolder h2" >
                            No data <
                            /span>
                        )
                    } <
                    /tbody> < /
                Table > <
                /div>
            )
        } <
        /div> < /
    div > <
        /div> <
    Notification notify = { notify }
    setNotify = { setNotify }
    /> < /
    Box > <
        /Box> < /
    div > <
        /div>
);
};

export default Tags;