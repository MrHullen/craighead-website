<script>
  import Head from '$lib/Head.svelte'
  import Header from '$lib/subpages/Header.svelte'
  import ImageModal from '$lib/subpages/ImageModal.svelte'
  import Paragraph from '$lib/subpages/Paragraph.svelte'
	import { urlFor } from '$lib/utils/image'

	export let data
  const article = data.article[0]

  let isActive = false
  let modalImage = undefined

  function activateModal(image) {
    isActive = true
    modalImage = image
  }
</script>

<Head
  title="Kōrero"
  description="Kōrero is Craighead's weekly newsletter. The Principal includes a short messages about what's going on, key dates and notices are posted, and there are articles about events and student achievements."
  />

<Header title="{article.title}" subtitle="" />

<ImageModal bind:isActive bind:modalImage />

<main class="content section has-background-white">
  <img
    src={urlFor(article.mainImage).width(300).height(150).url()}
    alt="Feature image for {article.title}"
  />
  
  {#if article.paragraphs?.length}
    {#each article.paragraphs as paragraph}
      <Paragraph text={paragraph.text} image={paragraph?.image} />
    {/each}
  {/if}


  <div class="images">
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
  </div>
</main>

<style>
  img {
    display: block;
    margin: 1rem auto;
  }

  div.images {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .images button {
    border: none;
    background-color: rgba(255, 255, 255, 0);
    padding: 0 0;
    margin: 0 0;
  }
</style>
