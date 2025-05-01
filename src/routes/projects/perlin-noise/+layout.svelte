<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { subHeader } from "$lib/stores/subHeader";
    onMount(() => {
        $subHeader = "perlin noise";
    });

    onDestroy(() => {
        $subHeader = '';
    });
</script>

<slot />