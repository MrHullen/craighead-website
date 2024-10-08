<script>
  import Tile from '$lib/page/Tile.svelte'

  export let tiles
</script>

<div class="tiles">
  {#each tiles as tile}
    <Tile {tile} />
  {/each}
</div>

<style>
  .tiles {
    margin: 0 auto;
    width: fit-content;
    display: grid;
    gap: 1em;
    grid-template-columns: repeat(3, 200px);
  }

  @media screen and (max-width: 1000px) {
    .tiles {
      display: flex;
      flex-direction: column;
    }
  }
</style>