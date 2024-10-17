<script>
  import { page } from '$app/stores'
  import CraigheadLogo from './CraigheadLogo.svelte'

  export let navBar

  function scrollTo(element) {
    if (!document.getElementById(element) || !document.getElementById(element)) return
    document.getElementById(element).scrollIntoView({ behavior: 'smooth' })
  }

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
      <CraigheadLogo />
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

      <!-- <!-- OPEN DAY -->
      <!-- <a class="navbar-item is-size-5" href="/#open-day" on:click={toggle}>
        <span class="button is-success is-rounded has-text-weight-bold"> Open Day </span>
      </a> -->
      {#each navBar.menuItems as menuItem}
        {#if menuItem.dropdown?.length}
          <div class="navbar-item is-size-5 has-dropdown is-hoverable">
            <a class="navbar-link is-arrowless has-text-dark" aria-current={$page.url.pathname.includes(menuItem.url) ? 'page' : undefined} class:is-active={$page.url.pathname.includes(menuItem.url)} href={menuItem.url} on:click={toggle}>
              {menuItem.title}
            </a>
            <div class="navbar-dropdown">
              {#each menuItem.dropdown as dropdownItem}
                <a class="navbar-item" on:click={toggle} href={dropdownItem.url}>{dropdownItem.title}</a>
              {/each}
            </div>
          </div>
        {:else}
          <a
            class="navbar-item is-size-5"
            aria-current={$page.url.pathname.includes(menuItem.link) ? 'page' : undefined}
            class:is-active={$page.url.pathname.includes(menuItem.link)}
            href={menuItem.url}
            on:click={toggle}>
            {menuItem.title}
          </a>
        {/if}
      {/each}

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

  nav .is-success {
    background-color: #003f2c;
  }
</style>
