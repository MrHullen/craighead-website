<script>
  import { PortableText } from "@portabletext/svelte"
	import { urlFor } from '$lib/utils/image'

  export let text
  export let image
</script>

<div>
  <p>
    <PortableText value={text} />
  </p>
  {#if image}
    <img src={urlFor(image).auto('format').height(200).url()} alt={image.alt} />
  {/if}
</div>

<style>
  div {
    display: flex;
    flex-wrap: nowrap;
    gap: 2rem;
    justify-content: flex-end;
    align-items: flex-start;
  }

  div:not(:last-child) {
    margin-bottom: 2rem;
  }

  /* mobile */
  @media (max-width: 700px) {
    div {
      flex-direction: column-reverse;
      justify-content: center;
    }
  }
</style>