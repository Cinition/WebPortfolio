<template>
    <span v-if="this.screenWidth > 1500" class="Title TitleFont">About Me</span>
    <div v-if="TransitionDirection == true" class="DownTransition" :class="{DownStartAnimation: StartTransitioning, DownEndAnimation: EndTransitioning}"></div>
    <div v-else class="UpTransition" :class="{UpStartAnimation: StartTransitioning, UpEndAnimation: EndTransitioning}"></div>
    <div id="Page">
        <div class="PhoneMe" v-if="this.screenWidth <= 1500">
            <p class="PhoneTitle TitleFont">Who am I?</p>
            <img src="../../assets/Me.jpg" alt="Picture of me">
            <p class="PhoneText TextFont">
                Hi There! I'm am Cornee Nieuwenhuis as you might have noticed by the homepage. 
                I'm from The Netherlands but have recently moved to Sweden for my current school PSQ. 
                At PSQ i have learned allot abot, not only game programming but also my social skills 
                and how to move futher into this market.
            </p>
            <p class="PhoneText TextFont">
                I am an aspiring Application/Software Engineer that wants to make software for designer 
                and artist to make their jobs better even if its just a little bit. 
                To do that i have these skills to make those applications a reality.
            </p>
            <p class="PhoneTitle TitleFont">My Skills</p>
            <p class="PhoneText TextFont">
                Hi There! I'm am Cornee Nieuwenhuis as you might have noticed by the homepage. 
                I'm from The Netherlands but have recently moved to Sweden for my current school PSQ. 
                At PSQ i have learned allot abot, not only game programming but also my social skills 
                and how to move futher into this market.
            </p>
            
            <div class="SkillListingDivider">
                <ul class="TextFont">
                    <li>Quick Learner</li>
                    <li>Ambitious</li>
                    <li>Independant</li>
                    <li>Hard Worker</li>
                    <li>Good Communicator</li>
                </ul>
                <ul class="TextFont">
                    <li>Quick Learner</li>
                    <li>Ambitious</li>
                    <li>Independant</li>
                    <li>Hard Worker</li>
                    <li>Good Communicator</li>
                </ul>
            </div>
            
            <p class="PhoneText TextFont">
                <br>
                Hi There! I'm am Cornee Nieuwenhuis as you might have noticed by the homepage. 
                I'm from The Netherlands but have recently moved to Sweden for my current school PSQ. 
                At PSQ i have learned allot abot, not only game programming but also my social skills 
                and how to move futher into this market.
            </p>
            
            <div class="SkillListingDivider">
                <ul class="TextFont">
                    <li>Quick Learner</li>
                    <li>Ambitious</li>
                    <li>Independant</li>
                    <li>Hard Worker</li>
                    <li>Good Communicator</li>
                </ul>
            </div>
        </div>
        <div class="Vertical" v-else>
            <ChevronsUpIcon class="UpArrow" v-on:click="this.UpStartTransition()" v-if="this.AboutScreen == 2"/>
            <ChevronsDownIcon class="DownArrow" v-on:click="this.DownStartTransition()" v-if="this.AboutScreen == 1"/>
            <div class="Horizontal" v-if="this.AboutScreen == 1">
                <div class="Divider">
                    <div class="Text">
                        <span class="TitleFont">Who am I?</span>
                        <p class="TextFont">
                            Hi There! I'm am Cornee Nieuwenhuis as you might have noticed by the homepage. 
                            I'm from The Netherlands but have recently moved to Sweden for my current school PSQ. 
                            At PSQ i have learned allot abot, not only game programming but also my social skills 
                            and how to move futher into this market.
                            <br><br>
                            I am an aspiring Application/Software Engineer that wants to make software for designer 
                            and artist to make their jobs better even if its just a little bit. 
                            To do that i have these skills to make those applications a reality.
                        </p>
                    </div>
                    <div class="Image">
                        <img src="../../assets/Me.jpg" alt="Picture of me">
                    </div>
                </div>
            </div>
            <div class="Horizontal" v-if="this.AboutScreen == 2">
                <span class="MySkills TitleFont">My Skills</span>
                <div class="Divider">
                    <div class="SkillText">
                        <p class="TextFont">
                            Hi There! I'm am Cornee Nieuwenhuis as you might have noticed by the homepage. 
                            I'm from The Netherlands but have recently moved to Sweden for my current school PSQ. 
                            At PSQ i have learned allot abot, not only game programming but also my social skills 
                            and how to move futher into this market.
                        </p>
                        <div class="SkillListingDivider">
                            <ul class="TextFont">
                                <li>C++</li>
                                <li>C#</li>
                                <li>Rust</li>
                                <li>Python</li>
                                <li>HTML/CSS</li>
                            </ul>
                            <ul class="TextFont">
                                <li>English</li>
                                <li>Dutch</li>
                                <li>Swedish</li>
                                <li>Polish</li>
                                <li>German</li>
                            </ul>
                        </div>
                    </div>
                    <div class="SkillText">
                        <p class="TextFont">
                            Hi There! I'm am Cornee Nieuwenhuis as you might have noticed by the homepage. 
                            I'm from The Netherlands but have recently moved to Sweden for my current school PSQ. 
                            At PSQ i have learned allot abot, not only game programming but also my social skills 
                            and how to move futher into this market.
                        </p>
                        
                        <div class="SkillListingDivider">
                            <ul class="TextFont">
                                <li>Quick Learner</li>
                                <li>Ambitious</li>
                                <li>Independant</li>
                                <li>Hard Worker</li>
                                <li>Good Communicator</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { ChevronsUpIcon, ChevronsDownIcon } from '@zhuowenli/vue-feather-icons';

export default {
    name: 'AboutMe',
    components: {
        ChevronsUpIcon, 
        ChevronsDownIcon
    },
    data() {
        return {
            AboutScreen : 1,
            StartTransitioning: false,
            EndTransitioning: false,
            TransitionDirection: true, // True == Down, False == Up
            screenWidth: Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.documentElement.clientWidth)
        }
    },
    methods: {
        UpStartTransition() {
            if (this.EndTransitioning == true)
                return;
            this.StartTransitioning = true;
            setTimeout(() => {this.StartTransitioning = false; this.ArrowClick(); this.UpEndTransition();}, 750)
        },
        UpEndTransition() {
            this.EndTransitioning = true;
            setTimeout(() => {this.EndTransitioning = false; this.TransitionDirection = true; }, 750)
        },
        DownStartTransition() {
            if (this.EndTransitioning == true)
                return;
            this.StartTransitioning = true;
            setTimeout(() => {this.StartTransitioning = false; this.ArrowClick(); this.DownEndTransition();}, 750)
        },
        DownEndTransition() {
            this.EndTransitioning = true;
            setTimeout(() => {this.EndTransitioning = false; this.TransitionDirection = false; }, 750)
        },
        ArrowClick() {
            if (this.AboutScreen == 1) {
                this.AboutScreen = 2;
            }
            else if (this.AboutScreen == 2) {
                this.AboutScreen = 1;
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
    }
}

</script>

<style scoped>

    .UpTransition {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 0;
        background-color: var(--SecondaryBackground);
        z-index: 9;
    }

    .UpStartAnimation {
        transition: height 0.750s, top 0.750s;
        height: 100%;
        top: 0;
    }

    .UpEndAnimation {
        transition: height 0.750s, top 0.750s;
        height: 0;
        top: 100%;
    }

    .DownTransition {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: 0;
        background-color: var(--SecondaryBackground);
        z-index: 9;
    }

    .DownStartAnimation {
        transition: height 0.750s, top 0.750s;
        height: 100%;
        top: 0;
    }

    .DownEndAnimation {
        transition: height 0.750s, top 0.750s;
        height: 0;
        top: 0;
    }

    .PhoneMe {
        background-color: var(--PrimaryBackground);
        padding: 0 5% 75px 5%;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        margin-left: auto;
        margin-right: auto;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .PhoneMe img {
        width: 80%;
        max-width: 380px;
        height: 450px;
        margin-left: auto;
        margin-right: auto;
        object-fit: cover;
        border: 2px solid var(--PrimaryColor);
    }

    .PhoneTitle {
        width: 100%;
        font-size: 75px;
        text-align: center;
        color: var(--PrimaryColor);
        margin: 35px 0;
    }

    .PhoneText {
        width: 80%;
        max-width: 450px;
        text-align: justify;
        color: var(--Text);
        margin-left: auto;
        margin-right: auto;
    }


    #Page {
        height: 100%;
        width: 100%;
    }

    .Vertical {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        background-color: var(--PrimaryBackground);
        overflow-y: hidden;
    }

    .Horizontal {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .Divider {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .Text {
        display: flex;
        flex-direction: column;
        width: 600px;
        margin-right: 100px;
    }
    .Text span {
        text-align: right;
        font-size: 100px;
        color: var(--PrimaryColor);
    }
    .Text p {
        text-align: justify;
        font-size: 20px;
        color: var(--Text);
    }

    .Image {
        height: 100%;
        width: 400px
    }
    .Image img {
        border: 5px solid var(--PrimaryColor);
        height: 100%;
        width: 100%;
    }

    .UpArrow {
        position: absolute;
        left: calc(50% - 10px);
        top: 120px;
        height: 50px;
        width: 50px;
        color: var(--PrimaryColor);
        stroke-width: 1.5px;
        cursor: pointer;
    }

    .DownArrow {
        position: absolute;
        left: calc(50% - 10px);
        bottom: 20px;
        height: 50px;
        width: 50px;
        color: var(--PrimaryColor);
        stroke-width: 1.5px;
        cursor: pointer;
    }

    .MySkills {
        font-size: 100px;
        color: var(--PrimaryColor);
        text-align: center;
    }

    .SkillText {
        color: var(--Text);
        width: 450px;
        font-size: 20px;
        text-align: justify;
    }
    .SkillText:first-of-type {
        margin-right: 100px;
    }

    ul{
        padding: 0;
    }

    li {
        padding-left: 5px;
        color: var(--PrimaryColor);
    }
    li::first-line {
        color: var(--Text);
    }

    .SkillListingDivider {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .PhoneMe .SkillListingDivider{
        width: 80%;
        max-width: 450px;
        margin-left: auto;
        margin-right: auto;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

</style>