import { cn } from "../../../lib/util";
import Button from "../../buttons/ButtonNavigate";

function SideMenuButton() {
    return (
        <>
        <section className={cn(
            // style display
            "flex gap-[15px]"
        )}>
            <Button name="Login" type="light" navigate="/login" />
            <Button name="Register" type="light" navigate="/register" />
        </section>
        </>
    )
}

export default SideMenuButton;