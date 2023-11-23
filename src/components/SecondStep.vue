<script setup lang="ts">
import { ref, watch } from 'vue';

const { power, volume, amount } = defineProps<{
	power: number | undefined;
	volume: number | undefined;
	amount: number | undefined;
}>();

const receivedType = ref<string>('');
const receivedPower = ref<number | undefined>(power);
const receivedVolume = ref<number | undefined>(volume);
const receivedAmount = ref<number | undefined>(amount);

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
	<form class="form">
		<p class="form__card-title">Określ ilość spożytego alkoholu</p>
		<div class="form__group">
			<label class="form__input-label" for="alkohol">rodzaj alkoholu</label>
			<select
				class="form__input"
				id="alkohol"
				name="alkohol"
				v-model="receivedType"
				@change="collectData"
			>
				<option value="">wybierz alkohol</option>
				<option value="cydr">Cydr, Radler</option>
				<option value="jasne">Piwo Jasne</option>
				<option value="mocne">Piwo Mocne</option>
				<option value="wino">Wino</option>
				<option value="likier">Nalewka, Likier</option>
				<option value="whisky">Wódka, Whisky, Gin</option>
			</select>
		</div>

		<div class="form__group">
			<label class="form__input-label" for="moc">moc alkoholu (%)</label>
			<input
				class="form__input"
				id="moc"
				type="number"
				name="mocalkoholu"
				v-model="receivedPower"
				@input="collectData"
			/>
		</div>

		<div class="form__group">
			<label class="form__input-label" for="objetosc"
				>objętość porcji (ml)</label
			>
			<input
				class="form__input"
				id="objetosc"
				type="number"
				name="objetoscalkoholu"
				v-model="receivedVolume"
				@input="collectData"
			/>
		</div>

		<div class="form__group">
			<label class="form__input-label" for="ilosc">ilośc porcji</label>
			<input
				class="form__input"
				id="ilosc"
				type="number"
				name="iloscporcjialkoholu"
				v-model="receivedAmount"
				@input="collectData"
			/>
		</div>
	</form>
</template>

<style scoped>
@import '../assets/scss/components/step-two.scss';
</style>
