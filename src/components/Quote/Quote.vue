<template>
  <section class="quote">
    <div>
      <blockquote>
        <font-awesome-icon icon="fas fa-quote-left" />
        {{ $t(quote) }} <br /><br />
        <span>— {{ author }}</span>
      </blockquote>
      <font-awesome-icon icon="fas fa-quote-right" />
    </div>
  </section>
</template>

<script lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "QuoteComponent",
  components: { FontAwesomeIcon },
  props: {
    quote:{
			type: String,
			required:true,
    },
		author:{
			type: String,
			required:true,
		}
  },
});
</script>

<style lang="scss" scoped>
@import "src/styles/custom";
.quote {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1.5rem;
  background-color: $bc-cyan;

  div {
    background-color: transparent;
    border-radius: 3px;
    text-align: center;
    transition: 0.4s;
    position: relative;
    font-style: italic;
    width: 100%;
    max-width: 45rem;

    blockquote {
      position: relative;
      padding: 2rem 5rem 3rem;
      margin: 3rem 0 3rem;
      width: calc(100% - 1rem);
      background-color: $bc-gray;
      transition: 0.4s;
      color: #ffffff;
      font-size: 1.3rem;

      span {
        color: $bc-yellow;
        font-style: normal;
        font-size: 1rem;
      }
    }

    svg {
      font-size: 1.563rem;
      height: 3.125rem;
      width: 3.125rem;
      line-height: 3.125rem;
      background-color: #ffffff;
      color: $bc-cyan;
    }

    .fa-quote-left {
      position: absolute;
      top: 0;
      left: 0;
    }

    .fa-quote-right {
      position: absolute;
      bottom: 0;
      right: 2.65rem;
      z-index: 1;
    }

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 1.9rem;
      width: calc(100% - 4.5rem);
      height: 100%;
      background: transparent;
      border-top: 20px solid #ffffff;
      border-left: 20px solid #ffffff;
      box-sizing: border-box;
    }

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 1.9rem;
      width: calc(100% - 4.5rem);
      height: 100%;
      border-bottom: 20px solid #ffffff;
      border-right: 20px solid #ffffff;
    }

    &:hover {
      blockquote {
        transform: rotateY(24deg) skewY(-3deg);
      }

      transform: skewY(3deg);

      svg {
        color: $bc-magenta;
      }

      &:before {
        border-top: 20px solid #ffffff;
        border-left: 20px solid #ffffff;
      }

      &:after {
        border-bottom: 20px solid #ffffff;
        border-right: 20px solid #ffffff;
      }
    }
  }
}

</style>
