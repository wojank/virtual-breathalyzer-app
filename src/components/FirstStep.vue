<script setup lang="ts">
import { ref } from 'vue';

const receivedGender = ref<string>('');
const receivedWeight = ref<number | undefined>();

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
		receivedWeight: number | undefined
	): void;
	(e: 'secondStepData'): void;
}>();

const collectData = () => {
	validateData();
	emit('firstStepData', receivedGender.value, receivedWeight.value);
};
</script>

<template>
	<p class="card__title">podaj płeć oraz wagę</p>

	<form class="form">
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
			<input class="form__input" id="wiek" type="number" name="wiek" />
		</div>
	</form>
</template>

<style scoped>
@import '../assets/scss/components/step-one.scss';
</style>
