import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

interface FirebaseConfig {
	apiKey: string;
	authDomain: string;
	databaseURL: string;
	projectId: string;
	storageBucket: '';
	messagingSenderId: string;
}
const config: FirebaseConfig = {
	apiKey: 'AIzaSyA1tEoDs73TYMU9nDBELGtzjG0CgeRAXSk',
	authDomain: 'blog-e6f65.firebaseapp.com',
	databaseURL: 'https://blog-e6f65.firebaseio.com',
	projectId: 'blog-e6f65',
	storageBucket: '',
	messagingSenderId: '1095494111301'
};

const app = firebase.initializeApp(config);
const base = Rebase.createClass(firebase.database(app));

export default base;
