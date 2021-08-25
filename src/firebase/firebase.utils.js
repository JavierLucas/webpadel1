import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAqX5Cu2H3PzkY-XMyR3dL5qqJ04Zdk0OQ",
    authDomain: "webpadel-991c6.firebaseapp.com",
    projectId: "webpadel-991c6",
    storageBucket: "webpadel-991c6.appspot.com",
    messagingSenderId: "1058064416021",
    appId: "1:1058064416021:web:b295e4674f346f44fafd1c",
    measurementId: "G-S9MNLK5VGM"
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
