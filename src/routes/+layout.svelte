<script>
  import '../app.scss'
  import Nav from '$lib/Nav.svelte'
  import Footer from '$lib/Footer.svelte'
  import { urlFor } from '$lib/utils/image'
  import { onMount } from 'svelte'
  import { setContext } from 'svelte'

  import { dev } from '$app/environment'
  import { inject } from '@vercel/analytics'
  
  inject({ mode: dev ? 'development' : 'production' })

  export let data

  setContext('logo', data.assets.logo)

  // onMount(() => {
  //   const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  //   let bgImageWidth = 1440
  //   if (vw <= 700) {
  //     bgImageWidth = 700
  //   } else if (vw <= 1000) {
  //     bgImageWidth = 1000
  //   }
  //   document.body.style.backgroundImage = "url('" + urlFor(data.assets.backgroundImage).auto('format').width(bgImageWidth).url() + "')"
  // })
</script>

<Nav logo={data.assets.logo} />

<slot />

<Footer />

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
