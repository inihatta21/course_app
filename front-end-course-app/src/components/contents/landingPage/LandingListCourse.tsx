import { cn } from "../../../lib/util";
import Title from "../../title/Title";

function LandingListCourse() {

    return (
       <section className={cn("flex flex-col gap-[10px]")}>
            <Title title="Sekali Bayar Akses Seumur Hidup" />
            <p>Ayo bergabung sekarang juga!</p>
       </section>
    )
}

export default LandingListCourse;