<script lang="ts">
	import { Canvas } from "@threlte/core";
	import Scene from "../components/Scene.svelte";
</script>

<footer>
	<div class="linksContainer">
		<a href="https://linkedin.com/in/cjle" target="_blank" rel="noopener noreferrer nofollow">
			<img src="/svg/LinkedIn.svg" alt="Linkedin" />
		</a>
		<a href="https://github.com/chrlee" target="_blank" rel="noopener noreferrer nofollow">
			<img src="/svg/github-mark.svg" alt="GitHub" />
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

</style>
