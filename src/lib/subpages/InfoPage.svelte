<script>
  import Header from '$lib/subpages/Header.svelte'
  import SideMenu from '$lib/subpages/SideMenu.svelte'
  import BackToTop from '$lib/subpages/BackToTop.svelte'
  import ImageModal from '$lib/subpages/ImageModal.svelte'
  import { PortableText } from '@portabletext/svelte'
  import client from '$lib/client'
  import imageUrlBuilder from '@sanity/image-url'

  export let content

  const builder = imageUrlBuilder(client)

  function urlFor(source) {
    return builder.image(source)
  }

  // gets all the objects apart from the header and adds them to an array so that #each can iterate over it, then sorts it into the order defined in the retrieval query (+page.server.js).
  const sections = Object.values((({ header, ...o }) => o)(content))
  sections.sort((a, b) => {
    return a.order - b.order
  })

  let isActive = false
  let modalImage = undefined

  function activateModal(image) {
    isActive = true
    modalImage = image
  }
</script>

<Header title={content.header.title} subtitle={content.header.subheading} />

<ImageModal bind:isActive bind:modalImage />

<main class="content section">
  <p class="section">
    <PortableText value={content.header.intro} />
  </p>

  <div class="columns">
    <div class="column">
      {#each sections as section}
        <article class="section">
          <h2 id={section.title.replace(/\s+/g, '-').toLowerCase()}>{section.title}</h2>
          <PortableText value={section.text} />
          <div class="images">
            {#if section.images}
              {#each section.images as image}
                <button
                  on:click={() => {
                    activateModal(image)
                  }}>
                  <img src={urlFor(image).auto('format').height(200).url()} alt={image.alt} />
                </button>
              {/each}
            {/if}
          </div>
        </article>
      {/each}
    </div>

    <div class="column is-3">
      <SideMenu title={content.header.title} {sections} />
    </div>
  </div>

  <BackToTop />
</main>

<style>
  main > p {
    background-color: #fff;
    margin-bottom: 2rem;
  }

  article {
    background-color: #fff;
  }

  article > div {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  article:not(:last-child) {
    margin-bottom: 2rem;
  }

  .images > button {
    border: none;
    background-color: rgba(255, 255, 255, 0);
    padding: 0 0;
    margin: 0 0;
  }

  /* mobile */
  @media (max-width: 700px) {
    .columns {
      display: flex;
      flex-direction: column-reverse;
    }
  }
</style>
