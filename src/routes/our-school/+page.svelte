<script>
  import Head from '$lib/Head.svelte'
  import InfoPage from '$lib/subpages/InfoPage.svelte'

  export let data
</script>

<Head
  title="Our School"
  description="Our beautiful campus, set within mature green spaces encompasses modern and traditional teaching facilities along with the finest boarding accommodation, Craighead provides a school where students can feel at home and supported in their pursuit of personal excellence."
  />

<InfoPage content={data.content} />
