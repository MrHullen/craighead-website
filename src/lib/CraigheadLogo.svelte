<script>
  import client from '$lib/client'
  import imageUrlBuilder from '@sanity/image-url'

  export let logo

  const builder = imageUrlBuilder(client)

  function urlFor(source) {
    return builder.image(source)
  }
</script>

<img class="image" src={urlFor(logo).width(200).url()} alt="Craighead logo" />
<div class="is-brand has-text-dark">
  <span class="is-brand-top is-size-3"> Craighead </span>
  <hr />
  <span class="is-brand-bottom"> Diocesan School </span>
</div>

<style>
  @font-face {
    font-family: 'Anglecia Pro Display';
    src: url('/AngleciaProDisplay-Regular.otf') format('opentype');
  }

  span {
    font-family: 'Anglecia Pro Display', sans-serif;
  }

  img.image {
    max-height: 5rem;
  }

  .is-brand {
    font-family: 'Abhaya Libre', serif;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 1.5rem;
  }

  .is-brand-top {
    margin-bottom: -0.4rem;
  }

  .is-brand-bottom {
    margin-top: 0.4rem;
    font-size: 1.1rem;
  }

  hr {
    background-color: hsl(0, 0%, 21%);
    height: 1px;
    width: 100%;
    margin: 0 0;
  }
</style>
