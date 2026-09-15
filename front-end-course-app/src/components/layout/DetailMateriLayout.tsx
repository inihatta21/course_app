import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

function DetailMateriLayout() {

    return (
        <section className="flex flex-col min-h-screen">
            <section>
                <Navbar isLogin={true} />
            </section>

            <section className="flex-1 pt-[110px]">
                <Outlet />
            </section>
        </section>
    )
}

export default DetailMateriLayout;