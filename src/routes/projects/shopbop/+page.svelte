<script lang="ts">
  import ShopbopLogo from "$lib/assets/logos/Shopbop.webp";
  import ShopbopPDP from '$lib/assets/projects/Shopbop_PDP.webp';
  import ShopbopDI from '$lib/assets/projects/Shopbop_DI.webp';
  import ShopbopMH from '$lib/assets/projects/Shopbop_MH.webp';
  import ShopbopEditorial from '$lib/assets/projects/Shopbop_Editorial.webp';
  import ShopbopPrime from '$lib/assets/projects/Shopbop_Prime.webp';
  import ShopbopFiltering from '$lib/assets/projects/Shopbop_Filtering.webp';
  import type { Project } from "$lib/types";
  import PortfolioPage from "../../../components/PortfolioPage.svelte";
  import { onMount, onDestroy } from 'svelte';
  import { subHeader } from "$lib/stores/subHeader";

  onMount(() => {
      $subHeader = "Shopbop";
  });

  onDestroy(() => {
      $subHeader = '';
  });

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
      {
          title: "Product Listing Page Mastheads",
          description: "SEO focused mastheads on product browse pages",
          imageUrl: ShopbopMH,
          linkUrl: "#", 
          tags: ["Page Coming Soon"],
      },
      {
          title: "Homepage Carousels",
          description: "Editorial product carousels on the homepage",
          imageUrl: ShopbopEditorial,
          linkUrl: "#", 
          tags: ["Page Coming Soon"],
      },
      {
        title: "Prime Shipping Integration",
        description: "Product detail and cart page Amazon Prime shipping & fulfillment",
        imageUrl: ShopbopPrime,
        linkUrl: "#",
        tags: ["Page Coming Soon"],
      },
      {
        title: "Product Status Filtering",
        description: "Filtering products by style, color, and size based on inventory and merchandising status in user carts",
        imageUrl: ShopbopFiltering,
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
          <a href="https://www.shopbop.com" target="_blank" rel="noopener noreferrer nofollow">Check out and shop on the website here.</a>
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