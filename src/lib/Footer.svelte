<script>
  import { getFooterContent } from '$lib/content.js'

  const content = getFooterContent()
</script>

<footer class="footer content">
  <div class="wrapper">
    <div class="columns">
      <div class="column">
        <h2> Contact us </h2>
        <address>
          {content.addressLine1} <br />
          {content.addressLine2} <br />
          <a href="tel:{content.phoneNumber}">{content.phoneNumber}</a> <br />
          <a href="mailto:{content.emailAddress}">{content.emailAddress}</a> <br />
        </address>
      </div>
      <div class="column">
        <h2> Useful links </h2>
        <ul>
          {#each content.usefulLinks as usefulLink}
            <li><a href={usefulLink.link}>{usefulLink.title}</a></li>
          {/each}
        </ul>
      </div>
    </div>
    <div class="content has-text-centered">
      <p>
        <strong>&copy; 2023 Craighead Diocesan School</strong>
      </p>
      <p>
        <a href="https://github.com/MrHullen/craighead-website" target="_blank" rel="noreferrer">Site</a>
        by
        <a href="https://github.com/MrHullen" target="_blank" rel="noreferrer">Dave Hullen</a>
      </p>
    </div>
  </div>
</footer>

<style>
  .wrapper {
    width: fit-content;
    margin: 0 auto;
  }

  ul {
    list-style-type: none;
    margin-left: 0;
  }

  footer {
    margin-bottom: 0 !important;
  }
</style>