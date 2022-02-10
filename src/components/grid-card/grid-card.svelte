<script lang="ts">
  export let elementsList: Array<any>;
  import Card from '../card/card.svelte';

  console.log('el contenido de la variable elementsList es: ', elementsList);

</script>

<div class="grid grid-cols-3 gap-3">
  {#each elementsList as elem}
    <div>
      <Card
        id={ elem.id }
        title={ elem.name }
        description={ elem.description }
        image={ elem.image }
        tagList={ elem.tagList }
      />
    </div>
  {/each}
</div>
