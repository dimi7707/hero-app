<script lang="ts">
  import type { CharacterProfile } from '../../types/character-profile';
  import Card from '../card/card.svelte';
  export let elementsList: Array<CharacterProfile>;
</script>

<div class="grid grid-cols-3 gap-3">
  {#each elementsList as elem}
    <div>
      <Card
        profileData={elem}
      />
    </div>
  {/each}
</div>
