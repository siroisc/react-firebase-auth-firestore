import app from 'firebase/app'

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
  }
}

export default Firebase;