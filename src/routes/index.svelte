<script lang="ts">
	import { urlBuilderAuth } from '../marvel-api/seutp-api'
	import { onMount } from 'svelte';
	import GridCard from '../components/grid-card/grid-card.svelte';
	import { characterListSerializer } from '../marvel-api/serializers/character-list-serializer';

	// Not prerender on this case
	export const prerender = true;

	const items = [ "uno", "dos", "tres", "cuatro" ];
	let characterList = [];

	onMount(async () => {
		const urlService = urlBuilderAuth(`v1/public/characters`);
		const res = await fetch(urlService);
		characterList = await res.json();
		characterList = characterListSerializer(characterList);

		//console.log('los datos de los personajes son', charactersList);
	});
</script>

<svelte:head>
	<title>Home - Super Hero App</title>
</svelte:head>

<section>
	<h1 class="text-3xl font-bold bg-indigo-800 text-white rounded-lg my-4">
		Marvel Characters
	</h1>
	<GridCard elementsList={ characterList } />
</section>
