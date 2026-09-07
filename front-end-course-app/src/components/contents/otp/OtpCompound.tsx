import { cn } from "../../../lib/util";
import Title from "../../title/Title";

export function OtpTitle() {
    return (
        <section className={cn(
            // display
            "flex flex-col items-center"
        )}>
            <Title title="Masukkan Kode" />
            <p className="text-center">Masukkan kode yang dikirim ke email anda?
                <section className={cn(
                    // font
                    "text-(--primary-color) font-bold underline underline-offset-1",

                    // cursor
                    "cursor-pointer"
                )}>kirim ulang kode</section></p>
        </section>
    )
}

export function OtpInput() {
    return (
        <section>
            <input className={cn(
                // text
                "text-center font-bold",

                // height & width,
                "h-[50px] w-[50px] ",

                // border
                "border-2 rounded "
            )} type="text" maxLength={1} />
        </section>
    )
}

export function OtpKodeInput() {
    return (
        <section className={cn(
            // display
            "flex gap-[15px] justify-center"
        )}>
            <OtpInput />
            <OtpInput />
            <OtpInput />
            <OtpInput />
        </section>
    )
}

export function OtpImage({ image }: {image: string}) {
    return (
        <img src={image} className="h-screen w-full rounded-t-[50px] object-cover" />
    )
}