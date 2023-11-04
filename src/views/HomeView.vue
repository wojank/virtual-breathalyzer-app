<script setup lang="ts"></script>
<template>
	<div class="containerr">
		<!--<div class="content__primary">-->
		<div class="grid">
			<div class="content__primary-box">
				<h1 class="content__primary-heading">Wirtualny Alkomat</h1>
				<p class="content__primary-paragraph">
					Wirtualny alkomat jest częścią kampanii pt. "Pij odpowiedzialnie”. Na
					naszej stronie możesz sprawdzić zawartość alkoholu w organizmie, zanim
					usiądziesz za kierownicą.
				</p>
				<button class="content__primary-button">
					<RouterLink class="content__primary-link" to="/calculator"
						>Sprawdź</RouterLink
					>
					<!-- <a class="content__primary-link" href="/kalkulator">Sprawdź</a> -->
				</button>
			</div>
			<!--</div>-->
			<!--<div class="content__secondary"> content__secondary-box-->
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
		<!--</div>-->
	</div>
</template>
<style scoped>
@import '../assets/scss/views/home-view.scss';
</style>
