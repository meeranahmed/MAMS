import axios from "axios";
import authHeader from "./authHeader";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getMedicalDevice = async (id) => {
  let token = await authHeader();
  console.log(token);
  return axios.get("https://mams-api.herokuapp.com/medical_devices/" + id, {
    headers: { Authorization: token },
  });
};

const getAllNotification = async () => {
  let token = await authHeader();
  console.log(token);

  return axios.get("https://mams-api.herokuapp.com/notifications", {
    headers: { Authorization: token },
  });
};

const getAll_PPM_PDFS = async (id) => {
  let token = await authHeader();
  console.log(token);

  return axios.get(
    `https://mams-api.herokuapp.com/medical_devices/${id}/ppm_logs`,
    {
      headers: { Authorization: token },
    }
  );
};

const getAll_CM_PDFS = async (id) => {
  let token = await authHeader();
  console.log(token);

  return axios.get(
    `https://mams-api.herokuapp.com/medical_devices/${id}/cm_logs`,
    {
      headers: { Authorization: token },
    }
  );
};

const PPM_PDF = async (id, log_id) => {
  let token = await authHeader();
  console.log(token);

  return axios.get(
    `https://mams-api.herokuapp.com/medical_devices/${id}/ppm_logs/${log_id}`,
    {
      headers: { Authorization: token },
    }
  );
};

const CM_PDF = async (id, log_id) => {
  let token = await authHeader();
  console.log(token);

  return axios.get(
    `https://mams-api.herokuapp.com/medical_devices/${id}/cm_logs/${log_id}`,
    {
      headers: { Authorization: token },
    }
  );
};

const create_PPM_PDF = async (id, values) => {
  let token = await authHeader();
  let data = {
    visit_date: values.visit_date,
    operation: values.operation,
  };
  let headers = { Authorization: token };

  return axios
    .post(
      `https://mams-api.herokuapp.com/medical_devices/${id}/ppm_logs`,
      data,
      { headers: headers }
    )
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const create_CM_PDF = async (id, values) => {
  let token = await authHeader();
  let data = {
    repair_date: values.repair_date,
    visit_date: values.visit_date,
    operation: values.operation,
  };
  let headers = { Authorization: token };
  return axios
    .post(
      `https://mams-api.herokuapp.com/medical_devices/${id}/cm_logs`,
      data,
      { headers: headers }
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const requestEngineer = async (id, values) => {
  let token = await authHeader();
  let data = {
    other_notes: values.other_notes,
    error_msg: values.error_msg,
  };
  let headers = { Authorization: token };
  return axios
    .post(
      `https://mams-api.herokuapp.com/medical_devices/${id}/request_engineers`,
      data,
      { headers: headers }
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const requestMaintenanceCompany = async (id, values) => {
  let token = await authHeader();
  let data = {
    contract_status: values.contract_status,
    error: values.error,
  };
  let headers = { Authorization: token };
  console.log(headers);
  console.log(data);
  return axios
    .post(
      `https://mams-api.herokuapp.com/medical_devices/${id}/request_maintenance_companies`,
      data,
      { headers: headers }
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const requestDeviceScrapping = async (id, values) => {
  let token = await authHeader();
  let data = {
    scrapping_reason: values.scrapping_reason,
  };
  let headers = { Authorization: token };
  console.log(headers);
  console.log(data);
  return axios
    .post(
      `https://mams-api.herokuapp.com/medical_devices/${id}/request_scrappings`,
      data,
      { headers: headers }
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
const headConfirm = async (id) => {
  let token = await authHeader();
  let data = {
    scrapping_reason: await AsyncStorage.getItem("Scrapping_Reason"),
  };
  let headers = { Authorization: token };
  console.log(headers);
  console.log(data);
  console.log("Habiba id", id);
  return axios
    .post(
      `https://mams-api.herokuapp.com/medical_devices/${id}/confirm_scrappings`,
      data,
      { headers: headers }
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
const adminConfirm = async (id) => {
  let token = await authHeader();
  let data = {
  };
  let headers = { Authorization: token };
  console.log(headers);
  console.log(data);
  console.log("Habiba id", id);
  return axios
    .post(
      `https://mams-api.herokuapp.com/medical_devices/${id}/confirm_scrappings`,
      data,
      { headers: headers }
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

}

const addNewDevice = async (values) => {
  let token = await authHeader();
  let data = {
    user_id: values.user_id,
    manufacturer: values.manufacturer,
    equipment_name: values.equipment_name,
    equipment_num: values.equipment_num,
    model: values.model,
    hospital_num: values.hospital_num,
    responsible_personnel: values.responsible_personnel,
    department: values.department,
    floor: values.floor,
    room: values.room,
    installation_date: values.installation_date,
    warranty: values.warranty,
    warranty_period: values.warranty_period,
    warranty_start_date: values.warranty_start_date,
    warranty_end_date: values.warranty_end_date,
    contract: values.contract,
    contract_period: values.contract_period,
    contract_start_date: values.contract_start_date,
    contract_end_date: values.contract_end_date,
    calibration_date: values.calibration_date,
    calibration_frequency: values.calibration_frequency,
    ppm_frequency: values.ppm_frequency,
    ppm_date: values.ppm_date,
    status: "active",
    maintenance_company_id: values.maintenance_company_id,
  };
  let headers = {Authorization: token}
  return axios.post("https://mams-api.herokuapp.com/medical_devices", data, {headers: headers}
  )
  .then(function (response) {
    console.log(response)
  })
  .catch(function (error) {
    console.log(error)
  })
}
const alertAction = async (id, values) => {
  let token = await authHeader();
  let data = {
    body: values.body,
  };
  let headers = { Authorization: token };
  console.log(headers);
  console.log(data);
  console.log("Habiba Id", id)
  return axios
    .post(
      `https://mams-api.herokuapp.com/medical_devices/${id}/contract_renewal`,
      data,
      { headers: headers }
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
const getCalibration = async () => {
  let token = await authHeader();
  console.log(token)
  
  return axios.get("https://mams-api.herokuapp.com/callibration_alert", {
    headers: { Authorization: token },
  });
};
const getContract = async () => {
  let token = await authHeader();
  console.log(token)
  
  return axios.get("https://mams-api.herokuapp.com/contract_alert", {
    headers: { Authorization: token },
  });
};
const getWarranty = async () => {
  let token = await authHeader();
  console.log(token)
  
  return axios.get("https://mams-api.herokuapp.com/warranty_alert", {
    headers: { Authorization: token },
  });
};

const getDownTime = async () => {
  let token = await authHeader();
  console.log(token)
  
  return axios.get("https://mams-api.herokuapp.com/downtime_alert", {
    headers: { Authorization: token },
  });
}
const getStatistics = async () => {
  let token = await authHeader();
  console.log(token)
  
  return axios.get("https://mams-api.herokuapp.com/stat", {
    headers: { Authorization: token },
  });
};

const getDepStatistics = async (dep) => {
  let token = await authHeader();
  console.log(token)
  
  return axios.get(`https://mams-api.herokuapp.com/stat?department=${dep}`, {
    headers: { Authorization: token },
  });
};



const getList = async (Value,dep) => {
  let token = await authHeader();
  console.log(token)
  
  return axios.get(`https://mams-api.herokuapp.com/stat/${Value}?department=${dep}`, {
    headers: { Authorization: token },
  });
};



const apiServices = {
  getMedicalDevice,
  getAllNotification,
  requestEngineer,
  addNewDevice,
  requestMaintenanceCompany,
  requestDeviceScrapping,
  headConfirm,
  adminConfirm,
  getAll_PPM_PDFS,
  getAll_CM_PDFS,
  PPM_PDF,
  CM_PDF,
  create_PPM_PDF,
  create_CM_PDF,
  getCalibration,
  getStatistics,
  getDepStatistics,
  getList,
  alertAction,
  getContract,
  getWarranty,
  getDownTime

};
export default apiServices;
