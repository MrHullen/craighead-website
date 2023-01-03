<script>
  import { getPrincipalsWelcomeContent } from '$lib/content'

  const content = getPrincipalsWelcomeContent()
</script>

<section class="principals-welcome-card">
  <img src="/lindy-and-student-leaders.jpeg" alt="Lindy Graham and student leaders" />
  <figure>
    <blockquote class="is-size-5">
      {content.quote}
    </blockquote>
    <figcaption class="is-size-5">
      {content.principal}
    </figcaption>
  </figure>
</section>

<style>
  .principals-welcome-card {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    border: 0.5rem solid #E9E9E9;
    width: 40vw;
  }

  figure {
    background-color: #E9E9E9;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 40vw;
    height: 50%;
    padding: 5rem 3rem;
  }

  figcaption {
    text-align: right;
    width: 100%;
    margin-top: 1rem;
  }
</style>