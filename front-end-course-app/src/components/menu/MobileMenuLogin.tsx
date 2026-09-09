import XIcon from "../../assets/icons/x.svg"
import { cn } from "../../lib/util"
import { MenuMobileLink, MenuMobileProfile, type MenuLinkType } from "./MobileMenuCompound"

const link: MenuLinkType[] = [{
    name: "Home",
    navigate: "/",
},
{
    name: "Course",
    navigate: "/course",
},
{
    name: "About",
    navigate: "/about",
}]

function MobileMenuLogin({ profile, user, isOpen, isClose }
    : {
        profile: string, user: string, isOpen: boolean,
        isClose: () => void
    }) {
    return (
        <section className={cn(
            // background
            "bg-(--primary-color) h-full w-full",
            // display
            "p-[25px] flex flex-col gap-[52px]",
            "md:px-[75px] md:gap-[65px]",

            // position
            "fixed right-0 top-0 z-20",
            // transition
            // transisi
            "transition-transform duration-300 ease-in-out",
            isOpen ? "translate-x-0" : "translate-x-full",
        )}>
            <section className="flex justify-end">
                <img onClick={isClose} className="cursor-pointer" src={XIcon} />
            </section>
            <section className="flex flex-col gap-[20px] items-center">
                <MenuMobileProfile profile={profile} user={user} />
                <MenuMobileLink link={link} />
            </section>
        </section>
    )
}

export default MobileMenuLogin