import React from 'react';
import firebase from 'firebase';
import 'firebase/database';
import ReactDOM from 'react-dom';

var config = {
    apiKey: "AIzaSyBO7y0d96shvYCtIt3blyVxo7JO03likZ4",
    authDomain: "wkmb-42701.firebaseapp.com",
    databaseURL: "https://wkmb-42701.firebaseio.com",
    projectId: "wkmb-42701",
    storageBucket: "",
    messagingSenderId: "327208320794"
  };

firebase.initializeApp(config);

  
var questionRef = firebase.database().ref().child("questions");

var i=3;
questionRef.child(i).once("value", getData, errData);

function getData(datasnapshot) {
    var name = datasnapshot.val();
    console.log(name.title);
    console.log(name.options);
    };
    function errData(err) {
        console.log("cannot fetch due to " + err);
    }

export class Queswidget extends React.Component{
    render(){
        return(
            console.log("1")
        )

    }
}