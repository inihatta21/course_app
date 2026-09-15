import { useParams } from "react-router-dom";
import { DetailCourseCategorie, DetailCourseDesc, DetailCourseListMateri, DetailCoursePrice, DetailCourseProfileMentor, DetailCourseReco, DetailCourseVideoPlayer, type DetailCourseListMateriType } from "../components/contents/detail_course/DetailCourseCompound";
import Title from "../components/title/Title";
import { cn } from "../lib/util";
import Profile from "../assets/profile.jpg"
import type { ListCourseProductType } from "../components/contents/list_course/ListCourseCompound";
import ImgCourse from "../assets/course/ui_ux.jpg"


function DetailCourse() {
    const { id_course } = useParams()
    const video: string = "https://stream.mux.com/ydDIL98zL48ye8jzCw9wokKPg02tPL00vWTIWICcFvFHI.m3u8";

    const categorieCourse: string[] = ["software", "UI/UX"]
    const descCourse: string = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since 1966, 
    when designers at Letraset and James Mosley,
    the librarian at St Bride Printing Library in London,
    took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's 
    Body Type sheets. It has survived not only many decades,
    but also the leap into electronic typesetting,`

    const materi: DetailCourseListMateriType[] = [
        {
            title: "Prinsip Dasar UI/UX",
            id_course: 1,
            id_materi: 1
        },
        {
            title: "Desain Thinking Framework",
            id_course: 2,
            id_materi: 2
        },
        {
            title: "User-Centered Design (UCD)",
            id_course: 3,
            id_materi: 3
        },
        {
            title: "User Research",
            id_course: 4,
            id_materi: 4
        }
    ]

    const product: ListCourseProductType[] = [{
        id_course: 1,
        course: "Jago ui/ux design untuk real project",
        imageCourse: ImgCourse,
        mentor: "alex doe",
        profile: Profile,
        categorie: ["software", "ui/ux"],
        price: 99000,
        materi: 64
    },
    {
        id_course: 2,
        course: "Jago ui/ux design untuk real project",
        imageCourse: ImgCourse,
        mentor: "alex doe",
        profile: Profile,
        categorie: ["software", "ui/ux"],
        price: 99000,
        materi: 64
    }
    ]


    return (
        <section className={cn(
            // padding
            "p-[25px]",
            "md:p-[75px]",
            "lg:pe-[600px]",

            // display
            "flex flex-col gap-[15px] "
        )}>
            <Title title="Jago UI/UX design untuk real project" />
                <DetailCourseVideoPlayer video={video} />
            <DetailCoursePrice price={99000} />
            <DetailCourseProfileMentor name="albert"
                experience="Profesional UI/UX" profile={Profile} />
            <DetailCourseCategorie categorie={categorieCourse} />
            <DetailCourseDesc desc={descCourse} />
            <DetailCourseListMateri data={materi} />
            <DetailCourseReco product={product} />
        </section>
    )
}

export default DetailCourse;