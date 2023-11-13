<script setup lang="ts">
import TheModal from '../components/TheModal.vue';
</script>
<template>
	<TheModal />
	<main class="home">
		<section class="hero">
			<h1 class="hero__header">Pij Odpowiedzialnie</h1>
			<p class="hero__paragraph">
				Strona jest częścią kampanii pt.: "<strong>Pij odpowiedzialnie</strong
				>”. Możesz tu sprawdzić przy pomocy wirtualnego alkomatu zawartość
				alkoholu w organizmie, zanim usiądziesz za kierownicą lub zaplanujesz
				jakąkolwiek aktywność wymagającą odpowiedzialności.
			</p>
			<button class="hero__btn">
				<RouterLink class="hero__link" to="/calculator">Sprawdź</RouterLink>
			</button>
		</section>
		<section class="testimonials">
			<div class="testimonials__wrapper">
				<font-awesome-icon
					icon="fa-solid fa-asterisk"
					class="testimonials__icon"
				/>
				<p class="testimonials__paragraph">dowiedz się o kampani</p>
			</div>
			<div class="testimonials__wrapper testimonials__wrapper--border">
				<font-awesome-icon
					icon="fa-solid fa-asterisk"
					class="testimonials__icon"
				/>
				<p class="testimonials__paragraph">zbadaj poziom alkoholu we krwi</p>
			</div>
			<div class="testimonials__wrapper">
				<font-awesome-icon
					icon="fa-solid fa-asterisk"
					class="testimonials__icon"
				/>
				<p class="testimonials__paragraph">pij odpowiedzialnie</p>
			</div>
		</section>
	</main>
</template>
<style scoped>
@import '../assets/scss/views/view-home.scss';
</style>
