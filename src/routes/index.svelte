<script lang="ts">
	import { urlBuilderAuth } from '../marvel-api/seutp-api'
	import { onMount } from 'svelte';
	import GridCard from '../components/grid-card/grid-card.svelte';
	import { characterListSerializer } from '../marvel-api/serializers/character-list-serializer';

	// Not prerender on this case
	export const prerender = true;
	let characterList = [];

	onMount(async () => {
		const urlService = urlBuilderAuth(`v1/public/characters`);
		const res = await fetch(urlService);
		characterList = await res.json();
		characterList = characterListSerializer(characterList);
	});
</script>

<svelte:head>
	<title>Home - Super Hero App</title>
</svelte:head>

<section>
	<GridCard elementsList={ characterList } />
</section>
