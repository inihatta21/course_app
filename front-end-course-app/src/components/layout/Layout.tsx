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
                "px-[25px] py-[17px]",

                // width
                "w-full",

            )}>
                <Navbar isLogin={true} />
            </section>

            <section className="flex-1 pt-[98px] md:pt-[159px] lg:pt-[184px]">
                <Outlet />
            </section>

            <section>
                <Footer />
            </section>
        </section>
    )
}

export default Layout;