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
    materi: number
}

function LandingListCourse() {

    const course: CourseType[] = [{
        titleProduct: "jago ui/ux desgin untuk real project",
        imageCourse: UiUxImg,
        mentor: "albert",
        profile: Profile,
        categorie: ["ui/ux", "software"],
        price: 99000,
        materi: 64
    },
    {
        titleProduct: "bahasa inggris pemula",
        imageCourse: BahasaImg,
        mentor: "iqbal pratama",
        profile: Profile,
        categorie: ["bahasa"],
        price: 99000,
        materi: 64
    },
{
        titleProduct: "hukum untuk pemula",
        imageCourse: LawImg,
        mentor: "fatimah",
        profile: Profile,
        categorie: ["hukum"],
        price: 99000,
        materi: 64
    }]

    return (
        <section className={cn(
            // display
            "flex flex-col gap-[19px] "
        )}>
            <Title title="berbagai macam course yang meningkatkan skill & pengetahuan kamu." />
            <section className={cn(
                // display
                "flex flex-col gap-[12px] "
            )}>
                {course.map((data, index) => {
                    return (
                        <CardProduct key={index} titleProduct={data.titleProduct}
                            imageCourse={data.imageCourse} mentor={data.mentor}
                            profile={data.profile} categorie={data.categorie}
                            price={data.price} materi={data.materi} />
                    )
                })}
            </section>
        </section>
    )
}

export default LandingListCourse;