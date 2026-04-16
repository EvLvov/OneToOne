<script lang="ts">
	import '../app.css';
	import Preloader from '$lib/components/main/Preloader.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href="favicon.png" /></svelte:head>
<Preloader />
{@render children()}
