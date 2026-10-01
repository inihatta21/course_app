import { cn } from "../../lib/util";
import {
  MateriCourseMenu,
  type MateriCourseMenuType,
} from "../contents/materi_course/MateriCourseCompound";
import { DashboardSidebar } from "./DashboardSidebar";
import NavbarSide from "./NavbarSide";

function DashboardWithAside({
  isOpen,
  isClose,
  isLogin,
}: {
  isOpen: boolean;
  isLogin: boolean;
  isClose: () => void;
}) {
  
  return (
    <section className={cn("fixed w-screen", "flex lg:gap-[80px]")}>
      {/* sidebar */}
      <aside>
       <DashboardSidebar isOpen={isOpen} isClose={isClose} />
      </aside>

      {/* navbar */}
      <section
        className={cn(
          "w-screen",
          "lg:pe-[80px] xl:pe-[130px]",
          "p-[25px] md:p-[45px] lg:p-[0px]",
          "lg:p-[25px]",
        )}
      >
        <NavbarSide isLogin={isLogin} />
      </section>
    </section>
  );
}

export default DashboardWithAside;
