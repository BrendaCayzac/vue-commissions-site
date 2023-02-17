<template>
  <SiteNavbar />
  <router-view />
  <SiteFooter />
  <ScrollToTopButton />

  <reload-window />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ReloadWindow from "@/components/ReloadWindow.vue";
import ScrollToTopButton from "@/components/ScrollToTopButton/ScrollToTopButton.vue";
import SiteNavbar from "@/components/Navbar/Navbar.vue";
import SiteFooter from "@/components/Footer/Footer.vue";

export default defineComponent({
  components: { ReloadWindow, ScrollToTopButton, SiteFooter, SiteNavbar },
});
</script>

<style lang="scss">
@import "src/styles/reset";

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #202020;
}
</style>
