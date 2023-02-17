<template>
  <div class="portfolio">
    <Quote quote="quote-emil-cioran" author="Emil Cioran" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Quote from "@/components/Quote/Quote.vue";

export default defineComponent({
  name: "PortfolioView",
  components: { Quote },
});
</script>

<style lang="scss" scoped>
@import "src/styles/custom";

.portfolio {
  padding-top: 3.75rem;
}

/* Tablet*/
@media (min-width: $tablet) {
  .portfolio {
    padding-top: 0;
  }
}
</style>