<script>
  import InfoPage from '$lib/subpages/InfoPage.svelte'
  import client from '$lib/client'
  import imageUrlBuilder from '@sanity/image-url'
  import { getContext } from 'svelte'

  const builder = imageUrlBuilder(client)

  function urlFor(source) {
    return builder.image(source)
  }

  export let data
  let logo = getContext('logo')
</script>

<svelte:head>
  <title>Enrolment</title>
  <meta name="description" content="Entry to the school is not based on academic ability. We enjoy diversity and helping every student to discover her capabilities. There are no assumptions, no limitations. In the Craighead environment, students have the capacity to excel." />
  <meta property="og:title" content="Craighead Diocesan School - Enrolment" />
  <meta property="og:url" content="https://craighead.school.nz/enrolment" />
  <meta property="og:description" content="Entry to the school is not based on academic ability. We enjoy diversity and helping every student to discover her capabilities. There are no assumptions, no limitations. In the Craighead environment, students have the capacity to excel." />
  <meta property="og:image" content={urlFor(logo).auto('format').bg('fff').url()} />
</svelte:head>

<InfoPage content={data.content} />
