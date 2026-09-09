import { cn } from '../../../lib/util';
import SideMenuLink from "./SideMenuLink";
import SideMenuButton from './SideMenuButton';
import x from "../../../assets/icons/x.svg"

function SideMenu({ isClose, isOpen }: { isClose: any, isOpen: boolean }) {

    return (
        <>
            <section className={cn(
                // color style
                "bg-(--primary-color)",

                // padding & margin, shadow
                "p-[25px]",
                "md:p-[75px]",

                // display style & position
                "flex flex-col gap-[15px] fixed z-20 top-0 right-0",
                "md:gap-[65px]",

                // width & height style
                "w-full h-full",

                // transisi
                "transition-transform duration-300 ease-in-out",
                isOpen ? "translate-x-0" : "translate-x-full",

            )}>
                <section className={cn(
                    // display style
                    "flex justify-end"
                )}>
                    <img onClick={isClose} src={x} className='cursor-pointer' />
                </section>
                <section className={cn(
                    // display style
                    "flex flex-col gap-[25px] justify-center items-center",
                    "md:gap-[40px]"
                )}>
                    <section>
                        <SideMenuLink />
                    </section>
                    <section>
                        <SideMenuButton />
                    </section>
                </section>
            </section>
        </>
    )
}

export default SideMenu;