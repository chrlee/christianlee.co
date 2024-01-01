<script>
	import Footer from '../components/Footer.svelte';
	import Head from '../components/Head.svelte';
	import Header from '../components/Header.svelte';
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
	<section class="logo">
		<Scene />
	</section>
	<section class="topNav">
		<Header {currentPath} />
	</section>
	{#key currentPath}
		<main in:fade={transitionIn} out:fade={transitionOut} class="pageContent">
			<slot />
		</main>
	{/key}
	<Footer />
</div>

<style>
	@import '../reset.css';

	:global(html) {
		height: 100%;
		width: 100%;
	}
	:global(body) {
		font-family: Montserrat, Helvetica, sans-serif;
		color: #444;
		background-color: #222;
		height: 100%;
		line-height: 1.6;
		font-size: large;
		margin: 0 auto;
		padding: 10px;
		max-width: 1024px;
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
	.topNav {
		width: 100%;
	}
	.logo {
		width: 100%;
		height: 20vh;
	}
	.pageContent {
		width: 100%;
	}
</style>
