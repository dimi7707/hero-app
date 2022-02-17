<script lang="ts">
  export let profileData: CharacterProfile;
  import type {CharacterProfile} from '../../types/character-profile';

  const { id, image, name:title, description, tagList } = profileData;

  const setIdCurrentHero = () => {
    localStorage.idCharacter = id;
  };

</script>

<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white" on:click={ () => setIdCurrentHero() } >
  <a sveltekit:prefetch href="/profile-character">
    <img class="w-full" src={ image } alt={ title }>
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2"> { title } </div>
      <p class="text-gray-700 text-base">
        { description }
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      { #each tagList as tag  }
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          { tag }
        </span>
      { /each}
    </div>
  </a>
</div>
