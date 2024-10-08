<script>
  import { urlFor } from '$lib/utils/image'

  export let tile
</script>

<a href={tile.link}>
  <img src="{urlFor(tile.image).width(200).height(150).url()}" alt="{tile.label}" />
  <span>
    <h3>{tile.label}</h3>
  </span>
</a>

<style>
  a { 
    position: relative;
    height: 150px;
  }

  span {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.9);
  }
  
  h3 {
    font-size: 1em;
    margin: 0.5em 1em; 
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>