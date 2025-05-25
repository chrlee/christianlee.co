<script lang="ts">
  export let title: string;
  export let description: string;
  export let imageUrl: string;
  export let alt: string;
  export let aspectRatio: string;
  export let tags: string[] = [];
  export let atf: boolean;
  export let imageBackground: string;
</script>

<div class="imageWrapper" style="--aspect-ratio: {aspectRatio}; background-color: {imageBackground};">
  <img
    src={imageUrl}
    {alt}
    loading={atf ? "eager" : "lazy"}
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
</div>

<style>
  .imageWrapper {
    display: flex;
    width: 100%;
    aspect-ratio: var(--aspect-ratio);
    overflow: hidden;
  }

  img {
    width: 85%;
    height: 85%;
    object-fit: contain;
    transition: transform 0.5s ease;
    margin: auto;
  }

  :global(.tile:hover) img {
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
    font-family: NebulaSansLight, Helvetica, sans-serif;
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
</style>
