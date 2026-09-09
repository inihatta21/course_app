import Title from "../../title/Title"
import CombineImg from "../../../assets/combine image.png"
import { cn } from "../../../lib/util"

function LandingLearnTime() {
    return (
        <section className={cn(
            // display
            "flex flex-col gap-[19px]",
            "md:flex-row-reverse md:items-center md:justify-center md:gap-[50px]"
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
                    <img src={CombineImg} className={cn(
                        // width & height
                        "md:w-[306px] md:h-[306px]"
                    )} />
        </section>
    )
}

export default LandingLearnTime