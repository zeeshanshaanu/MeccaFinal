import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import { Button } from "react-bootstrap";
export default function ApexChart() {
  const data = {
    labels: [],
    datasets: [
      {
        label: "My First Dataset",
        data: [180, 120, 222, 321],
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
    <div className=" bg-white">
      <div className="d-flex justify-content-around  ">
        <div className="">
          <Pie data={data} options={options} className="Piech" />
        </div>
        {/* <div>
          <SecondPieChart />
        </div> */}
      </div>
    </div>
  );
}
