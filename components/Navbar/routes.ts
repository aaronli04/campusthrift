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
        path: "/login",
        title: "LOGIN",
    },
    {
        path: "/signup",
        title: "SIGN UP",
    }
]

export default routes;