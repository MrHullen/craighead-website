<script>
  import InfoPage from '$lib/subpages/InfoPage.svelte'
  import { urlFor } from '$lib/utils/image'

  export let data

  // get the favicon
  import { getContext } from 'svelte'
  let logo = getContext('logo')
</script>

<svelte:head>
  <title>Our School</title>
  <meta name="description" content="Our beautiful campus, set within mature green spaces encompasses modern and traditional teaching facilities along with the finest boarding accommodation, Craighead provides a school where students can feel at home and supported in their pursuit of personal excellence." />
  <meta property="og:title" content="Craighead Diocesan School - Our School" />
  <meta property="og:url" content="https://craighead.school.nz/our-school" />
  <meta property="og:description" content="Our beautiful campus, set within mature green spaces encompasses modern and traditional teaching facilities along with the finest boarding accommodation, Craighead provides a school where students can feel at home and supported in their pursuit of personal excellence." />
  <meta property="og:image" content={urlFor(logo).auto('format').bg('fff').url()} />
</svelte:head>

<InfoPage content={data.content} />
