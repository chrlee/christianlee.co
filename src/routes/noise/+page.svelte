<script lang="ts">
  import { onMount } from 'svelte';
  import { subHeader } from '$lib/stores/subHeader';

  onMount(() => {
    subHeader.set('noise');
  });
</script>

<div class="noise-container">
  <h1>Noise Experiments</h1>
  <p>Route based dark theme test.</p>
  <div class="noise-demo">
    <div class="noise-box"></div>
  </div>
</div>

<style>
  .noise-container {
    padding: 2rem 0;
  }

  h1 {
    margin-bottom: 1rem;
  }

  .noise-demo {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
  }

  .noise-box {
    width: 300px;
    height: 300px;
    background-color: var(--text-color);
    border-radius: 8px;
    opacity: 0.8;
  }
</style>
