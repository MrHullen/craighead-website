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
      <p>
        {content.blurb}
      </p>
      <a class="button is-info is-rounded has-text-weight-bold" href="{content.prospectus}">
        Discover our prospectus
      </a>
    </div>
    <div class="welcome-card-items-end">
      <figure class="image">
        <img class="is-rounded is-square" src="{content.photo}" alt="{content.caption}" />
        <figcaption> {content.caption} </figcaption>
      </figure>
    </div>
  </div>
</section>


<style>
  .welcome-card {
    position: relative;
    font-size: 1.25rem;
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
    z-index: 1;
  }
  
  .welcome-card-items-start, .welcome-card-items-end {
    width: 40%;
  }

  a {
    display: block;
    width: fit-content;
    margin: 2rem auto 0 auto;
    font-size: 1.25rem;
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

  /* mobile */
  @media (max-width: 700px) {
    .welcome-card {
      font-size: 1rem;
    }

    .welcome-card-bar {
      height: 66%;
      top: 34%;
    }

    .welcome-card-items {
      flex-direction: column-reverse;
      gap: 1rem;
    }

    .welcome-card-items-start, .welcome-card-items-end {
      width: 100%;
      padding-left: 1rem;
      padding-right: 1rem;
    }

    a {
      font-size: 1rem;
      margin: 1rem auto;
    }

    figcaption {
      bottom: 10%;
      padding: 0.5rem 0;
    }
  }
</style>