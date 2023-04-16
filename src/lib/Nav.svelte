<script>
  import { page } from '$app/stores'
  import client from '$lib/client'
  import imageUrlBuilder from '@sanity/image-url'
  import CraigheadLogo from './CraigheadLogo.svelte'

  export let logo

  const builder = imageUrlBuilder(client)

  function urlFor(source) {
    return builder.image(source)
  }

  // Boolean value for burger menu on mobile
  // toggled off whenever $page changes
  let active = false
  function toggle() {
    active = !active
  }
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Abhaya+Libre&display=swap" rel="stylesheet" />
</svelte:head>

<nav class="navbar" aria-label="main navigation">
  <div class="navbar-brand">
    <a
      class="navbar-item"
      on:click={() => {
        active = false
      }}
      aria-current={$page.url.pathname == '/' ? 'page' : undefined}
      href="/">
      <CraigheadLogo {logo} />
    </a>

    <!-- svelte-ignore a11y-missing-attribute -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" class:is-active={active} on:click={toggle}>
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  </div>
  <!-- navbar-brand -->

  <div class="navbar-menu" class:is-active={active}>
    <div class="navbar-end">
      <a class="navbar-item is-tab is-size-5" class:is-active={$page.url.pathname.includes('/enrolment')} aria-current={$page.url.pathname.includes('/enrolment') ? 'page' : undefined} href="/enrolment" on:click={toggle}> Enrolment </a>

      <a class="navbar-item is-tab is-size-5" class:is-active={$page.url.pathname.includes('/our-school')} aria-current={$page.url.pathname.includes('/our-school') ? 'page' : undefined} href="/our-school" on:click={toggle}> Our School </a>

      <a class="navbar-item is-tab is-size-5" class:is-active={$page.url.pathname.includes('/about-us')} aria-current={$page.url.pathname.includes('/about-us') ? 'page' : undefined} href="/about-us" on:click={toggle}> About Us </a>

      <a class="navbar-item is-size-5" class:is-active={$page.url.pathname.includes('/apply')} aria-current={$page.url.pathname.includes('/apply') ? 'page' : undefined} href="/apply" on:click={toggle}>
        <span class="button is-success is-rounded has-text-weight-bold"> Apply Now </span>
      </a>
    </div>
    <!-- navbar-end -->
  </div>
  <!-- navbar-menu -->
</nav>

<style>
  .burger {
    height: 6rem;
  }

  .navbar-end:last-child {
    margin-right: 2rem;
  }
</style>
