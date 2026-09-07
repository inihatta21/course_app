import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

function Layout() {

    return (
        <section>
            <section>
                <Navbar />
            </section>

            <section>
                <Outlet />
            </section>

            <section>
                <Footer />
            </section>
        </section>
    )
}

export default Layout;