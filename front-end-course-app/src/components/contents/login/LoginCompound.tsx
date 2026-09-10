import { cn } from "../../../lib/util"
import Title from '../../title/Title';
import { Link } from "react-router-dom"

export function LoginImage({ image }: { image: string }) {
    return (
        <img src={image} className={cn(
            // width & height
            "w-full h-[334px] object-cover",
            "md:h-[656px]",
            "lg:w-[440px] lg:h-[644px]",

            // rounded
            "rounded-b-[50px]",
            "md:rounded-b-[100px]",
            "lg:rounded-[100px]"
        )} />
    )
}

export function LoginTitle({ title, subtitle }: { title: string, subtitle: string }) {
    return (
        <section className={cn(
            // text
            "text-center"
        )}>
            <Title title={title} />
            <p className="text-(--muted-color) ">{subtitle}</p>
        </section>
    )
}

export function LoginLink({ title, link, navigate }: {
    title: string,
    link: string, navigate: string
}) {
    return (
        <p className={cn(
            // text
            "text-center"
        )}>{title}<Link to={navigate} className={cn(
            // bold
            "font-bold capitalize"
        )}
        >{link}</Link></p>
    )
}
