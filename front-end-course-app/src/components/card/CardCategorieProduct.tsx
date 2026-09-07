import { cn } from "../../lib/util";
import { CardCategorieDesc, CardCategorieTitle } from "./CardCategorieProductCompound";

function CardCategorieProduct({ image, title, desc }:
    { image: string, title: string, desc: string }) {
    return (
        <>
            <section className={cn(
                // width & height
                "w-[171px] h-[182px] overflow-hidden",

                // rounded & shadow
                "rounded shadow-lg"
            )}>
                <img src={image} className={cn(
                    // width & height
                    "w-full h-[107px] object-cover",

                )} />
                <section>
                    <CardCategorieTitle title={title} />
                    <section className={cn(
                        // padding
                        "px-[17px] "
                    )}>
                        <CardCategorieDesc desc={desc} />
                    </section>
                </section>
            </section>
        </>
    )
}

export default CardCategorieProduct;