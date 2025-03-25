<script>
  import { urlFor } from '$lib/utils/image'
  import { PortableText } from '@portabletext/svelte'

  export let section
</script>

<section class="section">
  <h2 id={section.heading.replace(/\s+/g, '-').toLowerCase()}>{section.heading}</h2>
  <PortableText value={section.description} />
  <div>
    {#each section.people as person}
    <figure class="people">
      {#if person.image}
      <img src="{urlFor(person.image).width(100).height(125).url()}" alt="{person.name + ', ' + person.position}" />
      {/if}
      <figcaption>
        <span class="name is-craighead-green">{person.name}</span>
        <span>{person.position}</span>
      </figcaption>
    </figure>
    {/each}
  </div>
</section>

<style>
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    align-items: top;
  }

  figure.people {
    margin-top: 0;
    margin-bottom: 1em;
    width: 175px;
    text-align: left;

  }

  figure span {
    display: block;
    text-align: left;
    font-style: normal;
  }

  figure span.name {
    font-weight: bold;
  }

  img {
    width: 100px;
  }

  @media screen and (max-width: 1000px) {
    figure.people {
      width: 125px;
    }
  }
</style>