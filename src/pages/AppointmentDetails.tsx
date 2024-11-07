import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAppointmentdetails } from "../store/overAllSlice";
// import AppointmentDetails from "../store/overAllSlice"

export const AppointmentDetails: React.FC = () => {
  const dispatch = useDispatch();
  const userDetail = useSelector((store:any) => store.overall.userDetails);
  const appointmentDetails = useSelector((store: any) => store.overall.appointmentDetails);
  console.log(userDetail);
  useEffect(() => {
    axios
      .get(`http://10.137.199.32:3003/api/appoinments/doctor/${userDetail.id ? userDetail?.id : 3}`)
      .then((res) => dispatch(updateAppointmentdetails(res.data)));
  }, []);

  return (
    <div className="bg-gray-200 w-full p-4">
      <h2 className="font-bold text-2xl mb-6">Welcome, Dr. Smith</h2>
      <div className="bg-white p-2 mb-4">
        <h3 className="font-bold py-2">Today's Appointments</h3>
        <table className="text-sm w-full">
          <thead className="font-bold">
            <tr>
              <td>Time</td>
              <td>Patient Name</td>
              <td>Reason</td>
            </tr>
          </thead>
          <tbody>
          {(appointmentDetails ?? []).map((item: any) => (
            <tr>
              <td>{item.appointmentTime}</td>
              <td>{item.doctor_id}</td>
              <td>{item.reason}</td>
            </tr>))}
          </tbody>
        </table>
      </div>
      <div className="bg-white p-2">
        <h3 className="font-bold py-2">Today's Appointments</h3>
        <table className="text-sm w-full">
          <thead className="font-bold">
            <tr>
              <td>Time</td>
              <td>Patient Name</td>
              <td>Reason</td>
            </tr>
          </thead>
          <tbody>
          {(appointmentDetails ?? []).map((item: any) => (
            <tr>
              <td>{item.appointmentTime}</td>
              <td>{item.doctor_id}</td>
              <td>{item.reason}</td>
            </tr>))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
