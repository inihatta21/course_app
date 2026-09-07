import { cn } from "../../lib/util";

function Title({ title }: { title: string }) {
    return (
        <h1 className={cn(
            // style font
            "text-[20px] text-(--primary-color) capitalize font-bold "
        )}>{title}</h1>
    )
}

export default Title