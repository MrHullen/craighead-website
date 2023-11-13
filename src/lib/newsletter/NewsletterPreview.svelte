<script>
	import { formatDate } from '$lib/utils/formatDate'
	import { urlFor } from '$lib/utils/image'
  import { PortableText } from '@portabletext/svelte'

	export let newsletter
</script>

<!-- <a class="wrapper-link" href="/newsletter/{newsletter.releaseDate}">
<article class="media">
  <figure class="media-left">
    <img
      src={urlFor(newsletter.featureImage).width(300).height(150).url()}
      alt="Feature image for {newsletter.title}"
    />
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <strong>Kōrero Newsletter for {formatDate(newsletter.releaseDate)}</strong>
        <br>
        <PortableText value={newsletter.featureText} />
      </p>
    </div>
    <a href="/newsletter/{newsletter.releaseDate}">Read more...</a>
  </div>
</article>
</a> -->

<a class="wrapper-link section" href="/newsletter/{newsletter.releaseDate}">
  <article>
    <h3 class="k-heading">Kōrero for {formatDate(newsletter.releaseDate)}</h3>
    <img
      class="image"
      src={urlFor(newsletter.featureImage).width(300).height(150).url()}
      alt="Feature image for {newsletter.title}"
    />
    <p class="text">
      <span>
        <PortableText value={newsletter.featureText} />
      </span>
      <a href="/newsletter/{newsletter.releaseDate}">Read more...</a>
    </p>
  </article>
</a>

<style>
  .wrapper-link {
    color: inherit;
  }

  h3.k-heading {
    margin-bottom: 0;
  }

  .text>span {
    display: block;
    margin-bottom: 0.5em;
  }

  article {
    display: grid;
    align-items: start;
    gap: 1em;
    grid: " i    h  " min-content
          " i    t  " min-content
          /1fr  2fr ;
  }

  .k-heading { grid-area: h; justify-self: start; }
  .image { grid-area: i; justify-self: end; }
  .text { grid-area: t; justify-self: start; }

  @media (max-width: 700px) {
    article {
      display: flex;
      gap: 0.5em;
      flex-direction: column;
    }

    h3.k-heading {
      font-size: large;
    }
  }
</style>