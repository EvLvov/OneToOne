<script lang="ts">
	import { onMount } from 'svelte';
	import Button from './Button.svelte';

	let currentIndex = $state(0);
	let { slides = [] } = $props();

	let interval: ReturnType<typeof setInterval> | undefined;

	function startInterval() {
		interval = setInterval(() => {
			currentIndex = (currentIndex + 1) % slides.length;
		}, 6000);
	}

	function goToSlide(index: number) {
		currentIndex = index;
		clearInterval(interval);
		startInterval();
	}

	onMount(() => {
		startInterval();
		return () => clearInterval(interval);
	});

</script>

<div class="relative w-full overflow-hidden rounded-[20px] h-[330px]">
	<div
		class="h-full w-full bg-cover bg-center bg-no-repeat transition-all duration-500"
		style="background-image: url({slides[currentIndex]?.image});"
	>
		<div class="absolute top-2 left-2 max-w-[310px] rounded-[15px] bg-white/80 px-6 py-7 mr-2">
			<h3 class="mb-3 font-title-medium text-xxl">{slides[currentIndex]?.title}</h3>
			<p class="ml-5 font-body-light text-sm">{@html slides[currentIndex]?.description}</p>

			<div class="absolute right-1 -bottom-8 -translate-x-1/2 transform">
				<Button variant="icon" src="icons/arrow.svg" />
			</div>
		</div>
	</div>

	{#if slides.length > 1}
		<div class="absolute bottom-2 left-2 z-20">
			<div class="rounded-full bg-white px-2 py-2 backdrop-blur-sm">
				<div class="flex gap-2">
					{#each slides as _, index}
						<button
							onclick={() => goToSlide(index)}
							class="h-3 w-3 flex-shrink-0 rounded-full transition-all duration-300"
							class:bg-black={index === currentIndex}
							class:bg-gray-400={index !== currentIndex}
						>
							<span class="sr-only">Слайд {index + 1}</span>
						</button>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</div>
