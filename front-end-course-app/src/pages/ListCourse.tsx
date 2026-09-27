import {
  ListCourseCategorie,
  ListCourseProduct,
} from "../components/contents/list_course/ListCourseCompound";
import { categorie, product } from "../components/data/data";
import Title from "../components/title/Title";
import { cn } from "../lib/util";

function ListCourse() {
  return (
    <section
      className={cn(
        // display
        "flex flex-col gap-[25px]",
      )}
    >
      <section
        className={cn(
          // display
          "px-[25px]",
          "md:px-[45px]",
          "lg:px-[90px]"
        )}
      >
        <Title title="course" />
      </section>
      <section>
        <ListCourseProduct product={product} />
      </section>
      <section
        className={cn(
          // display
          "px-[25px]",
          "md:px-[45px]",
          "lg:px-[90px]"
        )}
      >
        <Title title="Kategori" />
      </section>
      <section className={cn("flex flex-col gap-[15px]")}>
      <section>
        <ListCourseCategorie categorie={categorie} />
      </section>
      <section>
        <ListCourseProduct product={product} />
      </section>
      </section>
    </section>
  );
}

export default ListCourse;
