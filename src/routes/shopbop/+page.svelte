<!-- src/routes/+page.svelte -->
<script lang="ts">
import PortfolioGrid from '../../components/PortfolioGrid.svelte';
import ShopbopLogo from '$lib/assets/Shopbop.webp';

const portfolioProjects = [
    {
    title: "Project One",
    description: "A responsive web application built with Svelte and TypeScript",
    imageUrl: "/images/project1.jpg",
    linkUrl: "/projects/project-one",
    tags: ["Svelte", "TypeScript", "Responsive"]
    },
    {
    title: "Project Two",
    description: "Interactive data visualization with Three.js and WebGL",
    imageUrl: "/images/project2.jpg",
    linkUrl: "/projects/project-two", 
    tags: ["Three.js", "Data Viz", "WebGL"]
    },
    {
    title: "External Project",
    description: "Collaborative open-source project hosted on GitHub",
    imageUrl: "/images/project3.jpg",
    linkUrl: "https://github.com/yourusername/project-three",
    tags: ["Open-source", "Collaboration"]
    },
    {
    title: "Design Project",
    description: "UI/UX design system for a finance application",
    imageUrl: "/images/project4.jpg",
    linkUrl: "/projects/design-project",
    tags: ["UI/UX", "Design System"]
    }
];
</script>
  
<svelte:head>
<title>shopbop</title>
<meta name="description" content="christian lee's work at shopbop">
</svelte:head>

<h1>christian lee</h1>
<!-- Hero/Intro Section -->
<section class="intro-section">
    <div class="container">
    <div class="intro-content">
        <div class="intro-text">
            <h2>Shopbop</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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

<!-- Portfolio Section -->
<section id="portfolio" class="portfolio-section">
    <div class="container">
        <h2 class="section-title">Selected Works</h2>
        <PortfolioGrid projects={portfolioProjects} />
    </div>
</section>
  
  <style>    
    /* Intro Section Styles */
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
      flex: 0 1 400px;
      position: relative;
    }
    
    .intro-image {
      width: 100%;
      height: auto;
      border-radius: 4px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .intro-text {
      flex: 1;
      max-width: 600px;
    }
    
    .intro-text h2 {
      font-size: 1.5rem;
      margin: 0 0 1.5rem 0;
      opacity: 0.8;
      font-weight: normal;
      font-family: NebulaSansLight, Helvetica, sans-serif;
    }
    
    .intro-text p {
      margin-bottom: 1.5rem;
      font-size: 1.1rem;
      line-height: 1.6;
    }
    
    .portfolio-section {
      padding: 5rem 0;
      background-color: #f9f9f9;
    }
    
    .section-title {
      text-align: center;
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    
    @media (min-width: 768px) {
      .intro-content {
        flex-direction: row;
        gap: 4rem;
        align-items: center;
      }
      
      .intro-text h2 {
        font-size: 1.8rem;
      }
    }
    
    @media (min-width: 1024px) {
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