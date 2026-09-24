import { cn } from "../../lib/util";

function Title({ title }: { title: string }) {
    return (
        <h1 className={cn(
            // style font
            "text-(--secondary-color) capitalize ",
            "text-[25px] font-bold",
            "md:text-[30px]",
            "lg:text-[48px] ",
        )}>{title}</h1>
    )
}

export default Title