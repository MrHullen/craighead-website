<script>
  export let title
  export let sections
</script>

<aside class="menu section">
  <p class="menu-label">
    <a href="#page-title">
      {title}
    </a>
  </p>
  <ul class="menu-list">
    {#each sections as section}
      <li>
        <a href="#{section.title.replace(/\s+/g, '-').toLowerCase()}">
          {section.title}
        </a>
      </li>
    {/each}
  </ul>
</aside>

<style>
  :global(html) {
    overflow-x: visible;
    overflow-y: visible;
  }

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
