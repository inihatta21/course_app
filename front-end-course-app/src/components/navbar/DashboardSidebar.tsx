import { cn } from "../../lib/util";
import XIcon from "../../assets/icons/x.svg";
import { Link } from "react-router-dom";
import UserIcon from "../../assets/icons/user.png";

export function DashboardSidebar({
  isOpen,
  isClose,
}: {
  isOpen: boolean;
  isClose?: () => void;
}) {
  return (
    <aside
      className={cn(
        // Base Background & Spacing
        "bg-(--primary-color) flex flex-col gap-[25px]",

        // Mobile & Tablet: Tetap Fixed Slide-over Drawer
        "fixed top-0 right-0 h-full w-full z-30 p-[25px] md:p-[50px]",
        "transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-full",

        "overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",

        // Desktop (lg): Posisi normal (Static/Relative) di sebelah kiri konten, mengikuti tinggi konten
        "lg:static lg:translate-x-0 lg:z-auto",
        "lg:w-[300px] lg:min-w-[315px] lg:p-[40px] lg:h-screen lg:min-h-full",
      )}
    >
      {/* Mobile Close Button */}
      <section className="flex justify-end lg:hidden">
        <img
          onClick={isClose}
          className="cursor-pointer"
          src={XIcon}
          alt="Close Menu"
        />
      </section>

      <section className="flex flex-col gap-[25px] md:gap-[30px] lg:pt-[30px]">
        <h1 className="font-bold text-(--white-color) text-[22px] md:text-[28px]">
          Dashboard
        </h1>

        <section className="flex flex-col gap-[20px] md:gap-[25px]">
          <section className={cn("flex items-center gap-[15px]")}>
            <img
              src={UserIcon}
              className={cn(
                // width & height
                "w-[24px] h-[24px]",
              )}
            />
            <Link
              className={cn("font-bold", "text-(--white-color)")}
              to={`/dashboard/${""}/profile`}
            >
              Profile
            </Link>
          </section>
          <section className={cn("flex items-center gap-[15px]")}>
            <img
              src={UserIcon}
              className={cn(
                // width & height
                "w-[24px] h-[24px]",
              )}
            />
            <Link
              className={cn("font-bold", "text-(--white-color)")}
              to={`/dashboard/${""}/course`}
            >
              Kursus Saya
            </Link>
          </section>
        </section>
      </section>
    </aside>
  );
}
