<script>
  import StudentsWelcome from '$lib/landing-page/StudentsWelcome.svelte'
  import PrincipalsWelcome from '$lib/landing-page/PrincipalsWelcome.svelte'
  import StudentSpotlights from '$lib/landing-page/StudentSpotlights.svelte'
</script>

<main>
  <StudentsWelcome />

  <PrincipalsWelcome />

  <StudentSpotlights />
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