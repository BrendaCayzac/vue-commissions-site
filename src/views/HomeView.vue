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
			const categories = document.querySelector(".categories");

			if (categories && window.scrollY > 30) {
				categories.classList.add("align-right");
			}else if(categories && window.scrollY < 30){
				categories.classList.remove("align-right");
			}

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
		.categories{
			padding-top: 3rem;
			p {
				margin: 0 1.5rem 0 0;
				line-height: 3rem;
				font-size: 3rem;
				font-weight: 200;
				color: white;
				width: 100%;
				text-align: center;
				transition: 1s transform;
			}
		}

		// Transition
		.header-bg.rotated{
			transform: skewY(15deg);
		}

		.categories.align-right {
			p{
			text-align: right;
				padding-right:3rem;
				transform: translateX(1%);
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
