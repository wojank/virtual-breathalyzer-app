<script setup lang="ts"></script>

<template>
	<p class="title">Twoje Wyniki</p>

	<div class="wrap-results">
		<div class="wrapper limit">
			<p class="form-control__title form-control__title--primary">
				ilość promili w organiźnie:
			</p>
			<span class="result-primary">{{ 'e33ffdsfsdf' }}</span>
		</div>

		<div class="wrapper pure">
			<p class="form-control__title form-control__title--secondary">
				ilość czystego alkoholu:
			</p>
			<span class="result-primary">{{ 'bardzo dużo' }}</span>
		</div>

		<div class="wrapper portion">
			<p class="form-control__title form-control__title--secondary">
				ilosć porcji standardowych:
			</p>

			<span class="result-primary">{{ 'cześć' }}</span>
		</div>

		<div class="wrapper time">
			<p class="form-control__title form-control__title--primary">
				Szacunkowy czas trzeźwienia:
			</p>

			<span class="result-secondary">{{ 'elo' }}</span>
		</div>
	</div>
</template>

<style scoped>
@import '../assets/scss/components/first-step.scss';
</style>
