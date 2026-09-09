import Hero from "../components/contents/landingPage/Hero";
import LandingCategorie from "../components/contents/landingPage/LandingCategorie";
import LandingLearnTime from "../components/contents/landingPage/LandingLearnTime";
import LandingListCourse from "../components/contents/landingPage/LandingListCourse";
import { cn } from "../lib/util";

function LandingPage() {
    return (
        <section className={cn(
            // display
            "flex flex-col gap-[60px] pb-[60px] "
        )}>
        <Hero />
        <section className={cn(
            // display
            "px-[25px] flex flex-col gap-y-[60px]",
            "md:px-[75px]"
        )}>
        <LandingCategorie />
        <LandingLearnTime />
        <LandingListCourse />
        </section>
        </section>
    )
}

export default LandingPage;