import { cn } from "../../lib/util";
import Menu from "../../assets/icons/menu.svg"
import { useState } from "react";
import SideMenu from './sideMenu/SideMenu';
import MobileMenuLogin from "../menu/MobileMenuLogin";
import Profile from "../../assets/profile.jpg"
import { NavbarButton, NavbarListMenu, NavbarProfileUser } from "./NavbarCompound";

function Navbar({ isLogin }: { isLogin: boolean }) {
    const [overlayMenu, setOverlayMenu] = useState<boolean>(false)

    function closeMenu() {
        setOverlayMenu(false)
    }

    return (
        <>
            <nav className={cn(
                // padding
                "py-[15px] px-[25px]",
                "lg:px-[90px] lg:py-[27px]",
                "bg-(--white-color)",

                // shadow
                "shadow-md",

                // rounded
                "rounded-full",

            )}>
                <section className={cn(
                    // style display
                    "flex justify-between items-center"
                )}>
                    <h1 className={cn(
                        // style color
                        "text-(--primary-color) ",
                        "lg:text-[24px]",

                        //style font
                        "font-bold"

                    )}>Pintar</h1>
                    <img onClick={() => setOverlayMenu(true)} src={Menu} className="cursor-pointer lg:hidden" />
                    <section className={cn(
                        // display
                        "hidden",
                        "lg:flex lg:gap-[50px]"
                    )}>
                        <NavbarListMenu />
                        {isLogin ? 
                        <NavbarProfileUser profile={Profile} lastName="Doe" firstName="Alex" />
                        : <NavbarButton />}
                    </section>
                </section>
            </nav>
            {isLogin ?
                <MobileMenuLogin isOpen={overlayMenu}
                    user="alex doe" profile={Profile} isClose={closeMenu} />
                : <SideMenu isClose={closeMenu}
                    isOpen={overlayMenu} />}
        </>
    )
}

export default Navbar;