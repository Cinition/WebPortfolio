<template>
    <div class="Vertical">
        <div class="Horizontal TitleFont">
            <div class="IntroList" v-if="this.screenWidth >= 1500">
                <span class="Intro">Hi, <br> I am</span>
                <span class="Name">Cornee Nieuwenhuis</span>
                <span class="Titles">Tools Engineer - Graphics Engineer</span>
            </div>
            <div class="IntroList" v-else>
                
                <div class="RelativeHolder" id="Intro">
                    <span id="Hi" class="Intro" v-bind:class="{Phone : this.screenWidth <= 500, Tablet : this.screenWidth <= 1500 && this.screenWidth > 500}">Hi,</span>
                    <span id="Iam" class="Intro" v-bind:class="{Phone : this.screenWidth <= 500, Tablet : this.screenWidth <= 1500 && this.screenWidth > 500}">I am</span>
                </div>
                <div class="RelativeHolder" style="z-index: 4; padding-bottom:15px">
                    <div class="AnimationSwish" v-bind:class="{StartAnimation: this.AnimationHolder.NameSwishStart, EndAnimation: this.AnimationHolder.NameSwishEnd}"></div>
                    <span class="Name" v-bind:class="{Phone : this.screenWidth <= 500, Tablet : this.screenWidth <= 1500 && this.screenWidth > 500, Intro: !this.NameTextVisible}">Cornee</span>
                </div>
                <div class="RelativeHolder">
                    <span class="Titles" v-bind:class="{Phone : this.screenWidth <= 500, Tablet : this.screenWidth <= 1500 && this.screenWidth > 500, Visible : this.TitlesTextVisible}">Tools & Graphics <br> Engineer</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'Homepage',
    props: {
        DoAnimation: Boolean
    },
    data() {
        return {
            SmallerScreen: false,
            NameTextVisible: false,
            TitlesTextVisible: false,
            screenWidth: Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.documentElement.clientWidth),
            AnimationHolder: {NameSwishStart: false, NameSwishEnd: false, }
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
        },
        IntroAnimation() {
            setTimeout(() => {
                this.AnimationHolder.NameSwishStart = true;
                setTimeout(() => {
                    this.AnimationHolder.NameSwishStart = false; 
                    this.NameTextVisible = true; 
                    this.AnimationHolder.NameSwishEnd = true; 
                    this.TitlesTextVisible = true;
                    setTimeout(() => {
                        this.AnimationHolder.NameSwishEnd = false;
                    }, 750)
                }, 750)
            }, 900)
        }
    },
    mounted () {
        if (this.DoAnimation) {
            this.IntroAnimation();
        }
        window.addEventListener("resize", this.ResizeHandler);
    }
}
</script>
<style scoped>

    .Vertical {
        overflow: hidden;
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

    .RelativeHolder {
        position: relative;
        width: 100%;
        background-color: var(--PrimaryBackground);
    }
    #Intro.RelativeHolder {
        display: flex;
        flex-direction: column;
        justify-content: left;
    }

    .AnimationSwish {
        position: absolute;
        height: calc(100% + 15px);
        left: calc(50% - 100vh);
        width: 0;
        background-color: var(--PrimaryColor);
        z-index: 5;
    }
    .AnimationSwish.StartAnimation {
        transition: width 0.75s;
        width: 200vh;
    }
    .AnimationSwish.EndAnimation {
        transition: width 0.75s, left 0.75s;
        width: 0vh;
        left: calc(50% + 100vh);
    }

    .Name {
        line-height: 110px;
        font-size: 130px;
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
    .Name.Intro {
        color: var(--PrimaryBackground);
    }
    .Name.Intro::after {
        background-color: var(--PrimaryBackground);
    }

    .Titles {
        width: 100%;
        position: absolute;
        margin-top: 20px;
        font-size: 50px;
        text-align: center;
        top: -100px;
        color: #dadada00;
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
    .Titles.Visible {
        transition: top 0.75s, color 1.5s;
        color: var(--Text);
        top: 0;
    }

    @keyframes typing {
        from {left: 0;}
        to { left: 100%;}
    }

    #Hi::after {
        position: absolute;
        left: 0;
        content: "";
        height: 100%;
        background-color: var(--PrimaryBackground);
        width: 100%;
        animation: 
            typing 0.75s steps(6, end) forwards;
    }

    #Iam::after {
        position: absolute;
        left: 0;
        content: "";
        height: 100%;
        background-color: var(--PrimaryBackground);
        width: 100%;
        animation: 
            typing 0.75s steps(8, end) forwards;
        animation-delay: 0.6s;
    }

</style>