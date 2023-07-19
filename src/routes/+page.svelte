<script>
	var pathArray = ["https://raw.githubusercontent.com/VatsaDev/skald/main/static/banners/dragonFight.jpg",
									"https://raw.githubusercontent.com/VatsaDev/skald/main/static/banners/dwarfMine.jpg",
									"https://raw.githubusercontent.com/VatsaDev/skald/main/static/banners/fantasyCastle.jpg",
									"https://raw.githubusercontent.com/VatsaDev/skald/main/static/banners/frozenWaste.jpg",
									"https://raw.githubusercontent.com/VatsaDev/skald/main/static/banners/jungleTemple.jpg",
									"https://raw.githubusercontent.com/VatsaDev/skald/main/static/banners/magicSwamp.jpg",
									"https://raw.githubusercontent.com/VatsaDev/skald/main/static/banners/rusticVillage.jpg",
									"https://raw.githubusercontent.com/VatsaDev/skald/main/static/banners/yaeger.jpg",
									"https://raw.githubusercontent.com/VatsaDev/skald/main/static/banners/planeFlight.jpg",
									"https://raw.githubusercontent.com/VatsaDev/skald/main/static/banners/spaceStation.jpg",
									"https://raw.githubusercontent.com/VatsaDev/skald/main/static/banners/underwaterPalace.jpg",
									"https://raw.githubusercontent.com/VatsaDev/skald/main/static/banners/underworld.jpg"]
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
	}if (path == pathArray[7]){
		quote = "Climb Cliffs with a Yaeger"
	}if (path == pathArray[8]){
		quote = "Fly a plane through the clouds"
	}if (path == pathArray[9]){
		quote = "Mine Unobtanium on an Exoplanet far far away"
	}if (path == pathArray[10]){
		quote = "Travel deep to the kingdom of the mermen"
	}if (path == pathArray[11]){
		quote = "Survive the fires of the underworld"
	}
</script>

<style>
.typewriter {
  color: #fff;
  font-family: monospace;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid transparent; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .1em; /* Adjust as needed */
  animation: 
    typing 2.5s steps(20, end),
    blink-caret .5s step-end 8;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  25% { border-color: transparent }
}
</style>

<svelte:head>
	<title>Skald</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<header class="w-full p-8 bg-cover bg-center text-white" style="background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url('{path}')">
		<img src="./logo-white.png" alt="logo-black" class="mx-auto mt-6"><br>
		<h1 class="font-sans font-bold text-8xl text-center my-2 text-shadow-2xl">
			Skald
		</h1>
		<h2 class="text-center text-4xl my-8 typewriter">
				{quote}
		</h2>
		<h2 class="text-center text-lg my-8">
			Unique, Evocative Stories with the power of <span class="text-amber-500 font-bold">Generative AI</span>, at your fingertips
		</h2>
	</header>

	<div class="grid grid-cols-1 lg:grid-cols-2">
		<div class="p-8 m-8">
			<h2 class="text-center text-xl m-8">Make your own stories, as <span class="text-amber-500 font-bold">amazing</span> as they can be, with <span class="text-amber-500 font-bold">Powerful AI Models</span> </h2>
			<p class="text-center">Use the power of google's most advanced AI model, Palm 2</p>
		</div>
		<img src="https://raw.githubusercontent.com/VatsaDev/skald/main/static/banners/dragonFight.jpg" alt="palm" class="w-3/4 mx-auto drop-shadow-2xl my-8">
		<img src="https://raw.githubusercontent.com/VatsaDev/skald/main/static/banners/fantasyCastle.jpg" alt="palm" class="w-3/4 mx-auto drop-shadow-2xl my-8">
		<div class="p-8 m-8">
			<h2 class="text-center text-xl my-4">Make your stories, as <span class="text-amber-500 font-bold">descriptive</span> as they can be, with <span class="text-amber-500 font-bold">Word Suggestions</span> </h2>
  	</div>
		<div class="p-8 m-8">
			<h2 class="text-center text-xl my-4">Don't like it? get a <span class="text-amber-500 font-bold">Full Rewrite</span></h2>
		</div>
		<img src="https://raw.githubusercontent.com/VatsaDev/skald/main/static/banners/fantasyCastle.jpg" alt="palm" class="w-3/4 mx-auto drop-shadow-2xl my-8">
		<img src="https://raw.githubusercontent.com/VatsaDev/skald/main/static/banners/fantasyCastle.jpg" alt="palm" class="w-3/4 mx-auto drop-shadow-2xl my-8">
		<div class="p-8 m-8">
			<h2 class="text-center text-xl my-4">Tailor your stories, by <span class="text-amber-500 font-bold">Age group</span> and <span class="text-amber-500 font-bold">Author Style</span> </h2>
		</div>
	</div>	
	<footer class="my-8 mx-2 invisible lg:visible">
		<p class="font-mono">Copyright Vatsa 2023-present, all rights reserved</p>
	</footer>
</section>
