<script lang="ts">
	import { Canvas } from "@threlte/core";
	import Scene from "../components/Scene.svelte";
</script>

<footer>
	<Canvas>
		<Scene />
	</Canvas>
	<div class="githubContainer">
		<a href="https://github.com/chrlee">
			<img src="/svg/github-mark.svg" alt="GitHub" width="24" height="24" />
		</a>
	</div>
</footer>

<style>
	footer {
		position: relative;
		display: flex;
		width: 100%;
	}
	.githubContainer {
		position: absolute;
		bottom: 0;
		margin-bottom: 1rem;
	}

</style>
