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
        path: "/settings",
        title: "SETTINGS"
    }
]

export default routes;