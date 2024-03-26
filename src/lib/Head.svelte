<script>
  import { urlFor } from '$lib/utils/image'

  export let title
  export let description

  // get the logo
  import { getContext } from 'svelte'
  let logo = getContext('logo')

  // get the current URL
  import { onMount } from 'svelte'
  let url = ``
  onMount(() => (url = window.location.href))
</script>

<svelte:head>
  <title>{title}</title>
  <link rel="icon" type="image/x-icon" href="/crest-icon.png">
  <meta name="description" content={description} />
  <meta property="og:title" content="Craighead Diocesan School - {title}" />
  <meta property="og:url" content={url} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={urlFor(logo).auto('format').bg('fff').url()} />
</svelte:head>
