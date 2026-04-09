<script lang="ts">
	import { onMount } from 'svelte';

	let visible = $state(true);
	let hiding = $state(false);
	let spinnerHiding = $state(false);

	let logoTop = $state(0);
	let logoLeft = $state(0);
	let logoWidth = $state(0);
	let logoHeight = $state(0);
	let measured = $state(false);

	function measure() {
		const allLogos = [...document.querySelectorAll('img[src="images/main/logo.png"]')] as HTMLImageElement[];
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
		spinnerHiding = true;
		setTimeout(() => {
			hiding = true;
			setTimeout(() => { visible = false; }, 600);
		}, 400);
	}

	onMount(() => {
		const allLogos = [...document.querySelectorAll('img[src="images/main/logo.png"]')] as HTMLImageElement[];
		const pageLogo = allLogos.find(img => !img.closest('[data-preloader]'));

		if (pageLogo?.complete) {
			measure();
		} else {
			pageLogo?.addEventListener('load', measure);
		}

		setTimeout(hide, 3000);
	});
</script>

<style></style>

{#if visible}
	<div data-preloader class="fixed inset-0 z-[9999] bg-brand-dark transition-opacity duration-[600ms] {hiding ? 'opacity-0' : 'opacity-100'}">

		<img
			src="images/main/logo.png"
			alt="ONE TO ONE"
			style="position: fixed; top: {logoTop}px; left: {logoLeft}px; width: {logoWidth}px; height: {logoHeight}px;"
			class="transition-opacity duration-[700ms] {measured ? 'opacity-100' : 'opacity-0'}"
		/>
		<div
			style="position: fixed; top: {logoTop + logoHeight + 32}px; left: 50%; translate: -50% 0;"
			class="transition-opacity duration-[700ms] {measured && !spinnerHiding ? 'opacity-100' : 'opacity-0'}"
		>
			<div class="h-12 w-12 animate-spin rounded-full border-[3px] border-white/15 border-t-white"></div>
		</div>

	</div>
{/if}
