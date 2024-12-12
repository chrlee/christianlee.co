<script>
	import Footer from '../components/Footer.svelte';
	import Head from '../components/Head.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';

	export let data;

	const duration = 300;
	const delay = duration + 100;
	const y = 10;

	const transitionIn = { easing: cubicOut, y, duration, delay };
	const transitionOut = { easing: cubicIn, y: -y, duration };

	$: currentPath = data.pathname.replace('/', '');
	onMount(() => {
		currentPath = window.location.pathname.replace('/', '');
	});
</script>

<Head title={currentPath || 'home'} />

<div class="pageWrapper">
  <div class="pageContent">
    {#key currentPath}
      <main in:fade={transitionIn} out:fade={transitionOut} class="pageMain">
        <slot />
      </main>
    {/key}
    <Footer />
  </div>
</div>

<style>
	@import '../reset.css';
  
  @font-face {
    font-family: NeueHaasGroteskLight;
    src: url('fonts/NeueHaasGroteskDisplayLight.otf');
  }

  @font-face {
    font-family: NeueHaasGroteskRegular;
    src: url('fonts/NeueHaasGroteskRegular.ttf');
  }

  @font-face {
    font-family: NeueHaasGroteskMedium;
    src: url('fonts/NeueHaasGroteskMedium.ttf');
  }

	:global(html) {
    height: 100%;
		width: 100%;
	}
	:global(body) {
		font-family: NeueHaasGroteskLight, Helvetica, sans-serif;
    letter-spacing: 1px;
		color: #222;
		background-color: #F9F9F9;
    width: 100%;
		min-height: 100%; 
		line-height: 1.4;
		font-size: medium;
    margin: 0;
	}
  :global(h2, h3) {
    text-transform: uppercase;
    font-family: NeueHaasGroteskRegular, Helvetica, sans-serif;
  }
	main {
		flex-grow: 1;
    height: max-content;
	}

	.pageWrapper {
    position: absolute;
    width: 100%;
		height: 100%;
	}
  .pageContent {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    height: 100%;
    padding: 0 1rem;
    max-width: 1024px;
  }
</style>
