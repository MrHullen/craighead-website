<script>
  import Nav from '$lib/Nav.svelte'
  import Footer from '$lib/Footer.svelte'
  import '../app.scss'
</script>

<Nav />

<slot />

<Footer />

<style>
  :global(body) {
    background-color: #E9E9E9;
    height: 100%;
    background-image: url('/background-image.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>