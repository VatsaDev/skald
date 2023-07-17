<svelte:head>
	<title>Create</title>
	<meta name="description" content="create" />
</svelte:head>

<script>
	let text = "once upon a time, there lived a princess in a castle, who";
	async function query(data) {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/tiiuae/falcon-7b-instruct",
            {
                headers: { 
                    "Content-Type": "application/json",
                    Authorization: `Bearer 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`
                },
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        const result = await response.json();
        return result;
    }
    function narrate(){
        text = document.getElementById("editor").value
        query(text).then((response) => {
            console.log(response[0])
            text = response[0].generated_text;
        })
    }
</script>

<section>
	<h1 class="text-center text-8xl m-8 font-bold">Create</h1>
	<textarea id="editor" class="bg-slate-100 block w-4/5 h-96 mx-auto drop-shadow-2xl rounded-lg p-8" type="text" placeholder="hello">{text}</textarea>
    <div id="btn-wrapper" class="w-4/5 mx-auto">
        <button class="bg-amber-500 text-white w-48 h-10 rounded-full m-8 float-right" 
            on:click={narrate}>
        narrate
        </button>
    </div>   
</section>
