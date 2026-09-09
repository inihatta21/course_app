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

export function MateriCourseCheck({ isCheck, eventClick }:
    { isCheck: boolean, eventClick: () => void }) {
    return (
        <section onClick={eventClick}>
            {isCheck ?
                <img src={CheckIcon} className={cn(
                    // width & height, rounded
                    "w-[23px] h-[23px] rounded-full cursor-pointer",
                )} /> : <section className={cn(
                    // width & height, rounded
                    "w-[23px] h-[23px] rounded-full",

                    // background
                    "bg-(--white-color) cursor-pointer"
                )}></section>}
        </section>
    )
}

export function MateriCourseList({ id_course, id_materi, title }
    : { id_course: number, id_materi: number, title: string }) {

    const [isCheck, setIsCheck] = useState<boolean>(false)
    const navigation = useNavigate()

    function handleCheck() {
        if (isCheck) {
            setIsCheck(false)
        } else {
            setIsCheck(true)
        }
    }

    return (
        <section className={cn(
            // display
            "flex gap-[15px] items-center",
        )}>
            <MateriCourseCheck eventClick={handleCheck} isCheck={isCheck} />
            <section className={cn(
                // cursor
                "cursor-pointer"
            )} onClick={() => {
                navigation(`/course/${id_course}/${id_materi}`)
            }}>
                <p className='capitalize text-(--white-color)'>{title}</p>
            </section>
        </section>
    )
}

export function MateriCourseMenu({ data, isOpen, isClose }:
    {
        data: MateriCourseMenuType[], isOpen: boolean,
        isClose: () => void
    }
) {
    return (
        <section className={cn(
            // background
            "bg-(--primary-color)",

            // position
            "w-full h-full fixed z-20 top-0 right-0",

            // padding & display
            "p-[25px] flex flex-col gap-[25px]",
            "md:p-[75px]",

            // transisi
            "transition-transform duration-300 ease-in-out",
            isOpen ? "translate-x-0" : "translate-x-full",
        )}>
            <section className="flex justify-end">
                <img onClick={isClose} className="cursor-pointer" src={XIcon} />
            </section>
            <section className={cn(
                // display
                "flex flex-col gap-[25px]",
                "md:gap-[40px]"
            )}>
                <h1 className={cn(
                    // font
                    "font-bold text-(--white-color)",
                    "md:text-[36px]"
                )}>Detail Materi</h1>
                <section className={cn(
                    // display
                    "flex flex-col gap-[25px]",
                    "md:gap-[40px]",
                )}>
                    {data.map((data, index) => {
                        return (
                            <MateriCourseList key={index} id_course={data.id_course}
                                id_materi={data.id_materi} title={data.materi} />
                        )
                    })}
                </section>
            </section>
        </section>
    )
}

export function MateriCourseVideo({ video, prev, next }: {
    video: string, prev: string, next: string
}) {
    return (
        <section className={cn(
            // display
            "flex flex-col gap-[10px]"
        )}>
            <DetailCourseVideoPlayer video={video} />
            <section className={cn(
                // display
                "flex justify-between"
            )}>
                <ButtonSquare name="Tandai Selesai" />
                <section className="flex gap-[7px]">
                    <ButtonNavigate name="Prev" navigate={prev} />
                    <ButtonNavigate name="Next" navigate={next} />
                </section>
            </section>
        </section>
    )
}