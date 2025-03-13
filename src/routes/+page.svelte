<script>
	import { Canvas } from "@threlte/core";
	import Scene from "../components/Scene.svelte";
  import PortfolioGrid from '../components/PortfolioGrid.svelte';
  import ShopbopLogo from '$lib/assets/Shopbop_Logo_RGB_Black.jpg';
  import PnLogo from '$lib/assets/Perlin_Noise_Logo.png';
  import AmazonLogo from '$lib/assets/Amazon_Logo.png';

  const portfolioProjects = [
    {
      title: "Shopbop",
      description: "GraphQL and Svelte implementation of Hacker News",
      imageUrl: ShopbopLogo,
      linkUrl: "/shopbop",
    },
    {
      title: "Amazon",
      description: "Interactive 3D data visualization using ThreeJS and Svelte",
      imageUrl: AmazonLogo,
      linkUrl: "https://github.com/yourusername/3d-viz",
    },
    {
      title: "perlin noise",
      description: "Personal portfolio site built with SvelteKit",
      imageUrl: PnLogo,
      linkUrl: "https://github.com/yourusername/portfolio",
    },
    {
      title: "Noise Console",
      description: "Personal portfolio site built with SvelteKit",
      imageUrl: PnLogo,
      linkUrl: "https://github.com/yourusername/portfolio",
    }
  ];
</script>

<h1>christian lee</h1>

<!--<PortfolioGrid projects={portfolioProjects} />-->
<h3>Current</h3>

<ul>
  <li>
    Developing shopping experiences at <a
      href="https://shopbop.com/"
      rel="nofollow"
      target="_blank">Shopbop</a>, an Amazon subsidiary focused on luxury fashion e-commerce
  </li>
  <li>
    Collecting and selling <a
      href="https://perlin-noise.com/"
      rel="nofollow"
      target="_blank"
    >
      rare, archival menswear
    </a>
  </li>
</ul>

<h3>Previous</h3>
<ul>
  <li>
    Featured for my fashion work on <a
      href="https://www.grailed.com/drycleanonly/seller-spotlight-designer-experts"
      target="_blank"
    >Grailed</a> & <a
      href="https://wwd.com/menswear-news/mens-fashion/new-york-mens-day-fall-2023-details-1235515836/"
      target="_blank"
    >WWD</a>.
  </li>
  <li>
    Created a showcase of <a
      href="https://noise-console.vercel.app"
      target="_blank"
    >mathematical noise visualizations</a> in multiple dimensions
  </li>
  <li>
    Re-created the <a
      href="https://hkr.news"
      target="_blank"
    >HackerNews UI and API using GraphQL and Svelte</a>
  </li>
</ul>

<br />

<p>
	If you'd like to get in touch, feel free to <a href="mailto:christianjslee@gmail.com">reach out</a
	>.
</p>

<div>
  <Canvas>
    <Scene />
  </Canvas>
</div>

<style>
	a {
		color: #222;
    &:hover {
     color: #00E;
    }
	}

  li {
    margin-bottom: 0.5rem;
  }
</style>
