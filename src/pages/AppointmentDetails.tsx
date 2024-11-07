import axios from 'axios'
import React, { useEffect } from 'react'

export const AppointmentDetails: React.FC = () => {
    useEffect(() => {
        axios.get("http://10.137.199.32:3003/api/appoinments/1/3").then((res) => console.log(res.data))
    }, [])

  return (
    <div>
        Appointment Details
    </div>
  )
}