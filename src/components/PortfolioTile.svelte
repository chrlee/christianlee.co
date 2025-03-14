<script lang="ts">
  export let title: string;
  export let description: string;
  export let imageUrl: string;
  export let linkUrl: string;
  export let alt: string = title;
  
  export let aspectRatio: string = "4/3";
  export let tags: string[] = [];
  
  const isExternalLink = linkUrl.startsWith('http://') || linkUrl.startsWith('https://');
  
  const linkAttributes = isExternalLink ? {
    target: "_blank",
    rel: "noopener noreferrer",
  } : {};
</script>

<div class="tile">
  <a 
    href={linkUrl} 
    class="tile-link"
    {...linkAttributes}
    itemscope
    itemtype="https://schema.org/CreativeWork"
    aria-label={title}
  >
    <div class="imageWrapper" style="--aspect-ratio: {aspectRatio};">
      <img 
        src={imageUrl} 
        {alt} 
        loading="lazy" 
        itemprop="image"
      />
    </div>
    <div class="content">
      <h3 itemprop="name">{title}</h3>
      <p itemprop="description">{description}</p>
      {#if tags.length > 0}
        <div class="tags" aria-label="Project tags">
          {#each tags as tag}
            <span class="tag" itemprop="keywords">{tag}</span>
          {/each}
        </div>
      {/if}
      <span class="visually-hidden">
        {isExternalLink ? 'External link' : 'View project'}
      </span>
    </div>
  </a>
</div>

<style>
  .tile {
    display: block;
    background-color: white;
    border-radius: 4px;
    overflow: hidden;
    text-decoration: none;
    color: #222;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    height: 100%;
  }

  .tile:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12);
  }

  .tile-link {
    display: flex;
    flex-direction: column;
    height: 100%;
    text-decoration: none;
    color: inherit;
    outline: none;
  }

  .tile-link:focus-visible {
    outline: 2px solid #00E; 
    outline-offset: -2px;
    border-radius: 4px;
  }

  .tile-link:focus-visible .content {
    background-color: rgba(0, 0, 238, 0.05); 
  }

  @supports not selector(:focus-visible) {
    .tile-link:focus {
      outline: 2px solid #00E;
      outline-offset: -2px;
      border-radius: 4px;
    }
    
    .tile-link:focus .content {
      background-color: rgba(0, 0, 238, 0.05);
    }
  }

  .imageWrapper {
    display: flex;
    width: 100%;
    aspect-ratio: var(--aspect-ratio);
    overflow: hidden;
    flex: 0 0 auto;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.5s ease;
    margin: 1rem;
  }

  .tile:hover img {
    transform: scale(1.05);
  }

  .content {
    padding: 1rem;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.1rem;
    line-height: 1.3;
  }

  p {
    margin: 0 0 0.75rem 0;
    font-family: NeueHaasGroteskLight, Helvetica, sans-serif;
    font-size: 0.9rem;
    opacity: 0.8;
    flex-grow: 1;
  }
  
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: auto;
  }
  
  .tag {
    font-size: 0.7rem;
    background-color: #f0f0f0;
    padding: 0.25rem 0.5rem;
    border-radius: 3px;
    color: #555;
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