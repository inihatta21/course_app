import { ListCourseCategorie, ListCourseProduct, type CourseCategorieType, type ListCourseProductType } from '../components/contents/list_course/ListCourseCompound';
import AppLight from "../assets/icons/app (1).png"
import AppDark from "../assets/icons/app.png"
import { cn } from '../lib/util';
import Title from '../components/title/Title';
import ImgCourse from "../assets/course/ui_ux.jpg"
import Profile from "../assets/profile.jpg"
import { useNavigate } from 'react-router-dom';


const categorie: CourseCategorieType[] = [{
    name: "semua",
    imageLight: AppLight,
    imageDark: AppDark
},
{
    name: "software",
    imageLight: AppLight,
    imageDark: AppDark
},
{
    name: "ui/ux",
    imageLight: AppLight,
    imageDark: AppDark
},
{
    name: "semua",
    imageLight: AppLight,
    imageDark: AppDark
},
{
    name: "semua",
    imageLight: AppLight,
    imageDark: AppDark
},
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

function ListCourse() {
    return (
        <section className={cn(
            // display
            "flex flex-col gap-[25px] py-[25px] "
        )}>
            <section className={cn(
                // display
                "px-[25px]",
                "md:px-[75px]"
            )}>
                <Title title='semua course' />
            </section>
            <section>
                <ListCourseCategorie categorie={categorie} />
            </section>
            <section
                className={cn(
                    // display
                    "px-[25px]",
                    "md:px-[75px]"
                )}>
                <ListCourseProduct product={product} />
            </section>
        </section>
    )
}

export default ListCourse