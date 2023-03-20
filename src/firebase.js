// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDlASsOX3hX7SZaCocqBY4F-cn7fcmi5MQ',
	authDomain: 'users-react-firebase-5be95.firebaseapp.com',
	projectId: 'users-react-firebase-5be95',
	storageBucket: 'users-react-firebase-5be95.appspot.com',
	messagingSenderId: '204647362911',
	appId: '1:204647362911:web:30351f67bf4796d3efc6ea',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
