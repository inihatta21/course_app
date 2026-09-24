import { cn } from "../../../lib/util";
import ImageHeroMobile from "../../../assets/image-hero-mobile.png";
import ImageHeroTablet from "../../../assets/image-hero-tablet.png";
import ImageHeroDesktop from "../../../assets/image-hero-desktop.png";
import Title from "../../title/Title";

function Hero() {
  return (
    <section className={cn(
        "flex flex-col gap-[5px]",
        "md:flex-row-reverse md:justify-between",
        "lg:flex-col lg:items-center"
    )}>
      {/* image hero */}
      <img
        src={ImageHeroMobile}
        className={cn(
          // height & width
          "h-[32px] w-[103px] md:hidden",
        )}
      />
            <img
        src={ImageHeroTablet}
        className={cn(
          // height & width
          "hidden lg:hidden md:block md:w-[254px] md:h-[79px]",
        )}
      />
            <img
        src={ImageHeroDesktop}
        className={cn(
          // height & width
          "hidden lg:block lg:w-[211px] lg:h-[66px]"
        )}
      />
      {/* image hero mobile */}
      <section className={cn(
        "max-w-[316px] md:max-w-[370px] lg:max-w-[663px]",
        "lg:text-center"
      )}>
        <Title title="Belajar Tanpa Batas, Bertumbuh Tanpa Henti" />
        <p>
          bersama{" "}
          <span className="text-(--primary-color) font-bold">pintar</span>
        </p>
      </section>
    </section>
  );
}

export default Hero;
