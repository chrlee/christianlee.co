<script lang="ts">
  import { goto } from "$app/navigation";
  export let currentPath: string;
  const modules = import.meta.glob('/src/routes/*/+page.svelte', );
  const menuItems = Object.keys(modules).map((item) =>
		item.match(/\/src\/routes\/(.*?)\/\+page\.svelte/)[1]
	);
</script>

<header>
	<h1 class="header">
		<span class="firstName">Christian</span><span class="lastName">Lee</span><span class="tld">.co/</span>
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
  }
  h1 {
    white-space-collapse: discard;
  }
  nav {
    display: grid;
    grid-template-areas: "select";
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

    font-size: xx-large;
    font-weight: 200;
    line-height: 1.4;

    z-index: 1;
  }
  select::-ms-expand {
    display: none;
  }
  select,
  nav::after {
    grid-area: select;
  }
  nav::after {
    content: url("/svg/caret-down-filled.svg");
    color: darkgray;
    justify-self: end;
  }
  option {
    font-size: xx-large;
    font-weight: 200;
    color: darkgray;
  }
  .header {
		font-size: xx-large;
	}
	.firstName {
		font-weight: 400;
	}
	.lastName {
		font-weight: 200;
	}
	.tld {
		font-weight: 200;
		color: darkgray;
	}
</style>
