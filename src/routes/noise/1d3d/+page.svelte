<script>
  import { Canvas } from '@threlte/core'
  import Scene from './Scene.svelte'
</script>

<h1>3D Visualization of 1D Noise</h1>
<p>3 output dimensions (x, y, z) are derived from a single input dimension (time). Each point is placed in a 3D space and interpolated between to the next point in time.</p>
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
