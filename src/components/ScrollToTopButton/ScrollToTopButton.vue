<template>
  <button
    ref="scrollToTopButton"
    class="scroll-to-top"
    @click="scrollToTop"
    :aria-label="$t('Scroll to top')"
  >
    <font-awesome-icon icon="fa-solid fa-chevron-up" />
  </button>
</template>

<script lang="ts">
import { onMounted, ref, onBeforeUnmount } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "ScrollToTopButton",
  components: { FontAwesomeIcon },
  setup() {
    const scrollToTopButton = ref();
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const userScroll = () => {
      window.scrollY > 0
        ? scrollToTopButton.value.classList.add("show-button")
        : scrollToTopButton.value.classList.remove("show-button");
    };

    onMounted(() => {
      window.addEventListener("scroll", userScroll);
      if (window.scrollY > 0)
        scrollToTopButton.value.classList.add("show-button");
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", userScroll);
    });
    return { scrollToTopButton, scrollToTop };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/custom.scss";

.scroll-to-top {
  position: fixed;
  bottom: 2.5rem;
  right: 2.5rem;
  display: none;
  height: 3.125rem;
  width: 3.125rem;
  padding: 4px;
  border-radius: 50%;
  cursor: pointer;
  background-color: $bc-magenta;
  color: #ffffff;
  box-shadow: 2px 2px #202020;
}

.show-button {
  display: block;
}
</style>
