import { cn } from "../../lib/util"

function TitleNotFound({ title }: { title: string }) { 
    return (
        <h1 className={cn(
            // font
            "text-(--muted-color) font-bold capitalize",
            "text-[25px]"
        )}>{title}</h1>
    )
}

export default TitleNotFound