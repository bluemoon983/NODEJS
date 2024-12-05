import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
    <>
    <h2>Nwitter Reloaded</h2>
        <Outlet />
    </>
    )
}