<template>
    <div class="Container">
        <div class="WishlistTitle">
            <h1 class="TitleFont">Wishlist</h1>
            <h2 class="TextFont">Cornee</h2>
        </div>
        <div class="Items">
            <div v-for="item in Data" :key="item">
                <p>{{item.nr}}</p>
            </div>
        </div>
    </div>
</template>

<script>

import WishlistData from "../assets/Wishlist.json";

export default {
    name: 'Wishlist',
    data() {
        return {
            Data: WishlistData
        }
    },
}

</script>

<style scoped>
    
    .Container {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .WishlistTitle h1 {
        font-size: 75px;
        margin: 0;
        color: var(--PrimaryColor);
        text-align: center;
    }
    .WishlistTitle h2 {
        font-size: 50px;
        margin: 0;
        color: var(--Text);
        text-align: center;
    }

    .Items {
        width: 50%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

</style>