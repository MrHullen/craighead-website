<script>
  import { page } from '$app/stores'
  import CraigheadLogo from './CraigheadLogo.svelte'

  // for useful links
  import footer from '$lib/footer'
  const content = $footer

  export let logo

  // Boolean value for burger menu on mobile
  // toggled off whenever $page changes
  let active = false
  function toggle() {
    active = !active
  }
</script>

<nav class="navbar is-fixed-top" aria-label="main navigation">
  <div class="navbar-brand">
    <a
      class="navbar-item"
      on:click={() => {
        active = false
      }}
      aria-current={$page.url.pathname == '/' ? 'page' : undefined}
      class:is-active={$page.url.pathname == '/'}
      href="/">
      <CraigheadLogo {logo} />
    </a>

    <!-- svelte-ignore a11y-missing-attribute -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-interactive-supports-focus -->
    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" class:is-active={active} on:click={toggle}>
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  </div>
  <!-- navbar-brand -->

  <div class="navbar-menu" class:is-active={active}>
    <div class="navbar-end">
      <a class="navbar-item is-size-5" on:click={toggle} href="https://cds.craighead.school.nz/2024-principal-recruitment/">Principal Recruitment</a>

      <div class="navbar-item is-size-5 has-dropdown is-hoverable">
        <a class="navbar-link  is-arrowless has-text-dark" aria-current={$page.url.pathname.includes('/enrolment') ? 'page' : undefined} class:is-active={$page.url.pathname.includes('/enrolment')} href="/enrolment" on:click={toggle}> Enrolment </a>
        <div class="navbar-dropdown">
          <a class="navbar-item" on:click={toggle} href="/enrolment#a-girls'-school">A Girls' School</a>
          <a class="navbar-item" on:click={toggle} href="/enrolment#domestic">Domestic</a>
          <a class="navbar-item" on:click={toggle} href="/enrolment#international">International</a>
        </div>
      </div>

      <div class="navbar-item is-size-5 has-dropdown is-hoverable">
        <a class="navbar-link  is-arrowless has-text-dark" aria-current={$page.url.pathname.includes('/our-school') ? 'page' : undefined} class:is-active={$page.url.pathname.includes('/our-school')} href="/our-school" on:click={toggle}> Our School </a>
        <div class="navbar-dropdown">
          <a class="navbar-item" on:click={toggle} href="/our-school#school-structure">School Structure</a>
          <a class="navbar-item" on:click={toggle} href="/our-school#our-people">Our People</a>
          <a class="navbar-item" on:click={toggle} href="/our-school#boarding">Boarding</a>
          <a class="navbar-item" on:click={toggle} href="/our-school#learning-support">Learning Support</a>
          <a class="navbar-item" on:click={toggle} href="/our-school#sports">Sports</a>
          <a class="navbar-item" on:click={toggle} href="/our-school#culture-and-performing-arts">Cultural and Performing Arts</a>
        </div>
      </div>

      <div class="navbar-item is-size-5 has-dropdown is-hoverable">
        <a class="navbar-link is-arrowless has-text-dark" aria-current={$page.url.pathname.includes('/about-us') ? 'page' : undefined} class:is-active={$page.url.pathname.includes('/about-us')} href="/about-us" on:click={toggle}> About Us </a>
        <div class="navbar-dropdown">
          <a class="navbar-item" on:click={toggle} href="/about-us#special-character">Special Character</a>
          <a class="navbar-item" on:click={toggle} href="/about-us#old-girls'-association">Old Girls' Association</a>
          <a class="navbar-item" on:click={toggle} href="/about-us#history">History</a>
          <a class="navbar-item" on:click={toggle} href="/about-us#facilities-hire">Facilities Hire</a>
        </div>
      </div>

      <div class="navbar-item is-size-5 has-dropdown is-hoverable">
        <a class="navbar-link is-arrowless has-text-dark is-tab" aria-current={$page.url.pathname.includes('/parents') ? 'page' : undefined} class:is-active={$page.url.pathname.includes('/parents')} href="/parents" on:click={toggle}> Parents </a>
        <div class="navbar-dropdown">
          {#each content.usefulLinks as usefulLink}
            <a class="navbar-item" on:click={toggle} href="{usefulLink.link}">{usefulLink.title}</a>
          {/each}
        </div>
      </div>

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
