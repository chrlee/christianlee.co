<script>
	import { Canvas } from "@threlte/core";
	import Scene from "../components/Scene.svelte";


</script>
<h2>Selected Work</h2>

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
