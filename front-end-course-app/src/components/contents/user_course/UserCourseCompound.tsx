import { Link } from "react-router-dom"
import { cn } from "../../../lib/util"
import NavIcon from "../../../assets/icons/chevron-right.svg"
import TitleNotFound from "../../title/TitleNotFound"

export type UserCourseListType = {
    title: string,
    id_course: number
}

export function UserCourseProduct({ title, id_course }:
    { title: string, id_course: number }) {
    return (
        <section className={cn(
            // display
            "flex justify-between"
        )}>
            <Link className={cn(
                // font
                "capitalize font-bold text-(--primary-color)",
            )}
                to={`/course/${id_course}`}>{title}</Link>
            <img src={NavIcon} className={cn(
                // width & height
                "w-[24px] h-[24px] object-cover"
            )} />
        </section>
    )
}

export function UserCourseListCourse({ data }: { data: UserCourseListType[] }) {
    return (
        <section className={cn(
            // display
            "flex flex-col gap-[30px]"
        )}>
            {data.length ?
                data.map((data, index) => {
                    return (
                        <UserCourseProduct key={index} title={data.title}
                            id_course={data.id_course} />
                    )
                })
             : <TitleNotFound title="Tidak Ada Course" />}
        </section>
    )
}