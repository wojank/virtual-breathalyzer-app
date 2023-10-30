<script setup lang="ts">
import FaqList from '../components/FaqList.vue';
</script>
<template>
	<div class="contact">
		<div class="contact__desc">
			<h1 class="contact__title">Najczęściej zadawane pytania</h1>
			<h2 class="contact__subtitle">
				Lorem ipsum dolor sit amet consectetur adipisicing.
			</h2>
			<p class="contact__description">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius beatae ex
				laudantium quos hic quas incidunt commodi provident, facilis aspernatur
				quis voluptatibus blanditiis aliquam officiis.
			</p>
		</div>
		<FaqList />
	</div>
</template>
<style>
@import '../assets/scss/views/contact-view.scss';
</style>
