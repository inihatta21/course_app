import InputText from "../../input/InputText";
import EmailIcon from "../../../assets/icons/email.png"
import PasswordIcon from "../../../assets/icons/password.png"
import LongButton from "../../buttons/LongButton";
import { cn } from "../../../lib/util";

function LoginForm() {
    return (
        <form className={cn(
            // display
            "flex flex-col gap-[12px]"
        )}>
        <InputText name="email" placeholder="Email" type="email" icon={EmailIcon} />
        <InputText name="password" placeholder="Password" type="password" icon={PasswordIcon} />
        <LongButton name="Login" />
        </form>
    )
}

export default LoginForm;