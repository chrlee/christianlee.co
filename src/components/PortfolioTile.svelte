<script lang="ts">
    export let title: string;
    export let description: string;
    export let imageUrl: string;
    export let linkUrl: string;
    export let alt: string = title;
  
    // Optional props
    export let aspectRatio: string = "4/3"; // default aspect ratio
  </script>
  
  <a href={linkUrl} class="tile">
    <div class="imageWrapper" style="--aspect-ratio: {aspectRatio};">
      <img src={imageUrl} {alt} />
    </div>
    <div class="content">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </a>
  
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
    }
  
    .tile:hover {
      transform: translateY(-4px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12);
    }
  
    .imageWrapper {
      display: flex;
      width: 100%;
      aspect-ratio: var(--aspect-ratio);
      overflow: hidden;
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
    }
  
    h3 {
      margin: 0 0 0.5rem 0;
      font-size: 1.1rem;
    }
  
    p {
      margin: 0;
      font-family: NeueHaasGroteskLight, Helvetica, sans-serif;
      font-size: 0.9rem;
      opacity: 0.8;
    }
  </style>