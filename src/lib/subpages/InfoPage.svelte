<script>
  import Header from '$lib/subpages/Header.svelte'
  import SideMenu from '$lib/subpages/SideMenu.svelte'
  import BackToTop from '$lib/subpages/BackToTop.svelte'
  import { PortableText } from '@portabletext/svelte'

  export let content

  // gets all the objects apart from the header and adds them to an array so that #each can iterate over it.
  const sections = Object.values((({ header, ...o }) => o)(content))
</script>

<Header title={content.header.title} subtitle={content.header.subheading} />

<main class="content section">
  <p class="section">
    <PortableText value={content.header.intro} />
  </p>

  <div class="columns">
    <div class="column">
      {#each sections as section}
        <article class="section">
          <h2 id={section.title.replace(/\s+/g, '-').toLowerCase()}>{section.title}</h2>
          <PortableText value={section.text} />
        </article>
      {/each}
    </div>

    <div class="column is-3">
      <SideMenu title={content.header.title} {sections} />
    </div>
  </div>

  <BackToTop />
</main>

<style>
  main > p {
    background-color: #fff;
  }

  article {
    background-color: #fff;
  }

  article:not(:last-child) {
    margin-bottom: 2rem;
  }

  /* mobile */
  @media (max-width: 700px) {
    .columns {
      display: flex;
      flex-direction: column-reverse;
    }
  }
</style>
