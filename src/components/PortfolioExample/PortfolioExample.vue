<template>
  <div
    class="portfolio-item"
    v-if="
      selectedCategory === 'all' || selectedCategory === portfolioItem.category
    "
  >
    <img :src="getImgUrl(portfolioItem.img, 'jpg')" :alt="portfolioItem.alt" />

    <!-- Information -->
    <div class="info">
      <h3 class="header">{{ portfolioItem.name }}</h3>
      <p>{{ $t(portfolioItem.description) }}</p>
      <p class="date">{{ portfolioItem.date }}</p>
      <a class="link" :href="portfolioItem.link" :title="portfolioItem.name">
        <font-awesome-icon icon="fa-solid fa-link" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

interface PortfolioItem {
  name: string;
  img: string;
  alt: string;
  date: number;
  category: string;
  link: string;
  description: string;
}

import { getImgUrl } from "@/helpers/getImage";
export default defineComponent({
  name: "PortfolioExample",
  components: { FontAwesomeIcon },

  props: {
    portfolioItem: {
      type: Object as PropType<PortfolioItem>,
      required: true,
    },
    selectedCategory: {
      type: String,
      default: "all",
    },
  },

  setup() {
    return { getImgUrl };
  },
});
</script>

<style lang="scss" scoped>
@import "src/styles/custom";
$portfolio-item-info-offset: 7px;

@mixin transition-mix(
  $property: all,
  $duration: 0.2s,
  $timing: linear,
  $delay: 0s
) {
  transition-property: $property;
  transition-duration: $duration;
  transition-timing-function: $timing;
  transition-delay: $delay;
}

@mixin position-absolute($top: null, $left: null, $right: null, $bottom: null) {
  position: absolute;
  top: $top;
  left: $left;
  right: $right;
  bottom: $bottom;
}

.portfolio-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15rem;
  overflow: hidden;

  img {
    width: 15rem;
    height: auto;
  }
  .info {
    background-color: $bc-cyan;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .header {
      position: relative;
      margin: 0 0 0.625rem 0;
      padding: 1rem 0;
      font-size: 1.25rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #ffffff;

      &:after {
        display: block;
        content: "";
        background-color: $bc-yellow;
        height: 3px;
        width: 90%;
        @include position-absolute($bottom: 0, $left: 5%);
      }
    }

    p {
      margin: 0 0 0.625rem;
      position: relative;
      display: block;
      color: #ffffff;
    }

    .link {
      display: block;
      width: 2rem;
      height: 2rem;
      color: $bc-yellow;
      text-decoration: none;
      border: 1px solid $bc-yellow;
      border-radius: 50%;
      position: relative;
      margin-left: 42.5%;

      svg {
        @include position-absolute($top: 50%, $left: 50%);
        transform: translate(-50%, -50%);
      }
    }
  }
}

/* Desktop */
@media (min-width: $tablet) {
  .portfolio-item {
    position: relative;
    width: 18.75rem;
    height: 18.75rem;
	  border: 1px solid $bc-magenta;
	  box-shadow: 2px 2px 1px 2px $bc-magenta;

    img {
      width: auto;
      height: auto;
      min-width: 100%;
      min-height: 100%;
      @include position-absolute($top: 50%, $left: 50%);
      transform: translate(-50%, -50%);
    }

    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
	    padding: 0 1rem;
      background-color: rgba(255, 255, 255, 0.90);
      width: calc(100% - 2 * #{$portfolio-item-info-offset});
      height: calc(100% - 2 * #{$portfolio-item-info-offset});
      transform: scale(1.1);
      opacity: 0;
      @include position-absolute(
        $top: $portfolio-item-info-offset,
        $left: $portfolio-item-info-offset
      );

      .header {
        position: relative;
        margin: 0 0 0.625rem 0;
        padding: 1rem 0;
        font-size: 1.25rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        top: -10px;
        opacity: 0;
        color: #202020;

        &:after {
          display: block;
          content: "";
          background-color: $bc-magenta;
          height: 3px;
          width: 100%;
          @include position-absolute($bottom: 0, $left: 0);
          transform: scaleX(0);
        }
      }

      p {
        margin: 0 0 0.625rem;
        position: relative;
        display: block;
        top: 20px;
        opacity: 0;
        color: #202020;
        @include transition-mix;
      }

	    .date{
		    font-weight: 700;
		    container: $bc-magenta;
	    }

      .link {
        display: block;
        width: 2rem;
        height: 2rem;
        color: #202020;
        text-decoration: none;
        border: 1px solid #202020;
        border-radius: 50%;
        @include transition-mix;
        position: relative;
        top: 20px;
        opacity: 0;
        margin-left: 0;

        svg {
          @include position-absolute($top: 50%, $left: 50%);
          transform: translate(-50%, -50%);
        }

        &:hover {
          color: #ffffff;
          background-color: $bc-magenta;
        }
      }
    }

    &:hover {
      .info {
        @include transition-mix($duration: 0.3s);
        transform: scale(1);
        opacity: 1;
      }
      .header {
        @include transition-mix($delay: 0.3s);

        top: 0;
        opacity: 1;
        &:after {
          @include transition-mix(
            $duration: 0.3s,
            $timing: cubic-bezier(0.3, 0.01, 0, 0.9),
            $delay: 0.3s
          );

          transform: scaleX(1);
        }
      }
      .link,
      p {
        top: 0;
        opacity: 1;
        @include transition-mix($delay: 0.3s);
      }
    }
  }
}
</style>
