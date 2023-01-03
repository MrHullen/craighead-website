<script>
  import { getStudentSpotlightsContent } from '$lib/content'

  const content = getStudentSpotlightsContent()
</script>

<section>
  {#each content as student}
    <figure class="image">
      <img
      class="is-rounded is-square"
      src="{student.src}"
      alt="{student.alt}" />
      <figcaption class="is-size-5">
        <p class="space-holder" aria-hidden="true"> {student.caption} </p>
        <div class="quote-card">
          <p> {student.caption} </p>
        </div>
      </figcaption>
    </figure>
  {/each}
</section>

<style>
  section {
    display: flex;
    justify-content: space-around;
  }

  figure {
    width: 20%;
  }

  img {
    border: 0.5rem solid #E9E9E9;
    width: 90%;
    margin: 0 auto;
    position: inherit;
    z-index: 1;
  }

  figcaption {
    position: relative;
  }

  figcaption p {
    padding: 2rem 2rem;
  }

  .space-holder {
    visibility: hidden;
  }

  .quote-card {
    position: absolute;
    top: -1.5rem;
    background-color: #E9E9E9;
  }
</style>