<script>
	import { T, Canvas } from '@threlte/core';
	import Star from '$lib/star.svelte';
  import { OrbitControls, ContactShadows } from '@threlte/extras';
</script>

<Canvas>
	<T.PerspectiveCamera makeDefault position={[5, 0, 5]}>
    <OrbitControls
      target={[0, 0, 0]}
      enableZoom={false}
      enableDamping
      enablePan={false}
      autoRotate
      autoRotateSpeed={10}
    />
	</T.PerspectiveCamera>
	<T.AmbientLight />
	<T.DirectionalLight position={[10, 10, 10]} castShadow />
	<T.DirectionalLight position={[-10, 10, -10]} castShadow />
	<Star />
  <ContactShadows
    position={[0, -2, 0]}
    scale={40}
    blur={2}
    far={5}
    opacity={0.5}
  />
</Canvas>
