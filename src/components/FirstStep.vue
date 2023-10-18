<script setup lang="ts"></script>

<template>
	<p class="title">podaj płeć oraz wagę</p>

	<div class="wrap">
		<div class="radio">
			<div class="men">
				<input
					class="form-control__input-radio"
					id="mężczyzna"
					type="radio"
					value="mężczyzna"
					name="gender"
				/>
				<label class="form-control__option" for="mężczyzna">mężczyzna</label>
			</div>

			<div class="women">
				<input
					class="form-control__input-radio"
					id="kobieta"
					type="radio"
					value="kobieta"
					name="gender"
				/>
				<label class="form-control__option" for="kobieta">kobieta</label>
			</div>
		</div>

		<div class="form-control form-control--weight weight">
			<label class="form-control__title" for="waga">waga</label>
			<input
				class="form-control__input-number"
				id="waga"
				type="number"
				name="waga"
			/>
		</div>

		<div class="form-control form-control--weight age">
			<label class="form-control__title" for="waga">wiek</label>
			<input
				class="form-control__input-number"
				id="waga"
				type="number"
				name="waga"
			/>
		</div>
	</div>
</template>

<style scoped>
@import '../assets/scss/components/first-step.scss';
</style>
