import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CalculatorView from '../views/CalculatorView.vue';
import AboutView from '../views/AboutView.vue';
import ContactView from '../views/ContactView.vue';

const routes = [
	{ path: '/', name: 'home', component: HomeView },
	{ path: '/calculator', name: 'calculator', component: CalculatorView },
	{ path: '/about', name: 'about', component: AboutView },
	{ path: '/contact', name: 'contact', component: ContactView },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
