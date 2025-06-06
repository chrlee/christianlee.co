<script lang="ts">
	import Head from '../components/Head.svelte';
	import Header from '../components/Header.svelte';
	import { fade } from 'svelte/transition';
	import { transitionIn, transitionOut } from '$lib/transitions';
	import Footer from '../components/Footer.svelte';
	import { page } from '$app/state';
	import { darkTheme } from '$lib/stores/theme';

	const darkThemeRoutes = ['noise'];
	
	const currentPath = $derived(page.url.pathname.replace('/', ''));
	const isDarkTheme = $derived(darkThemeRoutes.some(route => 
		currentPath.startsWith(`${route}`)
	));

	$effect(() =>{
		if (typeof document !== 'undefined') {
			if (isDarkTheme) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		}
    $darkTheme = isDarkTheme;
	})
</script>
<Head title={currentPath || 'home'} description={currentPath || 'home'}/>

<div class="pageWrapper">
  <div class="pageContent">
    <Header currentPath={currentPath}/>
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
    font-family: NebulaSansLight;
    src: url('../fonts/NebulaSans-Light.woff2');
  }

  @font-face {
    font-family: NebulaSansRegular;
    src: url('../fonts/NebulaSans-Medium.woff2');
  }

  @font-face {
    font-family: NebulaSansBold;
    src: url('../fonts/NebulaSans-Semibold.woff2');
  }

  /* Theme variables */
  :global(:root) {
    --background-color: #F9F9F9;
    --text-color: #222;
    --link-hover-color: #00E;
  }

  :global(html.dark) {
    --background-color: #121212;
    --text-color: #E0E0E0;
    --link-hover-color: #88F;
  }

	:global(html) {
    height: 100%;
		width: 100%;
    scrollbar-gutter: stable;
	}

	:global(body) {
		font-family: NebulaSansLight, Helvetica, sans-serif;
		color: var(--text-color);
		background-color: var(--background-color);
    width: 100%;
		min-height: 100%; 
		line-height: 1.4;
		font-size: medium;
    margin: 0;
	}

  :global(h1) {
    font-family: NebulaSansRegular, Helvetica, sans-serif;
    letter-spacing: 0.1rem;
  }

  :global(h2) {
    font-family: NebulaSansLight, Helvetica, sans-serif;
    letter-spacing: 0.1rem;
  }

  :global(a) {
		color: var(--text-color);
    &:hover {
     color: var(--link-hover-color);
    }
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
