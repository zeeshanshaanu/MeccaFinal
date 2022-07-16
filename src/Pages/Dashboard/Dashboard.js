import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardOne from "../../Components/cardsAndChart/CardOne";
import CardTwo from "../../Components/cardsAndChart/CardTwo";
import Box from "@mui/material/Box";
import PieChart from "../../Components/cardsAndChart/PieChart";
import ActiveUserCard from "../../Components/cardsAndChart/ActiveUserCard";
import ActiveProfessionalsCard from "../../Components/cardsAndChart/ActiveProfessionalsCard";
import ResponsiveDrawer from "../../Pages/Dashboard/Drawer";
import AppBar from "@mui/material/AppBar";
import Chart1 from "../../Components/cardsAndChart/Chart1";
import Chart from "chart.js/auto";
//
//
const drawerWidth = 240;
const Dashboard = () => {
  useEffect(() => {
    sessionStorage.setItem("id", "1");
  }, []);
  return (
    <div className="TopSection overflow-hidden">
      <Box sx={{ display: "flex" }}>
        <ResponsiveDrawer heading="Dashboard" />
        {/* <div className="for_drawer"></div> */}
        <AppBar
          className="fortrans"
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        />
        <Box
          sx={{
            flexGrow: 1,
            my: 5,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <div className="me-3 mt-5">
            <CardOne />
            <CardTwo />
            <Row className="">
              <Col md="12" lg="6" xl="6" className="mt-5 mb-4">
                <Chart1 />
              </Col>
              <Col md="12" lg="6" xl="6" className="mt-5 mb-4">
                <PieChart className="" />
              </Col>
            </Row>
            <Row className="pb-5">
              <Col md="12" lg="6" xl="6" className="mt-2">
                <ActiveUserCard />
              </Col>
              <Col md="12" lg="6" xl="6" className="mt-2">
                <ActiveProfessionalsCard />
              </Col>
            </Row>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
