<script>
  import Head from '$lib/Head.svelte'
  import Video from '$lib/Video.svelte'
  import Tile from '$lib/page/Tile.svelte'
  import LandingText from '$lib/LandingText.svelte'
  // import OpenDay from '$lib/OpenDay.svelte'

  export let data
</script>

<Head title="Craighead Diocesan School" description="Craighead Diocesan School has a reputation for lifting the performance of our students - in all activities, both in and out of the classroom. We believe many students have unrealized potential and we enjoy helping each girl discover her capabilities." />

<main>
  <Video playbackId={data.landingVideo.playbackId} />

  <!-- <OpenDay /> -->

  <section class="text">
    <LandingText />
  </section>

  <section class="tiles">
    {#each data.tiles as tile}
      <Tile {tile} />
    {/each}
  </section>
</main>

<style>
  main {
    --main-gap-size-desktop: 7em;
    --main-gap-size-mobile: 3em;
  }

  section.text {
    margin-top: var(--main-gap-size-desktop);
    margin-bottom: var(--main-gap-size-desktop);
  }

  section.tiles {
    margin: 0 auto;
    margin-bottom: var(--main-gap-size-desktop);
    width: fit-content;
    display: grid;
    gap: 3em;
    grid-template-columns: repeat(3, minmax(300px, 1fr));
  }

  @media screen and (max-width: 1000px) {
    section.tiles {
      display: flex;
      flex-direction: column;
      margin-bottom: var(--main-gap-size-mobile);
    }

    section.text {
      margin-top: var(--main-gap-size-mobile);
      margin-bottom: var(--main-gap-size-mobile);
    }
  }
</style>
