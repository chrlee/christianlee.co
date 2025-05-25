<script lang="ts">
  import AmazonLogo from "$lib/assets/logos/Amazon.webp";
  import AmazonFgbsLogo from "$lib/assets/logos/AmazonFgbs.webp";
  import AmazonAdsLogo from "$lib/assets/logos/AmazonAdsWhite.webp";
  import AmazonBpLogo from "$lib/assets/logos/AmazonBpWhite.webp";
  import type { Project } from "$lib/types";
  import PortfolioPage from "../../../components/PortfolioPage/PortfolioPage.svelte";
  import { onMount, onDestroy } from 'svelte';
  import { subHeader } from "$lib/stores/subHeader";

    onMount(() => {
        $subHeader = "Amazon";
    });

    onDestroy(() => {
        $subHeader = '';
    });

  const projects: Project[] = [
      {
          title: "FinTech Treasury",
          description: "",
          imageUrl: AmazonFgbsLogo,
      },
      {
          title: "Ads International Expansion",
          description: "",
          imageUrl: AmazonAdsLogo,
          imageBackground: "#FF6200"
      },
      {
          title: "Business Precompute & Search",
          description: "",
          imageUrl: AmazonBpLogo,
          imageBackground: "#0578FF",
      },
  ];

</script>

<PortfolioPage
  head={{ title: "Amazon", description: "Overview of my work at Amazon"}}
  projects={projects}
  projectsHeader={"Teams"}
>
  <svelte:fragment slot="text">
      <p>
          Within Amazon I've worked across teams that build out search, ads localization, and financial data processing.
      </p>
  </svelte:fragment>
  <img
      slot="image"
      src={AmazonLogo}
      alt="Amazon"
      class="intro-image"
      width="400"
      height="400"
      loading="eager"
  />
</PortfolioPage>
