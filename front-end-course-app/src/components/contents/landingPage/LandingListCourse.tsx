import Title from "../../title/Title";
import LawImg from "../../../assets/course/law.png"
import UiUxImg from "../../../assets/course/ui_ux.jpg"
import BahasaImg from "../../../assets/course/bahasa.png"
import Profile from "../../../assets/profile.jpg"
import CardProduct from "../../card/CardProduct";
import { cn } from "../../../lib/util";

type CourseType = {
    titleProduct: string,
    imageCourse: string,
    mentor: string,
    profile: string,
    categorie: string[],
    price: number,
    materi: number,
    id_course: number
}

function LandingListCourse() {

    const course: CourseType[] = [{
        titleProduct: "jago ui/ux desgin untuk real project",
        imageCourse: UiUxImg,
        mentor: "albert",
        profile: Profile,
        categorie: ["ui/ux", "software"],
        price: 99000,
        materi: 64,
        id_course: 1
    },
    {
        titleProduct: "bahasa inggris pemula",
        imageCourse: BahasaImg,
        mentor: "iqbal pratama",
        profile: Profile,
        categorie: ["bahasa"],
        price: 99000,
        materi: 64,
        id_course: 2
    },
    {
        titleProduct: "hukum untuk pemula",
        imageCourse: LawImg,
        mentor: "fatimah",
        profile: Profile,
        categorie: ["hukum"],
        price: 99000,
        materi: 64,
        id_course: 3
    },
    {
        titleProduct: "hukum untuk pemula",
        imageCourse: LawImg,
        mentor: "fatimah",
        profile: Profile,
        categorie: ["hukum"],
        price: 99000,
        materi: 64,
        id_course: 4
    }]

    return (
        <section className={cn(
            // display
            "flex flex-col gap-[19px] items-center"
        )}>
            <section className={cn(
                // text
                "md:text-center",
                "lg:w-[767px]"
            )}>
                <Title title="berbagai macam course yang meningkatkan skill & pengetahuan kamu." />
            </section>
            <section className={cn(
                // display
                "flex flex-col gap-[15px] ",
                "md:grid md:grid-flow-col md:grid-rows-2 md:gap-1",
                "lg:w-[767px]"
            )}>
                {course.map((data, index) => {
                    return (
                        <CardProduct key={index} titleProduct={data.titleProduct}
                            imageCourse={data.imageCourse} mentor={data.mentor}
                            profile={data.profile} categorie={data.categorie}
                            price={data.price} materi={data.materi} 
                            id_course={data.id_course}/>
                    )
                })}
            </section>
        </section>
    )
}

export default LandingListCourse;