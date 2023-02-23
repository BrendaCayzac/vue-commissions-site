<template>
  <div class="portfolio-item">
    <img :src="getImgUrl('aprons1', 'jpg')" alt="Portfolio Item" />

    <!-- Information -->
    <div class="info">
      <h3 class="header">Web Development</h3>
      <p>Brief description goes here</p>
      <a class="link" href="#" title="Link Title">
        <font-awesome-icon icon="fa-solid fa-link" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { getImgUrl } from "@/helpers/getImage";
export default defineComponent({
  name: "PortfolioExample",
  components: { FontAwesomeIcon },

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
  position: relative;
  overflow: hidden;
  width: 18.75rem;
  height: 18.75rem;

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
    background-color: rgba(255, 255, 255, 0.75);
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
      @include transition-mix;
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


</style>
