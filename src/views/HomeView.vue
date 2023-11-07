<script setup lang="ts">
import TheModal from '../components/TheModal.vue';
</script>
<template>
	<TheModal />
	<div class="containerr">
		<div class="grid">
			<div class="content__primary-box">
				<h1 class="content__primary-heading">Pij Odpowiedzialnie</h1>
				<p class="content__primary-paragraph">
					Strona jest częścią kampanii pt.: "<strong>Pij odpowiedzialnie</strong
					>”. Możesz tu sprawdzić przy pomocy wirtualnego alkomatu zawartość
					alkoholu w organizmie, zanim usiądziesz za kierownicą lub zaplanujesz
					jakąkolwiek aktywność wymagającą odpowiedzialności.
				</p>
				<button class="content__primary-button">
					<RouterLink class="content__primary-link" to="/calculator"
						>Sprawdź</RouterLink
					>
				</button>
			</div>
			<div class="content__box content__box-first">
				<div class="content__wrapper">
					<font-awesome-icon icon="fa-solid fa-asterisk" />
					<p class="content__paragraph content__secondary--paragraph">
						dowiedz się o kampani
					</p>
				</div>
			</div>
			<div class="content__box content__box--border content__box-second">
				<div class="content__wrapper">
					<font-awesome-icon icon="fa-solid fa-asterisk" />
					<p class="content__paragraph">zbadaj poziom alkohllu we krwi</p>
				</div>
			</div>
			<div class="content__box content__box-third">
				<div class="content__wrapper">
					<font-awesome-icon icon="fa-solid fa-asterisk" />
					<p class="content__paragraph">pij odpowiedzialnie</p>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
@import '../assets/scss/views/home-view.scss';
</style>
