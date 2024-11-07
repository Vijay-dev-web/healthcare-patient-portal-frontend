import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updateAppointmentdetails } from "../store/overAllSlice"

export const AppointmentDetails: React.FC = () => {
  const dispatch = useDispatch();
    useEffect(() => {
        axios.get("http://10.137.199.32:3003/api/appoinments/1/3").then((res) => dispatch(updateAppointmentdetails(res.data)))
    }, [])

  return (
    <div>
        Appointment Details
    </div>
  )
}