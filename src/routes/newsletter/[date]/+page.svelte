<script>
  import Head from '$lib/Head.svelte'
  import Header from '$lib/subpages/Header.svelte'
  import ArticlePreview from '$lib/newsletter/ArticlePreview.svelte'
	import { PortableText } from '@portabletext/svelte'
	import { formatDate } from '$lib/utils/formatDate'
  import { page } from '$app/stores'

  export let data
</script>

<Head
  title="Kōrero"
  description="Kōrero is Craighead's weekly newsletter. The Principal includes a short messages about what's going on, key dates and notices are posted, and there are articles about events and student achievements."
  />

<Header title="Kōrero" subtitle="{formatDate($page.params.date)}" />

<main class="content section has-background-white">
  <h2 class="principals-title">Principal's Message</h2>
  <img class="image" src="/principal.jpeg" alt="The Principal of Craighead Diocesan School" />
  <div class="principals-message">
    <PortableText value={data.newsletter.principalsAddress} />
  </div>

  <article class="notices has-background-white">
    <h2> Notices </h2>
    <PortableText value={data.newsletter.notices} />
  </article>

  <article class="dates has-background-white">
    <h2> Dates </h2>
    <PortableText value={data.newsletter.dates} />
  </article>
</main>

<section class="content section has-background-white">
  <h2> Articles </h2>
  {#if data.newsletter?.articles?.length}
    {#each data.newsletter?.articles as article}
      <ArticlePreview {article} />
    {/each}
  {:else}
    <p>Oops, looks like there was a problem loading the data! Try returning <a href="/">home</a>.</p>
  {/if}
</section>

<style>
  main {
    display: grid;
    gap: 2em;
    align-items: start;
    grid: " p-t p-t " min-content
          " i   p-m " min-content
          " n   p-m " min-content
          " d   p-m " min-content
          " .   p-m " min-content
          /1fr  2fr ;
  }

  .principals-title { grid-area: p-t; }
  .image { grid-area: i; }
  .principals-message { grid-area: p-m; }
  .notices { grid-area: n; }
  .dates { grid-area: d; }

  /* mobile */
  @media (max-width: 700px) {
    main {
      display: flex;
      flex-direction: column;
      gap: 2em;
    }
  }
</style>
