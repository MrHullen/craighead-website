<script>
  import Header from '$lib/subpages/Header.svelte'
  import footer from '$lib/footer'
  const content = $footer 
</script>

<Header title="Parents" subtitle="Links for parents of current students." />

<section class="content section">

  {#each content.usefulLinks as usefulLink}
    <a class="box" href="{usefulLink.link}">{usefulLink.title}</a>
  {/each}
</section>

<style>
  section {
    background-color: #fff;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
  }

  section article {
    min-width: fit-content;
    width: 30%;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>