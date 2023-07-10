<script>
  import Header from '$lib/subpages/Header.svelte'
  import { page } from '$app/stores'

  let cdsSubdomainURL = JSON.stringify($page.url)
  cdsSubdomainURL = cdsSubdomainURL.replace(/(^["']|["']$)/g, '')

  if (cdsSubdomainURL.startsWith("http://www") || cdsSubdomainURL.startsWith("http://craighead")) {
    cdsSubdomainURL = cdsSubdomainURL.replace("http://www", "http://cds")
  } else if (cdsSubdomainURL.startsWith("https://www") || cdsSubdomainURL.startsWith("https://craighead")) {
    cdsSubdomainURL = cdsSubdomainURL.replace("https://www", "https://cds")
  }
</script>

<h1>{$page.error.message}</h1>

<Header title="Uh oh" subtitle="Sorry, we couldn't find that page" />

<section class="content section">
  <h2>Page not found</h2>
  <p>
    Oh no, we're sorry! <code>{$page.url}</code> seems to have gone on a bit of an adventure.
  </p>

  <article class="message is-info">
    <div class="message-header">
      <p>Transition Period</p>
    </div>
    <div class="message-body">
      <p>
        We are currently in a transition period with our website. Some content has been moved to a new address and links that previously work might need to be updated. If the link you used previously worked, try this one:
      </p>
      <a class="button is-success" href="{cdsSubdomainURL}">{cdsSubdomainURL}</a>
      <p>
        Or, you can go back to our home page:
      </p>
      <a class="button is-success" href="/">Home</a>
    </div>
  </article>
  
  <p>
    If you need any extra help finding what you need, don't hesitate to contact us. Thank you for your understanding and patience!
  </p>

  <h2>Technical details</h2>

  <article class="message">
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
    width: fit-content;
    max-width: 60%;
    margin: auto auto;
  }

  .button {
    display: flex;
    margin: 1rem auto;
    width: fit-content;
  }

  /* mobile */
  @media (max-width: 700px) {
    article {
      max-width: 90%;
    }
  }
</style>