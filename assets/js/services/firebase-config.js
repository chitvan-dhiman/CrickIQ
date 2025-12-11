// Firebase configuration
const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "crick-iq.firebaseapp.com",
    projectId: "crick-iq",
    storageBucket: "crick-iq.appspot.com",
    messagingSenderId: "your-sender-id",
    appId: "your-app-id"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initialize Firestore with offline persistence
const db = firebase.firestore();
db.enablePersistence()
  .catch((err) => {
      console.log('Firebase persistence error: ', err);
  });

// Initialize other Firebase services
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };