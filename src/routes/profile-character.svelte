<script lang="ts">
  import { urlBuilderAuth } from '../marvel-api/seutp-api';
  import { onMount } from "svelte";
  import HorizontalCard from '../components/card/horizontal-card.svelte';
  import { characterProfileSerializer } from '../marvel-api/serializers/character-profile-serializer';

  const id = localStorage.getItem('idCharacter') || '1011334';

  let characterData = {};

  onMount(async () => {
    const urlService = urlBuilderAuth(`v1/public/characters/${id}`);
    const res = await fetch(urlService);
		const responseData = await res.json();
    console.log('characterData', responseData);

    console.log('La data serializada es', characterProfileSerializer(responseData));
    characterData = characterProfileSerializer(responseData);
  });
</script>

  {#if  Object.keys(characterData).length > 0 }
  <HorizontalCard
    id={characterData.id}
    title={characterData.name}
    description={characterData.description}
    image={characterData.image}
  />
  {/if}

<ul>
  <li>
    aqui van las series
  </li>
  <li>
    aqui van la lista de comics
  </li>
</ul>
