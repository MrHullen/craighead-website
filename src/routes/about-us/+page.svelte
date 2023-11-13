<script>
  import Head from '$lib/Head.svelte'
  import InfoPage from '$lib/subpages/InfoPage.svelte'

  export let data
</script>

<Head
  title="About Us"
  description="Girls who attend Craighead are known for their grace, spirit, character and high levels of intrinsic motivation. They are confident, connected and caring global citizens. They desire to be the best they can be, yet retain the values of respect, integrity, courtesy, cooperation and kindness."
  />

<InfoPage content={data.content} />
