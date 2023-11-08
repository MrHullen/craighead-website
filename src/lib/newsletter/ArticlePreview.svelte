<script>
  import { urlFor } from '$lib/utils/image'
  import { page } from '$app/stores'

  export let article
</script>

<article class="media">
  <figure class="media-left">
    <img src={urlFor(article.mainImage).width(200).height(100).url()} alt="Feature image for {article.title}" />
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <strong>{article.title}</strong>
        <br />
        {article.excerpt}
      </p>
    </div>
    <a href="/newsletter/{$page.params.date}/{article.slug.current}">Read more...</a>
  </div>
</article>

<style>
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
