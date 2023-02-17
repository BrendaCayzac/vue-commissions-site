<template>
  <SiteNavbar />
  <router-view />
  <SiteFooter />
  <ScrollToTopButton />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import SiteNavbar from "@/components/Navbar/Navbar.vue";
import SiteFooter from "@/components/Footer/Footer.vue";
import ScrollToTopButton from "@/components/ScrollToTopButton/ScrollToTopButton.vue";

export default defineComponent({
  components: { ScrollToTopButton, SiteFooter, SiteNavbar },
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
