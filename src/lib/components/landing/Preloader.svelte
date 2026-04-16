<script lang="ts">
	import { onMount } from 'svelte';

	let visible = $state(true);
	let hiding = $state(false);
	let dotsHiding = $state(false);

	let logoTop = $state(0);
	let logoLeft = $state(0);
	let logoWidth = $state(0);
	let logoHeight = $state(0);
	let measured = $state(false);

	// dot size ≈ 18% of logo height
	let dotSize = $derived(Math.round(logoHeight * 0.18) - 7);

	function measure() {
		const allLogos = [...document.querySelectorAll('img[src="images/landing/hero-logo.png"]')] as HTMLImageElement[];
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
		dotsHiding = true;
		setTimeout(() => {
			hiding = true;
			setTimeout(() => { visible = false; }, 600);
		}, 400);
	}

	onMount(() => {
		const allLogos = [...document.querySelectorAll('img[src="images/landing/hero-logo.png"]')] as HTMLImageElement[];
		const pageLogo = allLogos.find(img => !img.closest('[data-preloader]'));

		if (pageLogo?.complete) {
			measure();
		} else {
			pageLogo?.addEventListener('load', measure);
		}

		setTimeout(hide, 3000);
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
	<div data-preloader class="fixed inset-0 z-[9999] bg-[#e9ded9] transition-opacity duration-[800ms] {hiding ? 'opacity-0' : 'opacity-100'}">

		<img
			src="images/landing/hero-logo.png"
			alt="ONE"
			style="position: fixed; top: {logoTop}px; left: {logoLeft}px; width: {logoWidth}px; height: {logoHeight}px;"
			class="transition-opacity duration-[800ms] {measured ? 'opacity-100' : 'opacity-0'}"
		/>

		<div
			style="position: fixed; top: {logoTop + logoHeight * 0.55 - 23}px; left: {logoLeft + logoWidth * 0.84 + 15}px; translate: -50% -100%; gap: {Math.round(dotSize * 0.8) + 5}px;"
			class="flex items-center transition-opacity duration-[800ms] {measured && !dotsHiding ? 'opacity-100' : 'opacity-0'}"
		>
			{#each [0, 1, 2] as _}
				<div
					class="dot rounded-full"
					style="width: {dotSize}px; height: {dotSize}px; background: linear-gradient(135deg, #c9a96e, #43220A);"
				></div>
			{/each}
		</div>

	</div>
{/if}
