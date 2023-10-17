<script setup lang="ts">
import FirstStep from './components/FirstStep.vue';
import SecondStep from './components/SecondStep.vue';
import ThirdStep from './components/ThirdStep.vue';
import { ref } from 'vue';

//:Record<string, DefineComponent<{},{},{}>> nie działa :c
const steps: Record<string, any> = {
	FirstStep,
	SecondStep,
	ThirdStep,
};

const currentStep = ref('FirstStep');
</script>

<template>
	<section class="container" aria-label="form-card">
		<component :is="steps[currentStep]"></component>

		<div class="controls">
			<button @click="currentStep = 'FirstStep'">Cofnij</button>
			<button @click="currentStep = 'SecondStep'">Dalej</button>
		</div>
	</section>
</template>

<style scoped>
@import './assets/scss/components/first-step.scss';
</style>
