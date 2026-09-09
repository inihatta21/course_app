import { cn } from "../../lib/util";

function TitleMedium({ title }: { title: string }) {
    return (
        <h1 className={cn(
            // style font
            "text-[20px] text-(--primary-color)",
            "capitalize font-bold ",
        "md:text-[24px]")} >{title}</h1 >)
}

export default TitleMedium;