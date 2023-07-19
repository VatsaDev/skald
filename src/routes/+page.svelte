<script>
	var pathArray = ["/banners/dragonFight.jpg","/banners/dwarfMine.jpg","/banners/fantasyCastle.jpg","/banners/frozenWaste.jpg","/banners/jungleTemple.jpg","/banners/magicSwamp.jpg","/banners/rusticVillage.jpg"]
	var path = pathArray[Math.floor(Math.random() * pathArray.length)];
	var quote = ""
	if (path == pathArray[0]){
		quote = "Have a viking army fight a dragon"
	}if (path == pathArray[1]){
		quote = "Visit the Dwarven mines to the north"
	}if (path == pathArray[2]){
		quote = "Visit the home of the Royals"
	}if (path == pathArray[3]){
		quote = "Trudge Through frozen wastelands"
	}if (path == pathArray[4]){
		quote = "Loot the jungle temple"
	}if (path == pathArray[5]){
		quote = "Tread the dangers of the swamp"
	}if (path == pathArray[6]){
		quote = "Get some Bread and Ale at the Village tavern"
	}
</script>

<svelte:head>
	<title>Skald</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<header class="w-full p-8 bg-cover bg-center text-white" style="background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url('{path}')">
		<img src="/logo-white.png" alt="logo-black" class="mx-auto mt-6"><br>
		<h1 class="font-sans font-bold text-8xl text-center my-2">
			Skald
		</h1>
		<h2 class="text-center text-4xl my-8">
				{quote}
		</h2>
		<h2 class="text-center text-lg my-8">
			Unique, Evocative Stories with the power of <span class="text-amber-500 font-bold">Generative AI</span>, at your fingertips
		</h2>
	</header>

	<div class="grid grid-cols-2">
		<div>
			<h2 class="text-center text-xl m-8">Make your own stories, as <span class="text-amber-500 font-bold">amazing</span> as they can be, with <span class="text-amber-500 font-bold">Powerful AI Models</span> </h2>
			<p class="text-center">Use the power of google's most advanced AI model, Palm 2</p>
		</div>
		<img src="/banners/fantasyCastle.jpg" alt="palm" class="w-3/4 mx-auto drop-shadow-2xl my-8">
		<img src="/banners/fantasyCastle.jpg" alt="palm" class="w-3/4 mx-auto drop-shadow-2xl my-8">
		<h2 class="text-center text-xl my-4">Make your stories, as <span class="text-amber-500 font-bold">descriptive</span> as they can be, with <span class="text-amber-500 font-bold">Word Suggestions</span> </h2>
  	<h2 class="text-center text-xl my-4">Don't like it? get a <span class="text-amber-500 font-bold">Full Rewrite</span></h2>
		<img src="/banners/fantasyCastle.jpg" alt="palm" class="w-3/4 mx-auto drop-shadow-2xl my-8">
		<img src="/banners/fantasyCastle.jpg" alt="palm" class="w-3/4 mx-auto drop-shadow-2xl my-8">
		<h2 class="text-center text-xl my-4">Tailor your stories, by <span class="text-amber-500 font-bold">Age group</span> and <span class="text-amber-500 font-bold">Author Style</span> </h2>
	</div>	
	<footer class="my-8 mx-2 invisible lg:visible">
		<p class="font-mono">Copyright Vatsa 2023-present, all rights reserved</p>
	</footer>
</section>
