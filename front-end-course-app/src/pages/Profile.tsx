import { useState } from "react";
import {
  ProfileForm,
  ProfileSideMenuMobile,
  ProfileUserDesc,
} from "../components/contents/dashboard/ProfileCompound";
import IconList from "../assets/icons/list.png";
import { cn } from "../lib/util";
import Title from "../components/title/Title";
import ProfileImage from "../assets/profile.jpg";
import TitleMedium from "../components/title/TitleMedium";

function Profile() {
  const [open, setOpen] = useState(false);

  return (
    <section
      className={cn(
        "px-[25px] md:px-[45px] lg:px-[90px]",
        "flex flex-col gap-[25px]",
        "pb-[147px] lg:pb-[0px]",
        "lg:",
      )}
    >
      {/* menu dashboard mobile */}
      <ProfileSideMenuMobile
        id_user=""
        isOpen={open}
        isClose={() => setOpen(false)}
      />

      {/* Toggle Button Khusus Mobile/Tablet */}
      <section className={cn("lg:hidden")}>
        <section
          className={cn("p-[11px] w-[45px]", "shadow-md", "rounded-full")}
        >
          <img
            onClick={() => setOpen(true)}
            src={IconList}
            className={cn("h-[24px] w-[24px] cursor-pointer")}
            alt="Open Menu"
          />
        </section>
      </section>

      {/* main content */}
      <main
        className={cn(
          "w-full",
          "px-[25px] md:px-[45px]",
          "lg:ms-[330px]",
          "lg:mt-[40px]",
          "flex flex-col gap-[25px]",
          "lg:max-w-[795px]",
        )}
      >
        {/* Title */}
        <Title title="Profile" />

        {/* image profile */}
        <ProfileUserDesc
          image={ProfileImage}
          name="Alex Doe"
          email="alexdow234@gmail.com"
        />

        {/* Edit Profile title */}
        <section
          className={cn("border-b-[0.5px] border-(--muted-color)", "pb-[10px]")}
        >
          <TitleMedium title="Edit Profile" />
        </section>

        {/* Form Edit Profile */}
        <ProfileForm />
      </main>
    </section>
  );
}

export default Profile;
