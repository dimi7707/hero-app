<script lang="ts">
  import { urlBuilderAuth } from '../marvel-api/seutp-api';
  import { onMount } from "svelte";
  import HorizontalCard from '../components/card/horizontal-card.svelte';
  import { characterProfileSerializer } from '../marvel-api/serializers/character-profile-serializer';
  import type { CharacterProfile } from '../types/character-profile';

  const id = localStorage.getItem('idCharacter') || '1011334';

  let characterData : CharacterProfile = {} as CharacterProfile;

  onMount(async () => {
    const urlService = urlBuilderAuth(`v1/public/characters/${id}`);
    const res = await fetch(urlService);
		const responseData = await res.json();
    characterData = characterProfileSerializer(responseData);
  });
</script>

  {#if  Object.keys(characterData).length > 0 }
  <HorizontalCard
    fillData={ characterData }
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
