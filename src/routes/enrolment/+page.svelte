<script>
  import Head from '$lib/Head.svelte'
  import InfoPage from '$lib/subpages/InfoPage.svelte'

  export let data
</script>

<Head
  title="Enrolment"
  description="Entry to the school is not based on academic ability. We enjoy diversity and helping every student to discover her capabilities. There are no assumptions, no limitations. In the Craighead environment, students have the capacity to excel."
  />

<InfoPage content={data.content} />
