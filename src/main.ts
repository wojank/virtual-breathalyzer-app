import { createApp } from 'vue';
import './assets/scss/main.scss';
import router from '../src/router';
import App from './App.vue';

/* font awesome */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
	faAsterisk,
	faArrowRotateRight,
	faPhone,
	faHouse,
	faEnvelope,
	faBars,
	faXmark,
} from '@fortawesome/free-solid-svg-icons';
import {
	faInstagram,
	faFacebookF,
	faXTwitter,
} from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add(
	faAsterisk,
	faArrowRotateRight,
	faInstagram,
	faFacebookF,
	faXTwitter,
	faPhone,
	faHouse,
	faEnvelope,
	faBars,
	faXmark
);

createApp(App)
	.use(router)
	.component('font-awesome-icon', FontAwesomeIcon)
	.mount('#app');
