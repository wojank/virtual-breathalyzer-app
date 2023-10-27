<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps<{
	promiles: string;
	grams: number;
	portions: number;
	time: string;
}>();
//może wyzwolić funkcję liczącą beforemount poprzez wyemitowanie eventu?

const fixedTime = computed(() => {
	const wynik = props.time.toString().split('.');
	return `${wynik[0]} godzin ${wynik[1]} minut`;
});
</script>

<template>
	<p class="title">Twoje Wyniki</p>

	<div class="wrap-results">
		<div class="wrapper limit">
			<p class="form-control__title form-control__title--primary">
				ilość promili w organiźnie:
			</p>
			<span class="result-primary">{{ `${props.promiles} ‰` }}</span>
		</div>

		<div class="wrapper pure">
			<p class="form-control__title form-control__title--secondary">
				ilość czystego alkoholu:
			</p>
			<span class="result-primary">{{ `${props.grams} g` }}</span>
		</div>

		<div class="wrapper portion">
			<p class="form-control__title form-control__title--secondary">
				ilosć porcji standardowych:
			</p>

			<span class="result-primary">{{ props.portions }}</span>
		</div>

		<div class="wrapper time">
			<p class="form-control__title form-control__title--primary">
				Szacunkowy czas trzeźwienia:
			</p>

			<span class="result-secondary">{{ fixedTime }}</span>
		</div>
	</div>
</template>

<style scoped>
@import '../assets/scss/components/first-step.scss';
</style>
