<script lang="ts">
  import TileContent from './PortfolioTileContent.svelte';

  export let title: string;
  export let description: string;
  export let imageUrl: string;
  export let linkUrl: string = "";
  export let alt: string = title;

  export let aspectRatio: string = "4/3";
  export let tags: string[] = [];
  export let atf: boolean = false;
  export let imageBackground: string = "transparent";

  // Only check for external link if clickable and linkUrl is provided
  const isExternalLink = (linkUrl.startsWith('http://') || linkUrl.startsWith('https://'));

  const linkAttributes = isExternalLink ? {
    target: "_blank",
    rel: "noopener noreferrer",
  } : {};
</script>

<div class="tile">
  {#if linkUrl.length}
    <a
      href={linkUrl}
      class="tile-link"
      {...linkAttributes}
      itemscope
      itemtype="https://schema.org/CreativeWork"
      aria-label={title}
    >
      <TileContent {title} {description} {imageUrl} {alt} {aspectRatio} {tags} {atf} {imageBackground} />
    </a>
  {:else}
    <div
      class="tile-content"
      itemscope
      itemtype="https://schema.org/CreativeWork"
    >
      <TileContent {title} {description} {imageUrl} {alt} {aspectRatio} {tags} {atf} {imageBackground} />
    </div>
  {/if}
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
    border: 1px solid #e0e0e0;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    height: 100%;
  }

  .tile:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12);
  }

  .tile-link, .tile-content {
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

  .tile-link:focus-visible :global(.content) {
    background-color: rgba(0, 0, 238, 0.05);
  }

  @supports not selector(:focus-visible) {
    .tile-link:focus {
      outline: 2px solid #00E;
      outline-offset: -2px;
      border-radius: 4px;
    }

    .tile-link:focus :global(.content) {
      background-color: rgba(0, 0, 238, 0.05);
    }
  }
</style>
