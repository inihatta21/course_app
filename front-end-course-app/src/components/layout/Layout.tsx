import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

function Layout() {

    return (
        <section className="flex flex-col min-h-screen">
            <section>
                <Navbar isLogin={false} />
            </section>

            <section className="flex-1 pt-[75px] lg:pt-[110px]">
                <Outlet />
            </section>

            <section>
                <Footer />
            </section>
        </section>
    )
}

export default Layout;