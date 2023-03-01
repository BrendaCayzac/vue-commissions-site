<template>
  <button
    @click="onClick"
    class="button"
    :disabled="disableConditions"
    :type="type"
  >
    <slot>Button</slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CommonButton",

  props: {
    onClick: {
      type: Function,
      required: true,
    },
    disableConditions: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "button",
    },
  },
});
</script>

<style lang="scss" scoped>
@import "src/styles/custom";

button {
  position: relative;
  display: inline-block;
  border: solid 1px rgba($bc-gray, 0.24);
  border-radius: 4px;
  padding: 0 16px;
  min-width: 64px;
  height: 36px;
  vertical-align: middle;
  text-align: center;
  text-overflow: ellipsis;
  text-transform: uppercase;
  color: $bc-gray;
  background-color: transparent;
  font-size: 1rem;
  font-weight: 500;
  line-height: 34px;
  overflow: hidden;
  outline: none;
  cursor: pointer;
  width: 100%;

  &::-moz-focus-inner {
    border: none;
  }
  /* Overlay */
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: $bc-cyan;
    opacity: 0;
    transition: opacity 0.2s;
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    padding: 50%;
    width: 32px;
    height: 32px;
    background-color: $bc-cyan;
    opacity: 0;
    transform: translate(-50%, -50%) scale(1);
    transition: opacity 1s, transform 0.3s;
  }

  &:hover::before,
  &:focus::before {
    opacity: 0.04;
  }

  /* Active */
  &:active::after {
    opacity: 0.16;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0s;
  }
/* Disabled */
	&:disabled {
		color: rgba($bc-gray, 0.38);
		background-color: transparent;
		cursor: initial;
		&::before {
			opacity: 0;
		}

		&::after {
			opacity: 0;
		}
	}
}

/* Desktop */
@media (min-width: $tablet) {
	button{
		width: 17.5rem;
	}
}

</style>
