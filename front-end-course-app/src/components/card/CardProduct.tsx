import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/util';
import { CardProductImage, CardProductTitle } from './CardProductCompound';
import CardProductDesc from './CardProductDesc';

type CardProductType = {
    titleProduct: string,
    imageCourse: string,
    mentor: string,
    profile: string,
    categorie: string[],
    price: number,
    materi: number
    id_course: number

}

function CardProduct({ titleProduct, imageCourse, mentor,
    profile, categorie, price, materi, id_course }: CardProductType) {

    const navigation = useNavigate()

    return (
        <>
            <section
                onClick={() => navigation(`/course/${id_course}`)}
                className={cn(
                    // display style
                    " flex gap-[8px] p-[10px]",

                    // border, shadow
                    "rounded-[8px] shadow",

                    // width & height
                    "w-[362px] h-[100px]",

                    // cursor
                    "cursor-pointer"
                )}>
                <section>
                    <CardProductImage image={imageCourse} />
                </section>
                <section className={cn(
                    // grid
                    "flex flex-col justify-between"
                )}>
                    <CardProductTitle title={titleProduct} />
                    <CardProductDesc profile={profile} mentor={mentor}
                        categorie={categorie} materi={materi} price={price} />
                </section>
            </section>
        </>
    )
}

export default CardProduct;