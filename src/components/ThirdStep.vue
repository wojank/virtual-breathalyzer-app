<script setup lang="ts"></script>

<template>
	<div class="container">
		<div class="title">
			<p class="form__title">Twoje Wyniki</p>
		</div>

		<div class="wrapper limit">
			<p class="form-control__title form-control__title--primary">
				ilość promili w organiźnie:
			</p>
			<div
				class="form-control__input-number form-control__input-number--primary"
			>
				<p class="form-control__option">{{}}</p>
			</div>
		</div>

		<div class="wrapper pure">
			<p class="form-control__title form-control__title--secondary">
				ilość czystego alkoholu:
			</p>
			<div class="form-control__input-number">
				<p class="form-control__option">{{}}</p>
			</div>
		</div>

		<div class="wrapper portion">
			<p class="form-control__title form-control__title--secondary">
				ilosć porcji standardowych:
			</p>
			<div class="form-control__input-number">
				<p class="form-control__option">{{}}</p>
			</div>
		</div>

		<div class="wrapper time">
			<p class="form-control__title form-control__title--primary">
				Szacunkowy czas trzeźwienia:
			</p>
			<div
				class="form-control__input-number form-control__input-number--secondary"
			>
				<p class="form-control__option">{{}}</p>
			</div>
		</div>
	</div>
</template>

<style scoped>
@import '../assets/scss/components/first-step.scss';
</style>
