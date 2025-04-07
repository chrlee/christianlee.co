<script lang="ts">
  import ShopbopLogo from "$lib/assets/logos/Shopbop.webp";
  import ShopbopPDP from '$lib/assets/projects/Shopbop_PDP.webp';
  import ShopbopDI from '$lib/assets/projects/Shopbop_DI.webp';
  import type { Project } from "$lib/types";
  import PortfolioPage from "../../components/PortfolioPage.svelte";

  const projects: Project[] = [
      {
          title: "Product Detail Page Redesign",
          description: "Frontend lead for a full redesign of the product detail page",
          imageUrl: ShopbopPDP,
          linkUrl: "#",
          tags: ["Page Coming Soon"],
      },
      {
          title: "Designer Index Page",
          description: "Migrated the designers page to a modern React tech stack",
          imageUrl: ShopbopDI,
          linkUrl: "#", 
          tags: ["Page Coming Soon"],
      },
  ];

</script>

<PortfolioPage
  head={{ title: "shopbop", description: "christian lee at shopbop"}}
  projects={projects}
>
  <svelte:fragment slot="text">
      <p>
          I joined Shopbop as a frontend engineer in 2022 and have since been able to lead impactful projects as a member of the core shopping experience team.
          My work has spanned across the Shopbop.com's Homepage, Product Listing Page,
          Product Detail Page, Designer Index, Cart, and Orders page.
      </p>
      <p>
          <a href="shopbop.com" target="_blank" rel="noopener noreferrer">Check out and shop on the website here.</a>
      </p>
  </svelte:fragment>
  <img 
      slot="image"
      src={ShopbopLogo} 
      alt="Shopbop" 
      class="intro-image"
      width="400"
      height="400"
      loading="eager"
  />
</PortfolioPage>