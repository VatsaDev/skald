<svelte:head>
	<title>Skald sign in</title>
	<meta name="description" content="sign-in" />
</svelte:head>

<script>
	import { initializeApp } from "firebase/app";
  import { getFirestore } from "firebase/firestore"
	import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

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
		const provider = new GoogleAuthProvider();
    const db = getFirestore();

		const auth = getAuth();

		function signin(){
			signInWithPopup(auth, provider)
			.then((result) => {
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				const user = result.user;
			}).catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				const email = error.customData.email;
				const credential = GoogleAuthProvider.credentialFromError(error);
			});
		}
</script>

<section>
	<div class="w-4/5 h-96 mx-auto my-8 p-6 shadow-xl bg-slate-100 rounded-lg">
    <h1 class="text-center text-2xl font-bold">Sign in</h1>
		<div class="container mx-auto flex flex-wrap items-center justify-between">
			<button type="button" class="text-black w-1/4 border border-amber-500 hover:bg-amber-500 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center justify-between my-8 mx-auto" on:click={signin}> <svg class="mr-2 -ml-1 w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="705.6" height="720" viewBox="0 0 186.69 190.5" xmlns:v="https://vecta.io/nano"><g transform="translate(1184.583 765.171)"><path clip-path="none" mask="none" d="M-1089.333-687.239v36.888h51.262c-2.251 11.863-9.006 21.908-19.137 28.662l30.913 23.986c18.011-16.625 28.402-41.044 28.402-70.052 0-6.754-.606-13.249-1.732-19.483z" fill="#4285f4"/><path clip-path="none" mask="none" d="M-1142.714-651.791l-6.972 5.337-24.679 19.223h0c15.673 31.086 47.796 52.561 85.03 52.561 25.717 0 47.278-8.486 63.038-23.033l-30.913-23.986c-8.486 5.715-19.31 9.179-32.125 9.179-24.765 0-45.806-16.712-53.34-39.226z" fill="#34a853"/><path clip-path="none" mask="none" d="M-1174.365-712.61c-6.494 12.815-10.217 27.276-10.217 42.689s3.723 29.874 10.217 42.689c0 .086 31.693-24.592 31.693-24.592-1.905-5.715-3.031-11.776-3.031-18.098s1.126-12.383 3.031-18.098z" fill="#fbbc05"/><path d="M-1089.333-727.244c14.028 0 26.497 4.849 36.455 14.201l27.276-27.276c-16.539-15.413-38.013-24.852-63.731-24.852-37.234 0-69.359 21.388-85.032 52.561l31.692 24.592c7.533-22.514 28.575-39.226 53.34-39.226z" fill="#ea4335" clip-path="none" mask="none"/></g></svg>Sign in with Google<div></div></button>
		</div>
	</div>	
</section>
