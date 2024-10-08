<script>
  import { urlFor } from '$lib/utils/image'

  export let title
  export let subtitle
  export let image
</script>

<header class="hero has-background-white has-text-centered" style="background-image: url({urlFor(image).auto('format').fit('min').crop('focalpoint').url()});">
  <div class="hero-body">
    <h1 class="title" id="page-title">
      {title}
    </h1>
    <h2 class="subtitle">
      {subtitle}
    </h2>
  </div>
</header>

<style>
  header {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>