import { useParams } from "react-router-dom"
import { MateriCourseMenu, MateriCourseVideo } from "../components/contents/materi_course/MateriCourseCompound"
import ListIcon from "../assets/icons/list.png"
import { cn } from "../lib/util"
import { useState } from "react"
import Title from "../components/title/Title"

type MateriCourseIdType = {
    id_course: number,
    id_materi: number,
    materi: string
}

function MateriCourse() {
    const { course_id, materi_id } = useParams()
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)
    const video: string = "https://stream.mux.com/ydDIL98zL48ye8jzCw9wokKPg02tPL00vWTIWICcFvFHI.m3u8"

    const prev: number = parseInt(materi_id as string) < 1 ? 0 : parseInt(materi_id as string) - 1
    const next: number = parseInt(materi_id as string) >= 3 ? 3 : parseInt(materi_id as string) + 1

    const data: MateriCourseIdType[] = [
        {
            id_materi: 1,
            id_course: 1,
            materi: "Prinsip Dasar UI/UX",
        },
        {
            id_materi: 3,
            id_course: 3,
            materi: "Design Thinking Framework"
        },
    ]

    return (
        <section className={cn(
            // Di Mobile: Flex Column | Di Desktop: Flex Row (Menyejajarkan Sidebar & Content)
            "flex flex-col lg:flex-row w-full min-h-full",
            "lg:px-[300px] lg:max-h-screen",
            "2xl:px-[370px]"
        )}>
            <section className="lg:hidden">
                {/* Sidebar Menu Component */}
                <MateriCourseMenu
                    data={data}
                    isOpen={isOpenMenu}
                    isClose={() => setIsOpenMenu(false)}
                />
            </section>

            {/* Toggle Button Khusus Mobile/Tablet */}
            <section className="p-[25px] md:px-[50px] lg:hidden">
                <img
                    onClick={() => setIsOpenMenu(true)}
                    src={ListIcon}
                    className="h-[24px] w-[24px] cursor-pointer"
                    alt="Open Menu"
                />
            </section>

            {/* Main Content Area */}
            <main className={cn(
                "flex-1 flex flex-col gap-[20px]",
                "p-[25px] md:px-[50px] md:py-[30px]",
                "lg:px-[60px] lg:py-[40px]"
            )}>
                <Title title="Design Thinking Framework" />
                <MateriCourseVideo
                    video={video}
                    prev={`/course/${course_id}/${prev}`}
                    next={`/course/${course_id}/${next}`}
                />
            </main>
        </section>
    )
}

export default MateriCourse