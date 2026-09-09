import Button from "../components/buttons/Button"
import { OtpImage, OtpKodeInput, OtpTitle } from "../components/contents/otp/OtpCompound"
import { cn } from "../lib/util"
import OtpImg from "../assets/otp.png"

function ValidateKode() {
    return (
        <section className={cn(
            // display
            "flex flex-col justify-between gap-[15px]",
            "md:gap-[65px]",

            // padding
            "pt-[80px]"
        )}>
            <section className={cn(
                // display
                "flex flex-col gap-[25px]",
                )} >
                <OtpTitle />
                <OtpKodeInput />
                <section className={cn(
                    // display
                    "flex justify-center"
                )}>
                    <section>
                        <Button name="Kirim Kode" />
                    </section>
                </section>
            </section>
            <section>
                <OtpImage image={OtpImg} />
            </section>
        </section>
    )
}

export default ValidateKode