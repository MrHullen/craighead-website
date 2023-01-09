<script>
	import { page } from '$app/stores'
  import { fly } from 'svelte/transition'

	// Boolean value for burger menu on mobile
  // toggled off whenever $page changes
  let active = false
  function toggle() {
    active = !active
  }
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Abhaya+Libre&display=swap" rel="stylesheet">
</svelte:head>

<nav class="navbar" aria-label="main navigation">
  <div class="navbar-brand">
    <a
    class="navbar-item"
    on:click={() => { active = false }}
    aria-current="{$page.url.pathname == '/' ? 'page' : undefined}"
    href="/">
      <img class="image" src="/logo.png" alt="Craighead logo" />
      <div class="is-brand has-text-dark">
        <span class="is-brand-top mb-0 is-size-3"> Craighead </span>
        <hr />
        <span class="is-brand-bottom is-size-5"> Diocesan School </span>
      </div>
    </a>

    
    <!-- svelte-ignore a11y-missing-attribute -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <a
    role="button"
    class="navbar-burger burger"
    aria-label="menu"
    aria-expanded="false"
    class:is-active={active}
    on:click={toggle}>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div> <!-- navbar-brand -->

  <div
  class="navbar-menu"
  class:is-active={active}>
    <div class="navbar-end">

      <a
      class="navbar-item is-size-5"
      class:is-active={$page.url.pathname.includes('/enrolment')}
      aria-current="{$page.url.pathname.includes('/enrolment') ? 'page' : undefined}"
      href="/enrolment"
      on:click={toggle}>
        Enrolment
      </a>

      <a
      class="navbar-item is-size-5"
      class:is-active={$page.url.pathname.includes('/our-school')}
      aria-current="{$page.url.pathname.includes('/our-school') ? 'page' : undefined}"
      href="/our-school"
      on:click={toggle}>
        Our School
      </a>

      <a
      class="navbar-item is-size-5"
      class:is-active={$page.url.pathname.includes('/about-us')}
      aria-current="{$page.url.pathname.includes('/about-us') ? 'page' : undefined}"
      href="/about-us"
      on:click={toggle}>
        About Us
      </a>

      <a
      class="navbar-item is-size-5"
      href="/Application-for-Enrolment.pdf"
      target="_blank"
      rel="noreferrer"
      on:click={toggle}>
        <span class="button is-success is-rounded has-text-weight-bold">
          Apply Now
        </span>
      </a>

    </div> <!-- navbar-end -->
  </div> <!-- navbar-menu -->
</nav>

<style>
  .navbar-item img {
    max-height: 5rem;
  }

  .is-brand {
    font-family: 'Abhaya Libre', serif;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 1.5rem;
  }

  hr {
    background-color: hsl(0, 0%, 21%);
    height: 1px;
    width: 100%;
    margin: 0 0;
  }

  .burger {
    height: 6rem;
  }

  .navbar-end:last-child {
    margin-right: 2rem;
  }
</style>