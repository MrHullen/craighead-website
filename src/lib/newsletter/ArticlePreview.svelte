<script>
  import { urlFor } from '$lib/utils/image'
  import { page } from '$app/stores'

  export let article
</script>

<a class="wrapper-link section" href="/korero/{$page.params.date}/{article.slug.current}">
  <article>
    <h3 class="k-heading">{article.title}</h3>
    <img
      class="image"
      src={urlFor(article.mainImage).width(200).height(100).url()}
      alt="Feature image for {article.title}"
    />
    <div class="text">
      <p>
        {article.excerpt}
      </p>
      <a href="/korero/{$page.params.date}/{article.slug.current}">Read more...</a>
    </div>
  </article>
</a>

<style>
  h3.k-heading {
    font-size: large;
    margin-bottom: 0;
  }

  .text>p {
    margin-bottom: 0.5em;
  }

  .wrapper-link {
    color: inherit;
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
