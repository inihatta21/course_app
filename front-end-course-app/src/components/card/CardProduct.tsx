import { useNavigate } from "react-router-dom";
import { cn } from "../../lib/util";
import {
  CardCategorie,
  CardProductDesc,
  CardProductDescProfile,
  CardProductImage,
  CardProductTitle,
} from "./CardProductCompound";
import type { CardProductType } from "../type/type";


function CardProduct({
  titleProduct,
  imageCourse,
  mentor,
  profile,
  categorie,
  price,
  materi,
  id_course,
}: CardProductType) {
  const navigation = useNavigate();

  return (
    <section
      className={cn(
        "w-[200px] h-[240px]",
        "shrink-0",
        "p-[10px]",
        "shadow-md",
        "rounded-[15px]",
        "flex flex-col gap-[6px]",
        "cursor-pointer"
      )}

      onClick={() => navigation(`/course/${id_course}`)}
    >
      <CardProductImage image={imageCourse} />
      <CardProductTitle title={titleProduct} />
      <CardProductDescProfile mentor={mentor} profile={profile} />
      <section className={cn("flex gap-[5px]")}>
        {categorie.map((data, index) => {
          return <CardCategorie name={data} key={index} />;
        })}
      </section>
        <CardProductDesc materi={materi} price={price} />
    </section>
  );
}

export default CardProduct;
