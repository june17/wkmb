console.log("heloo from firescript");

var firequestion = document.getElementById("questions");

var questionRef = firebase.database().ref().child("question");

questionRef.on('value', function(datasnapshot){
    firequestion.innerText = datasnapshot.val();
});