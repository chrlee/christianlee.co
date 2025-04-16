<script lang="ts">
  import { Group } from 'three'
  import { T } from '@threlte/core'
  import { useGltf } from '@threlte/extras'
  import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
	import { darkTheme } from '$lib/stores/theme';

  let { ref = new Group() } = $props();

  type GLTFResult = {
    nodes: {
      star1_Mat_0: {
        geometry: any
      }
    },
    materials: Record<string, any>
  }

  // Configure DRACOLoader
  const dracoLoader = new DRACOLoader()
  dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/')

  const gltf = useGltf<GLTFResult>('/star-transformed.glb', {
    dracoLoader: dracoLoader as any
  })
  
  let component: any
</script>

<T is={ref} dispose={false} bind:this={component}>
  {#await gltf}
    <slot name="fallback" />
  {:then gltf}
    {#key $darkTheme}
    <T.Group scale={0.1}>
      <T.Mesh geometry={gltf.nodes.star1_Mat_0.geometry} scale={0.07} rotation={[0, 0, Math.PI / 4]} castShadow>
        <T.MeshStandardMaterial color={$darkTheme ? "white" : "black"} roughness={0}/>
      </T.Mesh>
    </T.Group>
    {/key}
    
  {:catch error}
    <slot name="error" {error} />
  {/await}

  <slot {ref} />
</T>
