import { Outlet } from "react-router-dom";
import Auth from "../components/Auth";

const Layout = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default Layout;