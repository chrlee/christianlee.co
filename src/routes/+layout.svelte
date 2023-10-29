<script>
	import Footer from '../components/Footer.svelte';
  import Head from '../components/Head.svelte';
	import Header from '../components/Header.svelte';
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';

  inject({ mode: dev ? 'development' : 'production' });
</script>

<Head title={'Christian Lee'} />

<div class="pageWrapper">
	<section class="topNav">
		<Header />
	</section>
	<main class="pageContent">
		<slot />
	</main>
    <Footer />
</div>

<style>
	@import '../reset.css';

  :global(html) {
      height: 100%;
  }
	:global(body) {
		font-family: Montserrat, Helvetica, sans-serif;
		color: #444;
		background-color: #eee;
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

	.pageContent {
		width: 100%;
	}
</style>
