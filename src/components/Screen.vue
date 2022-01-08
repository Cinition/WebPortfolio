<template>
    <div class="Screen" v-bind:class="{Phone: this.screenWidth <= 850}">
        <Navbar @barData="StartTransition($event)"/>
        <main v-bind:class="{Phone: this.screenWidth <= 850}">
            <div class="Transition" v-if="this.screenWidth > 850" :class="{StartAnimation: StartTransitioning, EndAnimation: EndTransitioning}"></div>
            <div class="PhoneTransition" v-else :class="{StartPhoneAnimation: StartTransitioning, EndPhoneAnimation: EndTransitioning}"></div>
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
            EndTransitioning: false,
            screenWidth: Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.documentElement.clientWidth)
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
        },
        ResizeHandler() {
            this.screenWidth = Math.max(
            document.body.scrollWidth,
            document.documentElement.scrollWidth,
            document.body.offsetWidth,
            document.documentElement.offsetWidth,
            document.documentElement.clientWidth,
            );
            console.log(this.screenWidth)
        }
    },
    created () {
        window.addEventListener("resize", this.ResizeHandler);
    },
    unmounted() {
        window.removeEventListener("resize", this.ResizeHandler);
    }
}
</script>
<style scoped>

    .Screen {
        display: flex;
        flex-direction: row;
    }
    .Screen.Phone {
        flex-direction: column;
    }

    main {
        position: relative;
        width: 100%;
        height: 100vh;
    }
    main.Phone {
        height: calc(100vh - 100px);
    }

    .Transition {
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background-color: var(--SecondaryBackground);
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

    .PhoneTransition {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 0;
        background-color: var(--SecondaryBackground);
        z-index: 9;
    }

    .StartPhoneAnimation {
        transition: height 0.750s, top 0.750s;
        height: 100%;
        top: 0;
    }

    .EndPhoneAnimation {
        transition: height 0.750s, top 0.750s;
        height: 0;
        top: 100%
    }
</style>