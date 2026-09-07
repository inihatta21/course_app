import { cn } from "../../lib/util";

export function CardCategorieTitle({ title }: { title: string }) {
    return (
        <h1 className={cn(
            // color
            "text-(--primary-color) text-center",

            // font
            "font-bold capitalize"

        )}>{title}</h1>
    )
}

export function CardCategorieDesc({ desc }: { desc: string }) {
    return (
        <p className={cn(
            // color
            "text-(--muted-color)",

            // font
            "text-[12px]"
        )}>{desc}</p>
    )
}