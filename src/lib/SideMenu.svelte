<script>
  export let pageTitle
  export let subheadings
</script>

<aside class="menu section">
  <p class="menu-label">
    <a href="#page-title">
      {pageTitle}
    </a>
    
  </p>
  <ul class="menu-list">
    {#each subheadings as subheading}
      <li>
        <a href="#{subheading.id}">
          {subheading.heading}
        </a>
      </li>
    {/each}
  </ul>
</aside>

<style>
  aside {
    background-color: white;
    position: sticky;
    top: 3rem;
  }

  aside ul {
    margin-inline-start: 0;
    list-style-type: none;
  }
</style>