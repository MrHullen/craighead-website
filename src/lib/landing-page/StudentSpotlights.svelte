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
      <figcaption>
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
    justify-content: space-evenly;
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
    font-size: 1.25rem;
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

  /* mobile */
  @media (max-width: 700px) {
    section {
      flex-direction: column;
      align-items: center;
    }

    figure {
      width: 60%;
    }
    
    figcaption p {
      font-size: 1rem;
      padding: 1.5rem 1rem;
    }

    .quote-card {
      top: -1rem;
    }
  }
</style>