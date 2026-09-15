import { UserProfileBio, UserProfileForm } from "../components/contents/user_profile/UserProfileCompound"
import Title from "../components/title/Title"
import { cn } from "../lib/util"
import Profile from "../assets/profile.jpg"

function UserProfile() {
    return (
        <section className={cn(
            // padding
            "p-[25px]",
            "md:px-[75px]",

            // display
            "flex flex-col gap-[25px]",
            "md:gap-[30px]",
        )}>
            <Title title="Profile" />
            <UserProfileBio profile={Profile} name="Alex Doe"
            email="alexDoe34@gmail.com" />
            <UserProfileForm />
        </section>
    )
}

export default UserProfile