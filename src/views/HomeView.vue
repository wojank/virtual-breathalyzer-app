<script setup lang="ts">
import TheModal from '../components/TheModal.vue';
</script>
<template>
	<TheModal />
	<main class="home">
		<section class="hero">
			<h1 class="hero__header">Kampania Pij z Głową</h1>
			<p class="hero__paragraph">
				Strona jest częścią kampanii pt.: "<strong>Pij z Głową</strong>”. Możesz
				tu sprawdzić przy pomocy wirtualnego alkomatu zawartość alkoholu w
				organizmie, zanim usiądziesz za kierownicą lub zaplanujesz jakąkolwiek
				aktywność wymagającą odpowiedzialności.
			</p>
			<RouterLink class="hero__link" to="/calculator">
				<button class="hero__btn">Sprawdź</button>
			</RouterLink>
		</section>
		<section class="testimonials">
			<div class="testimonials__wrapper">
				<font-awesome-icon
					icon="fa-solid fa-asterisk"
					class="testimonials__icon"
				/>

				<RouterLink class="testimonials__paragraph" to="/about"
					>dowiedz się o kampani</RouterLink
				>
			</div>
			<div class="testimonials__wrapper testimonials__wrapper--border">
				<font-awesome-icon
					icon="fa-solid fa-asterisk"
					class="testimonials__icon"
				/>

				<RouterLink class="testimonials__paragraph" to="/calculator"
					>zbadaj poziom alkoholu we krwi</RouterLink
				>
			</div>
			<div class="testimonials__wrapper">
				<font-awesome-icon
					icon="fa-solid fa-asterisk"
					class="testimonials__icon"
				/>
				<RouterLink class="testimonials__paragraph" to="/contact"
					>pij odpowiedzialnie</RouterLink
				>
			</div>
		</section>
	</main>
</template>
<style scoped>
@import '../assets/scss/views/view-home.scss';
</style>
