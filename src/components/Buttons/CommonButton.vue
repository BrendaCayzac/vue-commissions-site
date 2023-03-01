<template>
	<button class="Button">
		<slot>Button</slot>
	</button>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
	name: "CommonButton",
});
</script>

<style lang="scss" scoped>

</style>