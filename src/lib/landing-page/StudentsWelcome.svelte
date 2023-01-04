<script>
  import { getStudentWelcomeContent } from '$lib/content.js'

const content = getStudentWelcomeContent()
</script>

<section class="welcome-card">
  <div class="welcome-card-bar">
    <div class="welcome-card-block" />
  </div>
  <div class="welcome-card-items">
    <div class="welcome-card-items-start">
      <p class="is-size-5">
        {content.blurb}
      </p>
      <a class="button is-info is-rounded is-size-5" href="{content.prospectus}">
        Discover our prospectus
      </a>
    </div>
    <div class="welcome-card-items-end">
      <figure class="image">
        <img class="is-rounded is-square" src="{content.photo}" alt="{content.caption}" />
        <figcaption class="is-size-5"> {content.caption} </figcaption>
      </figure>
    </div>
  </div>
</section>


<style>
  .welcome-card {
    position: relative;
  }

  /* background */

  .welcome-card-bar {
    position: absolute;
    background-color: #E9E9E9;
    width: 100%;
    height: 50%;
    top: 25%;
  }

  /* foreground */
  
  .welcome-card-items {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }
  
  .welcome-card-items-start {
    width: 40%;
    z-index: 1;
  }
  
  .welcome-card-items-end {
    width: 40%;
  }

  a {
    display: block;
    width: fit-content;
    margin: 2rem auto;
  }

  img {
    border: 0.5rem solid #E9E9E9;
  }

  figcaption {
    position: absolute;
    bottom: 25%;
    text-align: center;
    width: 100%;
    background-color: #E9E9E9;
    padding: 1rem 0;
  }
</style>