import { cn } from "../../../lib/util"
import LongButton from "../../buttons/LongButton"
import InputText from "../../input/InputText"
import EmailIcon from "../../../assets/icons/email.png"
import PasswordIcon from "../../../assets/icons/password.png"
import UserIcon from "../../../assets/icons/user.png"

function RegisterForm() {
    return (
        <form className={cn(
            // display
            "flex flex-col gap-[12px] items-center"
        )}>
            <section className={cn(
                // display
                "flex flex-col gap-[12px] items-center",
                "md:grid md:grid-flow-col md:grid-rows-2 md:gap-2",
                "lg:flex"
            )}>
                <InputText name="email" placeholder="First Name" type="text" icon={UserIcon} />
                <InputText name="email" placeholder="Last Name" type="text" icon={UserIcon} />
                <InputText name="email" placeholder="Email" type="email" icon={EmailIcon} />
                <InputText name="password" placeholder="Password" type="password" icon={PasswordIcon} />
            </section>
            <LongButton name="Register" />
        </form>
    )
}

export default RegisterForm