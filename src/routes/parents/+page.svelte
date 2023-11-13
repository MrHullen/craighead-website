<script>
  import Head from '$lib/Head.svelte'
  import Header from '$lib/subpages/Header.svelte'
  import footer from '$lib/footer'
  import { urlFor } from '$lib/utils/image'
  const content = $footer 

  // get the favicon
  import { getContext } from 'svelte'
  let logo = getContext('logo')
</script>

<svelte:head>
  <title>Parents</title>
  <meta name="description" content="Pages and resources for parents of current students." />
  <meta property="og:title" content="Craighead Diocesan School - Parents" />
  <meta property="og:url" content="https://craighead.school.nz/parents" />
  <meta property="og:description" content="Pages and resources for parents of current students." />
  <meta property="og:image" content={urlFor(logo).auto('format').bg('fff').url()} />
</svelte:head>

<Head
  title=""
  description=""
  />

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

  section a {
    min-width: fit-content;
    width: 30%;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>