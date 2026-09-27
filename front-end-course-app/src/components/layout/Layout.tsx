import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import { cn } from "../../lib/util";

function Layout() {

    return (
        <section className="flex flex-col min-h-screen">
            <section className={cn(
                "fixed z-20",

                // padding
                "px-[25px] py-[17px] md:px-[45px] lg:px-[90px]",

                // width
                "w-screen",

            )}>
                <Navbar isLogin={true} />
            </section>

            <section className={cn(
                "flex-1 pt-[98px] md:pt-[110px] lg:pt-[184px] pb-[60px]"
            )}>
                <Outlet />
            </section>

            <section>
                <Footer />
            </section>
        </section>
    )
}

export default Layout;