<script>
  import { browser } from '$app/environment'
  import '@mux/mux-video'

  export let playbackId
</script>

<!-- video only works in browser (can't be SSR) -->
{#if browser}
  <mux-video playback-id={playbackId} autoplay loop muted></mux-video>
{/if}

<style>
  mux-video {
    width: 100%;
    height: 50%;
    object-fit: cover;
  }
</style>