<script>
  import '../app.scss'
  import Nav from '$lib/Nav.svelte'
  import Footer from '$lib/Footer.svelte'

  import { dev } from '$app/environment'
  import { inject } from '@vercel/analytics'
  
  inject({ mode: dev ? 'development' : 'production' })

  export let data

  import { setContext } from 'svelte'
  setContext('logo', data.assets.general.logo)
  setContext('favicon', data.assets.general.favIcon)
</script>

<Nav navBar={data.assets.navBar} />

<slot />

<Footer footer={data.assets.footer} />

<style>
  :global(body) {
    background-color: #fff;
    height: 100%;
    width: 100%;
    margin: 0px;
    padding: 0px;
    overflow-x: hidden;
    background-repeat: no-repeat;
    background-size: cover;
  }

  /* fixes scroll margin for anchor links */
  :global(*) {
    scroll-margin-top: 100px;
  }
</style>
