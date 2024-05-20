<script>
  import Head from '$lib/Head.svelte'
  import Video from '$lib/Video.svelte'
  import Tile from '$lib/Tile.svelte'
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
    <Tile title="Teaching and Learning" link="/our-school" data={data.tileImages.teachingLearning} />
    <Tile title="Special Character" link="/about-us#special-character" data={data.tileImages.specialCharacter} />
    <Tile title="Boarding" link="/our-school#boarding" data={data.tileImages.boarding} />
    <Tile title="Wellbeing" link="/our-school#learning-support" data={data.tileImages.wellbeing} />
    <Tile title="Co-curricular" link="/our-school#sports" data={data.tileImages.coCurricular} />
    <Tile title="International" link="/enrolment#international" data={data.tileImages.international} />
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
    display: grid;
    grid-template-columns: repeat(3, minmax(300px, 1fr));
    gap: 3em;
    margin: 0 auto;
    margin-bottom: var(--main-gap-size-desktop);
    width: fit-content;
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
