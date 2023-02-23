<template>
  <div class="portfolio">
    <Quote quote="quote-emil-cioran" author="Emil Cioran" />
    <CategoriesButton
      v-for="(category, i) in categories"
      :key="i"
      :text="category"
      @change-category="selectedCategory=$event"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import CategoriesButton from "@/components/Buttons/CategoriesButton.vue";
import Quote from "@/components/Quote/Quote.vue";

export default defineComponent({
  name: "PortfolioView",
  components: { CategoriesButton, Quote },

  setup() {
    const categories = [
      "advertisement",
      "brands",
      "editorial",
      "illustration",
      "packaging",
      "web",
      "all",
    ];

    const selectedCategory = ref("all");

    return { categories, selectedCategory };
  },
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
