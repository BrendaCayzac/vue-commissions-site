<template>
  <div class="portfolio">
    <Quote quote="quote-emil-cioran" author="Emil Cioran" />

    <Header title="portfolio" subtitle="categories" />

    <div
      class="category-selection"
      role="navigation"
      aria-label="Portfolio categories"
    >
      <CategoriesButton
        v-for="(category, i) in categories"
        :key="i"
        :text="category"
        @change-category="selectedCategory = $event"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import CategoriesButton from "@/components/Buttons/CategoriesButton.vue";
import Header from "@/components/Header/Header.vue";
import Quote from "@/components/Quote/Quote.vue";

export default defineComponent({
  name: "PortfolioView",
  components: { CategoriesButton, Header, Quote },

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

  .category-selection {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 0 1.5rem;
  }
}

/* Tablet*/
@media (min-width: $tablet) {
  .portfolio {
    padding-top: 0;
  }
}
</style>
