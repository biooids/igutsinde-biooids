import { Outlet } from "react-router-dom";
import HeaderComp from "./HeaderComp";
import FooterComp from "./FooterComp";

function MainLayout() {
  return (
    <div>
      <HeaderComp />
      <Outlet />
      <FooterComp />
    </div>
  );
}

export default MainLayout;
