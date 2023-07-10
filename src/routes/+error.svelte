<script>
  import Header from '$lib/subpages/Header.svelte'
  import { page } from '$app/stores'
</script>

<h1>{$page.error.message}</h1>

<Header title="Uh oh" subtitle="Sorry, we couldn't find that page" />

<section class="content section">
  <h2>Page not found</h2>
  <p>
    Oh no, we're sorry! <code>{$page.url}</code> seems to have gone on a bit of an adventure. We apologize for this inconvenience. Please use the menu bar to continue exploring our site, or head back to <a href="/">our homepage</a>.
  </p>
  
  <p>
    If you need any extra help finding what you need, don't hesitate to contact us. Thank you for your understanding and patience!
  </p>

  <p>Interested in the technical details? : </p>

  <article class="message is-warning">
    <div class="message-header">
      <p>Error code: {$page.status}</p>
    </div>
    <div class="message-body">
      {$page.error?.message}
    </div>
  </article>
</section>

<style>
  section {
    background-color: #fff;
    margin-top: 1rem;
  }

  article {
    width: 20%;
  }

  /* mobile */
  @media (max-width: 700px) {
    article {
      width: 60%;
      margin: 1rem auto;
    }
  }

  /* tablet */
  @media (min-width: 701px) and (max-width: 1000px) {
    article {
      width: 40%;
    }
  }
</style>