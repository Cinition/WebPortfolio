<template>
    <span class="Title TitleFont">Portfolio</span>
    <PortfolioProject v-if="this.Selected" :JsonData="ProjectSelected" @close="CloseProject()" />
    <div class="OverflowHidder"></div>
    <div class="PortfolioList">
        <div class="PortfolioItem" v-for="project in Data" :key="project" v-on:click="OpenProject({project})" >
            <PortfolioItem :Title="project.Name" :ImageSrc="project.Image"/>
        </div>
    </div>
</template>
<script>

import PortfolioItem from "../PortfolioItem.vue"
import PortfolioProject from "../PortfolioProject.vue"

import PortfolioData from "../../assets/PortfolioProjects.json";

export default {
    name: 'Portfolio',
    components: {
        PortfolioItem,
        PortfolioProject
    },
    data() {
        return {
            atTop: true,
            Selected: false,
            ProjectSelected: 'JsonReader',
            Data: PortfolioData
        }
    },
    methods: {
        OpenProject(Project) {
            this.Selected = true;
            this.ProjectSelected = Project.project;
            console.log(this.ProjectSelected)
        },
        CloseProject() {
            this.Selected = false;
            this.ProjectSelected = null;
        },
        handleScroll () {
            if (window.scrollY > 0) {
                this.atTop = false;
            } else {
                this.atTop = true;
            }
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted () {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>
<style scoped>

    .OverflowHidder {
        position: relative;
    }
    .OverflowHidder::after{
        content: "";
        position: absolute;
        height: 150px;
        width: calc(100% - 17px);
        background-color: var(--PrimaryBackground);
        z-index: 7;
    }

    .PortfolioList {
        height: calc(100% - 175px);
        width: calc(100% - 100px);
        padding: 175px 50px 0 50px;
        overflow-y: auto;
        background-color: var(--PrimaryBackground);
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
        grid-template-rows: 282px;
    }

    .PortfolioItem {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

</style>