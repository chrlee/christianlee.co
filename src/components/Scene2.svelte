<script lang="ts">
  import { T, useThrelte } from '@threlte/core'
  import { interactivity, Text, useCursor, ContactShadows } from '@threlte/extras'
	import type { ComponentProps } from 'svelte';
  import { DEG2RAD } from 'three/src/math/MathUtils.js'
  const { hovering, onPointerEnter, onPointerLeave } = useCursor()
  const { size } = useThrelte()
  let zoom = $size.width / 7
  $: zoom = $size.width / 7
  interactivity()

  const headerProps: ComponentProps<Text> = {
    fontSize: 0.5,
    anchorY: "100%",
    anchorX: "50%",
    font: "fonts/NeueHaasGroteskMedium.ttf",
    color: "#222",
  }
  const bodyProps: ComponentProps<Text> = {
    fontSize: 0.4,
    anchorY: "100%",
    anchorX: "50%",
    font: "fonts/NeueHaasGroteskRegular.ttf",
    color: "#222",
  }
</script>
<T.OrthographicCamera
  {zoom}
  position={[5, 5, 5]}
  on:create={({ ref }) => {
    ref.lookAt(0, 0, 0)
  }}
  makeDefault
/>
<T.DirectionalLight
  position.y={10}
  position.x={5}
/>
<T.AmbientLight intensity={0.2} />
<Text
  {...headerProps}
  text="SELECTED WORKS"
  rotation.y={90 * DEG2RAD}
  position.y={3}
  position.x={-2}
/>
<Text
  {...headerProps}
  text="CURRENT"
  rotation.y={0}
  position.y={5}
  position.x={2}
/>
<Text
  {...bodyProps}
  text="Developing shopping experiences"
  position.y={4.5}
  position.x={2.5}
/>
<ContactShadows />
