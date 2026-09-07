import { Link } from "react-router-dom"
import { cn } from "../../lib/util"

export type MenuLinkType = {
    name: string,
    navigate: string
}

export function MenuMobileLink({link} :{link: MenuLinkType[]}) {
    return (
        <section className={cn(
            // display
            "flex flex-col gap-[20px] justify-center items-center"
        )}>
            {link.map((data, index) => {
                return (
                    <Link key={index} to={data.navigate} className={cn(
                        // text
                        "text-(--white-color) capitalize font-bold text-[15px]"
                    )} >{data.name}</Link>
                )
            })}
        </section>
    )
}

export function MenuMobileProfile({profile, user}: {profile: string, user: string}) {
    return (
        <section className="flex flex-col gap-[5px] items-center">
            <img src={profile} className={cn(
                // width & height, rounded
                "w-[80px] h-[80px] rounded-full"
            )} />
            <p className="text-(--white-color) capitalize">{user}</p>
        </section>
    )
}