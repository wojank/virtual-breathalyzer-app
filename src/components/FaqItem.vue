<script setup lang="ts">
const props = defineProps<{
	item: {
		question: string;
		answer: string;
		status: boolean;
	};
}>();

const enter = (el: Element): void => {
	const element = el as HTMLElement;
	element.style.height = 'auto';

	const height = getComputedStyle(el).height;

	element.style.height = '0';

	getComputedStyle(el);

	setTimeout(() => {
		element.style.height = height;
	});
};
const afterEnter = (el: Element): void => {
	const element = el as HTMLElement;
	element.style.height = 'auto';
};
const leave = (el: Element): void => {
	const element = el as HTMLElement;
	element.style.height = getComputedStyle(el).height;

	getComputedStyle(el);

	setTimeout(() => {
		element.style.height = '0';
	});
};
</script>
<template>
	<Transition @enter="enter" @after-enter="afterEnter" @leave="leave">
		<!-- jeżeli dodaję margin albo padding do wysokości diva robi się brzydki przeskok. Efekt ten znika, kiedy dodam margin albo padding do wysokości paragrafu -->
		<div class="answer" v-show="props.item.status">
			<p class="answer-main">
				{{ props.item.answer }}
			</p>
		</div>
	</Transition>
</template>
<style>
@import '../assets/scss/views/contact-view.scss';
</style>
<!-- ten -->
