<script>
  import { getPrincipalsWelcomeContent } from '$lib/content'

  const content = getPrincipalsWelcomeContent()
</script>

<section class="principals-welcome-card">
  <img src="/lindy-and-student-leaders.jpeg" alt="Lindy Graham and student leaders" />
  <figure>
    <blockquote>
      {content.quote}
    </blockquote>
    <figcaption>
      {content.principal}
    </figcaption>
  </figure>
</section>

<style>
  .principals-welcome-card {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
  }

  img {
    border: 0.5rem solid #E9E9E9;
    width: 40%;
  }

  figure {
    background-color: #E9E9E9;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 40%;
    height: 50%;
    padding: 5rem 3rem;
  }

  figcaption {
    text-align: right;
    width: 100%;
    margin-top: 1rem;
  }

  /* mobile */
  @media (max-width: 700px) {
    .principals-welcome-card {
      font-size: 1rem;
      flex-direction: column;
    }

    img {
      width: 90%;
    }

    figure {
      width: 100%;
      padding: 2rem 1rem;
    }
  }
</style>