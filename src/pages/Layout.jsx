import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <h2>Hello</h2>
            <Outlet />
        </div>
    );
};

export default Layout;