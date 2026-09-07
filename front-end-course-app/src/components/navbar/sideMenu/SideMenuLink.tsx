import { Link } from "react-router-dom";
import { cn } from "../../../lib/util";

function SideMenuLink() {
    return (<>
     <ul className={cn(
                        // style font & text
                        "text-(--white-color)",

                        // display style
                        "flex flex-col items-center gap-[15px]"
                    )}>
                        <Link to="/">Home</Link>
                        <Link to="/">Course</Link>
                        <Link to="/">About</Link>
                    </ul>
    </>)
}

export default SideMenuLink;