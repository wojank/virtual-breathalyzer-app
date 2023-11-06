<script setup lang="ts">
import { ref } from 'vue';

const receivedPower = ref<number | undefined>();
const receivedVolume = ref<number | undefined>();
const receiveAmount = ref<number | undefined>();

const validateData = (): void => {
	if (typeof receivedPower.value === 'number') {
		if (receivedPower.value >= 95) {
			alert('Podałeś zbyt wysoki procent.');
			receivedPower.value = undefined;
		}
	}
	if (typeof receivedVolume.value === 'number') {
		if (receivedVolume.value > 750) {
			alert('Nie ma tak dużej szklanki');
			receivedVolume.value = undefined;
		}
	}
};

const emit = defineEmits<{
	(
		e: 'secondStepData',
		receivedPower: number | undefined,
		receivedVolume: number | undefined,
		receivedAmount: number | undefined
	): void;
	(e: 'firstStepData'): void;
}>();

//const alcoholType = ():void => {switch}

const collectData = () => {
	validateData();
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
				@input="collectData"
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
				@input="collectData"
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
				@input="collectData"
			/>
		</div>
	</div>
</template>

<style scoped>
@import '../assets/scss/components/first-step.scss';
</style>
