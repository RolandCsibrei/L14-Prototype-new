<template>
  <canvas height="100%" width="100%"></canvas>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { FpController } from '@/BabylonExamples/Controller'
export default defineComponent({
  name: 'BabylonExamples',
  mounted() {
    const canvas = document.querySelector('canvas')!
    new FpController(canvas)
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Roboto:wght@100;700&display=swap');

canvas {
  width: 100vw;
  height: 100vh;

  color: blue;
}
</style>
