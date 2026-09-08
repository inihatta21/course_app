import { useParams } from "react-router-dom"
import Title from "../components/title/Title"
import { cn } from "../lib/util"
import { UserCourseListCourse, type UserCourseListType } from "../components/contents/user_course/UserCourseCompound"

function UserCourse() {
    const { id_user } = useParams()

    const data: UserCourseListType[] = [{
        title: "Desain UI/UX Pemula",
        id_course: 1
    },{
        title: "Typescript Expert",
        id_course: 2
    },
    {
        title: "Bahasa Inggris Pemula",
        id_course: 3
    }
]


    return (
        <section className={cn(
            // display
            "flex flex-col gap-[25px]",

            // padding
            "p-[25px] "
        )}>
            <Title title="Course Saya" />
            <UserCourseListCourse data={data} />
        </section>
    )
}

export default UserCourse