import { cn } from "../../lib/util";

function Title({ title }: { title: string }) {
    return (
        <h1 className={cn(
            // style font
            "text-(--secondary-color) capitalize ",
            "text-[25px] font-bold",
            "lg:text-[30px]"
        )}>{title}</h1>
    )
}

export default Title