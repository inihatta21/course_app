import { useParams } from "react-router-dom";
import {
  DetailCourseBanner,
  DetailCourseCategorie,
  DetailCourseDesc,
  DetailCourseListMateri,
  DetailCourseProfileMentor,
  DetailCourseReco,
  DetailCourseVideoPlayer,
  type DetailCourseListMateriType,
} from "../components/contents/detail_course/DetailCourseCompound";
import Title from "../components/title/Title";
import { cn } from "../lib/util";
import Profile from "../assets/profile.jpg";
import ImgCourse from "../assets/course/ui_ux.jpg";
import ButtonSquare from "../components/buttons/ButtonSquare";
import { materi, product } from "../components/data/data";

function DetailCourse() {
  const { id_course } = useParams();

  const categorieCourse: string[] = ["software", "UI/UX"];
  const descCourse: string = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since 1966, 
    when designers at Letraset and James Mosley,
    the librarian at St Bride Printing Library in London,
    took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's 
    Body Type sheets. It has survived not only many decades,
    but also the leap into electronic typesetting,`;

  return (
    <section
      className={cn(
        // padding

        // display
        "flex flex-col gap-[24px] ",
      )}
    >
      <section className={cn("px-[25px]", "md:px-[45px]", "lg:px-[90px]")}>
        <DetailCourseBanner
          image={ImgCourse}
          title="Mastering UI/UX Design 2026"
          price={99000}
        />
      </section>
      <section className={cn("px-[25px]", "md:px-[45px]", "lg:px-[90px]")}>
        <section
          className={cn("flex justify-between items-center md:w-[350px]")}
        >
          <section className={cn("flex flex-col gap-[15px]")}>
            <DetailCourseProfileMentor
              name="Alex Doe"
              profile={Profile}
              experience="Profesional UI/UX"
            />
            <DetailCourseCategorie categorie={categorieCourse} />
          </section>
          <section className={cn("w-[100px] h-[44px]")}>
            <ButtonSquare name="Beli" eventButton={() => {}} />
          </section>
        </section>
      </section>
      <section
        className={cn(
          "md:max-w-[539px] lg:max-w-[875px]",
          "px-[25px]",
          "md:px-[45px]",
          "lg:px-[90px]",
        )}
      >
        <DetailCourseDesc desc={descCourse} />
      </section>
      <section
        className={cn(
          "md:max-w-[539px] lg:max-w-[875px]",
          "px-[25px]",
          "md:px-[45px]",
          "lg:px-[90px]",
        )}
      >
        <DetailCourseListMateri data={materi} />
      </section>
      <section>
        <DetailCourseReco product={product} />
      </section>
    </section>
  );
}

export default DetailCourse;
