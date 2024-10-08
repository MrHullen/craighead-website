<script>
  import { urlFor } from '$lib/utils/image'

  export let portableText
</script>

<img src={urlFor(portableText.value).auto('format').height(200).width(300).url()} alt="Accompanying." />

<style>
  img {
    float: right;
    aspect-ratio: 3 / 2;
  }

  @media screen and (max-width: 1000px) {
    img {
      float: none;
      width: 100%;
    }
  }
</style>