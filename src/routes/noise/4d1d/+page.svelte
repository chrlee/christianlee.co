<script>
  import { Canvas } from '@threlte/core'
  import Scene from './Scene.svelte'
</script>

<h1>3D Visualization of 4D Noise</h1>
<p>1 output dimension (y) is derived from 3 input dimensions, x, z, sinusoidal time, and a gradient calculation at each point based on surrounding values. Each point is interpolated to all surrounding points, creating a terrain-like grid. This noise is also known as perlin noise, and often used in procedural generation algorithms.</p>
<div>
  <Canvas>
    <Scene />
  </Canvas>
</div>

<style>
  div {
    width: 100%;
    height: 100%;  
  }
</style>
