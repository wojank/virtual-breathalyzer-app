<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isVisible = ref<any>(true);

onMounted(() => {
	const data = localStorage.getItem('isVisible');
	if (data) {
		const receivedData = JSON.parse(data);
		isVisible.value = receivedData;
	} else {
		const setData = true;
		localStorage.setItem('isVisible', JSON.stringify(setData));
	}
});

const closeModal = (x: string): void => {
	if (x === 'tak') {
		const setData = false;
		isVisible.value = setData;
		localStorage.setItem('isVisible', JSON.stringify(setData));
	} else {
		const url =
			'https://www.google.pl/search?ei=0GBtXOSTOLGUk74PlJmD0AI&q=art.+14+ustawy+o+przeciwdzia%C5%82aniu+alkoholizmowi&oq=art.+14+przec&gs_l=psy-ab.3.0.0i22i30l2.5436.7365..8948...0.0..0.115.1237.12j1......0....1..gws-wiz.......0i71j35i39j0j0i67j0i131.7nI-h6FPC1I';

		window.location.href = url;
	}
};
</script>
<template>
	<div v-if="isVisible" class="modal">
		<section class="modal__window">
			<span class="modal__logo">Logo Kampanii</span>
			<div class="modal__main">
				<h1 class="modal__title">Czy jesteś osobą pełnoletnią?</h1>
				<p class="modal__subtitle">
					Zanim zapoznasz się z treścią naszej strony odpowiedz na pytanie
				</p>
			</div>
			<div class="modal__buttons">
				<button @click="closeModal('tak')" class="modal__btn">Tak</button>
				<button @click="closeModal('nie')" class="modal__btn">Nie</button>
			</div>
		</section>
	</div>
</template>
<style scoped>
@import '../assets/scss/components/the-modal.scss';
</style>
