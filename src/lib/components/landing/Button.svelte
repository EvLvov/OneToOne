<script lang="ts">
	let {
		label = 'Button',
		variant = 'white',
		href,
		radius,
		src = '',
		alt = '',
		onclick
	}: {
		label?: string;
		variant?: 'white' | 'brown' | 'icon';
		href?: string;
		radius?: number;
		src?: string;
		alt?: string;
		onclick?: () => void;
	} = $props();

	const handleClick = () => { if (href) window.location.href = href; else onclick?.(); };
	const style = $derived(radius !== undefined ? `border-radius: ${radius}px` : '');

	const variantClass: Record<string, string> = {
		white: 'bg-white text-black px-[40px] py-[12px] rounded-[90px] uppercase font-gordita font-normal text-[18px] sm:text-[22px]',
		brown: 'bg-landing-brown text-white px-[40px] py-[12px] rounded-[90px] uppercase font-gordita font-normal text-[18px] sm:text-[22px]',
	};
</script>

{#if variant === 'icon'}
	<button
		onclick={handleClick}
		class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white transition-all duration-300 hover:shadow-lg hover:opacity-80"
	>
		<img class="block" {src} {alt} />
	</button>
{:else}
	<button
		onclick={handleClick}
		{style}
		class="inline-flex items-center justify-center gap-[10px] transition-all duration-300 hover:shadow-lg hover:opacity-80 {variantClass[variant]}"
	>
		{label}
	</button>
{/if}
