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
		<div class="faq__answer-block" v-show="props.item.status">
			<p class="faq__answer">
				{{ props.item.answer }}
			</p>
		</div>
	</Transition>
</template>
<style scoped>
@import '../assets/scss/components/faq-item.scss';
</style>
