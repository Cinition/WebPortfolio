<template>
    <div class="Navbar">
        <!-- Logo -->
        <img src="../assets/Logo.svg" alt="Logo">

        <!-- Links -->
        <div class="List">
            <div class="Item" v-for="title in titles" :key="title" v-on:mouseenter="this.MouseEnter({title})" v-on:mouseleave="this.MouseLeave()">
                <p class="TextFont" :class="{Active: title == this.current, Hovering: title == this.hovering}" v-on:click="Click({title})">{{title}}</p>
                <div class="Underline" :class="{Hovering: title == this.hovering}"></div>
            </div>
        </div>

        <!-- Icons -->
        <div class="Icons">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Cinition"><GithubIcon class="icon"/></a>
            <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/cornee-nieuwenhuis-64244ab8/"><LinkedinIcon class="icon"/></a>
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/DoggoBuoy"><TwitterIcon class="icon"/></a>
        </div>
    </div>
</template>
<script>

import { GithubIcon, LinkedinIcon, TwitterIcon } from '@zhuowenli/vue-feather-icons';

export default {
    name: 'Navbar',
    components : {
        GithubIcon, 
        LinkedinIcon, 
        TwitterIcon
    },
    data() {
        return {
            current: "Homepage",
            hovering: 'Homepage',
            barData: { Homepage: false, AboutMe: false, Portfolio: false},
            titles: ["Homepage", "About Me", "Portfolio"]
        }
    },
    methods: {
        MouseEnter(HoveredTitle) {
            this.hovering = HoveredTitle.title;
        },
        MouseLeave() {
            this.hovering = '';
        },
        Click(ClickedTitle) {

            if (this.current == ClickedTitle.title)
                return;

            this.barData.Homepage = false;
            this.barData.AboutMe = false;
            this.barData.Portfolio = false;

            if (ClickedTitle.title == "Homepage") {
                this.barData.Homepage = true
            } else if (ClickedTitle.title == "About Me") {
                this.barData.AboutMe = true
            } else if (ClickedTitle.title == "Portfolio") {
                this.barData.Portfolio = true
            }
            this.current = ClickedTitle.title;
            this.$emit('barData', this.barData);
        },
    }
}
</script>
<style scoped>

    .Navbar {
        height: 100vh;
        width: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        background-color: var(--SecondaryBackground);
        box-shadow: 10px 0px 10px 5px var(--DropShadow);
        z-index: 10;
    }

    img {
        height: 100px;
        width: 100px;
        padding: 25px;
    }

    .List {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .Item {
        position: relative;
        margin: 15px 0;
    }

    .Item p {
        position: relative;
        color: var(--Text);
        text-align: center;
        padding: 0 0 5px 0;
        margin: 0;
    }
    .Item p.Active {
        color: var(--PrimaryColor);
    }
    .Item p.Hovering {
        color: var(--PrimaryColor);
        cursor: pointer;
    }

    .Icons {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .Icons svg {
        height: 30px;
        width: 30px;
        color: var(--Text);
        margin-bottom: 15px;
        stroke-width: 1.25px;
    }

    .Icons svg:hover {
        color: var(--PrimaryColor);
        cursor: pointer;
        stroke-width: 1.5px;
    }

    .Underline  {
        position: absolute;
        width: 0;
        height: 3px;
        left: 50%;
        bottom: 0;
        border-radius: 5px;
        background-color: var(--PrimaryColor);
        transition: width 0.25s, left 0.25s;
    }

    .Underline.Hovering {
        width: 100%;
        left: 0;
    }

</style>