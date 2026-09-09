import { useNavigate } from "react-router-dom"
import { cn } from "../../../lib/util"
import ButtonKategori from "../../buttons/ButtonKategori"
import CardProduct from "../../card/CardProduct"

export type CourseCategorieType = {
    name: string,
    imageDark: string
    imageLight: string
}

export type ListCourseProductType = {
    id_course: number,
    course: string,
    imageCourse: string,
    mentor: string,
    profile: string,
    categorie: string[],
    price: number,
    materi: number
}

export function ListCourseCategorie({ categorie }:
    { categorie: CourseCategorieType[] }) {
    return (
        <section className={cn(
            // display
            "flex gap-[12px] overflow-x-scroll px-[25px]",
            "md:px-[75px]"
        )}>
            {categorie.map((data, index) => {
                return (
                    <ButtonKategori key={index} name={data.name}
                        icon={data.imageDark} iconHover={data.imageLight}
                    />
                )
            })}
        </section>
    )
}

export function ListCourseProduct({ product }:
    { product: ListCourseProductType[] }) {

    return (
        <section className={cn(
            // display
            "flex flex-col gap-[15px]",
        )}>
            {product.map((data, index) => {
                return (
                    <section>
                        <CardProduct key={index} titleProduct={data.course}
                            imageCourse={data.imageCourse} mentor={data.mentor}
                            profile={data.profile} categorie={data.categorie}
                            price={data.price} materi={data.materi} id_course={data.id_course}
                        />
                    </section>
                )
            })}
        </section>
    )
}