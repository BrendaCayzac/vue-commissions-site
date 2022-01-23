<template>
  <div class="home">
    <section class="welcome">
      <p>Illustration</p>
      <p>Development</p>
      <p>Design</p>
      <div class="shape"></div>
    </section>
    <reload-window />
    Bitch
  </div>
</template>

<script lang="ts">
import ReloadWindow from "@/components/ReloadWindow.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: { ReloadWindow },
});
</script>

<style lang="scss" scoped>
@import "src/styles/custom";

.home {
  .shape {
    background-color: $bc-cyan;
  }
}

/* 48em = 768px*/
@media (max-width: 48em) {
  .home {
    padding-top: 3.75rem;
  }
}
</style>
