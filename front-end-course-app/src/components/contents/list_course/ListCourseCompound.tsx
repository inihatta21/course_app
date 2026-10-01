import { cn } from "../../../lib/util";
import ButtonKategori from "../../buttons/ButtonKategori";
import CardProduct from "../../card/CardProduct";
import type {
  CourseCategorieType,
  ListCourseProductType,
} from "../../type/type";
import ChevronRightIcon from "../../../assets/icons/chevron-right (salin 1).svg";
import ChevronLeftIcon from "../../../assets/icons/chevron-left.svg";
import { useRef } from "react";


export function ListCourseCategorie({
  categorie,
}: {
  categorie: CourseCategorieType[];
}) {
  return (
    <section
      className={cn(
        // display
        "flex gap-[12px] overflow-x-scroll px-[25px]",
        "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",
        "md:px-[45px]",
        "lg:px-[90px]",
        "lg:overflow-x-auto",
      )}
    >
      {categorie.map((data, index) => {
        return (
          <ButtonKategori
            key={index}
            name={data.name}
            icon={data.imageDark}
            iconHover={data.imageLight}
          />
        );
      })}
    </section>
  );
}

export function ListCourseProduct({
  product,
}: {
  product: ListCourseProductType[];
}) {

  const scrollRef = useRef<HTMLElement | null>(null)

  // efect scroll
  function handleScrollX(direction: string) {
    if(scrollRef.current) {
      const scrollType = direction === "left" ? -300 : 300;

      scrollRef.current.scrollBy({ left: scrollType, behavior: "smooth" })
    }
  }

  return (
    <section className={cn("flex items-center")}>
      <section
         onClick={() => handleScrollX("left")}
        className={cn(
          "bg-white shadow-lg z-10 rounded-full",
          "p-[18px]",
          "relative left-[120px]",
          "hidden lg:block",
          "cursor-pointer"
        )}
      >
        <img src={ChevronLeftIcon} />
      </section>
      <section
      ref={scrollRef}
        className={cn(
          // display
          "flex gap-[15px] z-0",
          "overflow-x-scroll",
           "py-[10px] px-[25px] md:px-[45px] lg:px-[196px] xl:px-[210px]",
          "max-w-[1500px] ",
          "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",
          "lg:overflow-x-auto",
          "lg:mask-x-from-80% lg:mask-x-to-90%",
        )}
      >
        {product.map((data, index) => {
          return (
            <CardProduct
              key={index}
              titleProduct={data.course}
              imageCourse={data.imageCourse}
              mentor={data.mentor}
              profile={data.profile}
              categorie={data.categorie}
              price={data.price}
              materi={data.materi}
              id_course={data.id_course}
            />
          );
        })}
      </section>
      <section
      onClick={() => handleScrollX("right")}
        className={cn(
          "bg-white shadow-lg rounded-full",
          "p-[18px]",
          "relative right-[120px]",
          "cursor-pointer",
          "hidden lg:block"
        )}
      >
        <img src={ChevronRightIcon} />
      </section>
    </section>
  );
}
