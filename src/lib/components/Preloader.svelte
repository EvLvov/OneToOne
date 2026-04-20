<script lang="ts">
	import { onMount } from 'svelte';

	let {
		variant = 'main',
		onready,
	}: {
		variant?: 'main' | 'landing';
		onready?: () => void;
	} = $props();

	const config = {
		main: {
			logoSrc: 'images/main/logo.png',
			logoAlt: 'ONE TO ONE',
			bg: 'bg-brand-dark',
			duration: 'duration-[600ms]',
		},
		landing: {
			logoSrc: 'images/landing/hero-logo.webp',
			logoAlt: 'ONE',
			bg: 'bg-landing-beige',
			duration: 'duration-[800ms]',
		},
	}[variant];

	let visible = $state(true);
	let hiding = $state(false);
	let indicatorHiding = $state(false);

	let logoTop = $state(0);
	let logoLeft = $state(0);
	let logoWidth = $state(0);
	let logoHeight = $state(0);
	let measured = $state(false);

	let dotSize = $derived(Math.round(logoHeight * 0.18) - 7);

	function measure() {
		const allLogos = [...document.querySelectorAll(`img[src="${config.logoSrc}"]`)] as HTMLImageElement[];
		const pageLogo = allLogos.find(img => !img.closest('[data-preloader]'));
		if (!pageLogo) return;
		const rect = pageLogo.getBoundingClientRect();
		logoTop = rect.top;
		logoLeft = rect.left;
		logoWidth = rect.width;
		logoHeight = rect.height;
		measured = true;
	}

	function hide() {
		indicatorHiding = true;
		setTimeout(() => {
			hiding = true;
			onready?.();
			setTimeout(() => { visible = false; }, 600);
		}, 400);
	}

	onMount(() => {
		const allLogos = [...document.querySelectorAll(`img[src="${config.logoSrc}"]`)] as HTMLImageElement[];
		const pageLogo = allLogos.find(img => !img.closest('[data-preloader]'));

		if (pageLogo?.complete) {
			measure();
		} else {
			pageLogo?.addEventListener('load', measure);
		}

		if (document.readyState === 'complete') {
			hide();
		} else {
			window.addEventListener('load', hide, { once: true });
		}
	});
</script>

<style>
	@keyframes dot-bounce {
		0%, 80%, 100% { opacity: 0.2; }
		40%            { opacity: 1;   }
	}
	.dot { animation: dot-bounce 1.2s ease-in-out infinite; }
	.dot:nth-child(2) { animation-delay: 0.2s; }
	.dot:nth-child(3) { animation-delay: 0.4s; }
</style>

{#if visible}
	<div data-preloader class="fixed inset-0 z-[9999] {config.bg} transition-opacity {config.duration} {hiding ? 'opacity-0' : 'opacity-100'}">

		<img
			src={config.logoSrc}
			alt={config.logoAlt}
			style="position: fixed; top: {logoTop}px; left: {logoLeft}px; width: {logoWidth}px; height: {logoHeight}px;"
			class="transition-opacity {config.duration} {measured ? 'opacity-100' : 'opacity-0'}"
		/>

		{#if variant === 'main'}
			<div
				style="position: fixed; top: {logoTop + logoHeight + 32}px; left: 50%; translate: -50% 0;"
				class="transition-opacity duration-[700ms] {measured && !indicatorHiding ? 'opacity-100' : 'opacity-0'}"
			>
				<div class="h-12 w-12 animate-spin rounded-full border-[3px] border-white/15 border-t-white"></div>
			</div>
		{:else}
			<div
				style="position: fixed; top: {logoTop + logoHeight * 0.55 - 23}px; left: {logoLeft + logoWidth * 0.84 + 15}px; translate: -50% -100%; gap: {Math.round(dotSize * 0.8) + 5}px;"
				class="flex items-center transition-opacity {config.duration} {measured && !indicatorHiding ? 'opacity-100' : 'opacity-0'}"
			>
				{#each [0, 1, 2] as _}
					<div
						class="dot rounded-full"
						style="width: {dotSize}px; height: {dotSize}px; background: linear-gradient(135deg, #c9a96e, #43220A);"
					></div>
				{/each}
			</div>
		{/if}

	</div>
{/if}
