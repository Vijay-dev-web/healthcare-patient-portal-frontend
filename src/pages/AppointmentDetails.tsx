import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateAppointmentdetails } from "../store/overAllSlice";

export const AppointmentDetails: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://10.137.199.32:3003/api/appoinments/1/3")
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
            <tr>
              <td>9:00AM</td>
              <td>John Doe</td>
              <td>Annual check-up</td>
            </tr>
            <tr>
              <td>10:30AM</td>
              <td>John Smith</td>
              <td>Follow up</td>
            </tr>
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
            <tr>
              <td>9:00AM</td>
              <td>John Doe</td>
              <td>Annual check-up</td>
            </tr>
            <tr>
              <td>10:30AM</td>
              <td>John Smith</td>
              <td>Follow up</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
