<template>
  <button @click="buttonClick(text)">
    <span>{{ $t(text) }}</span> <i></i>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CategoriesButton",

  props: {
    text: {
      type: String,
      required: true,
    },
  },

  setup(props, { emit }) {
    const buttonClick = (category: string) => {
      emit("changeCategory", category);
    };

    return { buttonClick };
  },
});
</script>

<style lang="scss" scoped>
@import "src/styles/custom";

button {
  position: relative;
  padding: 1rem 1.5rem 0.9rem;
  background: #ffffff;
  color: $bc-gray;
  border: 2px solid $bc-gray;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  transition: all 0.3s;
	cursor: pointer;

  i {
    position: absolute;
    inset: 0;
    display: block;

    &:before {
      opacity: 0;
      content: "";
      position: absolute;
      width: 10px;
      height: 5px;
      left: 80%;
      top: -3px;
      border: 2px solid $bc-magenta;
      transition: all 0.2s;
    }

    &:after {
      opacity: 0;
      content: "";
      position: absolute;
      width: 10px;
      height: 5px;
      left: 20%;
      bottom: -2px;
      border: 2px solid $bc-magenta;
      background: #272822;
      transition: all 0.2s;
    }
  }

  &:hover,
  &:hover {
    color: $bc-magenta;
    animation: box 3s infinite;
    border: 2px solid $bc-magenta;

    i {
      &:before {
        opacity: 1;
        width: 15px;
        left: 0;
      }
      &:after {
        opacity: 1;
        width: 15px;
        left: 85%;
      }
    }
  }
}
</style>
