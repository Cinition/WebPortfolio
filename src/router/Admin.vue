<template>
    <!-- Login -->
    <div v-if="!this.LoggedIn" class="HorizontalCenter">
        <div class="VerticalCenter">
            <div class="LoginScreen">
                <img src="../assets/Logo.svg" alt="Logo">
                <input v-model="Username" class="TitleFont" type="text" name="Username" id="username" placeholder="Username">
                <input v-model="Password" class="TitleFont" type="password" name="Password" id="password" placeholder="Password">
                <input class="TitleFont" type="submit" value="Login" v-on:click.prevent="SubmitLogin">
            </div>
            <p class="ErrorMessage TextFont" v-bind:class="{NoError: this.Message == ''}">
                {{this.Message}}
            </p>
        </div>
    </div>

    <!-- ADMIN PANEL -->
    <div v-else>
        <div class="AdminNav">
            <img src="../assets/Logo.svg" alt="Logo">
            <p class="TitleFont" v-on:click="this.AdminNavClick(1)" v-bind:class="{Active: this.AdminNav == 1}" >Traffic</p>
            <p class="TitleFont" v-on:click="this.AdminNavClick(2)" v-bind:class="{Active: this.AdminNav == 2}">Portfolio</p>
            <p class="TitleFont" v-on:click="this.AdminNavClick(3)" v-bind:class="{Active: this.AdminNav == 3}">Forms</p>
            <button class="Logout" v-on:click="this.LoggedIn = false" ><LogOutIcon/></button>
        </div>

        <div v-if="this.AdminNav == 1">
            <canvas></canvas>
            <div class="TrafficInfo"></div>
        </div>

        <div v-if="this.AdminNav == 3">
            <div class="TrafficInfo"></div>
        </div>

    </div>

</template>

<script>

import {LogOutIcon} from "@zhuowenli/vue-feather-icons"

export default {
    name: 'Admin',
    components: {
        LogOutIcon
    },
    data() {
        return {
            LoggedIn: false,
            Username: "",
            Password: "",
            Message: '',
            AdminNav: 1
        }
    },
    methods: {
        SubmitLogin() {

            this.LoggedIn = true;

            var headers = {
                'Content-Type': 'application/json',
                'Access-Control-Request-Headers': '*',
                'Access-Control-Allow-Origin': '*',
                'api-key': 'VLxsgxGto4D0hngX09giBsu4d0DlE9tTEjgxTLzVuoYjLQbEZUNzI61zSHwQkEOw'
            };

            var data = {
                "collection": "login",
                "database": "cornee_web_api",
                "dataSource": "Cluster0",
                "filter": {
                    "username": this.username,
                    "password": this.password
                }
            };

            this.axios.post("https://data.mongodb-api.com/app/data-zelkx/endpoint/data/beta", data, { headers: headers,})
                .then((response) => {
                    console.log(response)
                }).catch((error) => {
                    console.log(error)
                })
        },

        AdminNavClick(id) {
            this.AdminNav = id;
        }
    }
}

</script>

<style scoped>

    .HorizontalCenter {
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .VerticalCenter {
        height: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .LoginScreen {
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        background-color: var(--SecondaryBackground);
        box-shadow: 0 0 20px 5px var(--DropShadow);
        margin-bottom: 50px;
        z-index: 2;
    }
    .LoginScreen img {
        width: 75px;
        margin: 0 auto;
    }
    .LoginScreen input {
        transition: background-color 0.2s, color 0.2s;
        margin: 25px 0 0;
        height: 35px;
        border: 2px solid var(--PrimaryColor);
        background-color: var(--PrimaryBackground);
        width: 200px;
        color: var(--Text);
        font-size: 18px;
    }
    .LoginScreen input[type="submit"] {
        width: 150px;
        margin: 25px auto 0;
    }
    .LoginScreen input[type="submit"]:hover {
        cursor: pointer;
    }
    .LoginScreen input[type="submit"]:hover {
        background-color: var(--PrimaryColor);
        color: var(--PrimaryBackground);
    }
    .LogoutButton

    .ErrorMessage {
        transition: margin-top 0.5s, opacity 0.5s;
        position: absolute;
        width: 100%;
        margin-top: 400px;
        padding: 20px 0;
        text-align: center;
        opacity: 1;
        color: var(--Text);
        background-color: var(--SecondaryBackground);
        box-shadow: 0 0 20px 5px var(--DropShadow);
    }
    .ErrorMessage.NoError {
        margin-top: 200px;
        opacity: 0;
    }

    .AdminNav {
        height: 75px;
        width: 100%;
        padding: 0 50px;
        background-color: var(--SecondaryBackground);
        box-shadow: 0 10px 10px 5px var(--DropShadow);
        display: flex;
        flex-direction: row;
        box-sizing: border-box;
        align-items: center;
    }
    .AdminNav img {
        width: 60px;
        margin-right: 25px;
    }
    .AdminNav p {
        transition: background-color 0.2s;
        background-color: var(--SecondaryBackground);
        color: var(--Text);
        font-size: 20px;
        height: 100%;
        line-height: 75px;
        padding: 0 35px;
    }
    .AdminNav p:hover {
        cursor: pointer;
        background-color: var(--PrimaryBackground);
    }
    .AdminNav p.Active {
        background-color: var(--PrimaryBackground);
        text-decoration: underline var(--Text);
    }

    .AdminNav .Logout {
        width: 50px;
        height: 50px;
        padding: 3px 0 0 0;
        transition: background-color 0.2s;
        border-radius: 25px;
        margin-left: auto;
        border: 0;
        color: var(--Text);
        background-color: var(--SecondaryBackground);
    }
    .AdminNav .Logout:hover {
        cursor: pointer;
        background-color: var(--PrimaryBackground);
    }
    .AdminNav .Logout svg {
        width: 25px;
        height: 25px;
    }

</style>