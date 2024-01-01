<script lang="ts">
	import type * as THREE from 'three';
	import { Group } from 'three';
	import { T, type Props, type Events, type Slots, forwardEventHandlers, useLoader } from '@threlte/core';
  import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

	type $$Props = Props<THREE.Group>;
	type $$Events = Events<THREE.Group>;
	type $$Slots = Slots<THREE.Group> & { fallback: {}; error: { error: any } };

	export const ref = new Group();
  export const buildSceneGraph = (object) => {
    const data = { nodes: {}, materials: {} };
    if (object) {
        object.traverse((obj) => {
            if (obj.name)
                data.nodes[obj.name] = obj;
            if (obj.material && !data.materials[obj.material.name])
                data.materials[obj.material.name] = obj.material;
        });
    }
    return data;
  };
	type GLTFResult = {
		nodes: {
			star1_Mat_0: THREE.Mesh;
		};
	};

  const loader = useLoader(GLTFLoader, {
    extend(loader) {
      loader.setDRACOLoader(new DRACOLoader().setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/'));
    },
  });
  const load = (url) => {
    return loader.load(url, {
      transform(result) {
        return {
          ...result,
          ...buildSceneGraph(result.scene),
        };
      },
    });
  };

	const gltf = load('/star-transformed.glb');
	const component = forwardEventHandlers();
</script>

<T is={ref} dispose={false} {...$$restProps} bind:this={$component}>
	{#await gltf}
		<slot name="fallback" />
	{:then gltf}
		<T.Group scale={0.1}>
			<T.Mesh
				geometry={gltf.nodes.star1_Mat_0.geometry}
				scale={0.07}
				rotation={[0, 0, Math.PI / 4]}
				castShadow
			>
				<T.MeshStandardMaterial color="hotpink" roughness={0} />
			</T.Mesh>
		</T.Group>
	{:catch error}
		<slot name="error" {error} />
	{/await}

	<slot {ref} />
</T>
