<svelte:head>
	<title>Create</title>
	<meta name="description" content="create" />
</svelte:head>

<script>
    import { initializeApp } from "firebase/app";
    import { getFirestore } from "firebase/firestore"

    const firebaseConfig = {
        apiKey: "AIzaSyB3iNhAA8YDha8VYSXgqET3sZC00iV_q7U",
        authDomain: "skald-story.firebaseapp.com",
        projectId: "skald-story",
        storageBucket: "skald-story.appspot.com",
        messagingSenderId: "516647957540",
        appId: "1:516647957540:web:8282fbc3c03c2f5ec654b1",
        measurementId: "G-ZY5DS5R1MD"
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore();

    // narrate function

    var text = "once upon a time, there lived a princess in a castle, who"

    async function gquery(data){
        const url = 'https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText?key=AIzaSyDucoz8cp-KDI5_LWXBzbepSc6MN1Ly-Iw';

        var textBody = '{ "prompt": { "text": "'+data+'"} }'

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: textBody,
        });

        const gtext = await response.json();
        console.log(gtext.candidates[0].output);
        text = gtext.candidates[0].output
    }

	/*async function query(data) {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/tiiuae/falcon-7b-instruct",
            {
                headers: { 
                    "Content-Type": "application/json",
                    Authorization: `Bearer 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`
                },
                method: "POST",
                body: JSON.stringify({"inputs": data}),
            }
        );
        const result = await response.json();
        return result;
    }*/ // replace with bert adjective replace

    function narrate(){
        text = document.getElementById("editor").value
        gquery(text)
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
