import { cn } from "../../../lib/util";
import Title from "../../title/Title";
import ImgDihalte from "../../../assets/dihalte.png";
import ImgDirumah from "../../../assets/dirumah.png";
import ImgDisekolah from "../../../assets/disekolah.png";

function LandingLearnTime() {
  const image = [ImgDirumah, ImgDihalte, ImgDisekolah];

  return (
    <section className={cn("flex flex-col gap-[24px]")}>
      <section
        className={cn(
          "flex flex-col gap-[17px]",
          "md:w-[425px]",
          "lg:w-[658px]",
        )}
      >
        <Title title="Mudah Diakses Dimana Saja Dan Kapan Saja" />
        <p>
          Buat kamu yang punya jadwal padat setiap hari, dan tidak punya waktu
          luang.
        </p>
      </section>
      <section
        className={cn(
          "flex flex-col gap-[22px] items-center",
          "lg:flex-row lg:justify-center",
        )}
      >
        {image.map((data, index) => {
          return (
            <img
              className={cn(
                "w-[333px] h-[333px]",
                "shadow-md",
                "rounded-[20px]",
              )}
              src={data}
              key={index}
            />
          );
        })}
      </section>
    </section>
  );
}

export default LandingLearnTime;
