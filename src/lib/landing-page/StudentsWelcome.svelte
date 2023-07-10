<script>
  import { PortableText } from '@portabletext/svelte'
  import client from '$lib/client'
  import imageUrlBuilder from '@sanity/image-url'

  export let content

  const builder = imageUrlBuilder(client)

  function urlFor(source) {
    return builder.image(source)
  }

  content.prospectus = content.prospectus ? content.prospectus : `http://dev.craighead.school.nz/brochures/ProspectusBrochure/Prospectusbrochure_2020-07-01_04-09-45.html`
</script>

<section class="welcome-card">
  <div class="welcome-card-bar">
    <div class="welcome-card-block" />
  </div>
  <div class="welcome-card-items">
    <div class="welcome-card-items-start">
      <figure>
        <blockquote>
          <PortableText value={content.blurb} />
        </blockquote>
        <figcaption>
          {content.image.caption}
        </figcaption>
        <a class="button is-info is-rounded has-text-weight-bold" target="_blank" rel="noreferrer" href={content.prospectus}> Discover our prospectus </a>
      </figure>
    </div>
    <div class="welcome-card-items-end">
      <figure class="image">
        <img class="is-rounded is-square" src={urlFor(content.image).auto('format').height(800).width(800).url()} alt={content.image.alt} />
        <figcaption>{content.image.caption}</figcaption>
      </figure>
    </div>
  </div>
</section>

<style>
  .welcome-card {
    position: relative;
    font-size: 1.25rem;
  }

  /* background */

  .welcome-card-bar {
    position: absolute;
    /* background-color: #e9e9e9; */
    background-color: #fff;
    width: 100%;
    height: 60%;
    top: 20%;
  }

  /* foreground */

  .welcome-card-items {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }

  .welcome-card-items-start {
    z-index: 1;
  }

  .welcome-card-items-start,
  .welcome-card-items-end {
    width: 40%;
  }

  a {
    display: block;
    width: fit-content;
    margin: 2rem auto 0 auto;
    font-size: 1.25rem;
  }

  img {
    /* border: 0.5rem solid #e9e9e9; */
    border: 0.5rem solid #fff;
  }

  .welcome-card-items-start figcaption {
    text-align: right;
    width: 100%;
    margin-top: 1rem;
  }

  .welcome-card-items-end figcaption {
    /* remove bar over photo */
    display: none;

    /* if the bar is wanted back: */
    position: absolute;
    bottom: 25%;
    text-align: center;
    width: 100%;
    /* background-color: #e9e9e9; */
    background-color: #fff;
    padding: 1rem 0;
  }

  /* mobile */
  @media (max-width: 700px) {
    .welcome-card {
      font-size: 1rem;
    }

    .welcome-card-bar {
      height: 66%;
      top: 34%;
    }

    .welcome-card-items {
      flex-direction: column-reverse;
      gap: 1rem;
    }

    .welcome-card-items-start,
    .welcome-card-items-end {
      width: 100%;
      padding-left: 1rem;
      padding-right: 1rem;
    }

    a {
      font-size: 1rem;
      margin: 1rem auto;
    }

    figcaption {
      bottom: 10%;
      padding: 0.5rem 0;
    }
  }

  /* tablet */
  @media (min-width: 701px) and (max-width: 1000px) {
    .welcome-card,
    a {
      font-size: 1rem;
    }

    .welcome-card-bar {
      height: 90%;
      top: 5%;
    }

    .welcome-card-items {
      gap: 1rem;
    }

    .welcome-card-items-start,
    .welcome-card-items-end {
      width: 45%;
    }

    figcaption {
      bottom: 10%;
      padding: 0.5rem 0;
    }
  }
</style>
