<template>
  <div class="container mx-auto w-full h-screen flex flex-col">
    <v-header/>
    <router-view/>
  </div>
</template>

<script>
import VHeader from "../components/vHeader.vue";
export default {
  components: {VHeader}
}
</script>

<style scoped>

</style>