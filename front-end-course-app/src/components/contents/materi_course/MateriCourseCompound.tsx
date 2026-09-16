import { cn } from "../../../lib/util"
import XIcon from "../../../assets/icons/x.svg"
import { useNavigate } from "react-router-dom"
import CheckIcon from "../../../assets/icons/check.png"
import { useState } from "react"
import { DetailCourseVideoPlayer } from "../detail_course/DetailCourseCompound"
import ButtonSquare from "../../buttons/ButtonSquare"
import ButtonNavigate from "../../buttons/ButtonNavigate"

export type MateriCourseMenuType = {
    id_materi: number,
    id_course: number,
    materi: string,
}

export function MateriCourseCheck({ isCheck, eventClick }: { isCheck: boolean, eventClick: () => void }) {
    return (
        <section onClick={eventClick} className="flex-shrink-0">
            {isCheck ? (
                <img src={CheckIcon} className="w-[23px] h-[23px] rounded-full cursor-pointer" alt="Checked" />
            ) : (
                <section className="w-[23px] h-[23px] rounded-full bg-(--white-color) cursor-pointer" />
            )}
        </section>
    )
}

export function MateriCourseList({ id_course, id_materi, title }: { id_course: number, id_materi: number, title: string }) {
    const [isCheck, setIsCheck] = useState<boolean>(false)
    const navigation = useNavigate()

    function handleCheck() {
        setIsCheck(!isCheck)
    }

    return (
        <section className="flex gap-[15px] items-center">
            <MateriCourseCheck eventClick={handleCheck} isCheck={isCheck} />
            <section
                className="cursor-pointer"
                onClick={() => navigation(`/course/${id_course}/${id_materi}`)}
            >
                <p className="capitalize text-(--white-color) text-sm font-medium line-clamp-1">{title}</p>
            </section>
        </section>
    )
}

export function MateriCourseMenu({ data, isOpen, isClose }: {
    data: MateriCourseMenuType[],
    isOpen: boolean,
    isClose?: () => void
}) {

    function pressMateriTitle(title: string): string {

        const array: string[] = title.split(" ")
        const isTruncated: boolean = array.length > 3
        const newTitle: string = isTruncated ?
            array.slice(0, 3).join(" ") + "..." : title

        return newTitle
    }

    return (
        <aside className={cn(
            // Base Background & Spacing
            "bg-(--primary-color) flex flex-col gap-[25px]",

            // Mobile & Tablet: Tetap Fixed Slide-over Drawer
            "fixed top-0 right-0 h-full w-full z-30 p-[25px] md:p-[50px]",
            "transition-transform duration-300 ease-in-out",
            isOpen ? "translate-x-0" : "translate-x-full",

            "overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",

            // Desktop (lg): Posisi normal (Static/Relative) di sebelah kiri konten, mengikuti tinggi konten
            "lg:static lg:translate-x-0 lg:z-auto",
            "lg:w-[300px] lg:min-w-[300px] lg:p-[40px] lg:h-screen lg:min-h-full"
        )}>
            {/* Mobile Close Button */}
            <section className="flex justify-end lg:hidden">
                <img onClick={isClose} className="cursor-pointer" src={XIcon} alt="Close Menu" />
            </section>

            <section className="flex flex-col gap-[25px] md:gap-[30px]">
                <h1 className="font-bold text-(--white-color) text-[22px] md:text-[28px]">
                    Detail Materi
                </h1>

                <section className="flex flex-col gap-[20px] md:gap-[25px]">
                    {data.map((item, index) => (
                        <MateriCourseList
                            key={item.id_materi || index}
                            id_course={item.id_course}
                            id_materi={item.id_materi}
                            title={pressMateriTitle(item.materi)}
                        />
                    ))}
                </section>
            </section>
        </aside>
    )
}

export function MateriCourseVideo({ video, prev, next }: {
    video: string, prev: string, next: string
}) {
    return (
        <section className="flex flex-col gap-[20px]">
            <DetailCourseVideoPlayer video={video} />
            <section className={cn(
                // display
                "flex flex-col-reverse gap-[25px]",
                "md:flex-row md:justify-between md:items-center"
            )}>
                <ButtonSquare name="Tandai Selesai" />
                <section className="flex gap-[10px]">
                    <ButtonNavigate name="Prev" navigate={prev} />
                    <ButtonNavigate name="Next" navigate={next} />
                </section>
            </section>
        </section>
    )
}