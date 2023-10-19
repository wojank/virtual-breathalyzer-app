<script setup lang="ts">
import { ref } from 'vue';

// const receivedType = ref('');
const receivedPower = ref(0);
const receivedVolume = ref(0);
const receiveAmount = ref(0);

// const emit = defineEmits(['firstStepData', 'secondStepData']);
const emit = defineEmits<{
	(
		e: 'secondStepData',
		receivedPower: number,
		receivedVolume: number,
		receivedAmount: number
	): void;
	(e: 'firstStepData'): void;
}>();
//przerobić na jedną ogólną funkcję?
const collectData = () => {
	emit(
		'secondStepData',
		receivedPower.value,
		receivedVolume.value,
		receiveAmount.value
	);
};
</script>

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

				<option class="form-control__select-option" value="winoslodkie">
					Wino
				</option>

				<option class="form-control__select-option" value="nalewki">
					Nalewka, Likier
				</option>
				<option class="form-control__select-option" value="whiskybrandykoniak">
					Wódka, Whisky, Gin
				</option>
			</select>
		</div>

		<div class="form-control power">
			<label class="form-control__title" for="moc">moc alkoholu (%)</label>
			<input
				class="form-control__input-number"
				id="moc"
				type="number"
				name="mocalkoholu"
				v-model="receivedPower"
				@change="collectData"
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
				v-model="receivedVolume"
				@change="collectData"
			/>
		</div>

		<div class="form-control amount">
			<label class="form-control__title" for="ilosc">ilośc porcji (ml)</label>
			<input
				class="form-control__input-number"
				id="ilosc"
				type="number"
				name="iloscporcjialkoholu"
				v-model="receiveAmount"
				@change="collectData"
			/>
		</div>
	</div>
</template>

<style scoped>
@import '../assets/scss/components/first-step.scss';
</style>
