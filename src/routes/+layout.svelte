<script>
	import Head from '../components/Head.svelte';
	import Header from '../components/Header.svelte';
</script>

<Head title={'Christian Lee'} />

<div class="pageWrapper">
	<section class="topNav">
		<Header />
	</section>
	<main class="pageContent">
		<slot />
	</main>
</div>

<style>
	@import '../reset.css';

	:global(body) {
		font-family: Montserrat, Helvetica, sans-serif;
		color: #444;
		background-color: #eee;
		line-height: 1.6;
		font-size: large;
		margin: 0 auto;
		padding: 10px;
		max-width: 1024px;
	}
	.pageWrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
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
