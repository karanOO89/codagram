import React, { useRef, useState } from "react";
import "./chatApp.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

if (!firebase.apps.length) {
	firebase.initializeApp({
		// your config
		apiKey: "AIzaSyARsAxrjBJKAlOJTN9VMg1NQcYtMlxoSWs",
		authDomain: "codagram-c10d2.firebaseapp.com",
		projectId: "codagram-c10d2",
		storageBucket: "codagram-c10d2.appspot.com",
		messagingSenderId: "367009453976",
		appId: "1:367009453976:web:2d58a4fdf38465638b3ded",
		measurementId: "G-HE7WTBZ5JW",
	});
} else {
	firebase.app();
}

const style = {
  background: '#080808',
  borderRadius: 0,
  border: 0,
  color: 'white',
  height: 32,
  padding: '10px 10px',
	margin: 0,
  // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
};

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

function ChatApp() {
	const [user] = useAuthState(auth);

	return (
		<div className='App'>
			<header style={style}>
				<h3>CODAGRAM</h3>
				<SignOut />
			</header>

			<section>{user ? <ChatRoom /> : <SignIn />}</section>
		</div>
	);
}

function SignIn() {
	const signInWithGoogle = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		auth.signInWithPopup(provider);
	};

	return (
		<>
			<button className='sign-in' onClick={signInWithGoogle}>
				Sign in with Google
			</button>
		</>
	);
}

function SignOut() {
	return (
		auth.currentUser && (
			<button className='sign-out' onClick={() => auth.signOut()}>
				Sign Out
			</button>
		)
	);
}

function ChatRoom() {
	const dummy = useRef();
	const messagesRef = firestore.collection("messages");
	const query = messagesRef.orderBy("createdAt", "asc").limit(25);

	const [messages] = useCollectionData(query, { idField: "id" });

	const [formValue, setFormValue] = useState("");

	const sendMessage = async (e) => {
		e.preventDefault();

		const { uid, photoURL } = auth.currentUser;

		await messagesRef.add({
			text: formValue,
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
			uid,
			photoURL,
		});

		setFormValue("");
		dummy.current.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<>
			<main>
				{messages &&
					messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

				<span ref={dummy}></span>
			</main>

			<form class='chatAppText' onSubmit={sendMessage}>
				<input
					value={formValue}
					onChange={(e) => setFormValue(e.target.value)}
					placeholder='say something nice'
				/>

				<button type='submit' disabled={!formValue}>
					🕊️
				</button>
			</form>
		</>
	);
}

function ChatMessage(props) {
	const { text, uid, photoURL } = props.message;

	const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

	return (
		<>
			<div className={`message ${messageClass}`}>
				<img
					class='chatimage'
					src={
						photoURL ||
						"https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
					}
				/>
				<p>{text}</p>
			</div>
		</>
	);
}

export default ChatApp;
