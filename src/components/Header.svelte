<script lang="ts">
	import { goto } from '$app/navigation';
	export let currentPath: string;
	const modules = import.meta.glob('/src/routes/*/+page.svelte');
	const menuItems = Object.keys(modules).map(
		(item) => item.match(/\/src\/routes\/(.*?)\/\+page\.svelte/)[1]
	);
</script>

<header>
	<h1 class="header">
		<span class="name">ChristianLee.co/</span>
	</h1>
	<nav>
		<select class="path" on:input={(event) => goto(`${event.target.value}`)}>
			<option value="#" disabled selected hidden>{currentPath}</option>
			<option value="/">home</option>
			{#each menuItems as item}
				<option value={item}>{item}</option>
			{/each}
		</select>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: center;
	}
	h1 {
		white-space-collapse: discard;
		font-size: x-large;
		@media (min-width: 600px) {
			font-size: xx-large;
		}
	}
	nav {
		display: grid;
		grid-template-areas: 'select';
		position: relative;
		align-items: baseline;
	}
	select {
		appearance: none;
		background-color: transparent;
		border: none;
		padding: 0 1em 0 0;
		margin: 0;
		outline: none;
		color: darkgray;
		cursor: pointer;

		font-size: x-large;
		font-weight: 200;
		line-height: 1.4;

		z-index: 1;

		@media (min-width: 600px) {
			font-size: xx-large;
		}
	}
	select::-ms-expand {
		display: none;
	}
	select,
	nav::after {
		grid-area: select;
	}
	nav::after {
		content: url('/svg/caret-down-filled.svg');
		color: darkgray;
		justify-self: end;
	}
	option {
		font-size: x-large;
		font-weight: 200;
		color: darkgray;
		@media (min-width: 600px) {
			font-size: xx-large;
		}
	}
	.name {
		color: darkgray;
		font-weight: 200;
	}
</style>
