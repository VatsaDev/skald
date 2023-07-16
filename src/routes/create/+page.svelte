<svelte:head>
	<title>Create</title>
	<meta name="description" content="create" />
</svelte:head>

<script>
	let text = "once upon a time, there lived a princess in a castle, who";

	import { pipeline } from '@xenova/transformers';

// Allocate a pipeline for sentiment-analysis
let pipe = await pipeline('sentiment-analysis');

let out = await pipe('I love transformers!');
console.log(out)
// [{'label': 'POSITIVE', 'score': 0.999817686}]
</script>

<section>
	<h1 class="text-center text-8xl m-8 font-bold">Create</h1>
	<textarea id="editor" class="bg-slate-100 block w-4/5 h-96 mx-auto drop-shadow-2xl rounded-lg p-8" type="text" placeholder="hello">{text}</textarea>
    <div id="btn-wrapper" class="w-4/5 mx-auto">
        <button class="bg-amber-500 text-white w-48 h-10 rounded-full m-8 float-right" 
            on:click={}>
        narrate
        </button>
    </div>   
</section>
