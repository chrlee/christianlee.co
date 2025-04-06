<script lang="ts">
	import { Canvas } from "@threlte/core";
	import Scene from "../components/Scene.svelte";
	import LinkedinLogo from "$lib/assets/logos/Linkedin.webp"
</script>

<footer>
	<Canvas>
		<Scene />
	</Canvas>
	<div class="linksContainer">
		<a href="https://linkedin.com/in/cjle" target="_blank" rel="noopener noreferrer nofollow">
			<img src="/svg/LinkedIn.svg" alt="Linkedin" width="24" height="24" />
		</a>
		<a href="https://github.com/chrlee" target="_blank" rel="noopener noreferrer nofollow">
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
	.linksContainer {
		position: absolute;
		display: flex;
		gap: 0.5rem;
		bottom: 0;
		margin-bottom: 1rem;
	}

</style>
