import React from "react";
import "./DashboardScreen.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSkating } from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import BarChart from "../../components/BarChart";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import AuthServices from "../../services/AuthService";
import apiServices from "../../services/apiServices";
export default function DashboardScreen() {
  let { deviceID } = useParams();
  let navigate = useNavigate();

  const [search, setsearch] = useState(deviceID);

  const handleChange = (e) => {
    setsearch(e.target.value);
  };
  const handleSubmit = () => {
    console.log(search);
    let path = `/viewDevice/:${search}`;
    navigate(path);
  };
  const logOutHandle = async () => {
    await AuthServices.logOut();
    let path = `/`;
    navigate(path);
  };
  const signUpHandle = () => {
    console.log("sign");
    let path = `/signup`;
    navigate(path);
  };
  const [devicesdata, setdevicesdata] = useState([
    { name: "Function Devices", count: 4019, keyword: "active" },
    { name: "Not Function Devices", count: 0, keyword: "inactive" },
    { name: "Scrapped", count: 1, keyword: "scrapped" },
    { name: "Warranty", count: 4020, keyword: "warranty" },
    { name: "Contract ", count: 4020, keyword: "contract" },
    { name: "Neither Warranty Nor Contract", count: 0, keyword: "neither" },
    { name: "Total Devices", count: 4020, keyword: "total" },
  ]);
  useEffect(() => {
    apiServices
      .getAllDevices()
      .then(async (response) => {
        console.log(response.data);
        setdevicesdata(response.data);
        // console.log(devicesdata[0].count);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(devicesdata);

  return (
    <div className="dashboard-cont">
      <div className="btn-nav">
        <button className="btn" onClick={signUpHandle}>
          New Member
        </button>
        <button className="btn" onClick={logOutHandle}>
          Logout
        </button>
      </div>
      <div className="container">
        <div className="box-1 head">
          <div class="card">
            <div className="chart">
              <BarChart />
            </div>
          </div>
        </div>
        <div className="box-9 tottal head">
          <h4>Tottal Devices</h4>

          <p class="">{devicesdata[6].count}</p>
        </div>
        <div className="box-8 head">
          <h1>MAMS</h1>
          <div className="search-cont">
            <TextField
              id="search-bar"
              className="search-bar"
              label="Search by Device ID"
              variant="outlined"
              placeholder="Search "
              size="small"
              onChange={handleChange}
            />
          </div>
          <button onClick={handleSubmit} className="search-btn">
            Search
          </button>
        </div>

        <div
          className="box-2"
          onClick={() => navigate(`/viewDevices/:${devicesdata[0].keyword}`)}
        >
          <div class="card">
            <h4>Functioning Devices</h4>
            <p class="detail" style={{ color: "#18b65f" }}>
              {devicesdata[0].count}
            </p>
          </div>
        </div>
        <div
          className="box-3"
          onClick={() => navigate(`/viewDevices/:${devicesdata[4].keyword}`)}
        >
          <div class="card">
            <h4>In Contract</h4>
            <p class="detail" style={{ color: "#18b65f" }}>
              {devicesdata[4].count}
            </p>
          </div>
        </div>
        <div
          className="box-4"
          onClick={() => navigate(`/viewDevices/:${devicesdata[1].keyword}`)}
        >
          <div class="card">
            <h4>Not Functioning</h4>
            <p class="detail" style={{ color: "red" }}>
              {devicesdata[1].count}
            </p>
          </div>
        </div>
        <div
          className="box-5"
          onClick={() => navigate(`/viewDevices/:${devicesdata[2].keyword}`)}
        >
          <div class="card">
            <h4>Scrapped</h4>
            <p class="detail" style={{ color: "red" }}>
              {devicesdata[2].count}
            </p>
          </div>
        </div>
        <div
          className="box-6"
          onClick={() => navigate(`/viewDevices/:${devicesdata[3].keyword}`)}
        >
          <div class="card">
            <h4>In Waranty</h4>
            <p class="detail" style={{ color: "blue" }}>
              {devicesdata[3].count}
            </p>
          </div>
        </div>
        <div
          className="box-7"
          onClick={() => navigate(`/viewDevices/:${devicesdata[5].keyword}`)}
        >
          <div class="card">
            <h4>No warranty Nor Contract</h4>
            <p class="detail" style={{ color: "rgb(241, 228, 44)" }}>
              {devicesdata[5].count}
            </p>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
