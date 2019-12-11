import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database';

const config = {
    apiKey: "AIzaSyDOTPU_vtaSrpn6MxuySz405yhbQgH2wO8",
    authDomain: "react-firebase-authentic-483fe.firebaseapp.com",
    databaseURL: "https://react-firebase-authentic-483fe.firebaseio.com",
    projectId: "react-firebase-authentic-483fe",
    storageBucket: "react-firebase-authentic-483fe.appspot.com",
    messagingSenderId: "421066374339",
    appId: "1:421066374339:web:9a440f9b9381a310eb3676",
    measurementId: "G-FEDPEW8K79"
  };

  class Firebase {
    constructor() {
      app.initializeApp(config);
  
      this.auth = app.auth();
      this.db = app.database();
    }
  
    // *** Auth API ***
  
    doCreateUserWithEmailAndPassword = (email, password) =>
      this.auth.createUserWithEmailAndPassword(email, password);
  
    doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);
  
    doSignOut = () => this.auth.signOut();
  
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  
    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);
  
    // *** User API ***
  
    user = uid => this.db.ref(`users/${uid}`);
  
    users = () => this.db.ref('users');
  }
  
  export default Firebase;