<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Home - Super Hero App</title>
</svelte:head>

<section>

	<h1 class="text-3xl font-bold bg-indigo-800 text-white rounded-lg">
		Marvel Character
	</h1>

	<Counter />
</section>
