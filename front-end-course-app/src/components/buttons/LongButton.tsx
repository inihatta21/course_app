import { cn } from "../../lib/util";

function LongButton({ name}: { name: string}) {
    return (
        <>
            <button type="submit" className={cn(
                // style width height
                "w-[368px] h-[48px]",

                // style cursor & font
                "cursor-pointer font-bold",

                // style color
                "bg-(--primary-color) text-(--white-color)",
                " hover:bg-(--white-color) hover:text-(--primary-color) hover:border hover:border-(--primary-color)",

                // radius style
                "rounded-[100px]"

            )}>{name}</button>
        </>
    )
}

export default LongButton;