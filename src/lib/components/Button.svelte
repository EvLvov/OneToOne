<script lang="ts">
	let {
		variant = 'icon',
		src = '',
		alt = '',
		label = 'Button',
		onclick
	}: {
		variant?: 'icon' | 'text';
		src?: string;
		alt?: string;
		label?: string;
		onclick?: () => void;
	} = $props();
</script>

{#if variant === 'icon'}
	<button
		{onclick}
		class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-light shadow-lg transition-all duration-300 hover:bg-blue-400"
	>
		<img class="block" {src} {alt} />
	</button>
{:else if variant === 'text'}
	<button
		{onclick}
		class="inline-flex items-center justify-center rounded-full bg-brand-light px-6 py-3 shadow-lg transition-all duration-300 hover:bg-blue-400"
	>
		{label}
	</button>
{/if}
