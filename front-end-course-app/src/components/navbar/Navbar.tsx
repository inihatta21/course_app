import { cn } from "../../lib/util";
import Menu from "../../assets/icons/menu.svg"
import { useState } from "react";
import SideMenu from './sideMenu/SideMenu';
import MobileMenuLogin from "../menu/MobileMenuLogin";
import Profile from "../../assets/profile.jpg"

function Navbar({ isLogin }: { isLogin: boolean }) {
    const [overlayMenu, setOverlayMenu] = useState<boolean>(false)

    function closeMenu() {
        setOverlayMenu(false)
    }

    return (
        <>
            <nav className={cn(
                // padding
                "p-[25px]",

                // shadow
                "shadow-md",

                // width
                "w-full"
            )}>
                <section className={cn(
                    // style display
                    "flex justify-between items-center"
                )}>
                    <h1 className={cn(
                        // style color
                        "text-(--primary-color)",

                        //style font
                        "font-bold"

                    )}>PINTAR</h1>
                    <img onClick={() => setOverlayMenu(true)} src={Menu} className="cursor-pointer" />
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