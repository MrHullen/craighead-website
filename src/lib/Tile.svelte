<script>
  import { urlFor } from '$lib/utils/image'

  export let title
  export let link
  export let data
</script>

<a href={link}>
  <img src="{urlFor(data).width(400).height(300).url()}" alt="{data.caption}" />
  <span>
    <h3>{title}</h3>
  </span>
</a>

<style>
  a { 
    position: relative;
    height: 300px;
  }

  span {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.9);
  }
  
  h3 {
    margin: 0.5em 1em; 
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>