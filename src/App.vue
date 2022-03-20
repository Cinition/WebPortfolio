<template>
    <router-view/>
</template>

<script>

export default {
    name: 'App',
    data() {
      return{
        CvParam: false
      }
    },
    created () {
        document.title = "Cornee Nieuwenhuis";
    },
    mounted () {
        const CVRequest = this.RequestCV();
        if (CVRequest) {
            this.$router.push('/CV')
        }
    },
    methods: {
        RequestCV() {
            let returnvalue = false;
            let uri = window.location.href.split('?');
            if(uri.length === 2) {
                let vars = uri[1].split('&');
                let tmp = '';
                vars.forEach(function(v) {
                    tmp = v.split('=');
                    if(tmp.length === 2 && tmp[0] === "CV") {
                        if (tmp[1].toString() === "true") {
                            returnvalue = true;
                        }
                    }
                });
            }
            return returnvalue;
        },
    }
}
</script>

<style>

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Quicksand:wght@300&display=swap');

    :root {
        --PrimaryBackground: #242424;
        --SecondaryBackground: #303030;
        --Text: #DADADA;
        --PrimaryColor: #CBAC57;
        --DropShadow: #00000083;
        --TransitionTime: 0.5s;
    }

    body {
        background-color: var(--PrimaryBackground);
        height: 100vh;
        margin: 0;
    }

    .TitleFont {
        font-family: Quicksand, sans-serif;
    }
    .TextFont {
        font-family: Montserrat, sans-serif;
    }

    .Title {
        position: absolute;
        top: 25px;
        width: 100%;
        text-align: center;
        font-size: 60px;
        color: var(--PrimaryColor);
        z-index: 8;
    }

    /* Firefox ScrollBar Settings */
    * {
        scrollbar-color: var(--PrimaryColor) var(--PrimaryBackground);
    }

    /* Works on Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
        width: 17px;
    }

    *::-webkit-scrollbar-track {
        background: var(--PrimaryBackground);
    }

    *::-webkit-scrollbar-thumb {
        background-color: var(--PrimaryColor);
        border-radius: 17px;
    }

</style>
