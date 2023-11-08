<script>
	import { PortableText } from '@portabletext/svelte'
	import { formatDate } from '$lib/utils/formatDate'
	import { urlFor } from '$lib/utils/image'
  import Header from '$lib/subpages/Header.svelte'
  import ArticlePreview from '$lib/newsletter/ArticlePreview.svelte'
  import { page } from '$app/stores'

	export let data
</script>

<Header title="Kōrero Newsletter" subtitle="{formatDate($page.params.date)}" />

<div class="columns content section has-background-white">
  <div class="column is-one-third">
    <section class="image">
      <img src="/principal.jpeg" alt="The Principal of Craighead Diocesan School" />
    </section>
    
    <section class="content section">
      <h2> Notices </h2>
      <PortableText value={data.newsletter.notices} />
    </section>
    
    <section class="content section">
      <h2> Dates </h2>
      <PortableText value={data.newsletter.dates} />
    </section>
  </div>
  <div class="column">
    <section class="content section principals-message">
      <h2>Principal's Message</h2>
      <PortableText value={data.newsletter.principalsAddress} />
    </section>
  </div>
</div>

<section class="content section">
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
  section {
    background-color: #fff;
  }

  .principals-message {
    padding-top: 0;
  }
</style>
