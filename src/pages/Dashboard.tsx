import React from "react";
import { Outlet } from "react-router-dom";

export const Dashboard: React.FC = () => {
  return (
    <div>
      <div className="bg-blue-600 text-white font-bold p-4 w-52 h-screen">
        <h1 className="py-4">Bayer Health</h1>
        <ul className="text-sm">
          <li>Dashboard</li>
          <li>Patient List</li>
          <li>Appointments</li>
          <li>Messages</li>
          <li>Logout</li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
