<script setup lang="ts">
import FirstStep from '../components/FirstStep.vue';
import SecondStep from '../components/SecondStep.vue';
import ThirdStep from '../components/ThirdStep.vue';

import { ref, watch } from 'vue';

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

const promiles = ref<string>();
const grams = ref<number>();
const portions = ref<number>();
const time = ref<string>();
// const ml = volume.value * amount.value;

const finalResults = (): void => {
	// a - ilość wypitego alkoholu(g), a = ml * ( % / 100) * 0,8
	const a = volume.value * amount.value * (power.value / 100) * 0.8;
	// k - współczynnik {kobiety : 0,6, mężczyźni: 0,7}
	const k = gender.value == 'mężczyzna' ? 0.7 : 0.6;
	// w - masa ciała (kg)
	const w = weight.value;

	// p - zawartość alkoholu we krwi(‰), p = a / ( k * w )
	const p = a / (k * w);

	// s - średnia ilość spalania alkoholu na godzinę {kobiety: 9g, mężczyźni: 11g}
	const s = gender.value == 'mężczyzna' ? 11 : 9;

	//---------------------results-------------------
	promiles.value = p.toFixed(2);
	grams.value = a;
	portions.value = a / 10;
	time.value = (a / s).toFixed(2);
	//toFixed może w ramach computed na poziomie 3 kompo

	console.log(`a = ${a}, k = ${k}, w = ${w}, p = ${p}, s = ${s}`);
};

const stepForward = () => {
	currentStep.value === 'FirstStep'
		? (currentStep.value = 'SecondStep')
		: (currentStep.value = 'ThirdStep');
};

const stepBack = () => {
	currentStep.value === 'ThirdStep'
		? (currentStep.value = 'SecondStep')
		: (currentStep.value = 'FirstStep');
	//a może to na obiekcie jakoś a nie na currentStep zrobić?
};

const isActive = ref<boolean>(false);

watch(currentStep, () => {
	currentStep.value === 'ThirdStep'
		? (isActive.value = true)
		: (isActive.value = false);
	console.log(
		`currentStep = ${currentStep.value}, isActive = ${isActive.value}`
	);
});

watch(isActive, () => {
	if (isActive) {
		finalResults();
	} else {
		promiles.value = '';
		grams.value = 0;
		portions.value = 0;
		time.value = '';
		//ten fragment chyba zbędny
	}
});
</script>
<template>
	<section class="container" aria-label="form-card">
		<!-- progress bar -->
		<KeepAlive :include="['FirstStep', 'SecondStep']">
			<component
				:is="steps[currentStep]"
				@firstStepData="receiveFirstStepData"
				@secondStepData="receivedSecondStepData"
				:promiles="promiles"
				:grams="grams"
				:portions="portions"
				:time="time"
			></component>
		</KeepAlive>
		<!-- może lepiej rozpisać na trzy takie komponenty, by było czytelniej z tymi propsami i metodami-->

		<div class="controls">
			<button @click="stepBack">Cofnij</button>
			<button @click="stepForward">Dalej</button>
			<button @click="finalResults">test</button>
			<!-- przy mountowaniu może trzeciego weźmiemy policzone wyniki -->
			<!-- może zrobić, że podczas wyniku znikają przyciski i pojawia się jeden 'od nowa' czy coś w tym stylu (v-if i :disabled) -->
		</div>
	</section>
</template>
<style></style>
