<script>
  import InfoPage from '$lib/subpages/InfoPage.svelte'
  import { urlFor } from '$lib/utils/image'

  export let data

  // get the favicon
  import { getContext } from 'svelte'
  let logo = getContext('logo')
</script>

<svelte:head>
  <title>About Us</title>
  <meta name="description" content="Girls who attend Craighead are known for their grace, spirit, character and high levels of intrinsic motivation. They are confident, connected and caring global citizens. They desire to be the best they can be, yet retain the values of respect, integrity, courtesy, cooperation and kindness." />
  <meta property="og:title" content="Craighead Diocesan School - About Us" />
  <meta property="og:url" content="https://craighead.school.nz/about-us" />
  <meta property="og:description" content="Girls who attend Craighead are known for their grace, spirit, character and high levels of intrinsic motivation. They are confident, connected and caring global citizens. They desire to be the best they can be, yet retain the values of respect, integrity, courtesy, cooperation and kindness." />
  <meta property="og:image" content={urlFor(logo).auto('format').bg('fff').url()} />
</svelte:head>

<InfoPage content={data.content} />
