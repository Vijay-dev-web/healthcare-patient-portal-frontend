import React from 'react'
import { Outlet } from 'react-router-dom'

export const Dashboard:React.FC = () => {
  return (
    <div>
        <div>
            <h1>Bayer Health</h1>
            <nav>Dashboard</nav>
            <nav>Patient List</nav>
            <nav>Appointments</nav>
            <nav>Messages</nav>
            <nav>Logout</nav>
        </div>
        <Outlet/>
    </div>
  )
}