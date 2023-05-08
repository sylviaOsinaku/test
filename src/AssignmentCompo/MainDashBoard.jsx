import { Link, Outlet } from "react-router-dom";
import DashNav from "./DashNav";
function MainDashBoard() {
  return (
    <>
      <DashNav />
      <Outlet />
    </>
  );
}
export default MainDashBoard;
