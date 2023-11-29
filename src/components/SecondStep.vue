<script setup lang="ts">
import { ref, watch } from 'vue';

const { power, volume, amount } = defineProps<{
	power: number | undefined;
	volume: number | undefined;
	amount: number | undefined;
}>();

const emit = defineEmits<{
	(
		e: 'secondStepData',
		receivedPower: number | undefined,
		receivedVolume: number | undefined,
		receivedAmount: number | undefined,
		formValid: boolean
	): void;
	(e: 'firstStepData'): void;
}>();

const receivedType = ref<string>('');
const receivedPower = ref<number | undefined>(power);
const receivedVolume = ref<number | undefined>(volume);
const receivedAmount = ref<number | undefined>(amount);

const errorPower = ref('');
const errorVolume = ref('');
const errorAmount = ref('');

const isPowerValid = ref<null | boolean>(null);
const isVolumeValid = ref<null | boolean>(null);
const isAmountValid = ref<null | boolean>(null);

const formValid = ref(false);

// interface InputData {
// 	value: number | undefined,
// 	errMsg: string,
// 	isValid: boolean | null
// }
// const Power = ref<StepData>({
// 	val: volume,
// 	errMsg: '',
// 	isValid: false,
// })

const validateData = (): void => {
	if (typeof receivedPower.value === 'number') {
		if (receivedPower.value.toString().startsWith('0')) {
			errorPower.value = 'musisz podać minimum 1 procent';
			receivedPower.value = undefined;
			isPowerValid.value = false;
		} else if (receivedPower.value > 95) {
			errorPower.value = 'podana wartość nie może być większa, niż 95';
			isPowerValid.value = false;
		} else {
			errorPower.value = '';
			isPowerValid.value = true;
		}
	} else if (typeof receivedPower.value === 'string') {
		errorPower.value = '';
		isPowerValid.value = false;
	}
	if (typeof receivedVolume.value === 'number') {
		if (receivedVolume.value.toString().startsWith('0')) {
			errorVolume.value = 'musisz podać więcej niż 0 ml';
			receivedVolume.value = undefined;
			isVolumeValid.value = false;
		} else if (receivedVolume.value > 750) {
			errorVolume.value = 'możesz podać maksymalnie 750 ml';
			isVolumeValid.value = false;
		} else {
			errorVolume.value = '';
			isVolumeValid.value = true;
		}
	} else if (typeof receivedVolume.value === 'string') {
		errorVolume.value = '';
		isVolumeValid.value = false;
	}
	if (typeof receivedAmount.value === 'number') {
		if (receivedAmount.value.toString().startsWith('0')) {
			errorAmount.value = 'musisz podać przynajmniej 1 porcję';
			receivedAmount.value = undefined;
			isAmountValid.value = false;
		} else if (receivedAmount.value > 50) {
			errorAmount.value = 'maksymalnie możesz podać 50 porcjii';
			isAmountValid.value = false;
		} else {
			errorAmount.value = '';
			isAmountValid.value = true;
		}
	} else if (typeof receivedAmount.value === 'string') {
		errorAmount.value = '';
		isAmountValid.value = false;
	}

	isPowerValid.value && isVolumeValid.value && isAmountValid.value
		? (formValid.value = true)
		: (formValid.value = false);
};

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
		receivedAmount.value,
		formValid.value
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
				:class="[{ error: isPowerValid === false }, 'form__input']"
				id="moc"
				type="number"
				name="mocalkoholu"
				v-model="receivedPower"
				@input="collectData"
			/>
			<p class="form__err-msg">{{ errorPower }}</p>
		</div>

		<div class="form__group">
			<label class="form__input-label" for="objetosc"
				>objętość porcji (ml)</label
			>
			<input
				:class="[{ error: isVolumeValid === false }, 'form__input']"
				id="objetosc"
				type="number"
				name="objetoscalkoholu"
				v-model="receivedVolume"
				@input="collectData"
			/>
			<p class="form__err-msg">{{ errorVolume }}</p>
		</div>

		<div class="form__group">
			<label class="form__input-label" for="ilosc">ilośc porcji</label>
			<input
				:class="[{ error: isAmountValid === false }, 'form__input']"
				id="ilosc"
				type="number"
				name="iloscporcjialkoholu"
				v-model="receivedAmount"
				@input="collectData"
			/>
			<p class="form__err-msg">{{ errorAmount }}</p>
		</div>
	</form>
</template>

<style scoped>
@import '../assets/scss/components/step-two.scss';
</style>
