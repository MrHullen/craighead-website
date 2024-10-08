<script>
  import Paragraph from '$lib/page/Paragraph.svelte'
  import Tiles from '$lib/page/Tiles.svelte'
  import BannerImage from '$lib/page/BannerImage.svelte'

  export let section
</script>

<section class="section">
  <h2 id={section.heading.replace(/\s+/g, '-').toLowerCase()}>{section.heading}</h2>
  <Paragraph paragraphs={section.paragraphs} />
  {#if section.tiles}
    <article>
      <h3>Learn more</h3>
      <Tiles tiles={section.tiles} />
    </article>
  {/if}
</section>
{#if section.bannerImage}
  <BannerImage image={section.bannerImage} />
{/if}