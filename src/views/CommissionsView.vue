<template>
  <div class="commissions">
    <header>
      <h1>
        {{ $tc("commission", 2) }}
        <span>{{ $t("information and prices") }}</span>
      </h1>
    </header>
    <section class="previous-work">
      <figure v-for="(example, i) in examples" :key="i">
        <img
          :src="getImgUrl(example, 'png')"
          :alt="$t('Example of') + ' ' + $t('commission')"
        />
      </figure>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { getImgUrl } from "@/helpers/getImage";

export default defineComponent({
  name: "CommissionsView",

  setup() {
    const examples = [
      "example1",
      "example2",
      "example3",
      "example4",
      "example5",
      "example6",
    ];

    return {
      examples,
      getImgUrl,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "src/styles/custom";

.commissions {
  padding: 3.75rem 1.5rem 3rem;
  header {
    position: relative;
    width: 100%;
    padding: 2em;
    margin: 1.5em;
    text-align: center;

    h1 {
      position: relative;
      padding: 0;
      margin: 0;
      font-weight: 300;
      font-size: 2.5rem;
      color: #202020;
      transition: all 0.3s ease 0s;
      -o-transition: all 0.3s ease 0s;
      -webkit-transition: all 034s ease 0s;

      &::before {
        position: absolute;
        bottom: 0;
        width: 60px;
        height: 2px;
        content: "";
        background-color: $bc-magenta;
        left: 50%;
        margin-left: -30px;
      }

      span {
        display: block;
        font-size: 0.5em;
        text-transform: uppercase;
        font-weight: 500;
        letter-spacing: 4px;
        line-height: 1.5em;
        color: $bc-gray;
        padding-bottom: 1.5rem;
      }
    }
  }

	.previous-work{
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 1rem;
		margin-bottom: 1rem;

		figure {
			width: 48%;
			background-color: rgba($bc-cyan, .25);
			img {
				width: auto;
				height: 100%;
				object-fit: cover;
			}
		}
	}
}

/* Tablet*/
@media (min-width: $tablet) {
  .commissions {
    padding-top: 0;
    header {
      text-align: start;
      h1:before {
        left: 0.75em;
      }
    }

	  .previous-work{
		  figure {
			  width: 32%;
		  }
	  }
  }
}
</style>
