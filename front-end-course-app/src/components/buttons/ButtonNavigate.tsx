import { useNavigate } from "react-router-dom";
import { cn } from "../../lib/util";

function ButtonNavigate({ name, type, navigate }: { name: string, type?: string, navigate: string }) {

    const navigation = useNavigate()

    const typeButton: string | undefined = type;

    if(typeButton === "light") {
        return (
            <button className={cn(
                // style padding
                "px-[25px] py-[15px] ",

                // style cursor
                "cursor-pointer",

                // style color
                "bg-(--white-color) text-(--primary-color)",
                " hover:bg-(--primary-color) hover:text-(--white-color) hover:border hover:border-(--white-color)",

                // style font
                "font-(--inter-font) font-bold",

                // radius style
                "rounded-[3px]"
            )} onClick={() => navigation(navigate)}> {name} </button>
        )
    }

    return (
        <>
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
                "rounded-[3px]"
            )} onClick={() => navigation(navigate)} > {name} </button>
        </>
    )
}

export default ButtonNavigate;