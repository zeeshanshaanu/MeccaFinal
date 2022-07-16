import React from "react";
import { Pie } from "react-chartjs-2";
import { Button } from "react-bootstrap";
import "../cardsAndChart/Chart.css";

export default function SecondPieChart() {
  const data = {
    labels: ["Sales", "Revenue"],
    datasets: [
      {
        label: "My First Dataset",
        data: [180, 120],
        backgroundColor: ["rgba(41, 51, 69, 1)", "	rgb(128,128,128)"],
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
    <div className=" ">
      <div>
        <Pie data={data} options={options} className="Piech" />
      </div>
    </div>
  );
}
