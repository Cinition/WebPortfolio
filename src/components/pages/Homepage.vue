<template>
    <div id="Vertical">
        <div id="Horizontal" class="TitleFont">
            <span id="Intro">Hi, <br> I am</span>
            <span id="Name">Cornee Nieuwenhuis</span>
            <span id="Titles">Software Engineer - Tools Engineer</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Homepage',
    data() {
        return {
            SmallerScreen: false
        }
    }
}
</script>
<style scoped>

    #Vertical {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        background-color: var(--PrimaryBackground);
    }

    #Horizontal {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 150px;
    }

    #Intro {
        line-height: 100px;
        font-size: 100px;
        color: var(--Text);
    }

    #Name {
        line-height: 110px;
        font-size: 130px;
        position: relative;
        color: var(--PrimaryColor);
        padding-bottom: 20px;
    }
    #Name::after {
        content: "";
        bottom: 0px;
        left: 0;
        position: absolute;
        height: 5px;
        width: 100%;
        background-color: var(--PrimaryColor);
        border-radius: 5px;
    }

    #Titles {
        margin-top: 20px;
        font-size: 50px;
        text-align: center;
        color: var(--Text);
    }

</style>