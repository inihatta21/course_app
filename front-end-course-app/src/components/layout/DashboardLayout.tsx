import { Outlet } from "react-router-dom";
import { cn } from "../../lib/util";
import NavbarWithAside from "../navbar/NavbarWithAside";
import { data } from "../data/data";
import Navbar from "../navbar/Navbar";
import DashboardWithAside from "../navbar/DashboardWithAside";

function DashboardLayout() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className={cn("hidden", "lg:block")}>
        <DashboardWithAside isClose={() => {}} isLogin={true} isOpen />
      </section>
      <section
        className={cn(
          "fixed z-20",

          // padding
          "px-[25px] py-[17px] md:px-[45px] lg:px-[90px]",

          // width
          "w-screen",

          "lg:hidden"
        )}
      >
        <Navbar isLogin />
      </section>

      <section className="flex-1 pt-[110px]">
        <Outlet />
      </section>
    </section>
  );
}

export default DashboardLayout;