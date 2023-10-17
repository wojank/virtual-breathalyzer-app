<script setup lang="ts"></script>

<template>
	<div class="container">
		<div class="title">
			<p class="form__title">wybierz rodzaj oraz ilość spożytego alkoholu</p>
		</div>

		<div class="wrapper type">
			<label class="form-control__title" for="alkohol">Rodzaj alkoholu</label>
			<select
				class="form-control__input-select"
				id="rodzaj-alkoholu"
				name="alkohol"
			>
				<!--tutaj v-for dla option powinno poleciec-->
				<option class="form-control__select-option" value="">
					Wybierz alkohol
				</option>
				<option class="form-control__select-option" value="radler">
					Radler
				</option>
				<option class="form-control__select-option" value="piwojasne">
					Piwo Jasne
				</option>
				<option class="form-control__select-option" value="piwomocne">
					Piwo Mocne
				</option>
				<option class="form-control__select-option" value="cydr">Cydr</option>
				<option class="form-control__select-option" value="winoslodkie">
					Wino Słodkie
				</option>
				<option class="form-control__select-option" value="winopolwytrawne">
					Wino Półwytrawne
				</option>
				<option class="form-control__select-option" value="winowytrawne">
					Wino Wytrawne
				</option>
				<option class="form-control__select-option" value="likier">
					Likier
				</option>
				<option class="form-control__select-option" value="nalewki">
					Nalewki smakowe na bazie wódki
				</option>
				<option class="form-control__select-option" value="whiskybrandykoniak">
					Whisky, Brandy, Koniak
				</option>
				<option class="form-control__select-option" value="wodkagintequila">
					Wódka, Gin, Tequila
				</option>
				<option class="form-control__select-option" value="inny">Inny</option>
			</select>
		</div>

		<div class="form-control power">
			<label class="form-control__title" for="moc">Moc alkoholu (%)</label>
			<input
				class="form-control__input-number"
				id="moc"
				type="number"
				name="mocalkoholu"
			/>
		</div>

		<div class="form-control volume">
			<label class="form-control__title" for="objetosc"
				>Objętość porcji (ml)</label
			>
			<input
				class="form-control__input-number"
				id="objetosc"
				type="number"
				name="objetoscalkoholu"
			/>
		</div>

		<div class="form-control amount">
			<label class="form-control__title" for="ilosc">Ilośc porcji (ml)</label>
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
