<script>
  import Head from '$lib/Head.svelte'
  import Header from '$lib/subpages/Header.svelte'
  import NewsletterPreview from '$lib/newsletter/NewsletterPreview.svelte'

  export let data
</script>

<Head
  title="Kōrero"
  description=" is Craighead's weekly newsletter. The Principal includes a short messages about what's going on, key dates and notices are posted, and there are articles about events and student achievements."
  />

<Header title="Kōrero" subtitle="Craighead's Weekly Newsletter" />

<main class="content section has-background-white">
	{#if data.newsletters.length}
		{#each data.newsletters as newsletter}
			<NewsletterPreview {newsletter} />
		{/each}
	{:else}
		<p>Oops</p>
	{/if}
</main>