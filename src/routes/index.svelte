<script lang="ts">
	import { urlBuilderAuth } from '../marvel-api/seutp-api'
	import { onMount } from 'svelte';
	import GridCard from '../components/grid-card/grid-card.svelte';
	import { characterListSerializer } from '../marvel-api/serializers/character-list-serializer';
	import Spinner from '../components/spinner/spinner.svelte';

	let characterList = [];
	let fetchingData = true;

	onMount(async () => {
		const urlService = urlBuilderAuth(`v1/public/characters`);
		const res = await fetch(urlService);
		characterList = await res.json();
		fetchingData = false;
		characterList = characterListSerializer(characterList);
	});
</script>

<svelte:head>
	<title>Home - Super Hero App</title>
</svelte:head>

<section>
	{#if fetchingData}
		<div class="flex justify-center">
			<Spinner />
		</div>
	{:else}
		<GridCard elementsList={ characterList } />
	{/if}
</section>
