import React from "react";
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import "./DeviceEdit.css";
import { useLocation } from "react-router-dom";
import apiServices from "../../services/apiServices";
export default function DeviceEdit() {
  const location = useLocation();
  console.log(location.state.state.data.id);
  let deviceData = location.state.state.data;
  let navigate = useNavigate();
  return (
    <div className="edit-container" style={{ height: "100vh" }}>
      <div className="tittle">Edit Device Data</div>
      <Formik
        initialValues={{
          equipment_num: deviceData.equipment_num,
          equipment_name: deviceData.equipment_name,
          model: deviceData.model,
          hospital_id: deviceData.hospital_id,
          department: deviceData.department,
          floor: deviceData.floor,
          room: deviceData.room,
          installation_date: deviceData.installation_date,
          responsible_personnel: deviceData.responsible_personnel,
          manufacturer: deviceData.manufacturer,
          warranty: deviceData.warranty,
          warranty_period: deviceData.warranty_period,
          contract: deviceData.contract,
          ppm_date: deviceData.ppm_date,
          ppm_frequency: deviceData.ppm_frequency,
        }}
        onSubmit={async (values) => {
          console.log(values);
          apiServices.updateMedicalDevice(location.state.state.data.id, values);
          let path = `/viewDevice/:${location.state.state.data.id}`;
          navigate(path);
        }}
      >
        <Form className="flex-form">
          <div className="col">
            <div className="center">
              <label htmlFor="equipment_num">Equipment Number</label>
              <Field
                className="field"
                id="equipment_num"
                label="equipment_num"
                name="equipment_num"
              />
              <label htmlFor="equipment_name">Equipment Name</label>
              <Field
                className="field"
                id="equipment_name"
                label="equipment_name"
                name="equipment_name"
              />

              <label htmlFor="model">Model</label>
              <Field className="field" id="model" label="model" name="model" />
              <label htmlFor="firstName">Responsibe Person</label>
              <Field
                className="field"
                id="responsible_personnel"
                label="responsible_personnel"
                name="responsible_personnel"
              />

              <label htmlFor="equipment_num">Hospital ID</label>
              <Field
                className="field"
                id="hospital_id"
                label="hospital_id"
                name="hospital_id"
              />
              <label htmlFor="department">Department</label>
              <Field
                className="field"
                id="department"
                label="department"
                name="department"
              />

              <label htmlFor="floor">Floor</label>
              <Field className="field" id="floor" label="floor" name="floor" />
              <label htmlFor="room">Room Number</label>
              <Field className="field" id="room" label="room" name="room" />
            </div>
          </div>
          <div className="col">
            <div className="center">
              <label htmlFor="installation_date">Installation Date</label>
              <Field
                className="field"
                id="installation_date"
                label="installation_date"
                name="installation_date"
              />
              <label htmlFor="firstName">Manufacturer Company</label>
              <Field
                className="field"
                id="manufacturer"
                label="manufacturer"
                name="manufacturer"
              />

              <label htmlFor="firstName">Maintenance Company</label>
              <Field
                className="field"
                id="firstName"
                label="name"
                name="firstName"
                placeholder="Jane"
              />
              <label htmlFor="warranty">Warranty</label>
              <Field
                className="field"
                id="warranty"
                label="warranty"
                name="warranty"
              />

              <label htmlFor="warranty_period">Warranty Period</label>
              <Field
                className="field"
                id="warranty_period"
                label="warranty_period"
                name="warranty_period"
              />
              <label htmlFor="contract">Contract</label>
              <Field
                className="field"
                id="contract"
                label="contract"
                name="contract"
              />

              <label htmlFor="ppm_frequency"> PPM Frequency</label>
              <Field
                className="field"
                id="ppm_frequency"
                label="ppm_frequency"
                name="ppm_frequency"
              />
              <label htmlFor="ppm_date"> PPM Date</label>
              <Field
                className="field"
                id="ppm_date"
                label="ppm_date"
                name="ppm_date"
              />
            </div>
            <div>
              <button className="btn" type="submit">
                Submit
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
