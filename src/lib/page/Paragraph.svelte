<script>
  import { PortableText } from '@portabletext/svelte'
  import ParagraphImage from '$lib/page/ParagraphImage.svelte'
  
  export let paragraphs
</script>

<PortableText value={paragraphs.text} components={{ types: { image: ParagraphImage } }} />