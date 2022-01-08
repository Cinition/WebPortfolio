<template>
    <div id="Page">
        <div class="Vertical">
            <div class="Horizontal">
                <div class="Project">
                    <span class="Close" v-on:click="Close"><XIcon /></span>
                    <p class="ProjectTitle TitleFont">{{this.JsonData.Name}}</p>
                    <div class="Divider">
                        <div class="Showcase">
                            <iframe v-if="this.JsonData.Video != ''" :src="this.JsonData.Video" :title="this.JsonData.Name" frameborder="0"></iframe>
                            <img v-else-if="this.JsonData.Image != ''" :src="require('@/assets/PortfolioImg/'+this.JsonData.Image)">
                        </div>
                        <div class="Text TextFont">
                            <p v-for="Page in this.JsonData.Page" :key="Page">
                                {{Page.Text}}
                            </p>
                            <a v-if="this.JsonData.Link != ''" :href="this.JsonData.Link" target="_blank" rel="noopener noreferrer">Learn more about this Project</a>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    </div>
</template>
<script>

import { XIcon } from '@zhuowenli/vue-feather-icons'

export default {
    name: 'PortfolioProject',
    props: {
        JsonData: Object
    },
    components: {
        XIcon,
    },
    methods: {
        KeyDetect(event) {
            if (event.keyCode == 27) {
                this.Close();
            }
        },
        Close() {
            this.$emit('close', true);
        }
    },
    created () {
        document.addEventListener('keydown', this.KeyDetect)
    },
    unmounted () {
        document.removeEventListener('keydown', this.KeyDetect)
    }
}
</script>
<style scoped>
    
    #Page {
        position: relative;
    }

    .Vertical {
        position: absolute;
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #242424ad;
        z-index: 9;
    }

    .Horizontal {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .Project {
        position: relative;
        width: 1250px;
        background-color: var(--PrimaryBackground);
        border: 2px solid var(--PrimaryColor);
    }

    .Close {
        position: absolute;
        right: 20px;
        top: 20px;
        color: var(--Text);
    }
    .Close svg {
        width: 50px;
        height: 50px;
    }
    .Close:hover {
        cursor: pointer;
        color: var(--PrimaryColor);
    }

    .ProjectTitle {
        color: var(--PrimaryColor);
        width: 100%;
        font-size: 50px;
        text-align: center;
        margin: 25px 0 50px;
    }

    .Divider {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .Showcase {
        width: 50%;
        margin-bottom: 40px;
    }
    .Showcase img {
        width: 100%;
        border: 2px solid var(--PrimaryColor);
    }
    .Showcase iframe {
        width: 100%;
        height: 350px;
        border: 2px solid var(--PrimaryColor);
    }

    .Text {
        width: 40%;
        color: var(--Text);
        font-size: 18px;
    }
    .Text p {
        margin: 0 0 20px 0;
    }
    .Text a {
        color: var(--PrimaryColor);
        text-decoration: none;
    }
    .Text a:hover {
        text-decoration: underline;
    }

</style>