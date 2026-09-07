import { useState } from "react";
import { cn } from "../../lib/util";

function ButtonKategori({ name,icon, iconHover }:
    { name: string, icon: string, iconHover: string }) {

    const [iconImg, setIconImg] = useState<string>(icon)

    return (
        <>
            <button onMouseEnter={() => setIconImg(iconHover)} 
            onMouseLeave={() => setIconImg(icon)}
            className={cn(
                // border & cursor & rounded
                "border-2 cursor-pointer",

                // color style
                "text-(--primary-color) bg-(--white-color) border-(--primary-color) rounded-full",
                "hover:text-(--white-color) hover:bg-(--primary-color)",

                // width & height
                "px-[20px] py-[8px]",

                // display style
                "flex items-center justify-center gap-[5px]"
            )}>
                <img src={iconImg} className="h-[20px] w-20px object-cover" />
                {name}
            </button>
        </>
    )
}

export default ButtonKategori;