<script lang="ts">
  export let elementsList: Array<any>;
  import Card from '../card/card.svelte';

</script>

<div class="grid grid-cols-4 gap-4">
  {#each elementsList as elem}
    <div  >
      <Card title="Titulo de prueba por ahora" />
    </div>
  {/each}
</div>
