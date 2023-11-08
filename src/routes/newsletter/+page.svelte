<script>
  import { urlFor } from '$lib/utils/image'
  import { getContext } from 'svelte'
  import Header from '$lib/subpages/Header.svelte'
  import NewsletterPreview from '$lib/newsletter/NewsletterPreview.svelte'

  export let data
  let logo = getContext('logo')
</script>

<svelte:head>
  <title>Kōrero Newsletter</title>
  <meta name="description" content="TODO." />
  <meta property="og:title" content="Craighead Diocesan School - Kōrero Newsletter" />
  <meta property="og:url" content="https://craighead.school.nz/korero-newsletter" />
  <meta property="og:description" content="TODO." />
  <meta property="og:image" content={urlFor(logo).auto('format').bg('fff').url()} />
</svelte:head>

<Header title="Kōrero Newsletters" subtitle="" />


<section class="content section">
	{#if data.newsletters.length}
		{#each data.newsletters as newsletter}
			<NewsletterPreview {newsletter} />
		{/each}
	{:else}
		<p>Oops</p>
	{/if}
</section>

<style>
  section {
    background-color: #fff;
  }
</style>