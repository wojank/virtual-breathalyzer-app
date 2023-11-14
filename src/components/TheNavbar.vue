<script setup lang="ts">
import { useRoute } from 'vue-router';
import TheSidebar from './TheSidebar.vue';

const route = useRoute();
</script>
<template>
	<header class="header">
		<div class="header__container">
			<RouterLink to="/">
				<h2 class="header__logo">Logo Kampanii</h2>
			</RouterLink>
			<nav>
				<ul class="header__list">
					<li class="header__list-items">
						<RouterLink
							:class="[{ active: route.path == '/calculator' }, 'tab']"
							to="/calculator"
							>Alkomat</RouterLink
						>
					</li>
					<li class="header__list-items">
						<RouterLink
							:class="[{ active: route.path == '/about' }, 'tab']"
							to="/about"
							>O nas</RouterLink
						>
					</li>
					<li class="header__list-items">
						<RouterLink
							:class="[{ active: route.path == '/contact' }, 'tab']"
							to="/contact"
							>Kontakt</RouterLink
						>
					</li>
					<TheSidebar />
				</ul>
			</nav>
		</div>
	</header>
</template>
<style scoped>
@import '../assets/scss/components/the-navbar.scss';
</style>
