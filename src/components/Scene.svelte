<script>
	import { T } from '@threlte/core';
	import Star from './star.svelte';
  import { OrbitControls } from '@threlte/extras';
</script>

<T.PerspectiveCamera makeDefault position={[2.5, 0, 2.5]}>
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
