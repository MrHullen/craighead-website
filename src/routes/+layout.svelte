<script>
  import Nav from '$lib/Nav.svelte'
  import Footer from '$lib/Footer.svelte'
  import "../app.scss"
</script>

<Nav />

<slot />

<Footer />

<style>
  :global(body) {
    background-color: #1E1E1E;
    height: 100%
  }
</style>