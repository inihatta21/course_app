import { cn } from "../../lib/util";
import { convertCurrencyId, pressLengthQuote } from "../util/util";

export function CardProductTitle({ title }: { title: string }) {
  return (
    <>
      <p
        className={cn(
          // style text
          "text-(--dark-color) font-bold text-[15px] capitalize text-ellipsis",
        )}
      >
        {pressLengthQuote(title, 3)}
      </p>
    </>
  );
}

export function CardProductDescProfile({
  profile,
  mentor,
}: {
  profile: string;
  mentor: string;
}) {
  return (
    <>
      <section
        className={cn(
          // display style
          "flex gap-[10px] items-center ",
        )}
      >
        <img
          className={cn(
            // style width & height
            "w-[20px] h-[20px]",

            // style rounded
            "rounded-full",
          )}
          src={profile}
        />
        <p
          className={cn(
            // style text
            "text-(--muted-color) text-[10px] capitalize",
          )}
        >
          {mentor}
        </p>
      </section>
    </>
  );
}

export function CardCategorie({ name }: { name: string }) {
  return (
    <>
      <p
        className={cn(
          // text style
          "text-center text-(--white-color) text-[9px]",
          // bg style
          " bg-(--secondary-color)",

          // display & padding, margin
          "inline-flex justify-center items-center px-[5px]",

          // radius style
          "rounded-full",
        )}
      >
        {name}
      </p>
    </>
  );
}

export function CardProductImage({ image }: { image: string }) {
  return (
    <img
      src={image}
      className={cn("rounded-[10px]", "w-[180px] h-[120px]", "object-cover")}
    />
  );
}

export function CardProductDesc({
  materi,
  price,
}: {
  materi: number;
  price: number;
}) {
    return (
        <section className={cn("flex justify-between items-center")}>
            <p className={cn("text-[12px]", "text-(--muted-color)")}>{materi} Materi</p>
            <p className={cn("text-(--primary-color) font-bold")}>{convertCurrencyId(price)}</p>
        </section>
    )
}
