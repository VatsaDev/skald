<svelte:head>
	<title>Create</title>
	<meta name="description" content="create" />
</svelte:head>

<script>
	//import fetch from "node-fetch";
	async function query(data) {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/gpt2",
            {
                headers: { Authorization: `Bearer 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` },
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
	<h1 class="text-center text-8xl m-8">Create</h1>
	<input class="m-8 border p-2" type="text" placeholder="hello">
</section>
