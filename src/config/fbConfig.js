import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyCuQBjSktbM2Q8j-gv5WNjESs9BBIoFFnE',
	authDomain: 'marioplan-ba8d3.firebaseapp.com',
	databaseURL: 'https://marioplan-ba8d3.firebaseio.com',
	projectId: 'marioplan-ba8d3',
	storageBucket: 'marioplan-ba8d3.appspot.com',
	messagingSenderId: '152476952950',
	appId: '1:152476952950:web:10e45d864d6ec32da03257',
	measurementId: 'G-H8KS13WZGL'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
