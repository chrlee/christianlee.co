<script lang="ts">
    import PortfolioTile from './PortfolioTile.svelte';
  
    export let projects = [];
  </script>
  
  <div class="portfolio-grid">
    {#each projects as project}
      <PortfolioTile 
        title={project.title}
        description={project.description}
        imageUrl={project.imageUrl}
        linkUrl={project.linkUrl}
        alt={project.alt || project.title}
        aspectRatio={project.aspectRatio || "4/3"}
      />
    {/each}
  </div>
  
  <style>
    .portfolio-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;
      width: 100%;
      margin: 2rem 0;
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
  </style>