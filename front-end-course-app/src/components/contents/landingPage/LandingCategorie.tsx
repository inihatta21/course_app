import { cn } from "../../../lib/util";
import Title from "../../title/Title";
import ImageLandingCat from "../../../assets/image-landing-categorie.png";

function LandingCategorie() {
  const kategori = ["Teknologi", "Sains", "Health"];

  return (
    <section className={cn("md:flex md:items-center md:justify-between")}>
      <section
        className={cn("max-w-[258px] md:max-w-[290px] lg:max-w-[517px]")}
      >
        <Title title="Temukan Berbagai Course" />
        <section>
          {kategori.map((data, index) => {
            return (
              <p className={cn("border-b-[0.5px] py-[14px]")} key={index}>
                {data}
              </p>
            );
          })}
          <p className={cn("pt-[14px] pb-[24px]")}>Dan Masih Banyak Lagi</p>
        </section>
      </section>
      <img
        src={ImageLandingCat}
        className={cn("w-[358px] h-[207px]", "lg:w-[515px] lg:h-[298px]")}
      />
    </section>
  );
}

export default LandingCategorie;
