import '@videojs/react/video/skin.css';
import { VideoPlayer, VideoSkin } from '@videojs/react/video';
import { MuxVideo } from '@videojs/react/media/mux-video';
import type React from 'react';
import { Container, createPlayer, PlayButton, videoFeatures } from '@videojs/react';
import { cn } from '../../../lib/util';
import { useState } from 'react';
import Title from '../../title/Title';
import ButtonSquare from '../../buttons/ButtonSquare';
import TitleMedium from '../../title/TitleMedium';
import { Link, useNavigate } from 'react-router-dom';
import { ListCourseProduct, type ListCourseProductType } from '../list_course/ListCourseCompound';

export type DetailCourseListMateriType = {
    id_materi: number,
    id_course: number,
    title: string,
}

export function DetailCourseVideoPlayer({ video, poster }:
    { video: string, poster?: string }) {

    const { Player } = createPlayer({ features: videoFeatures })

    return (
        <section className='relative'>
            <Player>
                <VideoPlayer poster={poster}>
                    <Container>
                        <VideoSkin style={{
                            '--media-border-radius': "5px",
                            '--media-accent-color': "#13223D"
                        } as React.CSSProperties}>
                            <MuxVideo src={video} playsInline />
                        </VideoSkin>
                        <DetailCoursePlayButton />
                    </Container>
                </VideoPlayer>
            </Player>
        </section>
    )
}

export function DetailCoursePlayButton() {
    const [isPlay, setIsPlay] = useState<boolean>(false)

    return (
        <PlayButton onClick={() => isPlay ? setIsPlay(false) : setIsPlay(true)}
            render={({ children, ...props }) => (
                <button
                    {...props}
                    className={cn(
                        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",

                        "w-20 h-20 rounded-full",

                        "bg-(--primary-color) text-white hover:bg-black/80 active:scale-95",

                        "transition-all duration-300 ease-in-out cursor-pointer",

                        isPlay ? "hidden" : "flex items-center justify-center"
                    )}
                >
                    {/* Masukkan ikon SVG kustom Anda di sini */}
                    <svg
                        className="w-8 h-8 ml-1 text-white fill-current"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </button>
            )}
        />
    );
}

export function DetailCourseMentor({ name, experience, profile }:
    { name: string, experience: string, profile: string }
) {
    return (
        <section className={cn(
            // display
            "flex gap-[15px]"
        )}>
            <img src={profile} className={cn(
                // width & height rounded
                "rounded-full w-[50px] h-[50px]"
            )} />
            <section>
                <h1>{name}</h1>
                <p>{experience}</p>
            </section>
        </section>
    )
}

export function DetailCoursePrice({ price, eventClick }:
    { price: number, eventClick?: () => void }) {

    const priceFormat: string = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
    }).format(price)

    return (
        <section className={cn(
            // display
            "flex justify-between"
        )}>
            <Title title={priceFormat} />
            <ButtonSquare name='Beli' eventButton={eventClick} />
        </section>
    )
}

export function DetailCourseProfileMentor({ name, profile, experience }:
    { name: string, profile: string, experience: string }) {
    return (
        <section className={cn(
            // display
            "flex gap-[8px] items-center"
        )}>
            <img src={profile} className={cn(
                // width & height
                "w-[50px] h-[50px] object-cover",

                // rounded
                "rounded-full"
            )} />
            <section className={cn(
                // text
                "capitalize  text-[15px]"
            )}>
                <h1 className={cn(
                    // font
                    "font-bold text-(--primary-color)"
                )}>{name}</h1>
                <p className={cn(
                    // text
                    "text-(--muted-color)"
                )}>{experience}</p>
            </section>
        </section>
    )
}

export function DetailCourseCategorie({ categorie }:
    { categorie: string[] }) {
    return (
        <section className='flex gap-[10px]'>
            {categorie.map((data, index) => {
                return (
                    <p key={index} className={cn(
                        // text style
                        "text-center text-(--white-color) text-[12px] capitalize",
                        // bg style
                        " bg-(--primary-color)",

                        // display & padding, margin
                        "inline-flex justify-center items-center px-[15px]",

                        // radius style
                        "rounded-full"
                    )}>{data}</p>
                )
            })}
        </section>
    )
}

export function DetailCourseDesc({ desc }: { desc: string }) {


    // filter title karakter

    const fullDesc: any = (<>
        {desc} <span onClick={() => setCourseDesc(newDesc)}
            className={cn(
                // text
                "underline font-bold",
                // cursor
                "cursor-pointer"
            )}> Lihat Sedikit</span>
    </>)

    const descArray: string[] = desc.split(" ")
    const isTruncated: boolean = descArray.length > 50
    const newDesc: any = isTruncated ? (<>
        {descArray.slice(0, 50).join(" ")}
        <span onClick={() => setCourseDesc(fullDesc)}
            className={cn(
                // text
                "underline font-bold",
                // cursor
                "cursor-pointer"
            )}> Baca Selengkapnya</span>
    </>) : desc;

    const [courseDesc, setCourseDesc] = useState(newDesc)

    return (
        <section className={cn(
            // display
            "flex flex-col gap-[7px]"
        )}>
            <TitleMedium title='Details Course' />
            <p className='text-justify'>{courseDesc}</p>
        </section>
    )
}

export function DetailCourseMiniPlayButton() {
    return (
        <button
            className={cn(

                "w-10 h-10 rounded-full",

                "bg-(--primary-color) text-white hover:bg-black/80 active:scale-95",

                "transition-all duration-300 ease-in-out z-20 cursor-pointer",

                "flex items-center justify-center"
            )}
        >
            {/* Masukkan ikon SVG kustom Anda di sini */}
            <svg
                className="w-3 h-3 ml-1 text-white fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M8 5v14l11-7z" />
            </svg>
        </button>
    )
}

export function DetailCourseMateri({ title, id_materi, id_course }:
    { title: string, id_materi: number, id_course: number }) {
    const navigation = useNavigate()

    return (
        <section className={cn(
            // display
            "flex gap-[15px] items-center",

        )}>
            <section onClick={() => {
            navigation(`/course/${id_course}/${id_materi}`)
        }}>
                <DetailCourseMiniPlayButton />
            </section>
            <Link to={`/course/${id_course}/${id_materi}`} className='capitalize'>{title}</Link>
        </section>
    )
}

export function DetailCourseListMateri({ data }: { data: DetailCourseListMateriType[] }) {
    const courseLength: boolean = data.length > 2
    const filterCourse: DetailCourseListMateriType[] = courseLength ?
        data.slice(0, 2) : data;

    const [materiCourse, setMateriCourse] = useState<DetailCourseListMateriType[]>(filterCourse)
    const [isDetail, setIsDetail] = useState<boolean>(false)

    return (
        <section className={cn(
            // display
            "flex flex-col gap-[7px]"
        )}>
            <TitleMedium title='Materi' />
            <section className={cn(
                // display
                "flex flex-col gap-[12px]"
            )}>
                {materiCourse.map((data, index) => {
                    return (
                        <DetailCourseMateri key={index} title={data.title}
                            id_course={data.id_course} id_materi={data.id_materi} />
                    )
                })}
                {isDetail ? <p onClick={() => {
                    setMateriCourse(filterCourse)
                    setIsDetail(false)
                }}
                    className={cn(
                        // text
                        "underline font-bold",
                        // cursor
                        "cursor-pointer"
                    )}>Sedikit Details</p> :
                    <p onClick={() => {
                        setMateriCourse(data)
                        setIsDetail(true)
                    }}
                        className={cn(
                            // text
                            "underline font-bold",
                            // cursor
                            "cursor-pointer"
                        )}>Lihat Details</p>
                }
            </section>
        </section>
    )
}

export function DetailCourseReco({ product }
    : { product: ListCourseProductType[] }) {
    return (
        <section className={cn(
            // display
            "flex flex-col gap-[7px]"
        )}>
            <TitleMedium title='lainnya' />
            <ListCourseProduct product={product} />
        </section>
    )
}
