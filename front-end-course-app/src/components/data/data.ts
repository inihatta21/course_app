import ImgCourse from "../../assets/course/ui_ux.jpg"
import Profile from "../../assets/profile.jpg"
import AppLight from "../../assets/icons/app (1).png"
import AppDark from "../../assets/icons/app.png"
import type { CourseCategorieType, ListCourseProductType, MateriCourseIdType } from "../type/type"
import type { DetailCourseListMateriType } from "../contents/detail_course/DetailCourseCompound"



export const categorie: CourseCategorieType[] = [{
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

export const product: ListCourseProductType[] = [{
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
]

export const materi: DetailCourseListMateriType[] = [
    {
      title: "Prinsip Dasar UI/UX",
      id_course: 1,
      id_materi: 1,
    },
    {
      title: "Desain Thinking Framework",
      id_course: 2,
      id_materi: 2,
    },
    {
      title: "User-Centered Design (UCD)",
      id_course: 3,
      id_materi: 3,
    },
    {
      title: "User Research",
      id_course: 4,
      id_materi: 4,
    },
  ];

export const data: MateriCourseIdType[] = [
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