import { Outlet } from "react-router";

function DashboardLayout() {
    return (
        <div>
            <h1>Dashboard</h1>
            <Outlet />
        </div>
    );
}

export default DashboardLayout;