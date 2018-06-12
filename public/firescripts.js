var firequestion = document.getElementById("questions");

var questionRef = firebase.database().ref().child("questions");

questionRef.on("child_added", function(datasnapshot){
    var questionShown = datasnapshot.val();
    var op = questionShown.options;
    var newItem = document.createElement("p");
    newItem.appendChild(document.createTextNode(questionShown.title));
    firequestion.appendChild(newItem);
    for(var p in op){
        var optionsShown = document.createElement("input");
        optionsShown.type = 'radio';
        optionsShown.appendChild(document.createTextNode(p));
        firequestion.appendChild(optionsShown);
        //console.log(p + "   "+ op[p]);
   }
});