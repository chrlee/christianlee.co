<script lang="ts">
import PortfolioGrid from '../../components/PortfolioGrid.svelte';
import ShopbopLogo from '$lib/assets/logos/Shopbop.webp';
import ShopbopPDP from '$lib/assets/projects/Shopbop_PDP.webp';
import ShopbopDI from '$lib/assets/projects/Shopbop_DI.webp';

const portfolioProjects = [
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
  
<svelte:head>
<title>shopbop</title>
<meta name="description" content="christian lee at shopbop">
</svelte:head>

<section class="intro-section">
    <div class="container">
    <div class="intro-content">
        <div class="intro-text">
            <p>
                I joined Shopbop as a frontend engineer in 2022 and have since been able to lead impactful projects as a member of the core shopping experience team.
                My work has spanned across the Shopbop.com's Homepage, Product Listing Page,
                Product Detail Page, Designer Index, Cart, and Order pages.
            </p>
            <p>
                <a href="shopbop.com">Check out and shop on the website here.</a>
            </p>
        </div>
        <div class="intro-image-container">
            <img 
                src={ShopbopLogo} 
                alt="Shopbop" 
                class="intro-image"
                width="400"
                height="400"
                loading="eager"
            />
        </div>
    </div>
</section>

<section id="portfolio">
    <div class="container">
        <h2 class="section-title">Selected Works</h2>
        <PortfolioGrid projects={portfolioProjects} />
    </div>
</section>
  
  <style>    
    .intro-section {
      display: flex;
      align-items: center;
    }
    
    .intro-content {
      display: flex;
      flex-direction: column-reverse;
      gap: 3rem;
      align-items: center;
    }
    
    .intro-image-container {
      flex: 1;
      position: relative;
      padding: 1rem 0;
    }
    
    .intro-image {
      width: 100%;
      height: auto;
    }
    
    .intro-text {
      flex: 1;
    }
    
    .intro-text p {
      font-size: 1rem;
      line-height: 1.6;
    }
    
    .section-title {
      text-align: center;
      font-size: 2rem;
    }
    
    @media (min-width: 640px) {
      .intro-content {
        flex-direction: row;
        gap: 4rem;
        align-items: center;
      }
    }
    
    @media (min-width: 960px) {
      .intro-content {
        gap: 6rem;
      }
      
      .section-title {
        font-size: 2.5rem;
      }
    }
    
    :global(a:focus-visible) {
      outline: 2px solid #00E;
      outline-offset: 4px;
      border-radius: 2px;
    }
    
    @supports not selector(:focus-visible) {
      :global(a:focus) {
        outline: 2px solid #00E;
        outline-offset: 4px;
        border-radius: 2px;
      }
    }
</style>