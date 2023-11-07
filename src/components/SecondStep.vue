<script setup lang="ts">
import { ref, watch } from 'vue';

const receivedType = ref<string>('');
const receivedPower = ref<number | undefined>();
const receivedVolume = ref<number | undefined>();
const receivedAmount = ref<number | undefined>();

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

const alcoholType = (val: string): void => {
	switch (val) {
		case 'cydr':
			receivedPower.value = 4.5;
			receivedVolume.value = 330;
			break;
		case 'jasne':
			receivedPower.value = 5.6;
			receivedVolume.value = 500;
			break;
		case 'mocne':
			receivedPower.value = 7;
			receivedVolume.value = 500;
			break;
		case 'wino':
			receivedPower.value = 12.5;
			receivedVolume.value = 100;
			break;
		case 'likier':
			receivedPower.value = 32;
			receivedVolume.value = 50;
			break;
		case 'whisky':
			receivedPower.value = 40;
			receivedVolume.value = 50;
			break;
		default: {
			console.log('nie wybrano typu alkoholu');
		}
	}
};

watch(receivedType, (newVal) => {
	alcoholType(newVal);
	console.log('powinno działać');
});

const collectData = () => {
	validateData();
	emit(
		'secondStepData',
		receivedPower.value,
		receivedVolume.value,
		receivedAmount.value
	);
};
</script>

<template>
	<!-- <form> -->
	<p class="title">wybierz rodzaj oraz ilość spożytego alkoholu</p>

	<form class="wrap">
		<div class="form-control wrapper type">
			<label class="form-control__title" for="alkohol">rodzaj alkoholu</label>
			<select
				class="form-control__input-select"
				id="alkohol"
				name="alkohol"
				v-model="receivedType"
				@change="console.log(receivedType)"
			>
				<option class="form-control__select-option" value="">
					wybierz alkohol
				</option>
				<option class="form-control__select-option" value="cydr">
					Cydr, Radler
				</option>
				<option class="form-control__select-option" value="jasne">
					Piwo Jasne
				</option>
				<option class="form-control__select-option" value="mocne">
					Piwo Mocne
				</option>
				<option class="form-control__select-option" value="wino">Wino</option>
				<option class="form-control__select-option" value="likier">
					Nalewka, Likier
				</option>
				<option class="form-control__select-option" value="whisky">
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
			<label class="form-control__title" for="ilosc">ilośc porcji</label>
			<input
				class="form-control__input-number"
				id="ilosc"
				type="number"
				name="iloscporcjialkoholu"
				v-model="receivedAmount"
				@input="collectData"
			/>
		</div>
	</form>
	<!-- </form> -->
</template>

<style scoped>
@import '../assets/scss/components/first-step.scss';
</style>
