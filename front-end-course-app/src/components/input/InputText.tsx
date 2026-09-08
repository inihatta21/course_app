import { cn } from "../../lib/util";

type InputType = {
    name: string,
    placeholder: string,
    type: string,
    icon: string,
    value?: string
}

function InputText({name, placeholder, type, icon, value}: InputType) {
    return (
        <>
        <section className={cn(
            // display style & position
            "flex gap-[12px] relative"
        )}>
            <section className={cn(
                // position
                "absolute flex items-center h-full left-[24px]"
            )}>
            <img src={icon} className={cn(
               // height, weight
               "h-[20px] w-[20px]",
            )} />
            </section>
        <input className={cn(
            // style border & radius
            "border-2 rounded-full border-(--primary-color) ",

            // padding & height, width
            "h-[48px] w-[362px] ps-[52px] "
        )} name={name} id={name} placeholder={placeholder} type={type} value={value} />
        </section>
        </>
    )
}

export default InputText;