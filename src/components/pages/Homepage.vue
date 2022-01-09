<template>
    <div class="Vertical">
        <div class="Horizontal TitleFont">
            <div class="IntroList" v-if="this.screenWidth >= 1500">
                <span class="Intro">Hi, <br> I am</span>
                <span class="Name">Cornee Nieuwenhuis</span>
                <span class="Titles">Tools Engineer - Graphics Engineer</span>
            </div>
            <div class="IntroList" v-else>
                <span class="Intro" v-bind:class="{Phone : this.screenWidth <= 500, Tablet : this.screenWidth <= 1500 && this.screenWidth > 500}">Hi, <br> I am</span>
                <span class="Name" v-bind:class="{Phone : this.screenWidth <= 500, Tablet : this.screenWidth <= 1500 && this.screenWidth > 500}">Cornee</span>
                <span class="Titles" v-bind:class="{Phone : this.screenWidth <= 500, Tablet : this.screenWidth <= 1500 && this.screenWidth > 500}">Tools & Graphics <br> Engineer</span>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'Homepage',
    data() {
        return {
            SmallerScreen: false,
            screenWidth: Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.documentElement.clientWidth),
        }
    },
    methods: {
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
    }
}
</script>
<style scoped>

    .Vertical {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        background-color: var(--PrimaryBackground);
    }

    .Horizontal {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 150px;
    }
    
    .IntroList {
        display: flex;
        flex-direction: column;
    }

    .Intro {
        line-height: 100px;
        font-size: 100px;
        color: var(--Text);
    }
    .Intro.Phone {
        font-size: 50px;
        line-height: 60px;
    }

    .Name {
        line-height: 110px;
        font-size: 130px;
        position: relative;
        color: var(--PrimaryColor);
        padding-bottom: 20px;
    }
    .Name::after {
        content: "";
        bottom: 0px;
        left: 0;
        position: absolute;
        height: 5px;
        width: 100%;
        background-color: var(--PrimaryColor);
        border-radius: 5px;
    }
    .Name.Phone {
        line-height: 50px;
        font-size: 65px;
        width: 215px;
        padding-bottom: 20px;
    }
    .Name.Tablet {
        width: 435px;
    }

    .Titles {
        margin-top: 20px;
        font-size: 50px;
        text-align: center;
        color: var(--Text);
    }
    .Titles.Phone {
        margin-left: auto;
        margin-right: auto;
        font-size: 25px;
    }
    .Titles.Tablet {
        margin-left: auto;
        margin-right: auto;
        font-size: 40px;
    }

</style>