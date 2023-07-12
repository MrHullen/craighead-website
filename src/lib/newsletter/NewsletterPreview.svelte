<script>
	import { formatDate } from '$lib/utils/formatDate'
	import { urlFor } from '$lib/utils/image'
  import { PortableText } from '@portabletext/svelte'
  import ArticlePreview from '$lib/newsletter/ArticlePreview.svelte'

	export let newsletter
</script>

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
    <!-- {#each newsletter.articles as article}
      <ArticlePreview releaseDate={newsletter.releaseDate} {article} />
    {/each} -->
  </div>
</article>