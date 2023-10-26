<script setup lang="ts"></script>
<template>
	<header class="header">
		<div class="header__container">
			<h2 class="header__logo">Logo Kampanii</h2>
			<nav>
				<ul class="header__list">
					<li class="header__list-items">
						<RouterLink to="/calculator">Alkomat</RouterLink>
					</li>
					<li class="header__list-items">
						<RouterLink to="/about">O nas</RouterLink>
					</li>
					<li class="header__list-items">
						<RouterLink to="/contact">Kontakt</RouterLink>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>
<style>
@import '../assets/scss/components/the-navbar.scss';
</style>
