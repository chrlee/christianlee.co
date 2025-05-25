<script lang="ts">
    import PortfolioGrid from './PortfolioGrid.svelte';
    import type { HeadProps, Project } from '$lib/types';
	import Head from '../Head.svelte';

    export let head: HeadProps;
    export let projectsHeader: string = "";
    export let projects: Project[] = [];
</script>

<Head title={head.title} description={head.description}/>

<section class="intro-section">
    <div class="container">
    <div class="intro-content">
        <div class="intro-text">
            <slot name="text" />
        </div>
        <div class="intro-image-container">
            <slot name="image" />
        </div>
    </div>
</section>

{#if projects.length}
    <section id="portfolio">
        <div class="container">
            <h2 class="section-title">{projectsHeader}</h2>
            <PortfolioGrid projects={projects} />
        </div>
    </section>
{/if}

<style>
    .intro-section {
        display: flex;
        align-items: center;
    }

    .intro-content {
        display: flex;
        flex-direction: column-reverse;
        gap: 3rem;
        align-items: center;
    }

    .intro-image-container {
        flex: 1;
        position: relative;
        padding: 1rem 0;
    }

    :global(.intro-image) {
        width: 100%;
        height: auto;
    }

    .intro-text {
        flex: 1;
    }

    .section-title {
        text-align: center;
        font-size: 2rem;
    }

    @media (min-width: 640px) {
        .intro-content {
        flex-direction: row;
        gap: 4rem;
        align-items: center;
        }
    }

    @media (min-width: 960px) {
        .intro-content {
        gap: 6rem;
        }

        .section-title {
        font-size: 2.5rem;
        }
    }

    :global(a:focus-visible) {
        outline: 2px solid #00E;
        outline-offset: 4px;
        border-radius: 2px;
    }

    @supports not selector(:focus-visible) {
        :global(a:focus) {
        outline: 2px solid #00E;
        outline-offset: 4px;
        border-radius: 2px;
        }
    }
</style>
