import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyCC1Ls99lrBCiSTRJZXC5hj2jUlgI4Q63g',
  authDomain: 'moviereact-2a1c8.firebaseapp.com',
  projectId: 'moviereact-2a1c8',
  storageBucket: 'moviereact-2a1c8.appspot.com',
  messagingSenderId: '752448714692',
  appId: '1:752448714692:web:077f44061e7ad4244a1691',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
