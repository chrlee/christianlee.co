<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { subHeader } from "$lib/stores/subHeader";
    onMount(() => {
        $subHeader = "Shopbop";
    });

    onDestroy(() => {
        $subHeader = '';
    });
</script>

<slot />