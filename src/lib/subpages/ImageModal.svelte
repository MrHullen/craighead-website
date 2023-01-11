<script>
  import client from '$lib/client'
  import imageUrlBuilder from '@sanity/image-url'

  export let isActive
  export let modalImage

  const builder = imageUrlBuilder(client)

  function urlFor(source) {
    return builder.image(source)
  }

  function deactivateModal() {
    isActive = false
  }
</script>

{#if modalImage}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="modal" class:is-active={isActive}>
    <div class="modal-background" on:click={deactivateModal} />
    <figure class="modal-content" on:click={deactivateModal}>
      <img src={urlFor(modalImage).auto('format').url()} alt={modalImage.alt} />
      <figcaption>{modalImage.caption}</figcaption>
    </figure>
    <button class="modal-close is-large" aria-label="close" on:click={deactivateModal} />
  </div>
{/if}

<style>
  .modal-content {
    width: fit-content;
    max-width: 80%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
  }

  img {
    max-height: 80vh;
    border: solid 1px white;
  }

  figcaption {
    font-size: 1.25rem;
    color: white;
    padding: 1rem 0;
  }
</style>
