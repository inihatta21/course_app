import { cn } from "../../lib/util"

export function CardProductTitle({ title }: { title: string }) {

    // filter title karakter
    const titleArray: string[] = title.split(" ")
    const isTruncated: boolean = titleArray.length > 10
    const newTitle: string = isTruncated ?
        titleArray.slice(0, 10).join(" ") + "...." : title;

    return (
        <>
            <p className={cn(
                // style text
                "text-(--primary-color) font-bold text-[15px] capitalize text-ellipsis"
            )}>{newTitle}</p>
        </>
    )
}

export function CardProductDescProfile({ profile, mentor }: { profile: string, mentor: string }) {
    return (
        <>
            <section className={cn(
                // display style
                "flex gap-[10px] items-center "
            )}>
                <img className={cn(
                    // style width & height
                    "w-[20px] h-[20px]",

                    // style rounded
                    "rounded-full"
                )} src={profile} />
                <p className={cn(
                    // style text
                    "text-(--muted-color) text-[10px] capitalize"
                )} >{mentor}</p>
            </section>
        </>
    )
}

export function CardCategorie({ name }: { name: string }) {
    return (
        <>
            <p className={cn(
                // text style
                "text-center text-(--white-color) text-[9px]",
                // bg style
                " bg-(--primary-color)",

                // display & padding, margin
                "inline-flex justify-center items-center px-[5px]",

                // radius style
                "rounded-full"
            )}>{name}</p>
        </>
    )
}

export function CardProductImage({ image }: { image: string }) {
    return (
        <>
            <img src={image} className={cn(
                // width & height
                "w-[73px] h-[80px]",

                // rounded
                "rounded-[5px]",

                // object fit
                "object-cover"
            )} />
        </>
    )
}

