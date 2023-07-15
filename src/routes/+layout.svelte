<script>
  import Navbar from './navbar.svelte';
	import './styles.css';
</script>

<div class="app">
	<Navbar />

	<main class="">
	  <slot />
	</main>

	<footer class="absolute inset-x-0 bottom-0 m-2 invisible lg:visible">
		<p class="font-mono">Copyright Vatsa 2023-present, all rights reserved</p>
	</footer>
</div>