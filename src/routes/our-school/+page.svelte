<script>
  import Header from '$lib/Header.svelte'
  import SideMenu from '$lib/SideMenu.svelte'
  import { getOurSchoolContent } from '$lib/content'

  const content = getOurSchoolContent()

  const pageTitle = content.pageTitle
  const pageSubtitle = content.pageSubtitle

  let subheadings = []
  content.articles.forEach(article => {
    subheadings = [
      ...subheadings, 
      {
        heading: article.heading,
        id: article.id,
      },
    ]
  })
</script>

<Header {pageTitle} {pageSubtitle} />

<main class="content section">
  
  <p class="section">
    {content.pageIntro}
  </p>

  <div class="columns">
    <div class="column">    
      {#each content.articles as article}
      <article class="section">
        <h2 id="{article.id}"> {article.heading} </h2>
        {@html article.text}
      </article>
      {/each}
    </div>

    <div class="column is-3">
      <SideMenu {pageTitle} {subheadings} />
    </div>
  </div>
</main>

<style>
  main > h1, main > p {
    background-color: #fff;
  }

  article {
    background-color: #fff;
  }

  article:not(:last-child) {
    margin-bottom: 2rem;
  }
</style>