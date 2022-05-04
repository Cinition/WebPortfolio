<template>
    <div class="Container">
        <div class="WishlistTitle">
            <h1 class="TitleFont">Wishlist</h1>
            <h2 class="TextFont">Cornee</h2>
        </div>
        <div class="Items">
            <div class="Item" v-for="item in Data" :key="item">
                <p class="ItemNr TitleFont">{{item.nr}}</p>
                <div class="ItemBody TextFont" @click="openURL(item.url)">
                    <h1 class="ItemTitle">{{item.title}}</h1>
                    <p class="ItemDesc">{{item.description}}</p>
                    <a class="ItemLink">{{item.price}}</a>
                </div>
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
    methods: {
        openURL( url ) {
            window.open(url, '_blank').focus();
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
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    .Item {
        display: flex;
        flex-direction: row;
        margin-top: 40px;
        align-items: center;
    }

    .ItemNr {
        height: 50px;
        width: 50px;
        text-align: center;
        line-height: 50px;
        background-color: var(--SecondaryBackground);
        color: var(--PrimaryColor);
        font-size: 35px;
        margin: 0 30px 0 0;
        padding: 0;
    }

    .ItemBody{
        background-color: var(--SecondaryBackground);
        color: var(--Text);
        padding: 10px;
        border: 2px solid var(--SecondaryBackground);
    }
    .ItemBody:hover {
        border: 2px solid var(--PrimaryColor);
        cursor: pointer;
    }
    .ItemBody h1 {
        padding: 0;
        margin: 0;
        color: var(--PrimaryColor);
    }
    .ItemBody p {
        padding: 0;
        margin: 10px 0;
    }
    .ItemBody a {
        padding: 0;
        margin: 0;
        text-decoration: none;
    }

</style>