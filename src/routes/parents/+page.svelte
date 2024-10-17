<script>
  import Head from '$lib/Head.svelte'
  import Header from '$lib/subpages/Header.svelte'

  export let data
</script>

<Head title="Parents" description="Pages and resources for parents of current students." />

<Header title="Parents" subtitle="Links for parents of current students." />

<section class="content section">

  {#each data.links as link}
    <a class="box" href="{link.url}">{link.title}</a>
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

  section a {
    min-width: fit-content;
    width: 30%;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>