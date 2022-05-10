import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDmjD-PtKyPV2HIo_IHuKMEZUkb-cmv338',
	authDomain: 'fir-auth-d52ec.firebaseapp.com',
	projectId: 'fir-auth-d52ec',
	storageBucket: 'fir-auth-d52ec.appspot.com',
	messagingSenderId: '969604103803',
	appId: '1:969604103803:web:037357a8023f07565eecde',
	measurementId: 'G-857TDH5YG2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
