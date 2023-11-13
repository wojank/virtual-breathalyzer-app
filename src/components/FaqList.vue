<script setup lang="ts">
import FaqItem from './FaqItem.vue';

import { ref } from 'vue';

const questionsAndAnswers = ref([
	{
		question: 'Ile alkoholu mogę bezpiecznie spożywać?',
		answer:
			'Zależy to od wielu czynników, ale ogólnie zaleca się umiarkowane spożywanie alkoholu, co oznacza do 1 napoju dziennie dla kobiet i do 2 napojów dziennie dla mężczyzn.',
		status: false,
	},
	{
		question: 'Czy alkohol jest zdrowy w małych ilościach?',
		answer:
			' Mała ilość alkoholu, zwłaszcza czerwonego wina, może być związana z korzyściami zdrowotnymi, ale zawsze istnieje ryzyko negatywnych skutków, dlatego należy zachować umiar.',
		status: false,
	},
	{
		question: 'Jakie są objawy nadużycia alkoholu?',
		answer:
			'Objawy nadużycia alkoholu mogą obejmować zmiany nastroju, problemy z pamięcią, trudności w koncentracji, utratę kontroli nad spożyciem i fizyczne objawy, takie jak drżenie rąk.',
		status: false,
	},
	{
		question: 'Jak unikać kaca?',
		answer:
			'Aby uniknąć kaca, pij alkohol umiarkowanie, pij dużo wody między napojami alkoholowymi, jedz przed spożyciem alkoholu, a następnego dnia odpoczywaj i dostarcz organizmowi nawilżenia',
		status: false,
	},
]);
</script>
<template>
	<article class="faq">
		<ul>
			<li v-for="item in questionsAndAnswers" :key="item.question">
				<h3
					:class="[{ active: item.status }, 'faq__question']"
					@click="item.status = !item.status"
				>
					{{ item.question }}
					<font-awesome-icon
						icon="fa-solid fa-arrow-rotate-right"
						size="1x"
						:class="[{ rotate: item.status }, 'faq__icon']"
					/>
				</h3>
				<FaqItem :item="item" />
			</li>
		</ul>
	</article>
</template>
<style scoped>
@import '../assets/scss/components/faq-list.scss';
</style>
