<script>
	import { T, Canvas } from '@threlte/core';
	import Star from '$lib/star.svelte';
  import { OrbitControls } from '@threlte/extras';
</script>

<Canvas>
	<T.PerspectiveCamera makeDefault position={[3, 0, 3]}>
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
</Canvas>
