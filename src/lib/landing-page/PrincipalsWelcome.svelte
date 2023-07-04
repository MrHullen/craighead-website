<script>
  import { PortableText } from '@portabletext/svelte'
  import client from '$lib/client'
  import imageUrlBuilder from '@sanity/image-url'

  export let content

  const builder = imageUrlBuilder(client)

  function urlFor(source) {
    return builder.image(source)
  }
</script>

<section class="principals-welcome-card">
  <img src={urlFor(content.image).auto('format').height(800).url()} alt={content.image.alt} />
  <figure>
    <blockquote>
      <PortableText value={content.quote} />
    </blockquote>
    <figcaption>
      {content.principal}
    </figcaption>
    <a class="button is-info is-rounded has-text-weight-bold" target="_blank" rel="noreferrer" href="/our-school"> Explore our school </a>
  </figure>
</section>

<style>
  .principals-welcome-card {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
  }

  img {
    /* border: 0.5rem solid #e9e9e9; */
    border: 0.5rem solid #fff;
    width: 40%;
  }

  figure {
    /* background-color: #e9e9e9; */
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 40%;
    height: 50%;
    padding: 5rem 3rem;
  }

  figcaption {
    text-align: right;
    width: 100%;
    margin-top: 1rem;
  }

  a {
    display: block;
    width: fit-content;
    margin: 2rem auto 0 auto;
    font-size: 1.25rem;
  }

  /* mobile */
  @media (max-width: 700px) {
    .principals-welcome-card {
      font-size: 1rem;
      flex-direction: column;
    }

    img {
      width: 90%;
    }

    figure {
      width: 100%;
      padding: 2rem 1rem;
    }
  }

  /* tablet */
  @media (min-width: 701px) and (max-width: 1000px) {
    .principals-welcome-card {
      font-size: 1rem;
    }

    figure {
      width: 50%;
      padding: 2rem 2rem;
    }
  }
</style>
