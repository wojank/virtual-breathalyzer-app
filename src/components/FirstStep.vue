<script setup lang="ts">
import { ref } from 'vue';

const { gender, weight, age } = defineProps<{
	gender: string;
	weight: number | undefined;
	age: number | undefined;
}>();

const receivedGender = ref<string>(gender);
const receivedWeight = ref<number | undefined>(weight);
const receivedAge = ref<number | undefined>(age);

const validateData = (): void => {
	if (typeof receivedWeight.value === 'number') {
		if (receivedWeight.value >= 200) {
			alert('Zbyt wysoka waga, prawdopodobnie ważysz mniej');
			receivedWeight.value = undefined;
		}
	}
};
const emit = defineEmits<{
	(
		e: 'firstStepData',
		receivedGender: string,
		receivedWeight: number | undefined,
		receivedAge: number | undefined
	): void;
	(e: 'secondStepData'): void;
}>();

const collectData = () => {
	validateData();
	emit(
		'firstStepData',
		receivedGender.value,
		receivedWeight.value,
		receivedAge.value
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
		</div>

		<div class="form__group">
			<label class="form__input-label" for="waga">waga</label>
			<input
				class="form__input"
				id="waga"
				type="number"
				name="waga"
				v-model="receivedWeight"
				@input="collectData"
			/>
		</div>

		<div class="form__group">
			<label class="form__input-label" for="wiek">wiek</label>
			<input
				class="form__input"
				id="wiek"
				type="number"
				name="wiek"
				v-model="receivedAge"
				@input="collectData"
			/>
		</div>
	</form>
</template>

<style scoped>
@import '../assets/scss/components/step-one.scss';
</style>
