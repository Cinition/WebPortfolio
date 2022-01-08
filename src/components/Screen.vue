<template>
    <div class="Screen">
        <Navbar @barData="StartTransition($event)"/>
        <main>
            <div class="Transition" :class="{StartAnimation: StartTransitioning, EndAnimation: EndTransitioning}"></div>
            <!-- Main -->
            <Homepage v-if="this.CurrentPage == 1"/>
            <AboutMe v-if="this.CurrentPage == 2"/>
            <Portfolio v-if="this.CurrentPage == 3"/>
        </main>
    </div>
</template>
<script>

import Navbar from './Navbar.vue'
import Homepage from './pages/Homepage.vue'
import AboutMe from './pages/AboutMe.vue'
import Portfolio from './pages/Portfolio.vue'

export default {
    name: 'Screen',
    components: {
        Navbar,
        Homepage,
        AboutMe,
        Portfolio
    },
    data() {
        return {
            CurrentPage : 1, // 1 = Mainpage, 2 = About Me, 3 = Portfolio
            StartTransitioning: false,
            EndTransitioning: false
        }
    },
    methods: {
        StartTransition(data) {
            if (this.EndTransitioning == true)
                return;
            this.StartTransitioning = true;
            setTimeout(() => {this.StartTransitioning = false; this.ReceiveNavbarData(data); this.EndTransition();}, 750)
        },
        EndTransition() {
            this.EndTransitioning = true;
            setTimeout(() => this.EndTransitioning = false, 750)
        },
        ReceiveNavbarData(data) {
            if (data.Homepage == true) {
                this.CurrentPage = 1;
            } else if (data.AboutMe == true) {
                this.CurrentPage = 2;
            } else if (data.Portfolio == true) {
                this.CurrentPage = 3;
            }
        }
    }
}
</script>
<style scoped>

    .Screen {
        display: flex;
        flex-direction: row;
    }

    main {
        position: relative;
        width: 100%;
        height: 100vh;
    }

    .Transition {
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background-color: var(--PrimaryColor);
        z-index: 9;
    }

    .StartAnimation {
        transition: width 0.750s, left 0.750s;
        width: 100%;
        left: 0;
    }

    .EndAnimation {
        transition: width 0.750s, left 0.750s;
        width: 0;
        left: 100%
    }

</style>