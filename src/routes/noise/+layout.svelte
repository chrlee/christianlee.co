<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { base } from '$app/paths';
  import { subHeader } from '$lib/stores/subHeader';
	import { onDestroy, onMount } from 'svelte';

  let currentPage : string = $page.url.pathname;
  let previousPage : string = base;

  onMount(() => {
    $subHeader = 'Noise Console';
  });

  onDestroy(() => {
    $subHeader = '';
  });

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
