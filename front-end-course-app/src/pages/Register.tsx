import { LoginImage, LoginLink, LoginTitle } from "../components/contents/login/LoginCompound";
import { cn } from "../lib/util";
import RegisterImg from "../assets/register.png"
import RegisterForm from "../components/contents/register/RegisterForm";

function Register() {
    return (
        <section className={cn(
            // display
            "flex flex-col items-center gap-[25px] pb-[100px]",
            "lg:flex-row lg:justify-center lg:h-screen lg:pb-[0px]"
        )}>
            <section>
                <LoginImage image={RegisterImg} />
            </section>
            <section className={cn(
                // display
                "flex flex-col items-center gap-[25px]",
            )}>
                <section className={cn(
                    // display
                    "px-[50px]"
                )}>
                    <LoginTitle title="register"
                        subtitle="Hello! selamat datang di course app.
                Sudah siap upgrade skill baru?" />
                </section>
                <section>
                    <RegisterForm />
                </section>
                <section>
                    <LoginLink title="Sudah punya akun ? " link="login" navigate="/login" />
                </section>
            </section>
        </section>
    )
}

export default Register;