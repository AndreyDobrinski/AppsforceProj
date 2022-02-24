import { AppAbout } from "./pages/AppAbout";
import { AppHome } from "./pages/AppHome";
import { UserDetails } from "./pages/UserDetails";
import { UserAdd } from "./pages/UserAdd";


export const routes = [
    {
        path: '/about',
        component: AppAbout
    },
    {
        path: '/user/:userId',
        component: UserDetails
    },
    {
        path: '/user/add',
        component: UserAdd
    },
    {
        path: '/',
        component: AppHome
    }
]