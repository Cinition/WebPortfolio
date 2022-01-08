<template>
  <Screen/>
</template>

<script>
import Screen from './components/Screen.vue'

export default {
  name: 'App',
  components: {
    Screen
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
    height: 100vh;
    width: 100vw;
    margin: 0;
    --ScrollbarWidth: calc(100vw - 100%);
  }

  .TitleFont {
    font-family: Quicksand;
  }
  .TextFont {
    font-family: Montserrat;
  }

  .Title {
    position: absolute;
    top: 25px;
    left: 300px;
    font-size: 75px;
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
