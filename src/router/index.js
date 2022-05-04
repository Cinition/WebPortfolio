import { createRouter, createWebHistory} from "vue-router";
// Routes
import Screen from "./Screen.vue"
import Admin from "./Admin.vue"
import CV from "./CV.vue"
import Form from "./Form.vue"
import Wishlist from "./Wishlist.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Screen,
        },
        {
            path: '/Admin',
            component: Admin,
        },
        {
            path: '/CV',
            component: CV,
        },
        {
            path: '/Form',
            component: Form,
        },
        {
            path: '/Wishlist',
            component: Wishlist,
        },
    ],
})

export default router;