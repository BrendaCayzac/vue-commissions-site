<template>
  <div class="home">
    <section class="welcome">
      <p>Illustration</p>
      <p>Development</p>
      <p>Design</p>
      <div class="shape"></div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
});
</script>

<style lang="scss" scoped>
@import "src/styles/custom";

.home {
  .shape {
    background-color: $bc-cyan;
  }
}
</style>
