import { cn } from "../../../lib/util";

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
