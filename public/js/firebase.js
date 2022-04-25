let firebaseConfig = {
  apiKey: "AIzaSyCt6AhVuGU93HeXQx5X_Ya_HhvMkKN5Cpo",
  authDomain: "blogging-website-738df.firebaseapp.com",
  projectId: "blogging-website-738df",
  storageBucket: "blogging-website-738df.appspot.com",
  messagingSenderId: "485195997654",
  appId: "1:485195997654:web:e9f702d6b6e0079c1d4477",
};
// Initialize Firebase
//const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
