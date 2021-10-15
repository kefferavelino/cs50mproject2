import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbELF1s0Y_QyAltlqOmwfxf0qlHRX3de0",
  authDomain: "gado-admin.firebaseapp.com",
  databaseURL: "https://gado-admin.firebaseio.com",
  projectId: "gado-admin",
  storageBucket: "gado-admin.appspot.com",
  messagingSenderId: "933087507244"
}

const app = firebase.initializeApp(firebaseConfig)

export const auth = app.auth();
export const user = firebase.auth().currentUser;

export const loginFirebase = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password)
    console.log('login ok')
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const logoutFirebase = () => {
  auth.signOut();
  console.log('logout')
};

export const authChangeHandler = (handler) => {
  firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    handler(user)
    console.log('yes user')
  } else {
    handler(user)
    console.log('no user')
  }
});
}
