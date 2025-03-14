<script lang="ts">
  import PortfolioTile from './PortfolioTile.svelte';
  
  export let projects = [];
  
  // Define project type to ensure proper typing and property passing
  type Project = {
    title: string;
    description: string;
    imageUrl: string;
    linkUrl: string;
    alt?: string;
    aspectRatio?: string;
    tags?: string[];
  };
</script>

<section aria-labelledby="portfolio-heading">
  <h2 id="portfolio-heading" class="visually-hidden">Portfolio Projects</h2>
  
  <div class="portfolio-grid" role="list">
    {#each projects as project, i}
      <div class="portfolio-item" role="listitem" tabindex="-1">
        <PortfolioTile 
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          linkUrl={project.linkUrl}
          alt={project.alt || project.title}
          aspectRatio={project.aspectRatio || "4/3"}
          tags={project.tags || []}
        />
      </div>
    {/each}
  </div>
</section>

<style>
  .portfolio-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    width: 100%;
    margin: 2rem 0;
  }
  
  .portfolio-item {
    height: 100%;
    outline: none;
  }

  /* Responsive grid breakpoints */
  @media (min-width: 640px) {
    .portfolio-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 960px) {
    .portfolio-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
</style>