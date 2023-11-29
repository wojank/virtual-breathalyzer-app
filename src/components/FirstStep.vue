<script setup lang="ts">
import { ref } from 'vue';

type InputValue = number | undefined;
type ValidData = boolean | null;

const { gender, weight, age } = defineProps<{
	gender: string;
	weight: InputValue;
	age: InputValue;
}>();

const emit = defineEmits<{
	(
		e: 'firstStepData',
		receivedGender: string,
		receivedWeight: InputValue,
		receivedAge: InputValue,
		formValid: boolean
	): void;
	(e: 'secondStepData'): void;
}>();

const receivedGender = ref<string>(gender);
const receivedWeight = ref<InputValue>(weight);
const receivedAge = ref<InputValue>(age);

const errorWeight = ref('');
const errorAge = ref('');

const isWeightValid = ref<ValidData>(null);
const isAgeValid = ref<ValidData>(null);

const formValid = ref(false);

const validateData = (): void => {
	if (typeof receivedWeight.value === 'number') {
		if (receivedWeight.value.toString().startsWith('0')) {
			errorWeight.value = 'waga nie może zaczynać się od 0';
			receivedWeight.value = undefined;
			isWeightValid.value = false;
		} else if (receivedWeight.value > 200) {
			errorWeight.value = 'podana waga nie może przekraczać 200kg';
			isWeightValid.value = false;
		} else {
			errorWeight.value = '';
			isWeightValid.value = true;
		}
	} else if (typeof receivedWeight.value === 'string') {
		errorWeight.value = '';
		isWeightValid.value = false;
	}

	if (typeof receivedAge.value === 'number') {
		if (receivedAge.value.toString().startsWith('0')) {
			errorAge.value = 'podany wiek nie może zaczynać się od 0';
			receivedAge.value = undefined;
			isAgeValid.value = false;
		} else if (receivedAge.value > 100) {
			errorAge.value = 'podany wiek musi być mniejszy niż 100lat';
			isAgeValid.value = false;
		} else if (receivedAge.value < 18) {
			errorAge.value = 'musisz mieć więcej, niż 18 lat';
			isAgeValid.value = false;
		} else {
			errorAge.value = '';
			isAgeValid.value = true;
		}
	} else if (typeof receivedAge.value === 'string') {
		errorAge.value = '';
		isAgeValid.value = false;
	}

	isWeightValid.value && isAgeValid.value
		? (formValid.value = true)
		: (formValid.value = false);
};

const collectData = () => {
	validateData();
	emit(
		'firstStepData',
		receivedGender.value,
		receivedWeight.value,
		receivedAge.value,
		formValid.value
	);
};
</script>

<template>
	<form class="form">
		<p class="form__card-title">Podaj płeć, wagę oraz wiek</p>
		<div class="form__radios">
			<div>
				<input
					class="form__radio"
					id="mężczyzna"
					type="radio"
					value="mężczyzna"
					name="gender"
					v-model="receivedGender"
					@change="collectData"
					checked
				/>
				<label class="form__radio-label" for="mężczyzna">mężczyzna</label>
			</div>

			<div>
				<input
					class="form__radio"
					id="kobieta"
					type="radio"
					value="kobieta"
					name="gender"
					v-model="receivedGender"
					@change="collectData"
				/>
				<label class="form__radio-label" for="kobieta">kobieta</label>
			</div>
			<!-- <p>{{ errorGender }}</p> -->
		</div>

		<div class="form__group">
			<label class="form__input-label" for="waga">waga</label>
			<input
				:class="[{ error: isWeightValid === false }, 'form__input']"
				id="waga"
				type="number"
				name="waga"
				v-model="receivedWeight"
				@input="collectData"
			/>
			<p class="form__err-msg">{{ errorWeight }}</p>
		</div>

		<div class="form__group">
			<label class="form__input-label" for="wiek">wiek</label>
			<input
				:class="[{ error: isAgeValid === false }, 'form__input']"
				id="wiek"
				type="number"
				name="wiek"
				v-model="receivedAge"
				@input="collectData"
			/>
			<p class="form__err-msg">{{ errorAge }}</p>
		</div>
	</form>
</template>

<style scoped>
@import '../assets/scss/components/step-one.scss';
</style>
