<svelte:head>
	<title>Create</title>
	<meta name="description" content="create" />
</svelte:head>

<script>
	//import fetch from "node-fetch";
	async function query(data) {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/bigscience/bloom",
            {
                headers: { 
                    "Content-Type": "application/json",
                    Authorization: `Bearer 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` Content-Type: text/html; charset=utf-8 
                },
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        const result = await response.json();
        return result;
    }
    
    query("Can you please let us know more details about your ").then((response) => {
    console.log(JSON.stringify(response));
});
</script>

<section>
	<h1 class="text-center text-8xl m-8 font-bold">Create</h1>
	<textarea class="bg-slate-100 block w-4/5 h-96 mx-auto drop-shadow-2xl rounded-lg p-8" type="text" placeholder="hello"></textarea>
    <div id="btn-wrapper" class="w-4/5 mx-auto">
        <button class="bg-amber-500 text-white w-48 h-10 rounded-full m-8 float-right">Sing</button>
    </div>   
</section>
