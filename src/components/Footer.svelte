<script lang="ts">
	import { Canvas } from "@threlte/core";
	import Scene from "../components/Scene.svelte";
	import { darkTheme } from "$lib/stores/theme";
</script>

<footer>
	<div class="linksContainer">
		<a href="https://linkedin.com/in/cjle" target="_blank" rel="noopener noreferrer nofollow">
			<img src="/svg/LinkedIn.svg" alt="Linkedin" class:dark-linkedin={$darkTheme} />
		</a>
		<a href="https://github.com/chrlee" target="_blank" rel="noopener noreferrer nofollow">
			<img src="/svg/github-mark.svg" alt="GitHub" class:dark-github={$darkTheme} />
		</a>
	</div>
	<div class="canvasContainer">
		<Canvas>
			<Scene />
		</Canvas>
	</div>
</footer>

<style>
	footer {
		display: flex;
		width: 100%;
		justify-content: space-between;
		padding: 1rem 0;
	}

	a, img {
		width: 1.5rem;
		height: 1.5rem;
	}
	.linksContainer {
		display: flex;
		gap: 0.8rem;
		align-items: center;
	}
	.canvasContainer {
		width: 2rem;
		height: 2rem;
	}

	:global(.dark-github) {
		filter: brightness(0) invert(0.9);
	}

	:global(.dark-linkedin) {
		filter: invert(1) grayscale(1) brightness(1.6);
	}

</style>
