<script>
  import client from '$lib/client'
  import imageUrlBuilder from '@sanity/image-url'

  export let content

  const builder = imageUrlBuilder(client)

  function urlFor(source) {
    return builder.image(source)
  }
</script>

<section>
  {#each content.studentSpotlights as studentSpotlight}
    <figure class="image">
      <img class="is-rounded is-square" src={urlFor(studentSpotlight).auto('format').height(400).width(400).url()} alt={studentSpotlight.alt} />
      <figcaption>
        <p class="space-holder" aria-hidden="true">{studentSpotlight.caption}</p>
        <div class="quote-card">
          <p>{studentSpotlight.caption}</p>
        </div>
      </figcaption>
    </figure>
  {/each}
</section>

<style>
  section {
    display: flex;
    justify-content: space-evenly;
  }

  figure {
    width: 20%;
  }

  img {
    border: 0.5rem solid #e9e9e9;
    width: 90%;
    margin: 0 auto;
    position: inherit;
    z-index: 1;
  }

  figcaption {
    position: relative;
  }

  figcaption p {
    font-size: 1.25rem;
    padding: 2rem 2rem;
  }

  .space-holder {
    visibility: hidden;
  }

  .quote-card {
    position: absolute;
    top: -1.5rem;
    background-color: #e9e9e9;
  }

  /* mobile */
  @media (max-width: 700px) {
    section {
      flex-direction: column;
      align-items: center;
    }

    figure {
      width: 60%;
    }

    figcaption p {
      font-size: 1rem;
      padding: 1.5rem 1rem;
    }

    .quote-card {
      top: -1rem;
    }
  }

  /* tablet */
  @media (min-width: 701px) and (max-width: 1000px) {
    figcaption p {
      font-size: 1rem;
      padding: 1.5rem 1.5rem;
    }
  }
</style>
