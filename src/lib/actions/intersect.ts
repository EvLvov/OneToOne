import type { Action } from 'svelte/action';
import { pageReady } from '$lib/stores/pageReady';
import { get } from 'svelte/store';

interface IntersectOptions {
	animation?: string;
	threshold?: number;
	delay?: number;
}

export const intersect: Action<HTMLElement, IntersectOptions | undefined> = (node, options = {}) => {
	const {
		animation = 'animate-slide-in-left-fast',
		threshold = 0.15,
		delay = 1000,
	} = options;

	node.style.opacity = '0';

	let observer: IntersectionObserver;
	let unsubscribe: (() => void) | undefined;

	function startObserving() {
		observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setTimeout(() => {
							node.classList.add(...animation.split(' '));
						}, delay);
						observer.unobserve(node);
					}
				});
			},
			{ threshold, rootMargin: '0px 0px -17% 0px' }
		);
		observer.observe(node);
	}

	if (get(pageReady)) {
		startObserving();
	} else {
		unsubscribe = pageReady.subscribe((ready) => {
			if (ready) {
				startObserving();
				unsubscribe?.();
			}
		});
	}

	return {
		destroy() {
			observer?.unobserve(node);
			unsubscribe?.();
		},
	};
};
