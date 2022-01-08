<template>
    <span class="Title TitleFont">Portfolio</span>
    <PortfolioProject v-if="this.Selected" :JsonData="ProjectSelected" @close="CloseProject()" />
    <div class="OverflowHidder"></div>
    <div class="PortfolioList">
        <div class="PortfolioItem" v-for="project in Data" :key="project">
            <div class="PortfolioImage">
                <div class="PortfolioVideo" v-if="project.Video != ''">
                    <iframe :src="project.Video" :title="project.Name" frameborder="0"></iframe>
                </div>
                <img v-else-if="project.Image != ''" :src="require('@/assets/PortfolioImg/'+project.Image)">
            </div>
            <div class="PortfolioText TextFont">
                <p v-for="Page in project.Page" :key="Page">
                    {{Page.Text}}
                </p>
                <a v-if="project.Link != ''" :href="project.Link" target="_blank" rel="noopener noreferrer">Learn more about this Project</a>
            </div>
        </div>
    </div>
</template>
<script>

import PortfolioData from "../../assets/PortfolioProjects.json";

export default {
    name: 'Portfolio',
    data() {
        return {
            atTop: true,
            Data: PortfolioData
        }
    },
    methods: {
        handleScroll () {
            if (window.scrollY > 0) {
                this.atTop = false;
            } else {
                this.atTop = true;
            }
            console.log(this.atTop)
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
        overflow-y: scroll;
        width: 100%;
        height: calc(100% - 200px);
        padding-top: 200px;
        background-color: var(--PrimaryBackground);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .PortfolioItem {
        width: 80%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-bottom: 100px;
    }
    .PortfolioItem:nth-child(even) {
        flex-direction: row-reverse;
    }

    .PortfolioImage {
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .PortfolioImage img {
        width: 100%;
        border: 2px solid var(--PrimaryColor);
    }

    .PortfolioVideo {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 56%;
    }
    .PortfolioVideo iframe {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        border: 2px solid var(--PrimaryColor);
    }

    .PortfolioText {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 40%;
        color: var(--Text);
        font-size: 18px;
    }
    .PortfolioText p {
        text-align: justify;
    }
    .PortfolioText a {
        color: var(--PrimaryColor);
        text-decoration: none;
    }
    .PortfolioText a:hover {
        text-decoration: underline;
    }

</style>