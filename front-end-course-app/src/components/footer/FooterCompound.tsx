import { Link } from "react-router-dom";
import { cn } from "../../lib/util";

type FooterSocialMedia = {
    name: string,
    icon: string
}[];

export function FooterTitle() {
    return (
        <h1 className={cn(
            // font
            "uppercase font-bold text-[20px] text-(--white-color) text-center"
        )}>join class now!</h1>
    )
}

export function FooterIcon({ name, icon }: { name: string, icon: string }) {
    return (
        <section className={cn(
            // display style
            "flex flex-col items-center"
        )} >
            <img src={icon} className={cn(
                // width & height
                "w-[24px] h-[24px]  "
            )} />
            <p className={cn(
                // font style
                "font-bold text-(--white-color) capitalize"
            )}>{name}</p>
        </section>
    )
}

export function FooterSocialMedia({ data }: { data: FooterSocialMedia }) {
    return (
        <section className={cn(
            // display
            "flex gap-[25px] justify-center"
        )}>
            {data.map((data, index) => {
                return (
                    <FooterIcon key={index} name={data.name} icon={data.icon} />
                )
            })}
        </section>
    )
}

export function FooterMenu() {
    return (
        <section className={cn(
            // display
            "flex flex-col gap-[10px]",

            // text
            " text-(--white-color)"
        )}>
            <h1 className={cn(
                // font style
                "text-[15px] font-bold"
            )}>Menu</h1>
            <ul className={cn(
                // display
                "flex flex-col gap-[8px]",

                // font style
                "text-[10px]"
            )}>
                <Link to="/">Home</Link>
                <Link to="/">Course</Link>
                <Link to="/">About</Link>
            </ul>
        </section>
    )
}

export function FooterDetailContact({ nomer, email }: { nomer: string, email: string }) {
    return (
        <section className={cn(
            // display
            "flex flex-col gap-[10px] ",

            // text
            " text-(--white-color)"
        )}>
            <h1 className={cn(
                // font style
                "text-[15px] font-bold"
            )}>Detail Contact</h1>
            <ul className={cn(
                // display
                "flex flex-col gap-[8px]",

                // font style
                "text-[10px]"
            )}>
                <p>{nomer}</p>
                <p>{email}</p>
            </ul>
        </section>
    )
}

export function FooterLogo() {
    return (
        <section className="text-(--white-color)">
            <h1 className={cn(
                // font
                "text-[20px] font-bold"
            )}>Pintar</h1>
            <p className={cn(
                // font
                "text-[7px]",
                "md:text-[15px]"
            )}>Privacy Policy | Terms & Condition</p>
        </section>
    )
}

export function FooterBottomCom({ nomer, email }: { nomer: string, email: string }) {
    return (
        <section className={cn(
            // display
            "flex gap-[40px] py-[8px] justify-between",
            "md:py-[35px] md:px-[52px]",
            "lg:px-[155px]",

            // border
            "border-y border-(--white-color)",
            "md:border-y-2",        )}>
            <section className={cn(
                // display
                "flex items-center"
            )}>
                <FooterLogo />
            </section>
            <section className={cn(
                // display
                "flex gap-[21px] "
            )}>
                <FooterMenu />
                <FooterDetailContact nomer={nomer} email={email} />
            </section>
        </section>
    )
}