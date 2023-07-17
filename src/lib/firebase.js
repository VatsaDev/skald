// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBbDEt_a9SSL1i-sTqJRaEWsvhdDUl_mi4',
	authDomain: 'skald-68109.firebaseapp.com',
	projectId: 'skald-68109',
	storageBucket: 'skald-68109.appspot.com',
	messagingSenderId: '219795732650',
	appId: '1:219795732650:web:b6e479d9e3e6744b8db8d3',
	measurementId: 'G-0D3589ECC3'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
