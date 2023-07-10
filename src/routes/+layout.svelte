<script>
  import Nav from '$lib/Nav.svelte'
  import Footer from '$lib/Footer.svelte'
  import '../app.scss'
  import client from '$lib/client'
  import imageUrlBuilder from '@sanity/image-url'
  import { onMount } from 'svelte'
  import { setContext } from 'svelte'

  import { dev } from '$app/environment'
  import { inject } from '@vercel/analytics'
  
  inject({ mode: dev ? 'development' : 'production' })

  const builder = imageUrlBuilder(client)

  function urlFor(source) {
    return builder.image(source)
  }

  export let data

  setContext('logo', data.assets.logo)

  onMount(() => {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    let bgImageWidth = 1440
    if (vw <= 700) {
      bgImageWidth = 700
    } else if (vw <= 1000) {
      bgImageWidth = 1000
    }
    document.body.style.backgroundImage = "url('" + urlFor(data.assets.backgroundImage).auto('format').width(bgImageWidth).url() + "')"
  })
</script>

<Nav logo={data.assets.logo} />

<slot />

<Footer />

<style>
  :global(body) {
    background-color: #e9e9e9;
    height: 100%;
    width: 100%;
    margin: 0px;
    padding: 0px;
    overflow-x: hidden;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
