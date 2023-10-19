<script setup lang="ts">
import FirstStep from './components/FirstStep.vue';
import SecondStep from './components/SecondStep.vue';
import ThirdStep from './components/ThirdStep.vue';
import { ref } from 'vue';

const steps: Record<
	string,
	typeof FirstStep | typeof SecondStep | typeof ThirdStep
> = {
	FirstStep,
	SecondStep,
	ThirdStep,
};
const currentStep = ref('FirstStep');

const gender = ref<string>('');
const weight = ref<number>(0);

const receiveFirstStepData = (...args: unknown[]) => {
	const [receivedGender, receivedWeight] = args as [string, number];

	gender.value = receivedGender;
	weight.value = receivedWeight;
};

const power = ref<number>(0);
const volume = ref<number>(0);
const amount = ref<number>(0);
//przerobić na jedną ogólną funkcję?
const receivedSecondStepData = (...args: unknown[]) => {
	const [receivedPower, receivedVolume, receivedAmount] = args as [
		number,
		number,
		number
	];

	power.value = receivedPower;
	volume.value = receivedVolume;
	amount.value = receivedAmount;
};

const handleClick = () => {
	console.log(gender.value, power.value);
};
</script>

<template>
	<section class="container" aria-label="form-card">
		<!-- progress bar -->
		<component
			:is="steps[currentStep]"
			@firstStepData="receiveFirstStepData"
			@secondStepData="receivedSecondStepData"
		></component>

		<div class="controls">
			<button @click="currentStep = 'FirstStep'">Cofnij</button>
			<button @click="currentStep = 'SecondStep'">Dalej</button>
			<button @click="handleClick">Test</button>
		</div>
	</section>
</template>

<style scoped>
@import './assets/scss/components/first-step.scss';
</style>
