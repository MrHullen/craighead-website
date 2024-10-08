<script>
  import Head from '$lib/Head.svelte'
  import Header from '$lib/page/Header.svelte'
  import Section from '$lib/page/Section.svelte'
  import SideMenu from '$lib/page/SideMenu.svelte'

  export let data
</script>

<Head title={data.page.title} description={data.page.introduction} />

<Header title={data.page.title} subtitle={data.page.introduction} image={data.page.backgroundImage} />

<div class="columns">
  <main class="content column">
    {#each data.page.pageSections as section}
      <Section {section} />
    {/each}
  </main>
  <aside class="column is-3">
    <SideMenu title={data.page.title} sections={data.page.pageSections} />
  </aside>
</div>
