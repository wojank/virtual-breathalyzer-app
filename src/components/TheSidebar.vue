<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref<boolean>(false);
</script>
<template>
	<font-awesome-icon
		class="hamburger"
		icon="fa-solid fa-bars"
		size="2x"
		@click="isOpen = true"
	/>
	<nav :class="[{ active: isOpen }, 'sidebar']">
		<font-awesome-icon
			icon="fa-solid fa-xmark"
			size="2x"
			@click="isOpen = false"
			class="sidebar__close"
		/>
		<ul>
			<li>
				<RouterLink
					@click="isOpen = false"
					class="sidebar__item"
					to="/calculator"
					>Alkomat</RouterLink
				>
			</li>
			<li>
				<RouterLink @click="isOpen = false" class="sidebar__item" to="/about"
					>O nas</RouterLink
				>
			</li>
			<li>
				<RouterLink @click="isOpen = false" class="sidebar__item" to="/contact"
					>Kontakt</RouterLink
				>
			</li>
		</ul>
	</nav>
</template>
<style scoped>
@import '../assets/scss/components/the-sidebar.scss';
</style>

<!-- 6 -->
