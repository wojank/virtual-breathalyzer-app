<script setup lang="ts">
import FaqList from '../components/FaqList.vue';
</script>
<template>
	<div class="contact">
		<div class="contact__desc">
			<h1 class="contact__title">Najczęściej zadawane pytania</h1>
			<h2 class="contact__subtitle">Pytania od Społeczności</h2>
			<p class="contact__description">
				Pytania, które znajdziesz w naszym FAQ, są wynikiem współpracy i
				komunikacji z osobami biorącymi udział w naszej ankiecie. Cieszymy się,
				że mogliśmy poznać wasze potrzeby i pytania, które macie w związku z
				naszymi usługami. Jednak nasza strona FAQ jest otwarta na rozwijanie się
				i rozbudowę, dlatego zachęcamy innych do aktywnego udziału. Jeśli masz
				pytanie, które nie zostało jeszcze dodane do naszego FAQ lub chcesz
				dodać nowe pytanie, serdecznie zapraszamy do skorzystania z naszego
				<RouterLink to="/contact" class="contact__link"
					>formularza kontaktowego</RouterLink
				>
				.
			</p>
		</div>
		<FaqList />
	</div>
</template>
<style>
@import '../assets/scss/views/contact-view.scss';
</style>
