<script>
  import { page } from '$app/stores'

  export let title
  export let sections

  function goTop() {
    if (!document.documentElement || !document.body) return
    document.body.scrollIntoView({ behavior: 'smooth' })
  }

  function test(thing) {
    console.log(thing)
  }
</script>

<aside class="menu section">
  <p class="menu-label">
    <a
      href="#"
      title="Go back to the top."
      class="is-craighead-green"
      on:click={() => {
        goTop()
        return false
      }}>
      {title}
    </a>
  </p>
  <ul class="menu-list">
    {#each sections as section}
      <li>
        <a
          href="#{section.title.replace(/\s+/g, '-').toLowerCase()}"
          class:is-active={$page.url.href.includes(`#${section.title.replace(/\s+/g, '-').toLowerCase()}`)}
          aria-current={$page.url.href.includes(`#${section.title.replace(/\s+/g, '-').toLowerCase()}`) ? 'page' : undefined}
          on:click={() => {
            test($page.url.href)
          }}>
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
    scroll-behavior: smooth;
  }

  aside {
    background-color: white;
    position: sticky;
    top: 7rem;
  }

  aside ul {
    margin-inline-start: 0;
    list-style-type: none;
  }
</style>
