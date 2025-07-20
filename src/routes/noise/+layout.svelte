<script lang="ts">
  import { goto, afterNavigate } from '$app/navigation';
  import { page } from '$app/stores';
  import { base } from '$app/paths';
  import { subHeader } from '$lib/stores/subHeader';

  let currentPage : string = $page.url.pathname;
  let previousPage : string = base;

  afterNavigate(({from}) => {
     previousPage = from?.url.pathname || previousPage;
     currentPage = $page.url.pathname;

     if (!currentPage.startsWith('/noise')) {
       $subHeader = '';
     }
  }) 

</script>

<div class="container">
  {#if currentPage !== '/noise'}
    <a 
      on:click={
        () => goto(
          previousPage ||
          $page.url.pathname.substring(0, $page.url.pathname.lastIndexOf('/')) ||
          '/'
        )
      }
      class="back-button"
    >back</a>
  {/if}
  <slot />
</div>

<style>
  :global(a) {
    text-decoration: underline;
    cursor: pointer;
  }

</style>
