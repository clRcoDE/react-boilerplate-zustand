import Home from '../screens/home/Home'
import Auth from '../screens/auth/Auth'

export default function handleRouteList() {


    return [
        {
            key: "home",
            path: "/",
            route: {
                name: "home"
            },
            shouldProtect: true,
            Component: Home,
        },
        {
            key: "authentication",
            path: "/auth",
            route: {
                name: "signin"
            },
            shouldProtect: true,
            Component: Auth,
        },

    ];
}
