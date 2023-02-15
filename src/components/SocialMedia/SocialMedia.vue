<template>
  <div class="social-media-button">
    <a
      class="button"
      role="button"
      :aria-label="$t('social-media-aria') + ' ' + id"
      :href="url"
    >
      <font-awesome-icon :icon="faIcon" />
    </a>
    <a class="text">
      {{ text }}
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  props: {
    faIcon: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
@import "src/styles/custom";

.social-media-button {
  display: flex;
  justify-content: center;
  align-items: center;
  .button {
    border-radius: 50%;
    background-color: #ffffff;
    width: 5rem;
    height: 5rem;
    font-size: 3rem;
    color: $bc-cyan;
    text-align: center;
    line-height: 5.2rem;
  }
  .text {
    display: none;
  }
}

// Screens > tablet
@media (min-width: $tablet) {
  .social-media-button {
    transition: all 0.2s ease-in-out;

    .button {
      width: 3rem;
      height: 3rem;
      font-size: 1.5rem;
      line-height: 3rem;
    }
    .text {
      display: initial;
      font-size: 1rem;
      color: #ffffff;
      padding-left: 0.325rem;
    }

    //Hover
    &:hover {
      transform: scale(1.1);
    }
  }
}

/* Min Desktop */
@media (min-width: $desktop-small) {
  .social-media-button {
    .button {
      width: 4rem;
      height: 4rem;
      font-size: 2rem;
      line-height: 4.1rem;
    }
    .text {
      font-size: 1.25rem;
      padding-left: 0.625rem;
    }
  }
}

/* Desktop */
@media (min-width: $desktop) {
  .social-media-button {
    .button {
      width: 5rem;
      height: 5rem;
      font-size: 3rem;
      line-height: 5.1rem;
    }
    .text {
      font-size: 1.5rem;
      padding-left: 0.625rem;
    }
  }
}
</style>
