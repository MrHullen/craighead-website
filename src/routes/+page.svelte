<script>
  import Head from '$lib/Head.svelte'
  import StudentsWelcome from '$lib/landing-page/StudentsWelcome.svelte'
  import PrincipalsWelcome from '$lib/landing-page/PrincipalsWelcome.svelte'
  import StudentSpotlights from '$lib/landing-page/StudentSpotlights.svelte'
  import AcademicResults from '$lib/landing-page/AcademicResults.svelte'


  export let data
</script>

<Head
  title="Craighead Diocesan School"
  description="Craighead Diocesan School has a reputation for lifting the performance of our students - in all activities, both in and out of the classroom. We believe many students have unrealized potential and we enjoy helping each girl discover her capabilities."
  />

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
