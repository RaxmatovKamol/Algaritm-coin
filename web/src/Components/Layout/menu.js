import { AiOutlineHome } from "react-icons/ai";
import { PiStudentLight } from "react-icons/pi";
import { TbUsersGroup } from "react-icons/tb";

export const menu = [
    {
        name: "Home",
        path: "/",
        icon: <AiOutlineHome />,
    },
    {
        name: "Student",
        path: "/students",
        icon: <PiStudentLight />,

    },
    {
        name: "Group",
        path: "/group",
        icon: <TbUsersGroup />,
    }

]