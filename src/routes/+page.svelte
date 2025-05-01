<script>
  import PortfolioGrid from '../components/PortfolioGrid.svelte';
  import ShopbopLogo from '$lib/assets/logos/Shopbop.webp';
  import PnLogo from '$lib/assets/logos/Perlin_Noise.webp';
  import AmazonLogo from '$lib/assets/logos/Amazon.webp';
  import NoiseConsoleLogo from '$lib/assets/logos/Noise_Console.webp';

  const portfolioProjects = [
    {
      title: "Shopbop",
      description: "An Amazon subsidiary focused on luxury fashion e-commerce",
      imageUrl: ShopbopLogo,
      linkUrl: "/projects/shopbop",
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
      linkUrl: "/projects/perlin-noise",
    },
    {
      title: "Noise Console",
      description: "Multidimensional visualizations of mathematical noise",
      imageUrl: NoiseConsoleLogo,
      linkUrl: "https://noise.christianlee.co/",
    },
  ];
</script>

<PortfolioGrid projects={portfolioProjects} />

<p>
	If you'd like to get in touch, feel free to <a href="mailto:christianjslee@gmail.com">reach out</a
	>.
</p>

<style>
  p {
    margin-bottom: 0;
  }
</style>