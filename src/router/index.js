import { createRouter, createWebHistory} from "vue-router";
// Routes
import Screen from "./Screen.vue"
import Admin from "./Admin.vue"
import CV from "./CV.vue"
import Form from "./Form.vue"
import SingularityMain from "./singularity/Main.vue"
import SingularityDocs from "./singularity/Docs.vue"
import SingularityBlog from "./singularity/Blog.vue"
// import Wishlist from "./Wishlist.vue"

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
            path: '/Singularity',
            component: SingularityMain,
        },
        {
            path: '/Singularity/Docs',
            component: SingularityDocs,
        },
        {
            path: '/Singularity/Blog',
            component: SingularityBlog,
        }
        // {
        //     path: '/Wishlist',
        //     component: Wishlist,
        // },
    ],
})

export default router;