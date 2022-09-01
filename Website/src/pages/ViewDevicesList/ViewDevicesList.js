import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AuthServices from "../../services/AuthService";
import apiServices from "../../services/apiServices";
import "./List.css";

export default function ViewDevicesList() {
  let navigate = useNavigate();
  let { keyWord } = useParams();
  keyWord = keyWord.substring(1);
  console.log(keyWord);
  const [list, setList] = useState([]);
  useEffect(() => {
    apiServices
      .getDevicesList(keyWord)
      .then(async (res) => {
        console.log(res.data);
        setList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const logOutHandle = async () => {
    await AuthServices.logOut();
    let path = `/`;
    navigate(path);
  };
  return (
    <div className="table-cont">
      <div className="header">
        <h3>{keyWord} List</h3>
        <div className="btn-cont">
          <button className="btn" onClick={logOutHandle}>
            Log Out
          </button>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Device Name</th>
            <th> Device ID</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, key) => {
            return (
              <tr key={key}>
                <td>{item.equipment_name}</td>
                <td>{item.id}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
