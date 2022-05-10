import { useState } from 'react';
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import { auth } from './firebase/firebase-config';
import './App.css';

function App() {
	const [registerEmail, setRegisterEmail] = useState('');
	const [registerPassword, setRegisterPassword] = useState('');
	const [loginEmail, setLoginEmail] = useState('');
	const [loginPassword, setLoginPassword] = useState('');

	const [isLoading, setIsLoading] = useState(false);

	const Loading = () => {
		return <p>Loading...</p>;
	};

	const [user, setUser] = useState({});

	onAuthStateChanged(auth, (currentUser) => {
		setUser(currentUser);
		setIsLoading(false);
	});

	const register = async () => {
		try {
			const user = await createUserWithEmailAndPassword(
				auth,
				registerEmail,
				registerPassword
			);
			console.log(user);
		} catch (error) {
			console.log(error.message);
		}
	};

	// const login = async () => {
	// 	try {
	// 		const user = await signInWithEmailAndPassword(
	// 			auth,
	// 			loginEmail,
	// 			loginPassword
	// 		);
	// 		console.log(user);
	// 	} catch (error) {
	// 		console.log(error.message);
	// 	}
	// };

	const logout = async () => {
		await signOut(auth);
	};

	return (
		<div className="App">
			{isLoading ? (
				<Loading />
			) : (
				<>
					{' '}
					<div>
						<h1>For registration</h1>
						<input
							type="text"
							placeholder="Enter email"
							onChange={(e) => setRegisterEmail(e.target.value)}
						></input>
						<input
							type="text"
							placeholder="Enter password"
							onChange={(e) => setRegisterPassword(e.target.value)}
						></input>
						<button onClick={register}>Register</button>
					</div>
					<div>
						<h1>For Login</h1>
						<input
							type="text"
							placeholder="Enter email"
							onChange={(e) => setLoginEmail(e.target.value)}
						></input>
						<input
							type="text"
							placeholder="Enter password"
							onChange={(e) => setLoginPassword(e.target.value)}
						></input>
						<button>Log in</button>
					</div>
					<div>
						<h1>User logged in: </h1>
						<p>{user?.email}</p>

						<button onClick={logout}>Log out</button>
					</div>
				</>
			)}
		</div>
	);
}

export default App;
