import { LoginImage, LoginLink, LoginTitle } from "../components/contents/login/LoginCompound";
import LoginForm from "../components/contents/login/LoginForm";
import LoginImg from "../assets/login.png"
import { cn } from "../lib/util";

function Login() {
    return (
        <section className={cn(
            // text
            "flex flex-col gap-[25px] items-center"
        )} >
            <section className={cn(
                // text
                "flex flex-col gap-[15px]"
            )}>
                <LoginImage image={LoginImg} />
                <LoginTitle title="Login" subtitle="Selamat datang kembali" />
            </section>
            <section className={cn(
                // display
                "flex flex-col gap-[10px]"
            )}>
                <LoginForm />
                <LoginLink title="Belum punya akun ?" link="register" navigate="/register" />
            </section>
        </section>
    )
}

export default Login;