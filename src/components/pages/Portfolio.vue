<template>
    <span class="Title TitleFont" v-bind:class="{Phone: this.screenWidth <= 500}">Some of my work</span>
    <div class="OverflowHidder" v-bind:class="{Shadow: this.atTop == false, Phone: this.screenWidth <= 500}"></div>
    <div class="PortfolioList" id="List" v-bind:class="{Phone: this.screenWidth <= 500}">
        <div class="PortfolioItem" v-for="project in Data" :key="project" v-bind:class="{md: this.screenWidth <= 1500 , Phone: this.screenWidth <= 500}">
            <p v-if="this.screenWidth <= 1500" class="PortfolioTitle TitleFont" v-bind:class="{Phone: this.screenWidth <= 500}">{{project.Name}}</p>
            <div class="PortfolioImage" v-bind:class="{md : this.screenWidth <= 1500}">
                <div class="PortfolioVideo" v-if="project.Video != ''">
                    <iframe :src="project.Video" :title="project.Name" frameborder="0"></iframe>
                </div>
                <img v-else-if="project.Image != ''" :src="require('@/assets/PortfolioImg/'+project.Image)">
            </div>
            <div class="PortfolioText TextFont" v-bind:class="{md : this.screenWidth <= 1500, Phone: this.screenWidth <= 500}">
                <p v-if="this.screenWidth > 1500" class="PortfolioTitle TitleFont">{{project.Name}}</p>
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
            Data: PortfolioData,
            screenWidth: Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.documentElement.clientWidth)
        }
    },
    methods: {
        handleScroll () {
            if (document.getElementById("List").scrollTop > 0) {
                this.atTop = false;
            } else {
                this.atTop = true;
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
        }
    },
    mounted () {
		window.addEventListener("resize", this.ResizeHandler);
		document.getElementById("List").addEventListener("scroll", this.handleScroll);
    }
}
</script>
<style scoped>

    .Title.Phone {
        font-size: 40px;
    }

    .OverflowHidder {
        position: relative;
    }
    .OverflowHidder::after{
        transition: box-shadow 0.25s;
        box-shadow: 0;
        content: "";
        position: absolute;
        height: 150px;
        width: calc(100% - 17px);
        background-color: var(--PrimaryBackground);
        z-index: 7;
		clip-path: inset(0 0px -50px -5px);
    }
    .OverflowHidder.Phone::after{
        height: 100px;
    }
    .OverflowHidder.Shadow::after {
        box-shadow: 0px 10px 10px 5px var(--DropShadow);
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
    .PortfolioList.Phone {
        padding-top: 100px;
        height: calc(100% - 100px);
    }

    .PortfolioItem {
        width: 80%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 100px;
    }
    .PortfolioItem:nth-child(even) {
        flex-direction: row-reverse;
    }

    .PortfolioItem.md {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 100px;
    }
    .PortfolioItem.Phone {
        width: 95%;
    }

    .PortfolioImage {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .PortfolioImage img {
        width: 100%;
        border: 2px solid var(--PrimaryColor);
    }
    .PortfolioImage.md {
        width: 80%;
        margin-bottom: 25px;
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
    .PortfolioText.Phone {
        font-size: 16px;
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
    .PortfolioText.md {
        width: 80%;
    }

    .PortfolioTitle {
        width: 100%;
        text-align: center;
        font-size: 40px;
        color: var(--PrimaryColor);
    }

</style>