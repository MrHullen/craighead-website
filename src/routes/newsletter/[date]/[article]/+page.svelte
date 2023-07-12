<script>
	import { PortableText } from '@portabletext/svelte'
	import { urlFor } from '$lib/utils/image'
  import Header from '$lib/subpages/Header.svelte'
  import ImageModal from '$lib/subpages/ImageModal.svelte'

	export let data
  const article = data.article[0]

  let isActive = false
  let modalImage = undefined

  function activateModal(image) {
    isActive = true
    modalImage = image
  }
</script>

<Header title="{article.title}" subtitle="" />

<ImageModal bind:isActive bind:modalImage />

<section class="content section">
  <img
    src={urlFor(article.mainImage).width(300).height(150).url()}
    alt="Feature image for {article.title}"
  />
  <PortableText value={article.body} />
  {#if article.images}
    {#each article.images as image}
      <button
        on:click={() => {
          activateModal(image)
        }}>
        <img src={urlFor(image).auto('format').height(200).url()} alt={image.alt} />
      </button>
    {/each}
  {/if}
</section>

<style>
  section {
    background-color: #fff;
  }

  img {
    display: block;
    margin: 1rem auto;
  }
</style>
