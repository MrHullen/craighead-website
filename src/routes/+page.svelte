<script>
  import StudentsWelcome from '$lib/landing-page/StudentsWelcome.svelte'
  import PrincipalsWelcome from '$lib/landing-page/PrincipalsWelcome.svelte'
  import StudentSpotlights from '$lib/landing-page/StudentSpotlights.svelte'
  import AcademicResults from '$lib/landing-page/AcademicResults.svelte'

  import client from '$lib/client'
  import imageUrlBuilder from '@sanity/image-url'
  import { getContext } from 'svelte'

  const builder = imageUrlBuilder(client)

  function urlFor(source) {
    return builder.image(source)
  }

  export let data
  let logo = getContext('logo')
</script>

<svelte:head>
  <title>Craighead Diocesan School</title>
  <meta name="description" content="Craighead Diocesan School has a reputation for lifting the performance of our students - in all activities, both in and out of the classroom. We believe many students have unrealized potential and we enjoy helping each girl discover her capabilities." />
  <meta property="og:title" content="Craighead Diocesan School" />
  <meta property="og:url" content="https://craighead.school.nz" />
  <meta property="og:description" content="Craighead Diocesan School has a reputation for lifting the performance of our students - in all activities, both in and out of the classroom. We believe many students have unrealized potential and we enjoy helping each girl discover her capabilities." />
  <meta property="og:image" content={urlFor(logo).auto('format').bg('fff').url()} />
</svelte:head>

<main>
  <StudentsWelcome content={data.content.studentWelcome} />

  <PrincipalsWelcome content={data.content.principalsWelcome} />

  <StudentSpotlights content={data.content.studentSpotlights} />

  <AcademicResults />
</main>

<style>
  main {
    height: 100%;
    margin: 0 0;
    padding: 0 0;
    display: flex;
    flex-direction: column;
    margin-top: 5vh;
    gap: 10vh;
    margin-bottom: 5vh;
  }
</style>
