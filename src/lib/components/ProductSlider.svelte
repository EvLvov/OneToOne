<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		gap?: number;
		btnOffset?: number;
		btnColor?: 'white' | 'black' | 'gray';
	}

	let { children, gap = 0, btnOffset = 0, btnColor = 'black' }: Props = $props();

	const btnClass = $derived(
		btnColor === 'white' ? 'text-white' : btnColor === 'gray' ? 'text-[#808080]' : 'text-black'
	);

	let container = $state<HTMLDivElement | null>(null);
	let wrapper = $state<HTMLDivElement | null>(null);
	let btnLeft = $state(0);
	let btnRight = $state(0);

	function updateBtnPositions() {
		if (!container || !wrapper) return;
		// берём первый img до любой прокрутки — все слайды одинаковые
		container.scrollLeft = 0;
		const img = container.querySelector('img');
		if (!img) return;
		const imgRect = img.getBoundingClientRect();
		const wrapRect = wrapper.getBoundingClientRect();
		const offset = window.innerWidth < 640 ? -25 : 100;
		btnLeft = imgRect.left - wrapRect.left - offset;
		btnRight = wrapRect.right - imgRect.right - offset;
	}

	$effect(() => {
		if (!container || !wrapper) return;
		updateBtnPositions();
		window.addEventListener('resize', updateBtnPositions);
		return () => window.removeEventListener('resize', updateBtnPositions);
	});

	function prev() {
		if (!container) return;
		container.scrollBy({ left: -container.offsetWidth, behavior: 'smooth' });
	}

	function next() {
		if (!container) return;
		container.scrollBy({ left: container.offsetWidth, behavior: 'smooth' });
	}
</script>

<div bind:this={wrapper} class="relative mb-[60px] sm:mb-[80px]">
	<div
		bind:this={container}
		class="flex overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [&>*]:shrink-0 [&>*]:w-full [&>*]:snap-start xl:[&>*]:w-auto xl:[&>*]:flex-1 xl:[&>*]:snap-none xl:overflow-x-visible xl:snap-none"
		style="gap: {gap}px"
	>
		{#if children}
			{@render children()}
		{/if}
	</div>

	<button
		onclick={prev}
		aria-label="Назад"
		class="xl:hidden absolute z-10 -translate-y-1/2 p-4 transition-opacity duration-200 disabled:opacity-30 {btnClass}"
		style="left: {btnLeft}px; top: calc(50% + {btnOffset}px)"
	>
		<svg width="34" height="50" viewBox="0 0 10 18" fill="none">
			<path d="M9 1L1 9L9 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
	</button>
	<button
		onclick={next}
		aria-label="Вперёд"
		class="xl:hidden absolute z-10 -translate-y-1/2 p-4 transition-opacity duration-200 disabled:opacity-30 {btnClass}"
		style="right: {btnRight}px; top: calc(50% + {btnOffset}px)"
	>
		<svg width="34" height="50" viewBox="0 0 10 18" fill="none">
			<path d="M1 1L9 9L1 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
	</button>
</div>
