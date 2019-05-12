import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDzu3LmZ5o8CDiWaIboZuhBBFbDMhL8hdo",
    authDomain: "treitus-d4e51.firebaseapp.com",
    databaseURL: "https://treitus-d4e51.firebaseio.com",
    projectId: "treitus-d4e51",
    storageBucket: "treitus-d4e51.appspot.com",
    messagingSenderId: "714368192862",
    appId: "1:714368192862:web:968887120ec2953e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
