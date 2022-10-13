<template>
  <v-app id="app" class="app-main-page" style="overflow-x: hidden">
    <ModalHolder />
    <router-view />
  </v-app>
</template>

<script>
import ModalHolder from "@/components/modals/ModalHolder";

export default {
  components: {
    ModalHolder,
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2f385b;
  background-color: #e8e9ee;
}
</style>
