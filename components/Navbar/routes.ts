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