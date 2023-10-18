<script setup lang="ts"></script>

<template>
	<p class="title">wybierz rodzaj oraz ilość spożytego alkoholu</p>

	<div class="wrap">
		<div class="form-control wrapper type">
			<label class="form-control__title" for="alkohol">rodzaj alkoholu</label>
			<select
				class="form-control__input-select"
				id="rodzaj-alkoholu"
				name="alkohol"
			>
				<!--tutaj v-for dla option powinno poleciec-->
				<option class="form-control__select-option" value="">
					wybierz alkohol
				</option>
				<option class="form-control__select-option" value="radler">
					Cydr, Radler
				</option>
				<option class="form-control__select-option" value="piwojasne">
					Piwo Jasne
				</option>
				<option class="form-control__select-option" value="piwomocne">
					Piwo Mocne
				</option>
				<!-- <option class="form-control__select-option" value="cydr">Cydr</option> -->
				<option class="form-control__select-option" value="winoslodkie">
					Wino
				</option>
				<!-- <option class="form-control__select-option" value="winopolwytrawne">
				Wino Półwytrawne
			</option>
			<option class="form-control__select-option" value="winowytrawne">
				Wino Wytrawne
			</option> -->
				<!-- <option class="form-control__select-option" value="likier">Likier</option> -->
				<option class="form-control__select-option" value="nalewki">
					Nalewka, Likier
				</option>
				<option class="form-control__select-option" value="whiskybrandykoniak">
					Wódka, Whisky, Gin
				</option>
				<!-- <option class="form-control__select-option" value="wodkagintequila">
				Wódka, Gin, Tequila
			</option> -->
				<!-- <option class="form-control__select-option" value="inny">Inny</option> -->
			</select>
		</div>

		<div class="form-control power">
			<label class="form-control__title" for="moc">moc alkoholu (%)</label>
			<input
				class="form-control__input-number"
				id="moc"
				type="number"
				name="mocalkoholu"
			/>
		</div>

		<div class="form-control volume">
			<label class="form-control__title" for="objetosc"
				>objętość porcji (ml)</label
			>
			<input
				class="form-control__input-number"
				id="objetosc"
				type="number"
				name="objetoscalkoholu"
			/>
		</div>

		<div class="form-control amount">
			<label class="form-control__title" for="ilosc">ilośc porcji (ml)</label>
			<input
				class="form-control__input-number"
				id="ilosc"
				type="number"
				name="iloscporcjialkoholu"
			/>
		</div>
	</div>
</template>

<style scoped>
@import '../assets/scss/components/first-step.scss';
</style>
