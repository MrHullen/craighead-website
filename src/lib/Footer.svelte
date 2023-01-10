<script>
  import footer from '$lib/footer'

  const content = $footer
</script>

<footer class="footer content">
  <div class="wrapper">
    <div>
      <!-- column 1 -->
      <h2>Contact us</h2>
      <address class="contact-us">
        {content.addressLine1} <br />
        {content.addressLine2} <br />
        <a href="tel:{content.phoneNumber}">{content.phoneNumber}</a> <br />
        <a href="mailto:{content.emailAddress}">{content.emailAddress}</a> <br />
      </address>
    </div>
    <div>
      <!-- column 2 -->
      <h2>Useful links</h2>
      <ul class="useful-links">
        {#each content.usefulLinks as usefulLink}
          <li><a href={usefulLink.link}>{usefulLink.title}</a></li>
        {/each}
      </ul>
    </div>
  </div>
  <div class="has-text-centered">
    <p>
      <strong>&copy; 2023 Craighead Diocesan School</strong>
    </p>
    <p>
      <a href="https://github.com/MrHullen/craighead-website" target="_blank" rel="noreferrer">Site</a>
      by
      <a href="https://github.com/MrHullen" target="_blank" rel="noreferrer">Dave Hullen</a>
    </p>
  </div>
</footer>

<style>
  .footer {
    padding-bottom: 3rem;
  }

  .wrapper {
    margin: 1rem 25% 3rem 25%;
    display: flex;
    justify-content: space-around;
  }

  address.contact-us {
    font-style: normal;
  }

  ul.useful-links {
    list-style-type: none;
    margin-inline-start: 0;
  }

  /* mobile */
  @media (max-width: 700px) {
    .wrapper {
      margin: 1rem 1rem 3rem 1rem;
      flex-direction: column;
      gap: 3rem;
    }
  }
</style>
