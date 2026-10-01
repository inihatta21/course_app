import { cn } from "../../../lib/util";
import XIcon from "../../../assets/icons/x.svg";
import ChevDown from "../../../assets/icons/chevron-down.svg";
import UserIcon from "../../../assets/icons/user.png";
import EmailIcon from "../../../assets/icons/email.png";
import KeyIcon from "../../../assets/icons/password.png";
import InputText from "../../input/InputText";
import { useState } from "react";
import { Link } from "react-router-dom";

export function ProfileSideMenuMobile({
  isOpen,
  isClose,
 id_user,
}: {
  isOpen: boolean;
  isClose?: () => void;
  id_user: string
}) {
  return (
    <aside
      className={cn(
        // Base Background & Spacing
        "bg-(--primary-color) flex flex-col gap-[25px]",

        // Mobile & Tablet: Tetap Fixed Slide-over Drawer
        "fixed top-0 right-0 h-full w-full z-30 p-[25px] md:p-[50px]",
        "transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-full",

        "overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",

        // Desktop (lg): Posisi normal (Static/Relative) di sebelah kiri konten, mengikuti tinggi konten
        "lg:hidden lg:translate-x-0 lg:z-auto",
        "lg:w-[300px] lg:min-w-[315px] lg:p-[40px] lg:h-screen lg:min-h-full",
      )}
    >
      {/* Mobile Close Button */}
      <section className="flex justify-end lg:hidden">
        <img
          onClick={isClose}
          className="cursor-pointer"
          src={XIcon}
          alt="Close Menu"
        />
      </section>

      <section className="flex flex-col gap-[25px] md:gap-[30px] lg:pt-[70px]">
        <h1 className="font-bold text-(--white-color) text-[22px] md:text-[28px]">
          Dashboard
        </h1>

        <section className="flex flex-col gap-[20px] md:gap-[25px]">
          <section className={cn("flex items-center gap-[15px]")}>
            <img
            src={UserIcon}
            className={cn(
              // width & height
              "w-[24px] h-[24px]",
            )}
          />
            <Link className={cn("font-bold", "text-(--white-color)")} to={`/dashboard/${id_user}/profile`}>Profile</Link>
          </section>
           <section className={cn("flex items-center gap-[15px]")}>
            <img
            src={UserIcon}
            className={cn(
              // width & height
              "w-[24px] h-[24px]",
            )}
          />
            <Link className={cn("font-bold", "text-(--white-color)")} to={`/dashboard/${id_user}/course`}>Kursus Saya</Link>
          </section>
        </section>
      </section>
    </aside>
  );
}

export function ProfileUserDesc({
  image,
  email,
  name,
}: {
  image: string;
  email: string;
  name: string;
}) {
  return (
    <section className={cn("flex gap-[25px] items-center")}>
      <img
        src={image}
        className={cn("w-[124px] h-[124px]", "rounded-full", "object-cover")}
      />
      <section>
        <h1 className={cn("text-[24px] capitalize font-bold")}>{name}</h1>
        <p className={cn("text-[15px]", "text-(--muted-color)")}>{email}</p>
      </section>
    </section>
  );
}

export function ProfileInput({
  icon,
  label,
  name,
  placeholder,
  type,
  value,
}: {
  icon: string;
  label: string;
  name: string;
  placeholder: string;
  type: string;
  value?: string;
}) {
  const [isOpenInput, setIsOpenInput] = useState<boolean>(false);

  function handleOpenInput() {
    if (isOpenInput) {
      setIsOpenInput(false);
    } else {
      setIsOpenInput(true);
    }
  }

  return (
    <section
      className={cn(
        // display
        "flex flex-col gap-[15px]",
      )}
    >
      <section
        onClick={handleOpenInput}
        className={cn(
          // display
          "flex justify-between",

          // cursor
          "cursor-pointer",
        )}
      >
        <section
          className={cn(
            // display
            "flex gap-[10px]",
          )}
        >
          <img
            src={icon}
            className={cn(
              // width & height
              "w-[24px] h-[24px]",
            )}
          />
          <p
            className={cn(
              // font
              "font-bold text-(--primary-color)",
            )}
          >
            {label}
          </p>
        </section>
        <img
          src={ChevDown}
          className={cn(
            // width & height
            "h-[24px] w-[24px]",

            // transision & rotate
            "transition-transform duration-300 ease-in-out",
            isOpenInput ? "rotate-180" : "rotate-0",
          )}
        />
      </section>
      <section
        className={cn(
          "w-full overflow-hidden transition-all duration-300 ease-in-out",
          isOpenInput ? "max-h-20 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <InputText
          name={name}
          placeholder={placeholder}
          type={type}
          icon={icon}
          value={value}
        />
      </section>
    </section>
  );
}

export function ProfileForm() {
  return (
    <form
      className={cn(
        // display
        "flex flex-col gap-[25px]",
        "md:grid md:grid-cols-2 md:gap-[40px]",
        "lg:max-w-[750px]",
      )}
    >
      <ProfileInput
        icon={UserIcon}
        label="First Name"
        name="firstname"
        placeholder="First Name"
        type="text"
      />
      <ProfileInput
        icon={UserIcon}
        label="Last Name"
        name="lastname"
        placeholder="Last Name"
        type="text"
      />
      <ProfileInput
        icon={EmailIcon}
        label="Email"
        name="email"
        placeholder="Email"
        type="email"
      />
      <ProfileInput
        icon={KeyIcon}
        label="Password"
        name="password"
        placeholder="Password"
        type="password"
      />
      <section>
        <button
          type="submit"
          className={cn(
            // style width height
            "py-[15px] w-full",
            "md:col-span-2",

            // style cursor & font
            "cursor-pointer font-bold",

            // style color
            "bg-(--primary-color) text-(--white-color)",
            " hover:bg-(--white-color) hover:text-(--primary-color) hover:border hover:border-(--primary-color)",

            // radius style
            "rounded-[100px]",
          )}
        >
          Save
        </button>
      </section>
    </form>
  );
}
