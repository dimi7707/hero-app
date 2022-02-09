<script lang="ts">
	import { urlBuilderAuth } from '../marvel-api/seutp-api'
	import { onMount } from 'svelte';
	import GridCard from '../components/grid-card/grid-card.svelte';
	// Not prerender on this case
	export const prerender = true;

	const items = [ "uno", "dos", "tres", "cuatro" ];

	onMount(async () => {
		const urlService = urlBuilderAuth(`v1/public/characters`);

		const res = await fetch(urlService);
		let charactersList = await res.json();
		console.log(charactersList);
	});
</script>

<svelte:head>
	<title>Home - Super Hero App</title>
</svelte:head>

<section>
	<h1 class="text-3xl font-bold bg-indigo-800 text-white rounded-lg">
		Marvel Characters
	</h1>
	<GridCard elementsList={ items } />
</section>
