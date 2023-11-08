<script>
  import { PortableText } from '@portabletext/svelte'

  export let message
</script>

<!-- <article class="media">
  <figure class="media-left">
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <strong>Principal's Address</strong>
        <br /> -->
        <PortableText value={message} />
      <!-- </p>
    </div>
    <a href="/newsletter/{$page.params.date}/{article.slug.current}">Read more...</a>
  </div>
</article> -->


<!-- <div>
  <div class="columns">
    <div class="column">
      <img src="/principal.jpeg" alt="The Principal of Craighead Diocesan School" />
    </div>
    <div class="column"></div>
  </div>
</div> -->

<style>
  img {
    width: 400px;
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
