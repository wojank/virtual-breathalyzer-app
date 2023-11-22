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

// const gender = ref<string | any>('');
const gender = ref<string>('');
const weight = ref<number>(0);
const firstStepFilled = ref<boolean>(false);

const receiveFirstStepData = (...args: unknown[]) => {
	const [receivedGender, receivedWeight] = args as [string, number];

	gender.value = receivedGender;
	weight.value = receivedWeight;

	if (gender.value && weight.value) {
		firstStepFilled.value = true;
	} else {
		firstStepFilled.value = false;
	}
};

const power = ref<number>(0);
const volume = ref<number>(0);
const amount = ref<number>(0);
const secondStepFilled = ref<boolean>(false);

const receivedSecondStepData = (...args: unknown[]) => {
	const [receivedPower, receivedVolume, receivedAmount] = args as [
		number,
		number,
		number
	];

	power.value = receivedPower;
	volume.value = receivedVolume;
	amount.value = receivedAmount;

	if (power.value && volume.value && amount.value) {
		secondStepFilled.value = true;
	} else {
		secondStepFilled.value = false;
	}
};

const promiles = ref<number | string>();
const grams = ref<number | string>();
const portions = ref<number | string>();
const time = ref<number | string>();
const thirstStepFinished = ref<boolean>(false);
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
	promiles.value = p;
	grams.value = a;
	portions.value = a / 10;
	time.value = a / s;

	thirstStepFinished.value = true;
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
	thirstStepFinished ? (thirstStepFinished.value = false) : '';
};

const isActive = ref<boolean>(false);

watch(currentStep, () => {
	currentStep.value === 'ThirdStep'
		? (isActive.value = true)
		: (isActive.value = false);
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

const clearForm = (): void => {
	gender.value = '';
	weight.value = 0;
	firstStepFilled.value = false;
	power.value = 0;
	volume.value = 0;
	amount.value = 0;
	secondStepFilled.value = false;
	promiles.value = 0;
	portions.value = 0;
	grams.value = 0;
	time.value = 0;
	thirstStepFinished.value = false;
	currentStep.value = 'FirstStep';
};
</script>
<template>
	<main class="calculator">
		<section class="info">
			<h1 class="info__title">Wirtualny alkomat</h1>
			<h2 class="info__subtitle">Sprawdź czy pijesz odpowiedzialnie</h2>
			<p class="info__description">
				Wirtualny alkomat opiera się na zasadzie obliczania poziomu alkoholu we
				krwi na podstawie danych dostarczanych przez użytkownika. Podstawowym
				elementem pomiaru jest ilość spożytego alkoholu oraz czas, jaki upłynął
				od jego spożycia. Wzór wykorzystuje informacje takie jak waga i płeć
				użytkownika, aby oszacować tempo metabolizmu alkoholu. Jednak warto
				zaznaczyć, że wirtualne alkomaty nie są tak precyzyjne jak profesjonalne
				urządzenia policyjne i nie powinny być używane do podejmowania decyzji
				dotyczących bezpieczeństwa na drodze.
			</p>
		</section>

		<section class="card" aria-label="form-card">
			<div class="card__progress-bars" aria-label="progress-bars">
				<span :class="[{ active: firstStepFilled }, 'card__bar']"></span>
				<span
					:class="[
						{ active: secondStepFilled && currentStep != 'FirstStep' },
						'card__bar',
					]"
				></span>
				<span
					:class="[{ active: currentStep == 'ThirdStep' }, 'card__bar']"
				></span>
			</div>
			<component
				:is="steps[currentStep]"
				@firstStepData="receiveFirstStepData"
				@secondStepData="receivedSecondStepData"
				:gender="gender"
				:weight="weight"
				:power="power"
				:volume="volume"
				:amount="amount"
				:promiles="promiles"
				:grams="grams"
				:portions="portions"
				:time="time"
			></component>
			<div class="card__buttons">
				<button :disabled="currentStep == 'FirstStep'" @click="stepBack">
					Cofnij
				</button>
				<button
					v-if="
						!thirstStepFinished ||
						currentStep == 'SecondStep' ||
						currentStep == 'FirstStep'
					"
					:disabled="
						!firstStepFilled ||
						(!secondStepFilled && currentStep == 'SecondStep')
					"
					@click="stepForward"
				>
					Dalej
				</button>
				<button
					v-else-if="thirstStepFinished && currentStep == 'ThirdStep'"
					@click="clearForm"
				>
					Od nowa
				</button>
			</div>
		</section>
	</main>
</template>
<style scoped>
@import '../assets/scss/views/view-calculator.scss';
</style>
