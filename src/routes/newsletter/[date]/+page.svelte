<script>
	import { PortableText } from '@portabletext/svelte'
	import { formatDate } from '$lib/utils/formatDate'
	import { urlFor } from '$lib/utils/image'
  import Header from '$lib/subpages/Header.svelte'
  import ArticlePreview from '$lib/newsletter/ArticlePreview.svelte'
  import { page } from '$app/stores'

	export let data
</script>

<Header title="Kōrero Newsletter for {formatDate($page.params.date)}" subtitle="" />

<section class="content section">
  <h2>Principal's Address</h2>
  <img id="principal" src={urlFor(data.newsletter.featureImage).width(400).height(200).url()} alt="Feature image for {data.newsletter.title}" />
  <PortableText value={data.newsletter.principalsAddress} />
</section>

<section class="content section">
  <h2> Articles in this issue </h2>
  {#if data.newsletter?.articles?.length}
    {#each data.newsletter?.articles as article}
      <ArticlePreview {article} />
    {/each}
  {:else}
    <p>Oops</p>
  {/if}
</section>

<style>
  section {
    background-color: #fff;
  }

  #principal {
    float: right;
  }
</style>
