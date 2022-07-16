import React from "react";
import { Pie } from "react-chartjs-2";
import { Button } from "react-bootstrap";
import "../cardsAndChart/Chart.css";
import SecondPieChart from "./PieChart2";
//
//
//
export default function PieChart() {
  const data = {
    labels: ["Sales", "Revenue"],
    datasets: [
      {
        label: "My First Dataset",
        data: [180, 120],
        backgroundColor: [
          "rgba(241, 17, 57, 1)",
          "rgba(251, 164, 15, 1)",
          "rgba(255, 214, 0, 1)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  const options = {
    title: {
      display: true,
      text: "Pie Chart",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 6,
            stepSize: 1,
          },
        },
      ],
    },
  };

  return (
    <div className="chartcontainer bg-white">
      <div className="exp d-flex justify-content-between">
        <h5 className="chart-heading fw-bolder">
          <small className="">Product Sales Revenue</small>
        </h5>
        <Button variant="warning" className="me-4 px-lg-4 fw-bolder">
          <small className="">Create&nbsp;Report</small>
        </Button>
      </div>
      <p className="This_Week">
        <small>This Week</small>
      </p>
      <div className="d-flex justify-content-around">
        <div>
          <Pie data={data} options={options} className="Piech" />
        </div>
        <div>
          <SecondPieChart />
        </div>
      </div>
    </div>
  );
}
