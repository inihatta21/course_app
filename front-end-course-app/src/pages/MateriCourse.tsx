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
            "flex flex-col lg:flex-row w-full min-h-full gap-[25px] lg:gap-[0px]",
            "lg:max-h-screen",
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
            <section className={cn("px-[25px] md:px-[50px] lg:hidden",)}>
                <section className={cn("p-[11px] w-[45px]", "shadow-md", "rounded-full")}>
                <img
                    onClick={() => setIsOpenMenu(true)}
                    src={ListIcon}
                    className={cn("h-[24px] w-[24px] cursor-pointer")}
                    alt="Open Menu"
                />
                </section>
            </section>

            {/* Main Content Area */}
            <main className={cn(
                "w-full",
                "px-[25px] md:px-[45px]",
                "lg:px-[90px]",
                "lg:ms-[330px]",
                "lg:mt-[40px]",
                "flex flex-col gap-[25px]",
                "lg:max-w-[1000px]"
            )}>
                <Title title="Prinsip Design UI" />
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