import { cn } from "../../lib/util";
import { CardCategorie, CardProductDescProfile } from "./CardProductCompound";

type CardProductDescType = {
    profile: string,
    mentor: string,
    categorie: string[],
    materi: number,
    price: number
}

function CardProductDesc({ profile, mentor, categorie, materi, price }: CardProductDescType) {

    const curreny = new Intl.NumberFormat('id-ID', {
        style: "currency",
        currency: "IDR"
    })

    return (
        <>
            <section className={cn(
                // display style
                "flex items-center gap-[5px]"
            )}>
                <section>
                    <CardProductDescProfile profile={profile} mentor={mentor} />
                </section>
                <section className={cn(
                    // display style
                    "flex gap-[5px]"
                )}>
                    {categorie.map((data, index) => {
                        return (
                            <CardCategorie name={data} key={index} />
                        )
                    })}
                    <p className={cn(
                        "text-(--muted-color) text-[9px] "
                    )} >{materi} Materi</p>
                    <p className={cn(
                        "text-(--muted-color) text-[9px]"
                    )}>{curreny.format(price)}</p>
                </section>
            </section>
        </>
    )
}

export default CardProductDesc