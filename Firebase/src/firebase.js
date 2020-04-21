import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCtmsL2IBdZ4jfTYopVb7veLabhH1DkjSE',
  authDomain: 'configuracaofirebase-8310f.firebaseapp.com',
  databaseURL: 'https://configuracaofirebase-8310f.firebaseio.com',
  projectId: 'configuracaofirebase-8310f',
  storageBucket: 'configuracaofirebase-8310f.appspot.com',
  messagingSenderId: '678503561481',
  appId: '1:678503561481:web:62cdc25ccab6d59a19bbd8',
  measurementId: 'G-S1LHZGVLGR',
};
// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
