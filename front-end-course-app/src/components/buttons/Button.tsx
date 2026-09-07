import { cn } from "../../lib/util";

function Button({ name, eventButton }: { name: string,
     eventButton?: () => void }) {
    return (
        <button className={cn(
                        // style padding
                        "px-[25px] py-[15px]",
        
                        // style cursor
                        "cursor-pointer",
        
                        // style color
                        "bg-(--primary-color) text-(--white-color)",
                        " hover:bg-(--white-color) hover:text-(--primary-color) hover:border hover:border-(--primary-color)",
        
                        // style font
                        "font-(--inter-font) font-bold",
        
                        // radius style
                        "rounded-full"
                    )} onClick={eventButton} >{name}</button>
    )
}

export default Button;