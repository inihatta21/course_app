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