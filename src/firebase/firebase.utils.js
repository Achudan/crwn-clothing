import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyCVEECM9OPOxmLyl0sHatG_uBa7D4vXCzQ",
    authDomain: "crwn-dbv1.firebaseapp.com",
    projectId: "crwn-dbv1",
    storageBucket: "crwn-dbv1.appspot.com",
    messagingSenderId: "440789013822",
    appId: "1:440789013822:web:c9ffeb25d1f4f0643c886f",
    measurementId: "G-VX8Z2BPTYH"
  };

export const createUserProfileDocument = async (userAuth, otherData) =>{
  if(!userAuth){
    return;
  }

  const docRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await docRef.get();

  if(!snapShot.exists){
    console.log('creating new user')
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try{
      await docRef.set({displayName, email, createdAt, ...otherData})
    }
    catch(error){
      console.log('error creating user', error.message())
    }
  }
  return docRef;
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;