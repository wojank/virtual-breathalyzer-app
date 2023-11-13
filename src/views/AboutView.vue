<script setup lang="ts">
import FaqList from '../components/FaqList.vue';
</script>
<template>
	<main class="about">
		<section class="text">
			<h1 class="text__title">Najczęściej zadawane pytania</h1>
			<h2 class="text__subtitle">Pytania od Społeczności</h2>
			<p class="text__paragraph">
				Pytania, które znajdziesz w naszym FAQ, są wynikiem współpracy i
				komunikacji z osobami biorącymi udział w naszej ankiecie. Cieszymy się,
				że mogliśmy poznać wasze potrzeby i pytania, które macie w związku z
				naszymi usługami. Jednak nasza strona FAQ jest otwarta na rozwijanie się
				i rozbudowę, dlatego zachęcamy innych do aktywnego udziału. Jeśli masz
				pytanie, które nie zostało jeszcze dodane do naszego FAQ lub chcesz
				dodać nowe pytanie, serdecznie zapraszamy do skorzystania z naszego
				<RouterLink to="/contact" class="text__link"
					>formularza kontaktowego</RouterLink
				>
				.
			</p>
		</section>
		<FaqList />
	</main>
</template>
<style scoped>
@import '../assets/scss/views/view-about.scss';
</style>
