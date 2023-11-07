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
	<!-- <form> -->
	<p class="title">podaj płeć oraz wagę</p>

	<form class="wrap">
		<div class="radio">
			<div class="men">
				<input
					class="form-control__input-radio"
					id="mężczyzna"
					type="radio"
					value="mężczyzna"
					name="gender"
					v-model="receivedGender"
					@change="collectData"
				/>
				<label class="form-control__option" for="mężczyzna">mężczyzna</label>
			</div>

			<div class="women">
				<input
					class="form-control__input-radio"
					id="kobieta"
					type="radio"
					value="kobieta"
					name="gender"
					v-model="receivedGender"
					@change="collectData"
				/>
				<label class="form-control__option" for="kobieta">kobieta</label>
			</div>
		</div>

		<div class="form-control form-control--weight weight">
			<label class="form-control__title" for="waga">waga</label>
			<input
				class="form-control__input-number"
				id="waga"
				type="number"
				name="waga"
				v-model="receivedWeight"
				@input="collectData"
			/>
		</div>

		<div class="form-control form-control--weight age">
			<label class="form-control__title" for="waga">wiek</label>
			<input
				class="form-control__input-number"
				id="wiek"
				type="number"
				name="waga"
			/>
		</div>
	</form>
	<!-- </form> -->
</template>

<style scoped>
@import '../assets/scss/components/first-step.scss';
</style>
