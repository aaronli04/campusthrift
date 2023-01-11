import { IconType } from "react-icons";

import { FaHome, FaCalculator, FaRegHandshake, FaUser } from "react-icons/fa";
import { BsPiggyBankFill } from "react-icons/bs";

export interface Route {
    path: string;
    title: string;
    icon: IconType;
}

const routes : Route[]  = [
    {
        path: "/",
        title: "Home",
        icon: FaHome
    },
    {
        path: "/learn",
        title: "Learn",
        icon: FaCalculator
    },
    {
        path: "/work",
        title: "Work",
        icon: FaRegHandshake
    },
    {
        path: "/save",
        title: "Save",
        icon: BsPiggyBankFill
    },
    {
        path: "/profile",
        title: "Profile",
        icon: FaUser
    }
]

export default routes;