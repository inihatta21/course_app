import { cn } from "../../lib/util";
import { FooterBottomCom, FooterSocialMedia, FooterTitle } from "./FooterCompound";
import InstagramIcon from "../../assets/icons/instagram.svg"
import FacebookIcon from "../../assets/icons/facebook.svg"
import YoutubeIcon from "../../assets/icons/youtube.svg"
import xIcon from "../../assets/icons/icons8-x-50.png"

const data: any = [{
    name: "instagram",
    icon: InstagramIcon
},
{
    name: "facebook",
    icon: FacebookIcon
},
{
    name: "youtube",
    icon: YoutubeIcon
},
{
    name: "twitter",
    icon: xIcon
}]

function Footer() {
    return (
        <section className={cn(
            // padding display
            "px-[25px] pt-[50px] pb-[21px] flex flex-col gap-[19px] ",

            // background
            "bg-(--primary-color)"
        )}>
            <section className={cn(
                // display
                "flex flex-col gap-[19px]"
            )}>
                <FooterTitle />
                <FooterSocialMedia data={data} />
            </section>
            <FooterBottomCom nomer="08725364523" email="test@gmail.com" />
        </section>
    )
}

export default Footer;