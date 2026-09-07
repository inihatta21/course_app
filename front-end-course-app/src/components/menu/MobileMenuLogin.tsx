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

function MobileMenuLogin({ profile, user }: { profile: string, user: string }) {
    return (
        <section className={cn(
            // background
            "bg-(--primary-color) h-screen",
            // display
            "p-[25px] flex flex-col gap-[52px]"
        )}>
            <section className="flex justify-end">
                <img className="cursor-pointer" src={XIcon} />
            </section>
            <section className="flex flex-col gap-[20px] items-center">
                    <MenuMobileProfile profile={profile} user={user} />
                    <MenuMobileLink link={link} />
            </section>
        </section>
    )
}

export default MobileMenuLogin