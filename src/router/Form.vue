<template>

    <div class="HorizontalCenter">
        <div class="VerticalCenter">

            <a href="../"><img src="../assets/Logo.svg" alt="Logo"></a>

            <!-- Form 1 / Tools Form -->
            <div v-if="this.FormID == 1" class="Form">

                <!-- Title -->
                <h1 class="TitleFont" style="font-size: 45px;">Tools Request Form</h1>
                <p class="TextFont" style="text-align:center">I will look through all submission, but do know that not all submission wil be chosen. As i dont have unlimited time or they are not able to be developed fast.</p>

                <!-- Discord -->
                <h2 class="TitleFont">Discord</h2>
                <p class="TextFont">Needed for communcation, for example if i have questions or updates</p>
                <input class="TextFont" type="text" name="Discord" id="Discord" placeholder="Name#XXXX">

                <!-- Unreal or Unity -->
                <h2 class="TitleFont">Engine</h2>
                <p class="TextFont">Select the engine you want this tool for.</p>
                <select class="TextFont" name="engine" id="engine">
                    <option value="unity">Unity</option>
                    <option value="unreal">Unreal</option>
                </select>

                <!-- Tool description -->
                <h2 class="TitleFont">Description</h2>
                <p class="TextFont">Describe what you want the tool to accomplish, be as detailed as possible if you can.</p>
                <textarea class="TextFont" name="" id="" cols="30" rows="10"></textarea>

                <!-- Updates -->
                <h2 class="TitleFont">Updates</h2>
                <p class="TextFont">Do you want me to message you for big updates, for feedback and such?</p>
                <span class="TextFont CheckBox" v-on:click="this.CheckBoxSelected = !this.CheckBoxSelected" v-bind:class="{Checked: this.CheckBoxSelected}" type="checkbox" name="updates" id="updates"><CheckIcon/></span>

                <!-- Submit -->
                <input class="TextFont" type="submit" value="Submit">

            </div>

            <div v-else class="FormNotFound TitleFont">
                <h1>No form with this id!</h1>
            </div>

        </div>
    </div>

</template>

<script>

import {CheckIcon} from "@zhuowenli/vue-feather-icons"

export default {
    name: 'Form',
    components: {
        CheckIcon
    },
    data() {
        return {
            FormID: 0,
            CheckBoxSelected: false
        }
    },
    mounted () {
        this.FormID = this.RequestFormID();
    },
    methods: {
        RequestFormID() {
            let returnvalue = 0;
            let uri = window.location.href.split('?');
            if(uri.length === 2) {
                let vars = uri[1].split('&');
                let tmp = '';
                vars.forEach(function(v) {
                    tmp = v.split('=');
                    if(tmp.length === 2 && tmp[0] === "id") {
                        returnvalue = parseInt(tmp[1]);
                    }
                });
            }
            return returnvalue;
        },
        SubmitForm() {
            
        }
    }
}

</script>

<style scoped>

    .HorizontalCenter {
        height: 100%;
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
        align-items: center;
        padding: 25px 0;
    }
    .VerticalCenter img {
        width: 75px;
        margin-bottom: 25px;
        text-shadow: 0 0 5px var(--DropShadow);
    }

    .FormNotFound {
        color: var(--Text);
        padding: 10px 30px;
        background-color: var(--SecondaryBackground);
        border: 2px solid var(--PrimaryColor);
        box-shadow: 0 0 20px 5px var(--DropShadow);
    }

    .Form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 550px;
        box-sizing: border-box;
        background-color: var(--SecondaryBackground);
        border: 2px solid var(--PrimaryColor);
        box-shadow: 0 0 20px 5px var(--DropShadow);
    }
    .Form h1,h2 {
        font-weight: 300;
        color: var(--PrimaryColor);
        margin: 25px 0 0;
        font-size: 30px;
    }
    .Form h2 {
        width: 65%;
    }
    .Form p {
        width: 64.5%;
        color: var(--Text);
        text-align: left;
        margin: 0;
    }
    .Form input[type='text'] {
        border: 2px solid var(--PrimaryColor);
        background-color: var(--PrimaryBackground);
        color: var(--Text);
        margin: 10px 0;
        padding: 5px 5px;
        width: calc(65% - 18px);
        font-size: 20px;
    }
    .Form input:focus,textarea:focus,select:focus {
        outline: none;
    }
    .Form select {
        border: 2px solid var(--PrimaryColor);
        background-color: var(--PrimaryBackground);
        color: var(--Text);
        margin: 10px 0;
        padding: 5px 5px;
        width: 65%;
        font-size: 20px;
    }
    .Form textarea {
        resize: vertical;
        border: 2px solid var(--PrimaryColor);
        background-color: var(--PrimaryBackground);
        color: var(--Text);
        margin: 10px 0;
        padding: 5px 5px;
        max-width: calc(65% - 18px);
        min-height: 50px;
        max-height: 750px;
        font-size: 16px;
    }
    .Form .CheckBox {
        height: 25px;
        width: 25px;
        transition: background-color 0.2s;
        border: 2px solid var(--PrimaryColor);
        background-color: var(--PrimaryBackground);
        color: var(--Text);
        margin: 10px 0;
        font-size: 20px;
    }
    .Form .CheckBox:hover {
        cursor: pointer;
    }
    .Form .CheckBox.Checked {
        background-color: var(--PrimaryColor);
    }
    .Form .CheckBox svg {
        height: 25px;
        width: 25px;
        color: var(--PrimaryBackground);
    }
    .Form input[type="submit"] {
        transition: background-color 0.2s, color 0.2s;
        margin: 25px 0;
        height: 35px;
        border: 2px solid var(--PrimaryColor);
        background-color: var(--PrimaryBackground);
        width: 150px;
        color: var(--Text);
        font-size: 18px;
    }
    .Form input[type="submit"]:hover {
        cursor: pointer;
        background-color: var(--PrimaryColor);
        color: var(--PrimaryBackground);
    }

</style>