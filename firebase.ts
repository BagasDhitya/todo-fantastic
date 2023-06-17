import firebase from "@react-native-firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyDnfIe2-wvW5X4bbL4P2wXbmQEhPFLHNUo",
  authDomain: "todo-fantastic.firebaseapp.com",
  projectId: "todo-fantastic",
  storageBucket: "todo-fantastic.appspot.com",
  messagingSenderId: "912615524605",
  appId: "1:912615524605:web:71a570ae4da1e3d7069694",
};

export const app = firebase.initializeApp(firebaseConfig)
