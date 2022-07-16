import React from "react";
import { Bar } from "react-chartjs-2";
import { Button } from "react-bootstrap";

export default function Chart1() {
  const data = {
    labels: ["0", "1", "2", "3", "4"],
    datasets: [
      {
        label: "Sales 2020 (M)",
        data: [3, 4, 2, 1, 4],
        tension: 0.5,
        borderColor: ["rgba(255, 118, 41, 1)"],
        backgroundColor: ["rgba(255, 118, 41, 1)"],
        pointBackgroundColor: "rgba(41, 51, 69, 1)",
        pointBorderColor: "rgba(41, 51, 69, 1)",
      },
      {
        label: "Revenue",
        data: [9, 5, 2, 2, 5],
        // fill: true,
        tension: 0.5,
        borderColor: ["rgba(41, 51, 69, 1)"],
        backgroundColor: ["rgba(41, 51, 69, 1)"],
        pointBackgroundColor: "rgba(128, 128, 128, 1)",
        pointBorderColor: "rgba(128, 128, 128, 1)",
      },
    ],
  };
  const options = {
    title: {
      display: true,
      text: "Line Chart",
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
          <small>New&nbsp;Signups</small>
        </h5>
        <Button variant="warning" className="px-lg-4 fw-bold">
          <small>Create&nbsp;Report</small>
        </Button>
      </div>
      <p className="This_Week">
        <small>This Week</small>
      </p>
      {/* <DateTime /> */}
      <Bar data={data} options={options} />
    </div>
  );
}
