<script setup lang="ts">
const props = defineProps<{
	answer: string;
}>();
</script>
<template>
	<div class="answer">
		<p class="answer-main">
			{{ props.answer }}
		</p>
	</div>
</template>
<style>
@import '../assets/scss/views/contact-view.scss';
</style>
