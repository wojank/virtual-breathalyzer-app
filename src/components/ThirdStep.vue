<script setup lang="ts">
import { computed } from 'vue';
const { promiles, grams, portions, time } = defineProps<{
	promiles: number;
	grams: number;
	portions: number;
	time: number;
}>();

const fixedTime = computed(() => {
	const portions = time.toFixed(2).split('.');
	let hours = parseInt(portions[0]);
	let minutes = parseInt(portions[1]);

	if (minutes == 60 && hours >= 0) {
		hours++;
		return `${hours} godzin`;
	} else if (minutes < 60 && hours == 0) {
		return `${minutes} minut`;
	} else if (minutes < 60 && hours > 0) {
		return `${hours} godzin ${minutes} minut`;
	} else {
		hours++;
		minutes -= 60;
	}
	return `${hours} godzin ${minutes} minut`;
});
</script>

<template>
	<p class="card__title">Twoje Wyniki</p>

	<article class="results">
		<div class="results__group">
			<p class="results__title">ilość promili w organizmie:</p>
			<span class="results__value">{{ `${promiles.toFixed(2)} ‰` }}</span>
		</div>

		<div class="results__group">
			<p class="results__title">ilość czystego alkoholu:</p>
			<span class="results__value">{{ `${grams.toFixed(1)} g` }}</span>
		</div>

		<div class="results__group">
			<p class="results__title">ilosć porcji standardowych:</p>
			<span class="results__value">{{ portions.toFixed(1) }}</span>
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
