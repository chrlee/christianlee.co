<script>
	import Footer from '../components/Footer.svelte';
	import Head from '../components/Head.svelte';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import Scene from '../components/Scene.svelte';

	inject({ mode: dev ? 'development' : 'production' });

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
	{#key currentPath}
		<main in:fade={transitionIn} out:fade={transitionOut} class="pageContent">
			<slot />
		</main>
	{/key}
	<Footer />
</div>

<style>
	@import '../reset.css';
  
  @font-face {
    font-family: NeueHaasGroteskRegular;
    src: url('fonts/NeueHaasGroteskRegular.ttf');
  }

  @font-face {
    font-family: NeueHaasGroteskMedium;
    src: url('fonts/NeueHaasGroteskMedium.ttf');
  }

  @font-face {
    font-family: NeueHaasGroteskBold;
    src: url('fonts/NeueHaasGroteskBold.ttf');
  }

	:global(html) {
		height: 100%;
		width: 100%;
	}
	:global(body) {
		font-family: NeueHaasGroteskRegular, Helvetica, sans-serif;
    letter-spacing: 1px;
		color: #222;
		background-color: #EEE;
		height: 100%;
		line-height: 1.4;
		font-size: medium;
		margin: 0 auto;
		max-width: 1024px;
	}
  :global(h2, h3) {
    text-transform: uppercase;
    font-family: NeueHaasGroteskMedium, Helvetica, sans-serif;
  }
	main {
		flex-grow: 1;
		height: 100%;
	}

	.pageWrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		height: 100%;
		gap: 1rem;
		padding: 1rem;
	}
	.pageContent {
		width: 100%;

	}
</style>
