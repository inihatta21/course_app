import Title from "../../title/Title";
import ComputerImg from "../../../assets/categorie/computer.jpeg"
import BahasaImg from "../../../assets/categorie/bahasa.jpeg"
import LawImg from "../../../assets/categorie/law.jpeg"
import DesainImg from "../../../assets/categorie/desain.jpeg"
import CardCategorieProduct from "../../card/CardCategorieProduct";
import { cn } from "../../../lib/util";

function LandingCategorie() {
    return (
        <section className={cn(
            // display
            "flex flex-col gap-[19px] "
        )}>
            <Title title="kuasai keahlian baru, ciptakan peluang tanpa batas" />
            <section className={cn(
                // grid
                "grid grid-cols-2 gap-[12px] gap-x-[12px] "
            )}>
                <CardCategorieProduct title="computer science" 
                desc="Kuasai algoritma, struktur data, prinsip software."
                image={ComputerImg} />
                <CardCategorieProduct title="hukum" 
                desc="Pahami dasar-dasar hukum, analisis hak, dll."
                image={LawImg} />
                <CardCategorieProduct title="seni & desain" 
                desc="Eksplorasi ide kreatifmu, kuasai seni visual, dll."
                image={DesainImg} />
                <CardCategorieProduct title="bahasa" 
                desc="Kuasai berbagai bahasa dari belahan dunia"
                image={BahasaImg} />
            </section>
        </section>
    )
}

export default LandingCategorie;