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

  h1, h2 {
    background: rgba(255, 255, 255, 0.7);
  }

  .hero-body>h1.title {
    margin-bottom: 0;
    padding: 10px 10px;
    padding-bottom: 0;
  }

  .hero-body>h2.subtitle {
    margin-top: 0;
    padding: 10px 10px;
  }
</style>