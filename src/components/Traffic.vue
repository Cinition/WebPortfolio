<template>

</template>

<script>

import { ChevronsUpIcon, ChevronsDownIcon } from '@zhuowenli/vue-feather-icons';

export default {
  name: 'Traffic',
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



</style>