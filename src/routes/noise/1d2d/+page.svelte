<script lang="ts">
	import { onMount } from "svelte";
  import { animate2dLinear, mountCanvas } from "$lib/noise/vis/2d";

  let linearCanvas: HTMLCanvasElement;
  onMount(() => {
    if(linearCanvas && linearCanvas.getContext("2d")){
      mountCanvas(linearCanvas, true);
      animate2dLinear(linearCanvas.getContext("2d"));
    }
  });

  const onResize = () => {
    if(linearCanvas) mountCanvas(linearCanvas);
  };
</script>

<svelte:window on:resize={onResize} />

<h1>2D Visualization of 2D Noise</h1>
<p>2 output dimensions (x, y) are derived from a single input dimension (time).</p>

<canvas bind:this={linearCanvas} />


<style>
  canvas {
    width: 100%;
    min-height: 400px;
    padding: 2rem 0;
    display: block;
    image-rendering: -moz-crisp-edges;
    image-rendering: -webkit-crisp-edges;
    image-rendering: pixelated;
    image-rendering: crisp-edges;
  }
</style>
