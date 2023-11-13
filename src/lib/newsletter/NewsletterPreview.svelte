<script>
	import { formatDate } from '$lib/utils/formatDate'
	import { urlFor } from '$lib/utils/image'
  import { PortableText } from '@portabletext/svelte'

	export let newsletter
</script>

<a class="wrapper-link" href="/newsletter/{newsletter.releaseDate}">
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
</a>

<style>
  .wrapper-link {
    color: inherit;
  }

  /* mobile */
  @media (max-width: 700px) {
    article.media {
      display: flex;
      flex-direction: column;
      gap: 1em;
    }

    article.media figure.media-left {
      margin-left: 0;
      margin-bottom: 0;
    }
  }
</style>