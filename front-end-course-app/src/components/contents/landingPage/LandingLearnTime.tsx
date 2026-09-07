import Title from "../../title/Title"
import CombineImg from "../../../assets/combine image.png"
import { cn } from "../../../lib/util"

function LandingLearnTime() {
    return (
        <section className={cn(
            // display
            "flex flex-col gap-[19px] "
        )}>
            <section className={cn(
                // display
                "flex flex-col gap-[19px]"
            )}>
                <Title title="belajar Flexibel Dimana saja dan kapan saja." />
                <p>Nikmati kemudahan belajar lewat laptop atau ponsel 
                    tanpa terikat jadwal. Bebas atur ritme belajarmu sendiri.
                </p>
            </section>
                    <img src={CombineImg} />
        </section>
    )
}

export default LandingLearnTime