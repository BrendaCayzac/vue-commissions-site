<template>
  <div class="fail">
    <h1>{{ $t("Oh! Something went wrong") }}</h1>
	  <p>
		  {{ $t("You can always contact me via") }}
		  <a href="https://www.linkedin.com/in/brenda-cayzac-138297103/"
		  >LinkedIn</a>, <a href="https://twitter.com/BrendaCayzac">Twitter</a>,
		  {{ $t("or") }}
		  <a href="https://www.behance.net/brendacayzeb7a?isa0=1">Behance</a>
	  </p>
    <router-link to="/">
      <CommonButton>
        {{ $t("Home") }}
      </CommonButton>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import CommonButton from "@/components/Buttons/CommonButton.vue";
export default defineComponent({
  name: "SubmissionFail",
  components: { CommonButton },
});
</script>

<style lang="scss" scoped>
@import "src/styles/custom";

.fail {
	height: 100vh;
	padding: 5.5rem 1.5rem 2rem;

	h1 {
		display: block;
		font-size: 1rem;
		text-transform: uppercase;
		font-weight: 500;
		letter-spacing: 2px;
		line-height: 1.5em;
		color: $bc-gray;
		padding-bottom: 1.5rem;
	}

	p{
		margin-bottom: 2rem;
		a{
			text-decoration: none;
			color: $bc-magenta;
			font-weight: bold;
		}
	}
}
</style>

