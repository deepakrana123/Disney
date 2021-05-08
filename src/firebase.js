import firebase from "firebase";
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDT2GZzDvDts6gvJElnmcSDamwvK6o1F5A",
    authDomain: "spotifyclone-20768.firebaseapp.com",
    projectId: "spotifyclone-20768",
    storageBucket: "spotifyclone-20768.appspot.com",
    messagingSenderId: "580586501404",
    appId: "1:580586501404:web:5308d67fa251a7a7b476d9",
    measurementId: "G-31DYX6GLM2"
  };


  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider(); 

  const storage=firebase.storage();
  export {auth,provider,storage};
export default db;