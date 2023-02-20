<template>
  <div class="commissions">
    <header>
      <h1>
        {{$t('commissions')}}
        <span>{{$t('information and prices')}}</span>
      </h1>
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CommissionsView",
});
</script>

<style lang="scss" scoped>
@import "src/styles/custom";

.commissions {
  padding-top: 3.75rem;
  header {
	  position: relative;
	  width: 100%;
	  padding: 2em;
	  margin: 1.5em;
	    text-align:center;

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
	      left:50%; margin-left:-30px;
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
}

/* Tablet*/
@media (min-width: $tablet) {
  .commissions {
    padding-top: 0;
	  header{
		  text-align: start;
		  h1:before {
			  left:0.75em;
		  }
	  }
  }
}
</style>
