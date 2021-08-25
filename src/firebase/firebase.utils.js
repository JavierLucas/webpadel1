import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDt8Kbrv8esPaZCxxVhkvsd49GvIustV7Q",
    authDomain: "webpadel-2c6cd.firebaseapp.com",
    projectId: "webpadel-2c6cd",
    storageBucket: "webpadel-2c6cd.appspot.com",
    messagingSenderId: "118840528504",
    appId: "1:118840528504:web:6974a9c9754db586c8a78d",
    measurementId: "G-VB36Y4TTWH"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();
const twitterProvider = new firebase.auth.TwitterAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account'
});

facebookProvider.setCustomParameters({
    prompt: 'select_account'
});

twitterProvider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export const signInWithFacebook = () => auth.signInWithPopup(facebookProvider);
export const signInWithTwitter = () => auth.signInWithPopup(twitterProvider);


export default firebase;

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return; //if theres no auth, we exit

    //Check if it already exists

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });            
        } catch (error) {
            console.log('Error creating user');            
        }
    }

    return userRef;

}
