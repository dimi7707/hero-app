<script lang="ts">
  export let id;
  import { urlBuilderAuth } from '../marvel-api/seutp-api';
  import { onMount } from "svelte";
  import HorizontalCard from '../components/card/horizontal-card.svelte';

  onMount(async () => {
    const urlService = urlBuilderAuth(`v1/public/${id}`);
    const res = await fetch(urlService);
		const characterData = await res.json();
    console.log('characterData', characterData);
  });

</script>

<HorizontalCard></HorizontalCard>

<ul>
  <li>
    aqui van las series
  </li>
  <li>
    aqui van la lista de comics
  </li>
</ul>
