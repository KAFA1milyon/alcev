import NProgress from "nprogress";
import "nprogress/nprogress.css";
import 'swiper/dist/css/swiper.css'

import { app, router, store } from "./app";

import Vue from "vue";
import VueAwesomeSwiper from 'vue-awesome-swiper';
import {VueMasonryPlugin} from 'vue-masonry';
import VueYoutube from 'vue-youtube';

Vue.use(VueAwesomeSwiper);
Vue.use(VueMasonryPlugin);
Vue.use(VueYoutube)

store.replaceState(__INITIAL_STATE__);

router.onReady(() => {
	router.beforeResolve((to, from, next) => {
		const matched = router.getMatchedComponents(to);
		const prevMatched = router.getMatchedComponents(from);

		let diffed = false;
		const activated = matched.filter((c, i) => {
			return diffed || (diffed = prevMatched[i] !== c);
		});

		if (!activated.length) {
			return next();
		}

		NProgress.start();

		Promise.all(
			activated.map(c => {
				if (c.asyncData) {
					return c.asyncData({ store, route: to });
				}
			})
		).then(() => {
			NProgress.done();
			next();
		}).catch(next);
	});
	app.$mount("#app");
});
