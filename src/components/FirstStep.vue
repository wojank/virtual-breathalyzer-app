<script setup lang="ts">
import { ref } from 'vue';
// import type { Ref } from 'vue';

const receivedGender = ref('');
const receivedWeight = ref(60);

// const emit = defineEmits(['firstStepData', 'secondStepData']);
const emit = defineEmits<{
	(e: 'firstStepData', receivedGender: string, receivedWeight: number): void;
	(e: 'secondStepData'): void;
}>();

const collectData = () => {
	emit('firstStepData', receivedGender.value, receivedWeight.value);
};
</script>

<template>
	<p class="title">podaj płeć oraz wagę</p>

	<div class="wrap">
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
	</div>
</template>

<style scoped>
@import '../assets/scss/components/first-step.scss';
</style>
