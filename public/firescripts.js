console.log("heloo from firescript");

var firequestion = document.getElementById("questions");

var questionRef = firebase.database().ref().child("questions");

var newItem = document.createElement("p");
var newOptions = document.createElement("p");


questionRef.on("child_added", function(datasnapshot){
    var questionShown = datasnapshot.val();
    //console.log(datasnapshot.key);
    var optionShown = firebase.database().ref().child("questions").child(datasnapshot.key).child("options");
    optionShown.on("child_added", function(datasnap){
        console.log(datasnap.val());
    });
    newItem.appendChild(document.createTextNode(questionShown.title));
   
    firequestion.appendChild(newItem);
    //console.log(questionShown.options);
});