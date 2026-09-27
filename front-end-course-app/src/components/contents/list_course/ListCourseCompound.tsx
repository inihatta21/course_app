import { cn } from "../../../lib/util";
import ButtonKategori from "../../buttons/ButtonKategori";
import CardProduct from "../../card/CardProduct";
import type {
  CourseCategorieType,
  ListCourseProductType,
} from "../../type/type";

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
  return (
    <section
    className={cn("flex relative")}
    >
      <section
        className={cn(
          "absolute",
          "w-[176px] h-full bg-(--white-color) hidden lg:block",
          "blur-sm",
        )}
      ></section>
      <section className={cn(
        // display
        "flex gap-[15px] z-0",
        "py-[10px] px-[25px] md:px-[45px] lg:px-[196px]",
        "overflow-x-scroll",
        "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",
        "lg:overflow-x-auto",
      )}>
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
        className={cn(
          "absolute",
          "w-[176px] h-full bg-(--white-color) hidden lg:block",
          "blur-sm",
        )}
      ></section>
    </section>
  );
}
