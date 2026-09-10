import { LoginImage, LoginLink, LoginTitle } from "../components/contents/login/LoginCompound";
import LoginForm from "../components/contents/login/LoginForm";
import LoginImg from "../assets/login.png"
import { cn } from "../lib/util";

function Login() {
    return (
        <section className={cn(
            // text
            "flex flex-col gap-[25px] items-center",
            "lg:flex-row lg:justify-center lg:gap-[150px] lg:h-screen",
        )} >
            <section className={cn(
            )}>
                <LoginImage image={LoginImg} />
            </section>
            <section className={cn(
                // display
                "flex flex-col gap-[10px]"
            )}>
                <LoginTitle title="Login" subtitle="Selamat datang kembali" />
                <LoginForm />
                <LoginLink title="Belum punya akun ?" link="register" navigate="/register" />
            </section>
        </section>
    )
}

export default Login;