<script lang="ts">
  import PnLogo from "$lib/assets/logos/Perlin_Noise.webp";
  import PnGrailed from "$lib/assets/PnGrailed.webp";
  import type { Project } from "$lib/types";
  import PortfolioPage from "../../../components/PortfolioPage.svelte";

  const projects: Project[] = [
      {
          title: "Grailed Seller Spotlight",
          description: "Article feature for the perlin noise store",
          imageUrl: PnGrailed,
          linkUrl: "https://www.grailed.com/drycleanonly/seller-spotlight-designer-experts",
      },
      {
          title: "Archive Page",
          description: "Original GatsbyJS implementation of the page",
          imageUrl: PnLogo,
          linkUrl: "https://6357377503d4f80008e69666--perlin-noise.netlify.app/", 
      },
  ];

</script>

<PortfolioPage
  head={{ title: "perlin noise", description: "perlin noise men's archive fashion project overview"}}
  projects={projects}
>
  <svelte:fragment slot="text">
      <p>
          perlin noise is an e-commerce site for rare, archival menswear. Started in 2021, perlin noise has scaled to six figures in revenue with A-list celebrity clientele.
          <b>The website is currently under a migration and redesign from GatsbyJS to NextJS and is currently not 100% live.</b>
      </p>
      <p>
          <a href="https://perlin-noise.com" target="_blank" rel="noopener noreferrer nofollow">Check out and shop on the website here. (In Progress)</a>
      </p>
  </svelte:fragment>
  <img 
      slot="image"
      src={PnLogo} 
      alt="Shopbop" 
      class="intro-image"
      width="400"
      height="400"
      loading="eager"
  />
</PortfolioPage>