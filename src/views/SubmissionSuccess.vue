<template>
  <div class="success">
    <h1>Thank you for your submission!</h1>
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
  name: "SubmissionSuccess",
  components: { CommonButton },
});
</script>

<style lang="scss" scoped>
@import "src/styles/custom";

.success {
  height: 100vh;
  padding: 2rem 1.5rem;

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
}
</style>
