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
        title: "SELL"
    },
    {
        path: "/profile",
        title: "PROFILE"
    }
]

export default routes;