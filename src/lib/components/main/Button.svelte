<script lang="ts">
	import Icon from './Icon.svelte';

	let {
		label = 'Button',
		variant = 'white',
		small = false,
		medium = false,
		href,
		src = '',
		alt = '',
		onclick,
		class: extraClass = '',
		icon,
		iconWidth = '1em',
		iconHeight = '1em',
		iconColor = 'currentColor'
	}: {
		label?: string;
		variant?: 'white' | 'brown' | 'icon' | 'text';
		small?: boolean;
		medium?: boolean;
		href?: string;
		src?: string;
		alt?: string;
		onclick?: () => void;
		class?: string;
		icon?: 'user' | 'logout';
		iconWidth?: string | number;
		iconHeight?: string | number;
		iconColor?: string;
	} = $props();

	const handleClick = () => { if (href) window.location.href = href; else onclick?.(); };

	const variantClass: Record<string, string> = {
		white: 'bg-white text-black',
		brown: 'bg-landing-brown text-white',
		text:  'bg-brand-light text-black',
	};

	const sizeClass = $derived(small
		? 'px-[14px] py-[9px] text-[11px] leading-[1]'
		: medium
		? 'px-[28px] py-[10px] text-[14px] sm:text-[16px] font-normal'
		: 'px-[40px] py-[12px] text-[18px] sm:text-[22px] font-normal'
	);
</script>

{#if variant === 'icon'}
	<button
		{onclick}
		class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white transition-all duration-300 hover:shadow-lg hover:opacity-80 {extraClass}"
	>
		<img class="block" {src} {alt} />
	</button>
{:else if href}
	<a
		{href}
		class="inline-flex items-center justify-center rounded-[90px] uppercase font-gordita whitespace-nowrap transition-all duration-300 hover:shadow-lg hover:opacity-80 {variantClass[variant]} {sizeClass} {extraClass}"
	>
		{#if icon}<span class="mr-[8px] inline-flex"><Icon name={icon} width={iconWidth} height={iconHeight} color={iconColor} /></span>{/if}
		{label}
	</a>
{:else}
	<button
		onclick={handleClick}
		class="inline-flex items-center justify-center rounded-[90px] uppercase font-gordita whitespace-nowrap transition-all duration-300 hover:shadow-lg hover:opacity-80 {variantClass[variant]} {sizeClass} {extraClass}"
	>
		{#if icon}<span class="mr-[8px] inline-flex"><Icon name={icon} width={iconWidth} height={iconHeight} color={iconColor} /></span>{/if}
		{label}
	</button>
{/if}
