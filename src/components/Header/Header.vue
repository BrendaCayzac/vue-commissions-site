<template>
  <header>
    <h1>
      {{ plural ? $tc(title, 2) : $t(title) }}
      <span>{{ $t(subtitle) }}</span>
    </h1>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "CategoriesButton",

  props: {
    plural: { type: Boolean, default: false },
    subtitle: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
@import "src/styles/custom";

header {
  position: relative;
  width: 100%;
  padding: 2em 0;
  margin: 1.5em 0;
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

@media (min-width: $tablet) {
  header {
	  padding: 2em;
	  margin: 1.5em;
    text-align: start;
    h1:before {
      left: 0.75em;
    }
  }
}
</style>
