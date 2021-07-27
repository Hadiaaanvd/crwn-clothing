import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyD15VmL1kI_ymOBV2GlP8rH5--iqO4mdik",
	authDomain: "crwn-db-21f20.firebaseapp.com",
	projectId: "crwn-db-21f20",
	storageBucket: "crwn-db-21f20.appspot.com",
	messagingSenderId: "974090829400",
	appId: "1:974090829400:web:2a589ad12880fca1ce142d",
	measurementId: "G-QXNP9M3SFY",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
 