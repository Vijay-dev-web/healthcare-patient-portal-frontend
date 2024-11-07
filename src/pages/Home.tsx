import { NavLink, Outlet } from "react-router-dom";
import Auth from "../components/Auth";

const Home = () => {
  return (
    <div>
      <Auth />
      <div className="bg-blue-600 text-white py-8 text-center font-bold text-xl">
        Buyer Healthcare
      </div>
      <div className=" bg-green-600 text-white flex justify-center gap-4 font-bold text-sm py-2 text-white">
        <NavLink to="/" className={({isActive}) => isActive ? 'underline text-white' : 'text-white'}>Home</NavLink>
        <NavLink to="/health-topics" className={({isActive}) => isActive ? 'underline text-white' : 'text-white'}>Health Topics</NavLink>
        <a href="#" className="text-white">Resources</a>
        <a href="#" className="text-white">About Us</a>
        <a href="#" className="text-white">Contact</a>
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
