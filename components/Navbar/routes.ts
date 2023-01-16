import { IconType } from "react-icons";

import { FaHome, FaCalculator, FaRegHandshake, FaUser } from "react-icons/fa";
import { BsPiggyBankFill } from "react-icons/bs";

export interface Route {
    path: string;
    title: string;
}

const routes : Route[]  = [
    {
        path: "/buy",
        title: "BUY",
    },
    {
        path: "/sell",
        title: "SELL",
    }
]

export default routes;