<script lang="ts">
	import { goto } from '$app/navigation';
	import { subHeader } from '$lib/stores/subHeader';
	import { fade } from 'svelte/transition';
	import { transitionIn, transitionOut } from '$lib/transitions';
	export let currentPath: string;

	$: atHomepage = currentPath === '';

	const handleHeaderClick = () => {
		if (!atHomepage) goto('/');
		subHeader.set('');
	};
</script>

<header>
	<div class="headerNav">
		<h1
			on:click={handleHeaderClick} 
			on:keydown={(e) => e.key === 'Enter' && handleHeaderClick()}
			role={atHomepage ? 'heading' : 'button'}
			tabindex={atHomepage ? undefined : 0}
			class:clickable={!atHomepage}
		>
			christian lee
		</h1>
		{#if $subHeader}
			<h2 in:fade={transitionIn} out:fade={transitionOut}>
				{$subHeader}
			</h2>
		{/if}
	</div>
</header>

<style>
	
	h2 {
      font-size: 1.5rem;
      margin: 0 0 1.5rem 0;
      opacity: 0.8;
      font-weight: normal;
      font-family: NebulaSansLight, Helvetica, sans-serif;
    }

	h1, h2 {
		margin: 0;
	}

	.headerNav {
		display: flex;
		align-items: baseline;
		margin: 1rem 0;
		gap: 1rem;
	}

	.clickable {
		cursor: pointer;
		transition: color 0.2s ease;
	}
	
	.clickable:hover {
		color: var(--link-hover-color);
	}
</style>
