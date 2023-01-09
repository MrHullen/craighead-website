<script>
  let active = false
  const showOnPx = 200

  function goTop() {
    document.body.scrollIntoView({ behavior: 'smooth' })
  }

  function scrollContainer() {
    return document.documentElement || document.body
  }

  function handleOnScroll() {
    if (!scrollContainer()) return

    if (scrollContainer().scrollTop > showOnPx) {
      active = true
    } else {
      active = false
    }
  }
</script>

<svelte:window on:scroll={handleOnScroll} />

<button class="button is-rounded" class:active on:click={goTop}>
  <img src="/arrow-up.png" alt="Back to top arrow" />
</button>

<style>
  .button {
    display: none;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    z-index: 99;
    width: 3rem;
    height: 3rem;
    line-height: 3rem;
    padding: 0 0;
  }

  .button.is-rounded {
    padding: 0 0;
  }

  .active {
    display: block;
  }

  img {
    height: 2rem;
    margin-top: 0.5rem;
    opacity: 0.6;
  }

  @media (min-width: 700px) {
    .button {
      display: none;
    }
  }
</style>