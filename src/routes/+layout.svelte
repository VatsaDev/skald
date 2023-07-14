<script>
  import Navbar from './navbar.svelte';
	import './styles.css';
</script>

<div class="app">
	<Navbar />

	<main>
	  <slot />
	</main>

</div>