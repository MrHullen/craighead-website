<script>
  import { urlFor } from '$lib/utils/image'
  export let image
</script>

<!-- Scales the image to 5:1 and crops it around the focal point. -->
<img src={urlFor(image).auto('format').fit('min').crop('focalpoint').width(1500).height(300).url()} />