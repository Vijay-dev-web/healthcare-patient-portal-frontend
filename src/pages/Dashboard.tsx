import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

export const Dashboard: React.FC = () => {
  return (
    <div className="flex">
      <div className="bg-blue-600 text-white font-bold p-4 w-64 h-screen">
        <h1 className="py-4 text-lg">Bayer Health</h1>
        <ul className="text-sm">
          <NavLink to="/dashboard/appointments" className={({isActive}) => isActive ? 'underline text-white' : 'text-white'}>Dashboard</NavLink> <br/>
          <NavLink to="/dashboard/book" className={({isActive}) => isActive ? 'underline text-white' : 'text-white'}>Book an Appointment</NavLink>
          <li><Link to="/" className="text-white">Logout</Link></li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
