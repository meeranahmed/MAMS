import React, { Component } from "react";
import { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import apiServices from "../services/apiServices";
let chartData = [];
const BarChart = () => {
  useEffect(() => {
    let departments = [];
    let counts = [];
    apiServices
      .getDepartmentDevices()
      .then(async (response) => {
        console.log(response.data);
        response.data.map((item) => {
          console.log(item);
          departments.push(item.name);
          counts.push(item.count);
        });
        console.log(departments);
        setObject({
          chart: {
            height: 450,
            width: 300,
            type: "bar",
          },

          xaxis: {
            categories: departments,
            labels: {
              style: {
                fontSize: "12px",
              },
            },
          },
        });
        setSeries([
          {
            data: counts,
          },
        ]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [options, setObject] = useState({
    chart: {
      height: 450,
      width: 300,
      type: "bar",
    },
    colors: ["#1AB07A"],

    xaxis: {
      categories: [["Z"], ["Y"], ["Z"]],
      labels: {
        style: {
          fontSize: "12px",
        },
      },
    },
  });
  const [series, setSeries] = useState([
    {
      data: [0, 0, 0],
    },
  ]);
  return <Chart options={options} series={series} type="bar" width="500" />;
};
export default BarChart;
