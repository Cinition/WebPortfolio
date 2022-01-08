<template>
    <div class="Item" @mouseover="this.IsHovered = true" @mouseleave="this.IsHovered = false">
        <div v-if="this.IsHovered == true" class="HoveredItem">
            <div class="VerticalCenter">
                <span class="TextFont">{{this.Title}}</span>
            </div>
        </div>
        <img v-if="this.ImageSrc != ''" :src="require('@/assets/PortfolioImg/'+this.ImageSrc)">
        <div v-else class="NoImage">
            <span v-if="this.IsHovered == false" class="TextFont">No Image Found</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PortfolioItem',
    props: {
        Title: String,
        ImageSrc: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            IsHovered: false
        }
    }
}
</script>
<style scoped>
    
    .Item {
        border: 2px solid var(--PrimaryColor);
        position: relative;
        width: 500px;
        height: 280px;
    }
    .Item img {
        height: 100%;
        width: 100%;
    }

    .HoveredItem {
        cursor: pointer;
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: #cbac579b;
    }

    .VerticalCenter {
        display: flex;
        height: 100%;
        width: 100%;
        flex-direction: column;
        justify-content: center;
    }
    .VerticalCenter span {
        text-align: center;
        font-size: 30px;
        color: var(--Text);
    }

    .NoImage {
        display: flex;
        height: 100%;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        background-color: var(--SecondaryBackground);
    }
    .NoImage span {
        text-align: center;
        font-size: 30px;
        color: var(--PrimaryColor);
    }

</style>