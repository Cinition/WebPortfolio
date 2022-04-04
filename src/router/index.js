import { createRouter, createWebHistory} from "vue-router";
// Routes
import Screen from "./Screen.vue"
import Admin from "./Admin.vue"
import CV from "./CV.vue"
import Form from "./Form.vue"

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
    ],
})

export default router;