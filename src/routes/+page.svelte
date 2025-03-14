<script>
	import { Canvas } from "@threlte/core";
	import Scene from "../components/Scene.svelte";
  import PortfolioGrid from '../components/PortfolioGrid.svelte';
  import ShopbopLogo from '$lib/assets/Shopbop_Logo_RGB_Black.jpg';
  import PnLogo from '$lib/assets/Perlin_Noise_Logo.png';
  import AmazonLogo from '$lib/assets/Amazon_Logo.png';
  import NoiseConsoleLogo from '$lib/assets/Noise_Console_Logo.png';

  const portfolioProjects = [
    {
      title: "Shopbop",
      description: "An Amazon subsidiary focused on luxury fashion e-commerce",
      imageUrl: ShopbopLogo,
      linkUrl: "https://www.shopbop.com/",
    },
    {
      title: "Amazon",
      description: "Search, Ads, and FinTech",
      imageUrl: AmazonLogo,
      linkUrl: "https://www.amazon.com/",
    },
    {
      title: "perlin noise",
      description: "Rare, archival menswear",
      imageUrl: PnLogo,
      linkUrl: "https://perlin-noise.com/",
    },
    {
      title: "Noise Console",
      description: "Multidimensional visualizations of mathematical noise",
      imageUrl: NoiseConsoleLogo,
      linkUrl: "https://noise-console.vercel.app/",
    }
  ];
</script>

<h1>christian lee</h1>

<PortfolioGrid projects={portfolioProjects} />

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
