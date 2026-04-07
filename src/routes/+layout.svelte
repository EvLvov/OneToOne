<script lang="ts">
	import './layout.css';
	import Preloader from '$lib/components/Preloader.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href="favicon.png" /></svelte:head>
<Preloader />
{@render children()}
