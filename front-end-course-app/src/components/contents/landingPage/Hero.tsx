import { cn } from "../../../lib/util";
import Background from "../../../assets/background.png"
import ButtonNavigate from "../../buttons/ButtonNavigate";
import Title from "../../title/Title";

function Hero() {
    return (
        <section className={cn(
            // position
            "relative w-full py-[14px]",
            "md:py-[111px]",
        )} style={{ backgroundImage: `url(${Background})`, backgroundPosition: "center", backgroundSize: "cover" }}>
            <section className={cn(
                // background dark transparent
                "absolute inset-0 bg-black/30"
            )} >
            </section>
            <section className={cn(
                // z-index
                "relative z-10 px-[41px] flex flex-col items-center gap-[15px] ",
                "md:px-[128px] md:gap-[34px]",
            )}>
                <section className="text-center">
                    <Title title="unlock new skills. Reach your full potential" />
                </section>
                <p className={cn(
                    // font
                    "text-white text-center",
                )}>Jelajahi kursus online berkualitas tinggi dan fleksibel yang diajarkan
                    oleh para ahli industri kapan saja dan dimana saja.
                </p>
                <section>
                    <ButtonNavigate name="Start Learning" navigate="/login" />
                </section>
            </section>
        </section>
    )
}

export default Hero;