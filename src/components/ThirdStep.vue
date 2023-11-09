<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps<{
	promiles: number;
	grams: number;
	portions: number;
	time: number;
}>();

const fixedTime = computed(() => {
	const wynik = props.time.toFixed(2).split('.');
	return `${wynik[0]} godzin ${wynik[1]} minut`;
});
</script>

<template>
	<p class="card__title">Twoje Wyniki</p>

	<article class="results">
		<div class="results__group">
			<p class="results__title">ilość promili w organiźnie:</p>
			<span class="results__value">{{ `${props.promiles.toFixed(2)} ‰` }}</span>
		</div>

		<div class="results__group">
			<p class="results__title">ilość czystego alkoholu:</p>
			<span class="results__value">{{ `${props.grams.toFixed(1)} g` }}</span>
		</div>

		<div class="results__group">
			<p class="results__title">ilosć porcji standardowych:</p>
			<span class="results__value">{{ props.portions.toFixed(1) }}</span>
		</div>

		<div class="results__group">
			<p class="results__title">Szacunkowy czas trzeźwienia:</p>
			<span class="results__value-main">{{ fixedTime }}</span>
		</div>
	</article>
</template>

<style scoped>
@import '../assets/scss/components/step-three.scss';
</style>
