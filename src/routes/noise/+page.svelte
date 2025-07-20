<script lang="ts">
  import { subHeader } from '$lib/stores/subHeader';

  $subHeader = 'Noise Console';
</script>

<div>

  <p>Mathematical noise visualizations in order of increasing input & output dimension</p>

  <h2>2D Visualizations</h2>
  <h3>1-Dimensional Noise</h3>
  <ul>
    <li><a href="/noise/1d1d">1D Output</a></li>
    <li><a href="/noise/1d2d">2D Output</a></li>
  </ul>

  <h3>2-Dimensional Noise</h3>
  <ul>
    <li><a href="/noise/flow">Flow Field</a></li>
  </ul>

  <h2>3D Visualizations</h2>
  <h3>1-Dimensional Noise</h3>
  <ul>
    <li><a href="/noise/1d3d">3D Output</a></li>
  </ul>
  <h3>3-Dimensional Noise</h3>
  <ul>
    <li><a href="/noise/3d1d">1D Output</a></li>
  </ul>
  <h3>4-Dimensional Noise</h3>
  <ul>
    <li><a href="/noise/4d1d">1D Output</a></li>
  </ul>
</div>

<style>
  div {
    margin: 1rem;
  }
  
  h1 {
    margin: 1rem;
  }

  h2 {
    margin: 2rem 1rem;
  }
</style>
