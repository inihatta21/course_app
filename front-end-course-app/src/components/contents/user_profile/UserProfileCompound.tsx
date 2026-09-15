import { cn } from "../../../lib/util";
import ChevDown from "../../../assets/icons/chevron-down.svg"
import UserIcon from "../../../assets/icons/user.png"
import EmailIcon from "../../../assets/icons/email.png"
import KeyIcon from "../../../assets/icons/password.png"
import InputText from "../../input/InputText";
import { useState } from "react";
import Button from "../../buttons/Button";
import LongButton from "../../buttons/LongButton";

export function UserProfileBio({ profile, name, email }
    : { profile: string, name: string, email: string }
) {
    return (
        <section className={cn(
            // display
            "flex gap-[15px] items-center"
        )}>
            <img src={profile} className={cn(
                // width & height
                "w-[133px] h-[133px]",
                "md:w-[215px] md:h-[215px]",

                // rounded
                "rounded-full border-2 border-(--primary-color)"
            )} />
            <section>
                <p className={cn(
                    // font
                    "text-(--primary-color) font-bold capitalize",
                    "md:text-[24px]"
                )}>{name}</p>
                <p className={cn(
                    // font
                    "text-(--muted-color)",
                    "md:text-[24px]"
                )}>{email}</p>
            </section>
        </section>
    )
}

export function UserProfileInput({ icon, label, name, placeholder, type, value }:
    {
        icon: string, label: string, name: string,
        placeholder: string, type: string, value?: string
    }
) {

    const [isOpenInput, setIsOpenInput] = useState<boolean>(false)

    function handleOpenInput() {
        if (isOpenInput) {
            setIsOpenInput(false)
        } else {
            setIsOpenInput(true)
        }
    }

    return (
        <section className={cn(
            // display
            "flex flex-col gap-[15px]"
        )}>
            <section onClick={handleOpenInput} className={cn(
                // display
                "flex justify-between",

                // cursor
                "cursor-pointer"
            )}>
                <section className={cn(
                    // display
                    "flex gap-[10px]"
                )}>
                    <img src={icon} className={cn(
                        // width & height
                        "w-[24px] h-[24px]"
                    )} />
                    <p className={cn(
                        // font
                        "font-bold text-(--primary-color)"
                    )}>{label}</p>
                </section>
                <img src={ChevDown} className={cn(
                    // width & height
                    "h-[24px] w-[24px]",

                    // transision & rotate
                    "transition-transform duration-300 ease-in-out",
                    isOpenInput ? "rotate-180" : "rotate-0"
                )} />
            </section>
            <section className={cn(
                "w-full overflow-hidden transition-all duration-300 ease-in-out",
                isOpenInput ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
            )}>
                <InputText name={name}
                    placeholder={placeholder}
                    type={type} icon={icon} value={value} />
            </section>
        </section >
    )
}

export function UserProfileForm() {
    return (
        <form className={cn(
            // display
            "flex flex-col gap-[25px]",
            "md:grid md:grid-cols-2 md:gap-[40px]",
            "lg:max-w-[750px]"
        )}>
            <UserProfileInput icon={UserIcon} label="First Name"
                name="firstname" placeholder="First Name" type="text"
            />
            <UserProfileInput icon={UserIcon} label="Last Name"
                name="lastname" placeholder="Last Name" type="text"
            />
            <UserProfileInput icon={EmailIcon} label="Email"
                name="email" placeholder="Email" type="email"
            />
            <UserProfileInput icon={KeyIcon} label="Password"
                name="password" placeholder="Password" type="password"
            />
            <section>
                <button type="submit" className={cn(
                    // style width height
                    "py-[15px] w-full",
                    "md:col-span-2",

                    // style cursor & font
                    "cursor-pointer font-bold",

                    // style color
                    "bg-(--primary-color) text-(--white-color)",
                    " hover:bg-(--white-color) hover:text-(--primary-color) hover:border hover:border-(--primary-color)",

                    // radius style
                    "rounded-[100px]"

                )}>Save</button>
            </section>
        </form>
    )
}