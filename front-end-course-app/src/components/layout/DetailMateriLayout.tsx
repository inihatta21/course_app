import { Outlet } from "react-router-dom";
import NavbarWithAside from "../navbar/NavbarWithAside";

type MateriCourseIdType = {
    id_course: number,
    id_materi: number,
    materi: string
}

function DetailMateriLayout() {

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
        <section className="flex flex-col min-h-screen">
            <section>
                <NavbarWithAside data={data} isOpen={false} isClose={()=>{}} />
            </section>

            <section className="flex-1 pt-[110px]">
                <Outlet />
            </section>
        </section>
    )
}

export default DetailMateriLayout;