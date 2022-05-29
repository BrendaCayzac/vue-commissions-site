<template>
  <div class="home">
	  <header>
		  <div class="header-bg" :class="{'rotated':headerRotation}"></div>
		  <div class="categories">
			  <p>Development</p>
			  <p>Illustration</p>
			  <p>Design</p>
		  </div>
	  </header>

	  <section>
		  <h1>Section Content</h1>
	  </section>


    <reload-window />
  </div>
</template>

<script lang="ts">
import ReloadWindow from "@/components/ReloadWindow.vue";
import { defineComponent, ref, onBeforeUnmount, onMounted } from "vue";

export default defineComponent({
  name: "HomeView",
  components: { ReloadWindow },
	setup(){
		const headerRotation = ref(false);

		const handleScroll = ()=>{
			headerRotation.value = window.scrollY > 30;
		}

		onMounted( ()=>{
		window.addEventListener('scroll', handleScroll);

		})

		onBeforeUnmount( ()=>{
			window.removeEventListener('scroll',handleScroll);
		})

		return{
			headerRotation
		}
	}
});
</script>

<style lang="scss" scoped>
@import "src/styles/custom";

.home {
	header {
		position: relative;
		height: 18rem;
		overflow: hidden;
		.header-bg{
			position: absolute;
			top: 0;
			bottom: 0;
			right: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: $bc-cyan;
			transform-origin: top right;
			z-index: -1;
			transition: all 0.2s ease;
		}

		.header-bg.rotated{
			background-color: $bc-cyan;
			transform: skewY(15deg);
		}
		.categories{
			padding-top: 2rem;
				position: relative;
			p {
				margin: 0 1.5rem 0 0;
				line-height: 3rem;
				font-size: 3rem;
				font-weight: 700;
				text-align: right;
				color: white;
			}
		}

	}


	section{
		background-color: #666666;
		height: 60rem;
	}
}

/* 48em = 768px*/
@media (max-width: $mobile) {
  .home {
    padding-top: 3.75rem;
  }
}
</style>
