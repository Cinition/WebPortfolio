<template>
    <div class="Navbar" v-if="this.screenWidth > 850">
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
    <div class="PhoneNavbar" v-if="this.screenWidth <= 850">
        <!-- Logo -->
        <img src="../assets/Logo.svg" alt="Logo">
        <div class="Dropdown" v-bind:class="{Active: this.dropDown == true}" v-on:click="this.dropDown = !this.dropDown">
            <ChevronUpIcon/>
        </div>
    </div>
    <div class="DropdownList" v-bind:class="{Active: this.dropDown == true}" v-if="this.screenWidth <= 850">
        <p class="TextFont" v-for="title in titles" :key="title" v-on:mouseenter="this.MouseEnter({title})" :class="{Active: title == this.current}" v-on:click="Click({title})">{{title}}</p>
    </div>
</template>
<script>

import { GithubIcon, LinkedinIcon, TwitterIcon, ChevronUpIcon } from '@zhuowenli/vue-feather-icons';

export default {
    name: 'Navbar',
    components : {
        GithubIcon,
        LinkedinIcon,
        TwitterIcon,
        ChevronUpIcon
    },
    data() {
        return {
            current: "Homepage",
            hovering: 'Homepage',
            barData: { Homepage: false, AboutMe: false, Portfolio: false},
            titles: ["Homepage", "About Me", "Portfolio"],
            screenWidth: Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.documentElement.clientWidth),
            dropDown: false
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
            this.dropDown = false;
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
        ResizeHandler() {
            this.screenWidth = Math.max(
            document.body.scrollWidth,
            document.documentElement.scrollWidth,
            document.body.offsetWidth,
            document.documentElement.offsetWidth,
            document.documentElement.clientWidth,
            );
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

    .PhoneNavbar {
        position: relative;
        width: 100%;
        height: 100px;
        background-color: var(--SecondaryBackground);
        box-shadow: 0px 10px 10px 5px var(--DropShadow);
        z-index: 10;
    }
    .PhoneNavbar img {
        height: 80px;
        width: 80px;
        margin-top: 10px;
        margin-left: calc(50% - 40px);
    }

    .Dropdown {
        transition: transform 0.5s;
        transition-timing-function: ease-in-out;
        position: absolute;
        right: 20px;
        top: 20px;
        height: 60px;
        width: 60px;
    }
    .Dropdown svg {
        height: 100%;
        width: 100%;
        color: var(--PrimaryColor);
    }
    .Dropdown:hover {
        cursor: pointer;
    }

    .Dropdown.Active {
        transform: rotate(540deg);
    }

    .DropdownList {
        position: absolute;
        background-color: var(--PrimaryColor);
        z-index: 9;
        width: 100%;
        transition: top 0.5s;
        top: -300px;
    }
    .DropdownList.Active {
        top: 100px;
    }
    .DropdownList p {
        text-align: center;
        color: var(--Text);
        font-size: 30px;
        margin: 0;
        padding: 30px 0;
    }
    .DropdownList p.Active {
        color: var(--PrimaryColor);
        background-color: var(--PrimaryBackground);
    }

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

    .Navbar img {
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