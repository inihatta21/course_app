import { Link } from "react-router-dom"
import { cn } from "../../lib/util"
import ButtonNavigate from "../buttons/ButtonNavigate"

export function NavbarListMenu() {
    return (
        <ul className={cn(
            // display
            "flex gap-[50px] items-center"
        )}>
            <Link to={"/"}>Home</Link>
            <Link to={"/course"}>Course</Link>
            <Link to={"/"}>About</Link>
        </ul>
    )
}

export function NavbarButton() {
    return (
        <section className={cn(
            // display
            "flex gap-[15px] items-center"
        )}>
            <ButtonNavigate name="Login" navigate="/login" />
            <ButtonNavigate name="Register" navigate="/register" />
        </section>
    )
}

export function NavbarProfileUser({ profile, firstName, lastName }:
    { profile: string, firstName: string, lastName: string }) {
        return (
            <section className={cn(
                // display 
                "flex gap-[15px] items-center"
            )}>
                <img src={profile} className={cn(
                    // width & height
                    "h-[50px] w-[50px]",

                    // rounded
                    "rounded-full"
                )} />
                <p className="capitalize font-bold">{firstName} {lastName}</p>
            </section>
        )
    }